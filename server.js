// server.js - Cerveau de Sarra (SDK Google GenAI v2)
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { GoogleGenAI } from '@google/genai';
import screenshot from 'screenshot-desktop';
import { spawn } from 'node:child_process';
import { createHash } from 'node:crypto';
import { existsSync, createReadStream } from 'node:fs';
import { mkdir, readdir, rename, stat, unlink, utimes, readFile, writeFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import path from 'node:path';

// OVERLAY APP CORRECTION: Logging détaillé du backend
console.log('🚀 Backend démarré sur http://127.0.0.1:3000');
console.log('📦 Modèle par défaut:', process.env.DEFAULT_MODEL || 'gemini-2.5-flash');
console.log('🔑 Clé API:', process.env.GEMINI_API_KEY ? `${process.env.GEMINI_API_KEY.substring(0, 12)}...` : 'MANQUANTE');

const app = express();

// SÉCURITÉ: CORS strict — seul le renderer local (Vite dev) et le renderer
// Electron (file:// -> origine "null") peuvent appeler l'API locale.
const ALLOWED_ORIGINS = new Set([
    'http://localhost:5173', 'http://127.0.0.1:5173',
    'http://localhost:3000', 'http://127.0.0.1:3000',
    'file://', 'null'
]);
app.use(cors({
    origin: (origin, callback) => callback(null, !origin || ALLOWED_ORIGINS.has(origin)),
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'X-Sarra-Client'],
    maxAge: 600
}));
app.use(express.json({ limit: '64kb' }));

// SÉCURITÉ: marqueur client obligatoire. Un site web tiers ne peut pas
// appeler localhost:3000 sans déclencher un preflight, qui sera refusé.
app.use('/api', (req, res, next) => {
    if (req.get('X-Sarra-Client') !== 'sarra-desktop') {
        return res.status(403).json({ error: 'Client non autorisé', code: 'FORBIDDEN' });
    }
    next();
});

// SÉCURITÉ: limiteur léger (30 appels/min) contre l'abus de coût Gemini.
const RATE_WINDOW_MS = 60_000;
const RATE_MAX = 30;
const chatHits = [];
app.use('/api/chat', (req, res, next) => {
    const now = Date.now();
    while (chatHits.length && now - chatHits[0] > RATE_WINDOW_MS) chatHits.shift();
    if (chatHits.length >= RATE_MAX) {
        return res.status(429).json({ error: 'Trop de requêtes, réessayez dans une minute', code: 'RATE_LIMIT' });
    }
    chatHits.push(now);
    next();
});

// SÉCURITÉ: capture d'écran limitée à 12 appels/min (vision coûteuse).
// Le middleware X-Sarra-Client ci-dessus s'applique déjà à /api/screenshot.
const SCREENSHOT_RATE_MAX = 12;
const screenshotHits = [];
app.use('/api/screenshot', (req, res, next) => {
    const now = Date.now();
    while (screenshotHits.length && now - screenshotHits[0] > RATE_WINDOW_MS) screenshotHits.shift();
    if (screenshotHits.length >= SCREENSHOT_RATE_MAX) {
        return res.status(429).json({ ok: false, error: 'Trop de captures, réessayez dans une minute', code: 'RATE_LIMIT' });
    }
    screenshotHits.push(now);
    next();
});

// SÉCURITÉ: actions navigateur limitées à 10/min (ouverture de pages).
const ACTION_RATE_MAX = 10;
const actionHits = [];
app.use('/api/action', (req, res, next) => {
    const now = Date.now();
    while (actionHits.length && now - actionHits[0] > RATE_WINDOW_MS) actionHits.shift();
    if (actionHits.length >= ACTION_RATE_MAX) {
        return res.status(429).json({ ok: false, error: 'Trop d’actions, réessayez dans une minute', code: 'RATE_LIMIT' });
    }
    actionHits.push(now);
    next();
});

// OVERLAY APP: agent-browser est installé globalement (npm i -g agent-browser).
// On exécute son script JS avec le Node courant : aucun shell, donc aucune
// injection de commande possible via l'URL.
const AGENT_BROWSER_SCRIPT = [
    process.env.APPDATA && path.join(process.env.APPDATA, 'npm', 'node_modules', 'agent-browser', 'bin', 'agent-browser.js'),
    path.join(process.cwd(), 'node_modules', 'agent-browser', 'bin', 'agent-browser.js'),
    '/usr/local/lib/node_modules/agent-browser/bin/agent-browser.js',
    '/usr/lib/node_modules/agent-browser/bin/agent-browser.js'
].filter(Boolean).find((candidate) => existsSync(candidate)) || null;

// N'autorise que http(s), refuse les identifiants dans l'URL et les adresses
// locales/privées : une réponse Gemini compromise ne peut pas scanner le LAN.
function normalizeActionTarget(body = {}) {
    const type = body.type;
    if (type === 'youtube_search' || type === 'web_search') {
        const query = String(body.query || '').trim().slice(0, 120);
        if (!query) return null;
        const base = type === 'youtube_search'
            ? 'https://www.youtube.com/results?search_query='
            : 'https://www.google.com/search?q=';
        return base + encodeURIComponent(query);
    }
    let raw = String(body.url || '').trim().slice(0, 2048);
    if (!raw) return null;
    if (!/^https?:\/\//i.test(raw)) raw = `https://${raw}`;
    let parsed;
    try {
        parsed = new URL(raw);
    } catch {
        return null;
    }
    if (!/^https?:$/.test(parsed.protocol)) return null;
    if (parsed.username || parsed.password) return null;
    const host = parsed.hostname.toLowerCase();
    const isPrivate = host === 'localhost'
        || host === '127.0.0.1'
        || host === '0.0.0.0'
        || host === '::1'
        || host.endsWith('.local')
        || /^10\./.test(host)
        || /^192\.168\./.test(host)
        || /^169\.254\./.test(host)
        || /^172\.(1[6-9]|2\d|3[01])\./.test(host);
    if (isPrivate) return null;
    return parsed.toString();
}

// Ce serveur est désormais API-only : l'UI est servie par Vite (5173) en dev
// et chargée depuis dist/ via file:// en production (main.js).
app.get('/', (req, res) => {
  res.json({
    status: 'Sarra Backend API active',
    version: '1.0.0',
    endpoints: ['/api/chat', '/api/health', '/api/test-key', '/api/screenshot', '/api/action', '/api/tts']
  });
});

const GENAI_API_KEY = process.env.GEMINI_API_KEY;
// OVERLAY APP CORRECTION: modèles vérifiés fonctionnels + cascade en cas de saturation.
const FALLBACK_MODELS = ['gemini-2.5-flash', 'gemini-3.1-flash-lite'];
const ALLOWED_MODELS = FALLBACK_MODELS;
const GEMINI_MODEL = ALLOWED_MODELS.includes(process.env.DEFAULT_MODEL)
    ? process.env.DEFAULT_MODEL
    : 'gemini-2.5-flash';

// Un modèle obsolète envoyé par un ancien frontend est remplacé par le défaut.
function resolveModel(requested) {
    return ALLOWED_MODELS.includes(requested) ? requested : GEMINI_MODEL;
}

function isRetryableModelError(error) {
    const status = Number(error?.status || error?.response?.status) || 0;
    // 404 : modèle inexistant (ancien frontend) -> bascule silencieuse aussi.
    return status === 503 || status === 429 || status === 404;
}

async function generateWithFallback(client, preferredModel, params, budgetMs = 7000) {
    const candidates = [preferredModel, ...FALLBACK_MODELS]
        .filter((m, index, all) => m && all.indexOf(m) === index);
    // Budget total ~7 s pour rester sous le timeout frontend de 8 s.
    // L'analyse d'écran (asynchrone) peut passer un budget plus large.
    const perAttemptMs = Math.max(2500, Math.floor(budgetMs / candidates.length));
    let lastError = null;
    for (const model of candidates) {
        const config = { ...(params.config || {}), abortSignal: AbortSignal.timeout(perAttemptMs) };
        try {
            const result = await client.models.generateContent({ model, ...params, config });
            return { result, model };
        } catch (error) {
            const retryable = error?.name === 'AbortError' || isRetryableModelError(error);
            if (!retryable) throw error;
            lastError = error;
            console.warn(`⚠️ Modèle ${model} indisponible (abandon/503/429/404), bascule sur le suivant...`);
        }
    }
    throw lastError;
}
// OVERLAY APP CORRECTION: Vérification clé API (facultative en mode démo :
// le backend ne sert alors que de service de capture d'écran).
console.log("🔑 Clé API chargée:", GENAI_API_KEY ? `${GENAI_API_KEY.substring(0, 8)}...` : "ABSENTE (mode capture seule)");
if (!GENAI_API_KEY) {
    console.warn("⚠️ GEMINI_API_KEY absente : /api/chat et /api/test-key seront indisponibles, /api/screenshot reste actif.");
}
// v1beta nécessaire pour systemInstruction avec gemini-2.5-flash.
const ai = GENAI_API_KEY
    ? new GoogleGenAI({ apiKey: GENAI_API_KEY, apiVersion: 'v1beta' })
    : null;

const SYSTEM_INSTRUCTION = `Tu es Sarra, l'assistante personnelle et stratégique de Ghofrane, conseiller technique senior en équipement professionnel (pâtisserie, glacerie, laboratoires) en Tunisie. Tu tutoies Ghofrane avec un ton chaleureux, calme et rassurant. Mode Allié IA : challenge-le sur les risques et angles morts avant toute proposition, zéro compliment inutile, zéro leçon condescendante. Français exclusif. Un fait concret (chiffre, chemin, coût en TND) vaut mieux qu'un adjectif vague. Tu as accès à une capture d'écran occasionnelle pour comprendre le contexte, mais tu restes discrète. Réponds en 2 phrases maximum à l'oral.`;

let lastScreenAnalysis = { time: 0, context: "Écran inactif." };

// Healthcheck léger : permet au frontend d'afficher "Connecté / Déconnecté"
// sans attendre le timeout de 90 s d'un appel Gemini.
app.get('/api/health', (req, res) => {
    res.json({
        ok: true,
        model: GEMINI_MODEL,
        uptime: Math.round(process.uptime()),
        tts: {
            ready: localTtsState.ready,
            warmingUp: localTtsState.warmingUp,
            engine: localTtsState.engine,
            engineVersion: localTtsState.engineVersion,
            sampleRate: localTtsState.sampleRate,
            voices: Object.keys(SUPERTONIC3_VOICES),
            modelDir: LOCAL_TTS_MODEL_DIR,
            cacheDir: LOCAL_TTS_CACHE_DIR,
            cacheMaxBytes: LOCAL_TTS_CACHE_MAX_BYTES,
            warmupMs: localTtsState.warmupMs,
            code: localTtsState.code,
            error: localTtsState.error,
            missingFiles: localTtsState.missingFiles,
            invalidFiles: localTtsState.invalidFiles
        }
    });
});

app.post('/api/chat', async (req, res) => {
    console.log('📥 Requête reçue:', req.body);
    try {
        if (!ai) {
            return res.status(503).json({ error: 'Service IA non configuré (capture seule)', code: 'AI_DISABLED' });
        }
        const { message, triggerScreenCheck, model } = req.body || {};
        const chatModel = resolveModel(model || process.env.DEFAULT_MODEL);

        // SÉCURITÉ: validation d'entrée (taille, type) — pas de journalisation du contenu.
        if (typeof message !== 'string' || !message.trim()) {
            return res.status(400).json({ error: 'Message requis', code: 'BAD_REQUEST' });
        }
        if (message.length > 2000) {
            return res.status(400).json({ error: 'Message trop long (2000 caractères max)', code: 'BAD_REQUEST' });
        }
        const safeMessage = message.trim().slice(0, 2000);
        const wantsScreenCapture = triggerScreenCheck === true;
        console.log(`📥 /api/chat: ${safeMessage.length} caractères, écran=${wantsScreenCapture}`);

        // 👁️ Yeux : analyse ASYNCHRONE (la Vision peut prendre 20 s+).
        // La réponse parlée utilise le dernier contexte connu et n'attend pas la capture,
        // ce qui évite le faux message "Je n'arrive pas à me connecter" au bout de 8 s.
        const screenContext = lastScreenAnalysis.context;
        if (wantsScreenCapture && (Date.now() - lastScreenAnalysis.time > 10000)) {
            lastScreenAnalysis.time = Date.now(); // throttle immédiat
            setImmediate(async () => {
                try {
                    const buffer = await screenshot();
                    const { result: visionResult } = await generateWithFallback(ai, chatModel, {
                        contents: [{ role: "user", parts: [
                            { inlineData: { mimeType: "image/png", data: buffer.toString('base64') } },
                            { text: "Décris en 3 mots maximum ce qui se passe à l'écran pour informer un avatar (ex: 'code, concentré', 'recette, cuisine'). Très bref." }
                        ]}],
                        config: { systemInstruction: "Tu es un analyste visuel concis pour un avatar." }
                    }, 20000);
                    lastScreenAnalysis = { time: Date.now(), context: visionResult.text };
                    console.log("👁️ Contexte écran mis à jour:", visionResult.text);
                } catch (err) {
                    console.warn("Capture écran KO:", err.message);
                    lastScreenAnalysis.time = 0; // autorise une nouvelle tentative
                }
            });
        }

        // 🧠 Raisonnement + réponse parlée
        const { result } = await generateWithFallback(ai, chatModel, {
            // Le modèle sélectionné dans le panneau est respecté, avec cascade 503/429.
            contents: [{ role: "user", parts: [
                { text: `Contexte écran : "${screenContext}". Ghofrane dit : "${safeMessage}".` }
            ]}],
            config: { systemInstruction: SYSTEM_INSTRUCTION }
        });

        res.json({ reply: result.text, screenContext });
    } catch (error) {
        // OVERLAY APP CORRECTION: logging détaillé pour diagnostiquer les 502.
        const status = Number(error?.status || error?.response?.status) || 0;
        console.error('❌ Erreur détaillée:', error.message, error.stack);
        if (status === 401 || status === 403 || /API_KEY|permission|unauthor/i.test(error.message || '')) {
            return res.status(401).json({ error: 'Clé API invalide ou révoquée', code: 'KEY_INVALID' });
        }
        return res.status(502).json({
            error: 'Service IA indisponible',
            details: error.message,       // ← diagnostique côté frontend
            code: 'UPSTREAM_ERROR'
        });
    }
});

// OVERLAY APP: endpoint de validation d'une clé API Gemini saisie dans le panneau.
app.post('/api/test-key', async (req, res) => {
    try {
        const { key, type, model } = req.body || {};
        const testModel = resolveModel(model || process.env.DEFAULT_MODEL);
        if (typeof key !== 'string' || !key.trim()) return res.json({ ok: false, error: 'Clé vide' });
        // OVERLAY APP CORRECTION: Validation de clé flexible (AIzaSy…, AQ.…, etc.)
        if (!key || key.length < 20) {
            return res.json({ ok: false, error: 'Clé trop courte (format invalide)' });
        }
        if (key.length > 256) return res.json({ ok: false, error: 'Clé invalide' });

        if (type === 'reasoning') {
            const testAi = new GoogleGenAI({ apiKey: key.trim(), apiVersion: 'v1beta' });
            await generateWithFallback(testAi, testModel, {
                // Le modèle sélectionné dans le panneau est respecté, avec cascade 503/429.
                contents: [{ role: 'user', parts: [{ text: 'Hi' }] }]
            });
            return res.json({ ok: true });
        }

        return res.json({ ok: false, error: 'Type non supporté' });
    } catch (error) {
        // Pas de stack ni d'écho de la clé dans la réponse.
        return res.json({ ok: false, error: 'Clé invalide ou service indisponible' });
    }
});

// OVERLAY APP: Service de capture d'écran (vision)
app.post('/api/screenshot', async (req, res) => {
  try {
    const img = await screenshot({ format: 'jpeg', quality: 60 });
    res.json({ ok: true, mimeType: 'image/jpeg', data: img.toString('base64') });
  } catch (e) {
    console.error('❌ Capture échouée:', e.message);
    res.status(500).json({ ok: false, error: 'CAPTURE_FAILED' });
  }
});

// OVERLAY APP: exécution réelle des actions demandées à Sarra.
// Le frontend n'ouvre jamais d'URL lui-même (window.open est bloqué par
// main.js) : il passe par ce endpoint qui pilote agent-browser.
app.post('/api/action', (req, res) => {
  const target = normalizeActionTarget(req.body || {});
  if (!target) {
    return res.status(400).json({ ok: false, error: 'ACTION_INVALIDE' });
  }
  if (!AGENT_BROWSER_SCRIPT) {
    console.error('❌ agent-browser introuvable : npm install -g agent-browser');
    return res.status(503).json({ ok: false, error: 'AGENT_BROWSER_MISSING' });
  }
  try {
    const child = spawn(
      process.execPath,
      [AGENT_BROWSER_SCRIPT, 'open', target, '--headed'],
      { windowsHide: true, stdio: ['ignore', 'ignore', 'pipe'] }
    );
    let stderr = '';
    child.stderr.on('data', (chunk) => { stderr += chunk.toString().slice(0, 500); });
    const killTimer = setTimeout(() => child.kill(), 18000);
    child.on('error', (error) => {
      clearTimeout(killTimer);
      console.error('❌ agent-browser:', error.message);
      if (!res.headersSent) res.status(502).json({ ok: false, error: 'AGENT_BROWSER_FAILED' });
    });
    child.on('exit', (code) => {
      clearTimeout(killTimer);
      if (res.headersSent) return;
      if (code === 0) {
        console.log('🌐 Action navigateur:', target);
        return res.json({ ok: true, opened: target, engine: 'agent-browser' });
      }
      console.error('❌ agent-browser code', code, stderr.trim().slice(0, 200));
      return res.status(502).json({ ok: false, error: 'AGENT_BROWSER_FAILED' });
    });
  } catch (e) {
    console.error('❌ Action navigateur échouée:', e.message);
    res.status(500).json({ ok: false, error: 'ACTION_FAILED' });
  }
});

// ─────────────────────────────────────────────────────────────────────────────
// OVERLAY APP — TTS LOCAL HORS-LIGNE (Supertonic 3 int8 via sherpa-onnx-node)
// Moteur natif strictement isolé côté Node système (jamais dans Electron).
// Aucun téléchargement au boot : poids pré-téléchargés et vérifiés en SHA-256.
// ─────────────────────────────────────────────────────────────────────────────

const require = createRequire(import.meta.url);

const LOCAL_TTS_MODEL_ID = 'supertonic-3-int8-2026-05-11';
const LOCAL_TTS_MODEL_DIR = path.resolve(
    process.env.SARRA_TTS_MODEL_DIR || path.join(process.cwd(), 'models', 'supertonic-3')
);
const LOCAL_TTS_CACHE_DIR = path.resolve(
    process.env.SARRA_TTS_CACHE_DIR || path.join(process.cwd(), '.cache', 'tts')
);
const LOCAL_TTS_CACHE_MAX_BYTES = Math.max(
    1024 * 1024,
    Number.parseInt(process.env.SARRA_TTS_CACHE_MAX_BYTES || '', 10) || (100 * 1024 * 1024)
);
const LOCAL_TTS_THREADS = Math.max(1, Math.min(8, Number.parseInt(process.env.SARRA_TTS_THREADS || '2', 10) || 2));
const LOCAL_TTS_DEFAULT_SPEED = 1.05;
const LOCAL_TTS_DEFAULT_STEPS = 8;

const SUPERTONIC3_VOICES = Object.freeze({
    F1: 0, F2: 1, F3: 2, F4: 3, F5: 4,
    M1: 5, M2: 6, M3: 7, M4: 8, M5: 9
});

const SUPERTONIC3_LANGS = new Set([
    'fr', 'en', 'ko', 'ja', 'ar', 'bg', 'cs', 'da', 'de', 'el', 'es', 'et',
    'fi', 'hi', 'hr', 'hu', 'id', 'it', 'lt', 'lv', 'nl', 'pl', 'pt', 'ro',
    'ru', 'sk', 'sl', 'sv', 'tr', 'uk', 'vi', 'na'
]);

// Empreintes SHA-256 vérifiées depuis csukuangfj2/sherpa-onnx-supertonic-3-tts-int8-2026-05-11
const SUPERTONIC3_REQUIRED_SHA256 = Object.freeze({
    'duration_predictor.int8.onnx': 'c3eb91414d5ff8a7a239b7fe9e34e7e2bf8a8140d8375ffb14718b1c639325db',
    'text_encoder.int8.onnx': 'c7befd5ea8c3119769e8a6c1486c4edc6a3bc8365c67621c881bbb774b9902ff',
    'vector_estimator.int8.onnx': '20cd86fa5c6effedfda0e7cffe5b0569ca401c440a0c3a1d72bf39286c0db3fd',
    'vocoder.int8.onnx': 'e923d60f53f95eb1ce235f1dc33ec56d9c057823c96fa6f8acf98f32b0da6152',
    'unicode_indexer.bin': '8402ca48e5189a8950138580b0fff64db6f072f24ac07cd54ba8b2fbb9883b30',
    'voice.bin': '67d5209b0ee8ce6c74105ffbe12fe6a7628aea3b4ba2fcb308a4a67938a93ce8'
});
const SUPERTONIC3_ALL_FILES = Object.freeze([
    ...Object.keys(SUPERTONIC3_REQUIRED_SHA256),
    'tts.json'
]);

const localTtsState = {
    ready: false,
    warmingUp: true,
    engine: 'supertonic-3',
    engineVersion: `sherpa-onnx-node@${LOCAL_TTS_MODEL_ID}`,
    sampleRate: 44100,
    numSpeakers: 10,
    warmupMs: null,
    code: 'WARMING_UP',
    error: null,
    missingFiles: [],
    invalidFiles: []
};

let sherpaOnnxModule = null;
let localTtsInstance = null;
const ttsInFlight = new Map();

function sha256File(filePath) {
    return new Promise((resolve, reject) => {
        const hash = createHash('sha256');
        const stream = createReadStream(filePath);
        stream.on('data', (chunk) => hash.update(chunk));
        stream.on('end', () => resolve(hash.digest('hex')));
        stream.on('error', reject);
    });
}

function resolveSupertonicVoice(voiceInput) {
    if (typeof voiceInput === 'number' && Number.isInteger(voiceInput) && voiceInput >= 0 && voiceInput <= 9) {
        const entry = Object.entries(SUPERTONIC3_VOICES).find(([, sid]) => sid === voiceInput);
        return { voiceId: entry ? entry[0] : 'F1', sid: voiceInput };
    }
    const raw = String(voiceInput || 'F1').trim().toUpperCase();
    if (Object.prototype.hasOwnProperty.call(SUPERTONIC3_VOICES, raw)) {
        return { voiceId: raw, sid: SUPERTONIC3_VOICES[raw] };
    }
    if (/^[0-9]$/.test(raw)) {
        const sid = Number(raw);
        const entry = Object.entries(SUPERTONIC3_VOICES).find(([, id]) => id === sid);
        return { voiceId: entry ? entry[0] : 'F1', sid };
    }
    return { voiceId: 'F1', sid: 0 };
}

function buildTtsCacheKey(text, voiceId, lang, engineVersion) {
    return createHash('sha256')
        .update(`${text}\0${voiceId}\0${lang}\0${engineVersion}`)
        .digest('hex');
}

function float32SamplesToWavBuffer(samples, sampleRate = 44100) {
    const length = samples?.length || 0;
    const dataBytes = length * 2;
    const buffer = Buffer.allocUnsafe(44 + dataBytes);
    buffer.write('RIFF', 0);
    buffer.writeUInt32LE(36 + dataBytes, 4);
    buffer.write('WAVE', 8);
    buffer.write('fmt ', 12);
    buffer.writeUInt32LE(16, 16);
    buffer.writeUInt16LE(1, 20);
    buffer.writeUInt16LE(1, 22);
    buffer.writeUInt32LE(sampleRate, 24);
    buffer.writeUInt32LE(sampleRate * 2, 28);
    buffer.writeUInt16LE(2, 32);
    buffer.writeUInt16LE(16, 34);
    buffer.write('data', 36);
    buffer.writeUInt32LE(dataBytes, 40);
    for (let i = 0; i < length; i += 1) {
        const clamped = Math.max(-1, Math.min(1, samples[i]));
        const int16 = clamped < 0 ? Math.round(clamped * 0x8000) : Math.round(clamped * 0x7fff);
        buffer.writeInt16LE(int16, 44 + i * 2);
    }
    return buffer;
}

async function verifySupertonicWeights() {
    const missingFiles = [];
    const invalidFiles = [];
    for (const filename of SUPERTONIC3_ALL_FILES) {
        const fullPath = path.join(LOCAL_TTS_MODEL_DIR, filename);
        if (!existsSync(fullPath)) {
            missingFiles.push(filename);
            continue;
        }
        const info = await stat(fullPath);
        if (!info.isFile() || info.size <= 0) {
            invalidFiles.push({ file: filename, reason: 'EMPTY_OR_NOT_FILE' });
            continue;
        }
        const expectedSha = SUPERTONIC3_REQUIRED_SHA256[filename];
        if (expectedSha && process.env.SARRA_TTS_SKIP_CHECKSUM !== '1') {
            const actualSha = await sha256File(fullPath);
            if (actualSha !== expectedSha) {
                invalidFiles.push({ file: filename, reason: 'SHA256_MISMATCH', expected: expectedSha, actual: actualSha });
            }
        }
        if (filename === 'tts.json') {
            try {
                const parsed = JSON.parse(await readFile(fullPath, 'utf8'));
                if (!parsed?.ae?.sample_rate || !parsed?.ttl) {
                    invalidFiles.push({ file: filename, reason: 'INVALID_TTS_JSON_SCHEMA' });
                }
            } catch {
                invalidFiles.push({ file: filename, reason: 'INVALID_JSON' });
            }
        }
    }
    return { missingFiles, invalidFiles };
}

async function evictTtsCacheIfNeeded(maxBytes = LOCAL_TTS_CACHE_MAX_BYTES) {
    try {
        await mkdir(LOCAL_TTS_CACHE_DIR, { recursive: true });
        const entries = await readdir(LOCAL_TTS_CACHE_DIR, { withFileTypes: true });
        const files = [];
        let totalBytes = 0;
        for (const entry of entries) {
            if (!entry.isFile() || !entry.name.endsWith('.wav')) continue;
            const fullPath = path.join(LOCAL_TTS_CACHE_DIR, entry.name);
            try {
                const st = await stat(fullPath);
                files.push({ fullPath, size: st.size, mtimeMs: st.mtimeMs });
                totalBytes += st.size;
            } catch {
                // ignore concurrent delete
            }
        }
        if (totalBytes <= maxBytes) return;
        files.sort((a, b) => a.mtimeMs - b.mtimeMs);
        for (const item of files) {
            if (totalBytes <= maxBytes) break;
            try {
                await unlink(item.fullPath);
                totalBytes -= item.size;
            } catch {
                // ignore concurrent delete
            }
        }
    } catch (error) {
        console.warn('⚠️ [TTS CACHE] Éviction impossible:', error.message);
    }
}

async function warmUpLocalTts() {
    const t0 = Date.now();
    localTtsState.warmingUp = true;
    localTtsState.ready = false;
    localTtsState.missingFiles = [];
    localTtsState.invalidFiles = [];
    try {
        if (!sherpaOnnxModule) {
            sherpaOnnxModule = require('sherpa-onnx-node');
        }
        const addonVer = sherpaOnnxModule.version || '2.0.3';
        const ortVer = sherpaOnnxModule.onnxruntimeVersion || 'unknown';
        localTtsState.engineVersion = `sherpa-onnx-node@${addonVer}/ort@${ortVer}/${LOCAL_TTS_MODEL_ID}`;

        const { missingFiles, invalidFiles } = await verifySupertonicWeights();
        localTtsState.missingFiles = missingFiles;
        localTtsState.invalidFiles = invalidFiles;
        if (missingFiles.length > 0 || invalidFiles.length > 0) {
            localTtsState.code = missingFiles.length > 0 ? 'LOCAL_TTS_WEIGHTS_MISSING' : 'LOCAL_TTS_WEIGHTS_INVALID';
            localTtsState.error = `Poids Supertonic 3 manquants (${missingFiles.join(', ') || 'aucun'}) ou invalides (${invalidFiles.map((x) => `${x.file}:${x.reason}`).join(', ') || 'aucun'}) dans ${LOCAL_TTS_MODEL_DIR}`;
            console.error(`❌ [TTS LOCAL] ${localTtsState.error}`);
            console.error('👉 Pré-téléchargez les poids vérifiés dans models/supertonic-3 (voir NOTICE / README) — aucun téléchargement auto au boot.');
            return false;
        }

        const config = {
            model: {
                supertonic: {
                    durationPredictor: path.join(LOCAL_TTS_MODEL_DIR, 'duration_predictor.int8.onnx'),
                    textEncoder: path.join(LOCAL_TTS_MODEL_DIR, 'text_encoder.int8.onnx'),
                    vectorEstimator: path.join(LOCAL_TTS_MODEL_DIR, 'vector_estimator.int8.onnx'),
                    vocoder: path.join(LOCAL_TTS_MODEL_DIR, 'vocoder.int8.onnx'),
                    ttsJson: path.join(LOCAL_TTS_MODEL_DIR, 'tts.json'),
                    unicodeIndexer: path.join(LOCAL_TTS_MODEL_DIR, 'unicode_indexer.bin'),
                    voiceStyle: path.join(LOCAL_TTS_MODEL_DIR, 'voice.bin')
                },
                debug: false,
                numThreads: LOCAL_TTS_THREADS,
                provider: 'cpu'
            },
            maxNumSentences: 1
        };

        localTtsInstance = typeof sherpaOnnxModule.OfflineTts.createAsync === 'function'
            ? await sherpaOnnxModule.OfflineTts.createAsync(config)
            : new sherpaOnnxModule.OfflineTts(config);

        const warmupConfig = new sherpaOnnxModule.GenerationConfig({
            sid: SUPERTONIC3_VOICES.F1,
            speed: LOCAL_TTS_DEFAULT_SPEED,
            numSteps: LOCAL_TTS_DEFAULT_STEPS,
            extra: { lang: 'fr' }
        });
        const warmupAudio = typeof localTtsInstance.generateAsync === 'function'
            ? await localTtsInstance.generateAsync({ text: 'Bonjour.', generationConfig: warmupConfig })
            : localTtsInstance.generate({ text: 'Bonjour.', generationConfig: warmupConfig });

        if (!warmupAudio?.samples?.length) {
            throw new Error('Warm-up Supertonic 3 a produit 0 échantillon audio.');
        }

        await mkdir(LOCAL_TTS_CACHE_DIR, { recursive: true });
        await evictTtsCacheIfNeeded();

        localTtsState.sampleRate = warmupAudio.sampleRate || localTtsInstance.sampleRate || 44100;
        localTtsState.numSpeakers = localTtsInstance.numSpeakers || 10;
        localTtsState.warmupMs = Date.now() - t0;
        localTtsState.ready = true;
        localTtsState.code = 'READY';
        localTtsState.error = null;
        console.log(
            `✅ [TTS LOCAL] Supertonic 3 prêt (${localTtsState.warmupMs} ms, ${localTtsState.sampleRate} Hz, `
            + `${localTtsState.numSpeakers} voix, engine=${localTtsState.engineVersion})`
        );
        return true;
    } catch (error) {
        localTtsState.ready = false;
        localTtsState.code = error?.code === 'MODULE_NOT_FOUND' || /sherpa-onnx/i.test(error?.message || '')
            ? 'LOCAL_TTS_ENGINE_UNAVAILABLE'
            : 'LOCAL_TTS_INIT_FAILED';
        localTtsState.error = error?.message || String(error);
        console.error(`❌ [TTS LOCAL] Échec initialisation (${localTtsState.code}): ${localTtsState.error}`);
        return false;
    } finally {
        localTtsState.warmingUp = false;
    }
}

const localTtsInitPromise = warmUpLocalTts();

app.post('/api/tts', async (req, res) => {
    const tReq = Date.now();
    await localTtsInitPromise;
    if (!localTtsState.ready || !localTtsInstance || !sherpaOnnxModule) {
        console.error(`❌ POST /api/tts refusé (${localTtsState.code}): ${localTtsState.error}`);
        return res.status(503).json({
            ok: false,
            error: 'LOCAL_TTS_UNAVAILABLE',
            code: localTtsState.code,
            message: localTtsState.error || 'Moteur TTS local indisponible',
            modelDir: LOCAL_TTS_MODEL_DIR,
            missingFiles: localTtsState.missingFiles,
            invalidFiles: localTtsState.invalidFiles
        });
    }

    const body = req.body || {};
    const rawText = typeof body.text === 'string' ? body.text.trim() : '';
    if (!rawText) {
        return res.status(400).json({ ok: false, error: 'Texte requis pour /api/tts', code: 'BAD_REQUEST' });
    }
    if (rawText.length > 2000) {
        return res.status(400).json({ ok: false, error: 'Texte trop long (2000 caractères max)', code: 'BAD_REQUEST' });
    }

    const { voiceId, sid } = resolveSupertonicVoice(body.voice);
    const rawLang = typeof body.lang === 'string' ? body.lang.trim().toLowerCase() : 'fr';
    const lang = SUPERTONIC3_LANGS.has(rawLang) ? rawLang : 'fr';
    const parsedSpeed = Number(body.speed);
    const speed = Number.isFinite(parsedSpeed) ? Math.max(0.5, Math.min(2.0, parsedSpeed)) : LOCAL_TTS_DEFAULT_SPEED;
    const parsedSteps = Number.parseInt(String(body.numSteps ?? ''), 10);
    const numSteps = Number.isFinite(parsedSteps) ? Math.max(2, Math.min(16, parsedSteps)) : LOCAL_TTS_DEFAULT_STEPS;

    const effectiveVersion = (speed === LOCAL_TTS_DEFAULT_SPEED && numSteps === LOCAL_TTS_DEFAULT_STEPS)
        ? localTtsState.engineVersion
        : `${localTtsState.engineVersion}|s=${speed}|n=${numSteps}`;
    const cacheKey = buildTtsCacheKey(rawText, voiceId, lang, effectiveVersion);
    const cacheFile = path.join(LOCAL_TTS_CACHE_DIR, `${cacheKey}.wav`);

    try {
        if (existsSync(cacheFile)) {
            const st = await stat(cacheFile);
            if (st.isFile() && st.size > 44) {
                const wavBuf = await readFile(cacheFile);
                const now = new Date();
                utimes(cacheFile, now, now).catch(() => {});
                res.set({
                    'Content-Type': 'audio/wav',
                    'X-Sarra-TTS-Cache': 'HIT',
                    'X-Sarra-TTS-Key': cacheKey,
                    'X-Sarra-TTS-Engine': localTtsState.engineVersion,
                    'X-Sarra-TTS-Voice': voiceId,
                    'X-Sarra-TTS-Latency-Ms': String(Date.now() - tReq)
                });
                return res.send(wavBuf);
            }
        }

        let pending = ttsInFlight.get(cacheKey);
        if (!pending) {
            pending = (async () => {
                const generationConfig = new sherpaOnnxModule.GenerationConfig({
                    sid,
                    speed,
                    numSteps,
                    extra: { lang }
                });
                const audio = typeof localTtsInstance.generateAsync === 'function'
                    ? await localTtsInstance.generateAsync({ text: rawText, generationConfig })
                    : localTtsInstance.generate({ text: rawText, generationConfig });
                if (!audio?.samples?.length) {
                    throw new Error('Synthèse locale vide (0 échantillon).');
                }
                const wavBuf = float32SamplesToWavBuffer(audio.samples, audio.sampleRate || localTtsState.sampleRate);
                await mkdir(LOCAL_TTS_CACHE_DIR, { recursive: true });
                const tmpFile = path.join(LOCAL_TTS_CACHE_DIR, `${cacheKey}.${process.pid}.${Date.now()}.tmp`);
                await writeFile(tmpFile, wavBuf);
                await rename(tmpFile, cacheFile);
                await evictTtsCacheIfNeeded();
                return wavBuf;
            })();
            ttsInFlight.set(cacheKey, pending);
            pending.finally(() => ttsInFlight.delete(cacheKey));
        }

        const wavBuf = await pending;
        res.set({
            'Content-Type': 'audio/wav',
            'X-Sarra-TTS-Cache': 'MISS',
            'X-Sarra-TTS-Key': cacheKey,
            'X-Sarra-TTS-Engine': localTtsState.engineVersion,
            'X-Sarra-TTS-Voice': voiceId,
            'X-Sarra-TTS-Latency-Ms': String(Date.now() - tReq)
        });
        return res.send(wavBuf);
    } catch (error) {
        console.error('❌ [TTS LOCAL] Échec synthèse POST /api/tts:', error?.message || error);
        return res.status(500).json({
            ok: false,
            error: 'LOCAL_TTS_SYNTHESIS_FAILED',
            message: error?.message || 'Erreur interne de synthèse TTS locale'
        });
    }
});

// SÉCURITÉ: aucune autre route ne déclenche de logique métier (Gemini, capture, ...).
app.use((req, res) => {
    res.status(404).json({ error: 'Route inconnue', code: 'NOT_FOUND' });
});

// SÉCURITÉ: écoute sur loopback uniquement — pas d'exposition réseau local.
app.listen(3000, '127.0.0.1', () => {
    console.log("🧠 Cerveau de Sarra actif sur http://127.0.0.1:3000 (loopback uniquement)");
});
