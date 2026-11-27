// server.js - Cerveau de Sarra (SDK Google GenAI v2)
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { GoogleGenAI } from '@google/genai';
import screenshot from 'screenshot-desktop';
import { spawn } from 'node:child_process';
import { existsSync } from 'node:fs';
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
    endpoints: ['/api/chat', '/api/health', '/api/test-key', '/api/screenshot', '/api/action']
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
    res.json({ ok: true, model: GEMINI_MODEL, uptime: Math.round(process.uptime()) });
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

// SÉCURITÉ: aucune autre route ne déclenche de logique métier (Gemini, capture, ...).
app.use((req, res) => {
    res.status(404).json({ error: 'Route inconnue', code: 'NOT_FOUND' });
});

// SÉCURITÉ: écoute sur loopback uniquement — pas d'exposition réseau local.
app.listen(3000, '127.0.0.1', () => {
    console.log("🧠 Cerveau de Sarra actif sur http://127.0.0.1:3000 (loopback uniquement)");
});
