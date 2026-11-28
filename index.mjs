import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { VRM, VRMLoaderPlugin, VRMUtils } from '@pixiv/three-vrm';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { smoothValue } from './src/lipsync/audio-viseme.js';
import {
    DEFAULT_NATURAL_LIPSYNC_CONFIG,
    sanitizeNaturalLipsyncConfig
} from './src/lipsync/natural-lipsync.js';

// OVERLAY APP: Raccourcis clavier panneau (Ctrl+Shift+K navigateur, Escape / Ctrl+S panneau ouvert).
document.addEventListener('keydown', (event) => {
    const isElectronRenderer = !!(window.sarraAPI && typeof window.sarraAPI.onToggleConfig === 'function');
    const panel = document.getElementById('config-panel');
    const panelOpen = Boolean(panel && (panel.classList.contains('is-open') || getComputedStyle(panel).display !== 'none'));

    if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === 'k') {
        if (!isElectronRenderer) {
            event.preventDefault();
            toggleConfigPanel();
        }
        return;
    }
    if (!panelOpen) return;

    if (event.key === 'Escape') {
        event.preventDefault();
        toggleConfigPanel(false);
    } else if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 's') {
        event.preventDefault();
        saveAllConfigV2();
    }
});

// OVERLAY APP: Cache de démo — contourne les quotas API
const DEMO_CACHE_ENABLED = () => localStorage.getItem('demoMode') === 'true';

function getDemoCacheKey(message) {
  return 'demo_cache_' + message.toLowerCase().trim().replace(/[^\w\s]/g, '');
}

function saveDemoCache(message, reply) {
  if (!DEMO_CACHE_ENABLED()) return;
  localStorage.setItem(getDemoCacheKey(message), reply);
}

function getDemoCache(message) {
  if (!DEMO_CACHE_ENABLED()) return null;
  return localStorage.getItem(getDemoCacheKey(message));
}

// OVERLAY APP: Vision écran — capture backend + compression canvas.
const SCREENSHOT_ENDPOINT = 'http://127.0.0.1:3000/api/screenshot';
const ACTION_ENDPOINT = 'http://127.0.0.1:3000/api/action';
const LOCAL_TTS_ENDPOINT = 'http://127.0.0.1:3000/api/tts';
const SCREEN_VISION_ENABLED = () => localStorage.getItem('screenVision') !== 'false';
// Une question qui parle de l'écran ne doit jamais être servie par le cache démo.
const SCREEN_QUERY_RE = /(écran|ecran|\bvois\b|\bregarde\b|c'est quoi (ça|ca)|\bsouris\b|fenêtre|fenetre|\bpage\b|\bonglet\b)/i;
const LAST_FRAME_TTL_MS = 90000;
let lastScreenFrame = null;          // { part, at } — secours si la capture échoue
let screenCaptureInFlight = null;    // déduplique deux messages rapprochés

async function downscaleImage(base64, mimeType) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      const maxW = 1280;
      const scale = Math.min(1, maxW / img.width);
      const canvas = document.createElement('canvas');
      canvas.width = Math.max(1, Math.round(img.width * scale));
      canvas.height = Math.max(1, Math.round(img.height * scale));
      canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);
      const url = canvas.toDataURL('image/jpeg', 0.7);
      resolve({ mimeType: 'image/jpeg', data: url.split(',')[1] });
    };
    img.onerror = () => resolve(null);
    img.src = `data:${mimeType || 'image/jpeg'};base64,${base64}`;
  });
}

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function reuseLastScreenFrame(reason) {
  if (lastScreenFrame && Date.now() - lastScreenFrame.at <= LAST_FRAME_TTL_MS) {
    const age = Math.round((Date.now() - lastScreenFrame.at) / 1000);
    console.warn(`♻️ Vision: capture indisponible (${reason}), dernière frame réutilisée (${age} s).`);
    return lastScreenFrame.part;
  }
  return null;
}

async function captureScreenOnce() {
  if (typeof window.sarraAPI?.captureScreen === 'function') {
    try {
      const dataUrl = await window.sarraAPI.captureScreen();
      if (typeof dataUrl === 'string' && dataUrl.startsWith('data:')) {
        const [meta, base64] = dataUrl.split(',');
        const mimeMatch = meta.match(/^data:([^;]+);base64$/);
        if (base64) {
          const part = await downscaleImage(base64, mimeMatch?.[1] || 'image/jpeg');
          if (part) return part;
        }
      }
    } catch (e) {
      console.warn('⚠️ Capture Electron IPC indisponible, repli backend:', e?.message);
    }
  }
  const resp = await fetch(SCREENSHOT_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'X-Sarra-Client': 'sarra-desktop' },
    signal: AbortSignal.timeout(3000)
  });
  if (!resp.ok) {
    const error = new Error(`Capture HTTP ${resp.status}`);
    error.status = resp.status;
    throw error;
  }
  const { data, mimeType } = await resp.json();
  if (!data) throw new Error('Capture vide');
  const part = await downscaleImage(data, mimeType);
  if (!part) throw new Error('Compression impossible');
  return part;
}

// Capture à chaque message + 1 retry (429/500) + réutilisation de la dernière
// frame ≤ 90 s : la vision ne « disparaît » plus après quelques échanges.
async function captureScreen() {
  // Frame très récente : on la réutilise pour ne pas consommer le quota de
  // 12 captures/min lors de questions enchaînées.
  if (lastScreenFrame && Date.now() - lastScreenFrame.at < 2500) {
    return lastScreenFrame.part;
  }
  if (screenCaptureInFlight) return screenCaptureInFlight;
  screenCaptureInFlight = (async () => {
    for (let attempt = 0; attempt < 2; attempt += 1) {
      try {
        const part = await captureScreenOnce();
        lastScreenFrame = { part, at: Date.now() };
        return part;
      } catch (error) {
        const retryable = error.status === 429 || (error.status || 0) >= 500 || error.name === 'AbortError';
        if (attempt === 0 && retryable) {
          await delay(400);
          continue;
        }
        return reuseLastScreenFrame(error.status || error.name || error.message);
      }
    }
    return reuseLastScreenFrame('inconnu');
  })();
  try {
    return await screenCaptureInFlight;
  } finally {
    screenCaptureInFlight = null;
  }
}

// OVERLAY APP: Pré-cache des questions probables de démo
let preCacheRunning = false;
async function preCacheDemoQuestions() {
  if (preCacheRunning) return;
  const statusEl = document.getElementById('precache-status');
  const btn = document.getElementById('btn-precache-demo');
  const key = resolveDemoApiKey();
  if (!key) {
    if (statusEl) statusEl.textContent = '❌ Clé API Gemini manquante (onglet IA).';
    return;
  }
  const questions = [
    "bonjour", "bonjour ça va", "qui es-tu", "que peux-tu faire",
    "quelle heure est-il", "raconte-moi une blague", "merci", "au revoir",
    "comment vas-tu", "parle-moi de toi"
  ];
  preCacheRunning = true;
  if (btn) btn.disabled = true;
  if (statusEl) statusEl.textContent = `⏳ Pré-génération : 0/${questions.length}`;
  let done = 0;
  try {
    const model = getPreferredReasoningModel();
    for (const q of questions) {
      try {
        // Appel direct API (pas de voix, pas de cache)
        const reply = (await callGeminiDirect(model, key, q, AbortSignal.timeout(8000)))?.text || '';
        if (reply) {
          localStorage.setItem(getDemoCacheKey(q), reply);
          done++;
          if (statusEl) statusEl.textContent = `⏳ Pré-génération : ${done}/${questions.length}`;
        }
      } catch (e) {
        console.warn('Skip:', q, e.message);
      }
      await new Promise(r => setTimeout(r, 4000)); // Respect quota 15/min
    }
    if (statusEl) statusEl.textContent = `✅ ${done}/${questions.length} réponses en cache`;
  } finally {
    preCacheRunning = false;
    if (btn) btn.disabled = false;
  }
}

function initDemoCacheControls() {
  document.getElementById('btn-precache-demo')?.addEventListener('click', preCacheDemoQuestions);
  document.getElementById('cfg-demo-mode')?.addEventListener('change', (e) => {
    localStorage.setItem('demoMode', String(e.target.checked));
  });
}

console.log("🧠 Initialisation de Sarra-Final connectée...");

// Vérification de WebGL
try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl');
    if (!gl) {
        console.error("❌ WebGL non supporté par ce navigateur");
        document.body.innerHTML = "<h1>Erreur: WebGL non supporté</h1><p>Votre navigateur ne supporte pas WebGL. Essayez avec un navigateur moderne comme Chrome, Firefox ou Edge.</h1>";
        throw new Error("WebGL non supporté");
    }
    console.log("✅ WebGL supporté");
} catch (e) {
    console.error("❌ Erreur WebGL:", e);
}

// OVERLAY APP CORRECTION: les modules ESM sont différés jusqu'au parsing complet du DOM.
// Scène 3D
const scene = new THREE.Scene();

// OVERLAY APP CORRECTION: dimensions réelles du conteneur avant l'initialisation Three.js.
const sceneContainer = document.getElementById('scene');
const initialWidth = sceneContainer?.clientWidth || window.innerWidth;
const initialHeight = sceneContainer?.clientHeight || window.innerHeight;

// Camera
const aspect = initialWidth / initialHeight;
const camera = new THREE.PerspectiveCamera(30, aspect, 0.1, 20);
camera.position.set(0, 1.4, 3);

// OVERLAY APP TRANSPARENCY: renderer WebGL avec fond transparent + anti-aliasing MSAA.
const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setClearColor(0x000000, 0);

// RENDU PHOTORÉALISTE : tone mapping ACES Filmic + espace couleur sRGB.
THREE.ColorManagement.enabled = true;
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.0; // ajustable à chaud : window.__sarra.renderer.toneMappingExposure = 1.2

// Ombres douces (PCF Soft) pour la key light studio.
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

renderer.setSize(initialWidth, initialHeight);
renderer.setPixelRatio(window.devicePixelRatio);

// OVERLAY APP TRANSPARENCY: montage du canvas dans #scene pour respecter le drag et la transparence.
if (sceneContainer) {
    sceneContainer.appendChild(renderer.domElement);
} else {
    document.body.appendChild(renderer.domElement);
}

// ─── SECTION 3 — Éclairage 3 points studio ───────────────────────────────────
// 1) Ambiance douce (ciel / sol).
const hemiLight = new THREE.HemisphereLight(0xffffff, 0x8d8d8d, 0.6);
scene.add(hemiLight);

// 2) Key light principale avec ombres.
const keyLight = new THREE.DirectionalLight(0xfff0dd, 2.5);
keyLight.position.set(2, 3, 4);
keyLight.castShadow = true;
keyLight.shadow.mapSize.set(1024, 1024);
keyLight.shadow.bias = -0.001;
scene.add(keyLight);

// 3) Rim light en contre-jour pour détacher cheveux / épaules.
const rimLight = new THREE.SpotLight(0xaaccff, 3.0);
rimLight.position.set(-3, 2, -3);
rimLight.lookAt(0, 1, 0);
scene.add(rimLight);

// ─── SECTION 2 — Environment Map (réflexions peau/yeux) ───────────────────────
// scene.background reste null : la transparence de l'overlay Electron est conservée.
try {
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    const roomEnv = new RoomEnvironment();
    scene.environment = pmremGenerator.fromScene(roomEnv, 0.04).texture;
    scene.background = null;
    roomEnv.dispose();
    console.log("✨ Environment map (RoomEnvironment + PMREM) générée");
} catch (error) {
    console.warn("⚠️ Environment map indisponible:", error);
}

let currentVrm = null;
const loader = new GLTFLoader();
loader.register((parser) => new VRMLoaderPlugin(parser));

// Point que l'avatar regarde (position de la caméra).
const lookTarget = new THREE.Object3D();
lookTarget.position.copy(camera.position);
scene.add(lookTarget);

// Cible du regard : caméra + micro-saccades aléatoires (gazeOffset).
const gazeTarget = new THREE.Object3D();
gazeTarget.position.copy(camera.position);
scene.add(gazeTarget);

const gazeOffset = new THREE.Vector3();
let gazeSaccadeTimeout = 0;
let gazeSaccadeFrame = 0;
let gazeSaccadeStart = 0;
const GAZE_SACCADE_DURATION = 250; // ms

// Os de la tête, résolu au chargement : sert au cadrage et au pilotage souris.
let headBone = null;

// État du cadrage tête (base) + commandes souris (cibles lissées).
const headBaseTarget = new THREE.Vector3(0, 1.4, 0);
let headBaseDistance = 0.5;

const HEAD_LIMITS = Object.freeze({
    yaw: 0.9,        // rotation gauche/droite (rad)
    pitch: 0.55,     // rotation haut/bas (rad)
    pan: 0.25,       // déplacement latéral/vertical (m)
    zoomMin: 0.22,   // distance mini (m)
    zoomMax: 8.0     // distance maxi (m) : doit laisser passer le plan corps entier
});

const headTarget = { yaw: 0, pitch: 0, panX: 0, panY: 0, zoom: 1 };
const headCurrent = { yaw: 0, pitch: 0, panX: 0, panY: 0, zoom: 1 };

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

// ── État "Idle" (respiration) et clignement naturel ──────────────────────────
let isIdle = true;
let naturalBlinkFrame = 0;
let naturalBlinkNext = 0;
let naturalBlinkStart = 0;
const NATURAL_BLINK_DURATION = 150; // ms

// Pose de repos du squelette, relevée au chargement AVANT toute animation.
// Indispensable : la respiration doit osciller AUTOUR de cette pose. Sans elle,
// on écrase la position du bassin vers ~0 et tout le corps s'effondre vers le
// bas (les maillages skinnés sortent du cadre).
let hipsRestPosition = null;
let hipsRestRotation = null;
const ARM_REST_ROTATION = new Map();

// ── Contexte écran : micro-expressions oculaires + inclinaison de tête ───────
let eyeCtxSquint = 0;
let eyeCtxHeadPitch = 0;
let eyeCtxSquintTarget = 0;
let eyeCtxHeadPitchTarget = 0;
let eyeCtxFrameId = 0;

// ─────────────────────────────────────────────────────────────────────────────
// 📐 Cadrage de l'avatar
// ─────────────────────────────────────────────────────────────────────────────
// Plan tête par défaut (l'avatar n'est qu'une tête à l'écran), corps entier
// avec ?framing=full.
//
// Le cadrage tête se base sur la boîte englobante du maillage de la tête :
// c'est la seule façon d'obtenir à la fois le centre optique du visage et la
// hauteur réelle du crâne (avec les cheveux). L'os de tête sert de repli.
function frameAvatar(vrm) {
    const fovRad = THREE.MathUtils.degToRad(camera.fov);
    const fullBody = new URLSearchParams(window.location.search).get('framing') === 'full';

    vrm.scene.updateWorldMatrix(true, true);

    const box = new THREE.Box3().setFromObject(vrm.scene);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());

    // Boîte englobant la tête VISIBLE : peau + cheveux + sourcils + cils.
    // Les cheveux sont indispensables : sans eux, la boîte s'arrête au crâne et
    // le haut des cheveux est coupé hors cadre. Dents/langue/gencives exclus
    // (ils débordent vers le bas et éloigneraient inutilement la caméra).
    const headBox = new THREE.Box3();
    let headBoxOk = false;
    vrm.scene.traverse((obj) => {
        if (!obj.isMesh) return;
        const name = obj.name || '';
        if (!/head|face|hair|brow|lash/i.test(name)) return;
        if (/teeth|jaw|tongue|gum/i.test(name)) return;
        obj.updateWorldMatrix(true, false);
        headBox.expandByObject(obj);
        headBoxOk = true;
    });

    // Repli : os de tête (rarement nécessaire, mais évite un cadrage raté).
    const headNode = vrm.humanoid?.getRawBoneNode?.('head')
        ?? vrm.humanoid?.getNormalizedBoneNode?.('head');
    const headPos = new THREE.Vector3();
    if (headNode) headNode.getWorldPosition(headPos);

    let target = new THREE.Vector3();
    let distance;
    let plan;

    if (!fullBody && headBoxOk && headBox.getSize(new THREE.Vector3()).y > size.y * 0.02) {
        // Gros plan tête : la tête occupe ~50 % de la hauteur du cadre.
        const headSize = headBox.getSize(new THREE.Vector3());
        const headCenter = headBox.getCenter(new THREE.Vector3());
        // Vise le centre exact de la boîte (peau + cheveux) : les marges sont
        // égales en haut (sommet des cheveux) et en bas (menton/cou).
        target.set(headCenter.x, headCenter.y, headCenter.z);
        // k = 1.75 : la tête occupe ~77 % de la hauteur du cadre. Les épaules
        // ne apparaissent plus qu'en bas des coins.
        distance = headSize.y / (1.75 * Math.tan(fovRad / 2));
        plan = "gros plan tête";
    } else if (!fullBody && headNode) {
        // Repli : on suppose la tête ≈ 14 % de la hauteur du modèle.
        const headHeight = size.y * 0.14;
        target.set(headPos.x, headPos.y + headHeight * 0.4, headPos.z);
        distance = headHeight / (1.75 * Math.tan(fovRad / 2));
        plan = "gros plan tête (os)";
    } else {
        // Corps entier.
        target.set(center.x, center.y + size.y * 0.04, center.z);
        distance = (size.y * 0.62) / Math.tan(fovRad / 2);
        plan = "corps entier";
    }

    headBaseTarget.copy(target);
    headBaseDistance = distance;

    camera.position.set(target.x, target.y, target.z + distance);
    camera.lookAt(target);
    camera.updateProjectionMatrix();

    lookTarget.position.copy(camera.position);
    gazeTarget.position.copy(camera.position);

    console.log("📐 Avatar cadré:", {
        plan,
        taille: size.toArray().map((v) => +v.toFixed(3)),
        tete: headBoxOk ? headBox.getCenter(new THREE.Vector3()).toArray().map((v) => +v.toFixed(3)) : null,
        distance: +distance.toFixed(3)
    });
}

// Applique l'état courant (lissé) : rotation de la tête + position de la caméra.
function applyHeadPose() {
    if (headBone) {
        // eyeCtxHeadPitch : légère inclinaison ajoutée par le contexte écran.
        headBone.rotation.set(
            headCurrent.pitch + eyeCtxHeadPitch,
            headCurrent.yaw,
            0
        );
    }

    const distance = clamp(headBaseDistance * headCurrent.zoom, HEAD_LIMITS.zoomMin, HEAD_LIMITS.zoomMax);
    camera.position.set(
        headBaseTarget.x + headCurrent.panX,
        headBaseTarget.y + headCurrent.panY,
        headBaseTarget.z + distance
    );
    // Les yeux suivent la caméra, donc ils suivent le déplacement souris.
    lookTarget.position.copy(camera.position);
    camera.lookAt(headBaseTarget);
}

function resetHeadPose() {
    headTarget.yaw = 0;
    headTarget.pitch = 0;
    headTarget.panX = 0;
    headTarget.panY = 0;
    headTarget.zoom = 1;
}

// ── Pilotage souris : glisser = tourner la tête, Shift+glisser = déplacer,
//    molette = zoom, double-clic = recentrer. Compatible tactile (pointer events).
let dragState = null;

renderer.domElement.style.cursor = 'grab';
renderer.domElement.style.touchAction = 'none';

renderer.domElement.addEventListener('pointerdown', (event) => {
    dragState = {
        id: event.pointerId,
        x: event.clientX,
        y: event.clientY,
        pan: event.shiftKey || event.button === 2
    };
    try {
        renderer.domElement.setPointerCapture(event.pointerId);
    } catch {
        // Certains pointeurs synthétiques/obsolètes n'ont pas de capture : sans gravité.
    }
    renderer.domElement.style.cursor = 'grabbing';
});

renderer.domElement.addEventListener('pointermove', (event) => {
    if (!dragState || event.pointerId !== dragState.id) return;

    const dx = event.clientX - dragState.x;
    const dy = event.clientY - dragState.y;
    dragState.x = event.clientX;
    dragState.y = event.clientY;

    if (dragState.pan) {
        const scale = headBaseDistance * 0.0016;
        headTarget.panX = clamp(headTarget.panX - dx * scale, -HEAD_LIMITS.pan, HEAD_LIMITS.pan);
        headTarget.panY = clamp(headTarget.panY + dy * scale, -HEAD_LIMITS.pan, HEAD_LIMITS.pan);
    } else {
        headTarget.yaw = clamp(headTarget.yaw + dx * 0.006, -HEAD_LIMITS.yaw, HEAD_LIMITS.yaw);
        headTarget.pitch = clamp(headTarget.pitch + dy * 0.005, -HEAD_LIMITS.pitch, HEAD_LIMITS.pitch);
    }
});

const endDrag = (event) => {
    if (!dragState || (event && event.pointerId !== dragState.id)) return;
    if (renderer.domElement.hasPointerCapture?.(dragState.id)) {
        renderer.domElement.releasePointerCapture(dragState.id);
    }
    dragState = null;
    renderer.domElement.style.cursor = 'grab';
};

renderer.domElement.addEventListener('pointerup', endDrag);
renderer.domElement.addEventListener('pointercancel', endDrag);

renderer.domElement.addEventListener('contextmenu', (event) => event.preventDefault());

renderer.domElement.addEventListener('wheel', (event) => {
    event.preventDefault();
    headTarget.zoom = clamp(headTarget.zoom * (1 + Math.sign(event.deltaY) * 0.08), 0.4, 2.4);
}, { passive: false });

renderer.domElement.addEventListener('dblclick', () => {
    resetHeadPose();
    console.log("🎯 Cadrage tête recentré.");
});

// Sort l'avatar de la pose en T : bras le long du corps (pose d'attente).
// Le décalage s'ajoute à la rotation de repos relevée au chargement.
function applyIdlePose(vrm) {
    const humanoid = vrm.humanoid;
    if (!humanoid) return;

    const setZ = (boneName, z) => {
        const bone = humanoid.getNormalizedBoneNode(boneName);
        if (!bone) return;
        if (!ARM_REST_ROTATION.has(boneName)) ARM_REST_ROTATION.set(boneName, bone.rotation.z);
        bone.rotation.z = ARM_REST_ROTATION.get(boneName) + z;
    };

    setZ('leftUpperArm', -1.25);
    setZ('rightUpperArm', 1.25);
}

// ─────────────────────────────────────────────────────────────────────────────
// 👁️ Regard naturel et clignement automatique (indépendant de l'état réflexion)
// ─────────────────────────────────────────────────────────────────────────────

function getBlinkIntervalMs() {
    const rateSec = clamp(Number.parseFloat(localStorage.getItem('emoBlinkRate') || '4') || 4, 1, 10);
    return rateSec * (500 + Math.random() * 1000);
}

// Clignement naturel : fréquence et intensité pilotées par le panneau (défaut 4s / 0.8).
// Mis en pause automatiquement quand startThinking() contrôle le blink.
function startNaturalBlinking() {
    if (!currentVrm) return;
    stopNaturalBlinking();
    naturalBlinkNext = performance.now() + getBlinkIntervalMs();

    const tick = (now) => {
        if (!currentVrm) {
            naturalBlinkFrame = requestAnimationFrame(tick);
            return;
        }

        // Si la réflexion est active, on laisse startThinking gérer le blink.
        if (thinkingFrameId) {
            naturalBlinkFrame = requestAnimationFrame(tick);
            return;
        }

        // Déclenche un nouveau clignement quand l'échéance est atteinte.
        if (naturalBlinkStart === 0 && now >= naturalBlinkNext) {
            naturalBlinkStart = now;
        }

        // Anime le clignement en cours (0 → 1 → 0, courbe en cloche).
        if (naturalBlinkStart > 0) {
            const elapsed = now - naturalBlinkStart;
            const progress = elapsed / NATURAL_BLINK_DURATION;
            if (progress >= 1) {
                setExpression('blink', 0);
                naturalBlinkStart = 0;
                naturalBlinkNext = now + getBlinkIntervalMs();
            } else {
                const rawBlink = Number.parseFloat(localStorage.getItem('emoBlink') ?? '0.8');
                const blinkAmp = clamp(Number.isFinite(rawBlink) ? rawBlink : 0.8, 0, 1);
                setExpression('blink', Math.sin(progress * Math.PI) * blinkAmp);
            }
        }

        naturalBlinkFrame = requestAnimationFrame(tick);
    };
    naturalBlinkFrame = requestAnimationFrame(tick);
}

function stopNaturalBlinking() {
    if (naturalBlinkFrame) cancelAnimationFrame(naturalBlinkFrame);
    naturalBlinkFrame = 0;
    naturalBlinkStart = 0;
    naturalBlinkNext = 0;
    setExpression('blink', 0);
}

// Regard vers la caméra avec micro-saccades aléatoires (toutes les 3-5 s).
function startNaturalGaze(vrm) {
    if (!currentVrm || !vrm.lookAt) return;

    // L'avatar regarde la caméra (avec léger décalage géré par gazeOffset).
    vrm.lookAt.target = gazeTarget;
    vrm.lookAt.autoUpdate = true;

    scheduleNextGazeSaccade();
}

function scheduleNextGazeSaccade() {
    if (gazeSaccadeTimeout) clearTimeout(gazeSaccadeTimeout);
    gazeSaccadeTimeout = setTimeout(() => {
        if (!currentVrm) return;
        const gazeAmp = clamp(Number.parseFloat(localStorage.getItem('emoGaze') ?? '0.03') || 0, 0, 0.1);
        const span = gazeAmp * 2.66;
        gazeSaccadeStart = performance.now();
        const startOffset = gazeOffset.clone();
        const endOffset = new THREE.Vector3(
            (Math.random() - 0.5) * span,
            (Math.random() - 0.5) * span,
            (Math.random() - 0.5) * span
        );

        const tick = (now) => {
            const elapsed = now - gazeSaccadeStart;
            const progress = Math.min(1, elapsed / GAZE_SACCADE_DURATION);
            const ease = 1 - Math.pow(1 - progress, 3);
            gazeOffset.lerpVectors(startOffset, endOffset, ease);
            if (progress < 1) {
                gazeSaccadeFrame = requestAnimationFrame(tick);
            } else {
                gazeSaccadeFrame = 0;
                // Retour fluide vers la centre (position caméra).
                gazeSaccadeStart = performance.now();
                const returnStart = gazeOffset.clone();
                const returnTick = (now) => {
                    const e2 = now - gazeSaccadeStart;
                    const p2 = Math.min(1, e2 / GAZE_SACCADE_DURATION);
                    const ease2 = 1 - Math.pow(1 - p2, 3);
                    gazeOffset.lerpVectors(returnStart, new THREE.Vector3(0, 0, 0), ease2);
                    if (p2 < 1) {
                        gazeSaccadeFrame = requestAnimationFrame(returnTick);
                    } else {
                        gazeSaccadeFrame = 0;
                        gazeOffset.set(0, 0, 0);
                        scheduleNextGazeSaccade();
                    }
                };
                gazeSaccadeFrame = requestAnimationFrame(returnTick);
            }
        };
        gazeSaccadeFrame = requestAnimationFrame(tick);
    }, 3000 + Math.random() * 2000);
}

function stopNaturalGaze() {
    if (gazeSaccadeTimeout) clearTimeout(gazeSaccadeTimeout);
    gazeSaccadeTimeout = 0;
    if (gazeSaccadeFrame) cancelAnimationFrame(gazeSaccadeFrame);
    gazeSaccadeFrame = 0;
    gazeOffset.set(0, 0, 0);
}

// ─────────────────────────────────────────────────────────────────────────────
// 😌 Animation "Idle" : respiration sur le bassin, lissée par lerp.
// ─────────────────────────────────────────────────────────────────────────────
function updateIdleAnimation(time) {
    if (!isIdle) return;
    // Respiration légère via le bassin (hips), jamais touché par lookAt.
    // On oscille autour de la pose de relevée au chargement : écrire la valeur
    // absolue déplacerait tout le squelette hors du cadre.
    const hipsNode = currentVrm?.humanoid?.getNormalizedBoneNode?.('hips');
    if (hipsNode && hipsRestPosition && hipsRestRotation) {
        // OVERLAY APP: amplitude de respiration réglable et persistée.
        const breathAmp = Number.parseFloat(localStorage.getItem('emoBreath') || '0.02');
        const offsetPosY = Math.sin(time * 0.2) * breathAmp;
        const offsetRotX = Math.sin(time * 1.5) * breathAmp * 0.3;
        hipsNode.position.y = THREE.MathUtils.lerp(
            hipsNode.position.y,
            hipsRestPosition.y + offsetPosY,
            0.1
        );
        hipsNode.rotation.x = THREE.MathUtils.lerp(
            hipsNode.rotation.x,
            hipsRestRotation.x + offsetRotX,
            0.1
        );
    }
    // Note : on ne touche pas head / neck : lookAt gère tout seul le regard.
}

// ─────────────────────────────────────────────────────────────────────────────
// 👀 Contexte écran → plissement des yeux + inclinaison de tête
// ─────────────────────────────────────────────────────────────────────────────
// `screenContext` est une phrase libre renvoyée par le backend (analyse d'image).
function applyScreenContext(screenContext) {
    const text = String(screenContext ?? '').trim();
    if (!text) {
        eyeCtxSquintTarget = 0;
        eyeCtxHeadPitchTarget = 0;
        startEyeContextAnimation();
        return;
    }

    const lower = text.toLocaleLowerCase('fr-FR');
    let squint = 0.15;
    let pitch = 0.03;

    if (/(erreur|échec|echec|fail|bug|crash|exception|introuvable)/.test(lower)) {
        squint = 0.35;
        pitch = 0.10;
    } else if (/(code|console|log|donnée|donnee|texte|document|chiffre|tableau)/.test(lower)) {
        squint = 0.25;
        pitch = 0.06;
    } else if (/(visage|camera|webcam|regard|personne|humain|visage)/.test(lower)) {
        squint = 0.10;
        pitch = -0.05;
    }

    eyeCtxSquintTarget = squint;
    eyeCtxHeadPitchTarget = pitch;
    startEyeContextAnimation();
}

// Anime les cibles du contexte écran jusqu'à convergence (ou jusqu'au reset).
function startEyeContextAnimation() {
    if (eyeCtxFrameId) return;

    const tick = () => {
        if (!currentVrm) {
            eyeCtxFrameId = 0;
            return;
        }

        const k = 0.06;
        eyeCtxSquint += (eyeCtxSquintTarget - eyeCtxSquint) * k;
        eyeCtxHeadPitch += (eyeCtxHeadPitchTarget - eyeCtxHeadPitch) * k;
        setExpression('squint', eyeCtxSquint);

        if (Math.abs(eyeCtxSquintTarget - eyeCtxSquint) < 0.001 &&
            Math.abs(eyeCtxHeadPitchTarget - eyeCtxHeadPitch) < 0.001) {
            eyeCtxSquint = eyeCtxSquintTarget;
            eyeCtxHeadPitch = eyeCtxHeadPitchTarget;
            setExpression('squint', eyeCtxSquint);
            eyeCtxFrameId = 0;
            return;
        }

        eyeCtxFrameId = requestAnimationFrame(tick);
    };
    eyeCtxFrameId = requestAnimationFrame(tick);
}

// ─────────────────────────────────────────────────────────────────────────────
// Chargement de l'avatar VRM avec gestion d'erreurs.
// Modèle par défaut : /sarra7.vrm — surcharge possible via ?avatar=autre.vrm
// ─────────────────────────────────────────────────────────────────────────────
const AVATAR_URL = new URLSearchParams(window.location.search).get('avatar') || './sarra7.vrm';
console.log("📦 Modèle demandé:", AVATAR_URL);

loader.load(
    AVATAR_URL,
    (gltf) => {
        try {
            const vrm = gltf.userData.vrm;

            // Les fichiers VRM 0.x sont orientés vers -Z : on les retourne.
            VRMUtils.rotateVRM0(vrm);

            scene.add(vrm.scene);
            currentVrm = vrm;

            // Ombres douces : seuls les maillages opaques portent/reçoivent des ombres.
            // Les cheveux / outlines transparents et la géométrie restent inchangés.
            // ─── SECTION 4 — Boost matériaux (rendu uniquement) ───────────────
            vrm.scene.traverse((obj) => {
                if (!obj.isMesh) return;
                obj.castShadow = true;
                obj.receiveShadow = true;
                const materials = Array.isArray(obj.material) ? obj.material : [obj.material];
                materials.forEach((material) => {
                    if (material && material.roughness !== undefined) {
                        material.roughness = Math.max(material.roughness, 0.4);
                    }
                });
            });

            // Pose de repos du squelette : relevée AVANT toute animation, pour
            // que l'idle oscille autour de cette pose au lieu de l'écraser.
            const restHips = vrm.humanoid?.getNormalizedBoneNode?.('hips');
            if (restHips) {
                hipsRestPosition = restHips.position.clone();
                hipsRestRotation = restHips.rotation.clone();
                console.log("🧍 Pose de repos bassin:", hipsRestPosition.toArray().map((v) => +v.toFixed(4)));
            }

            // Reset des expressions au chargement : évite la bouche figée ouverte.
            if (vrm.expressionManager) {
                ['aa', 'ih', 'ou', 'ee', 'oh', 'jawOpen', 'mouthClose'].forEach((expr) => {
                    vrm.expressionManager.setValue(expr, 0);
                });
            }

            console.log("✅ Avatar chargé. Version VRM:", vrm.meta?.metaVersion ?? "?", "Blendshapes:", Object.keys(vrm.expressionManager.expressionMap));

            // L'avatar regarde la caméra.
            if (vrm.lookAt) {
                vrm.lookAt.target = lookTarget;
            }

            applyIdlePose(vrm);
            collectMouthMorphMeshes(vrm);
            headBone = vrm.humanoid?.getNormalizedBoneNode?.('head') ?? null;
            resetHeadPose();
            frameAvatar(vrm);

            // Regard naturel vers la caméra + clignement automatique.
            startNaturalGaze(vrm);
            startNaturalBlinking();

            // Exposé pour le débogage dans la console du navigateur (fusion sans écraser showToast / toggleConfigPanel).
            window.__sarra = window.__sarra || {};
            Object.defineProperties(window.__sarra, Object.getOwnPropertyDescriptors({
                scene, camera, renderer, vrm, lookTarget, gazeTarget,
                animateLipSyncFromText, askSarra: askSarraDirect, askSarraDirect, speakWithBestVoice,
                speakWithLocalTts, stopLocalTtsPlayback, splitFrenchSentences,
                headTarget, headCurrent, headBaseTarget,
                get headBaseDistance() { return headBaseDistance; },
                resetHeadPose,
                frameAvatar,
                buildVisemeTrack,
                // Débogage micro / lipsync (lecture + arrêt propre).
                resetFacialExpressions,
                stopActiveLipsync,
                get micState() {
                    return { enabled: micEnabled, suspended: micSuspended, active: recognitionActive };
                },
                get micRecognition() { return micRecognition; }
            }));

            console.log("⚙️ Avatar ready, starting animation loop");
        } catch (error) {
            console.error("❌ Erreur lors du traitement de l'avatar:", error);
        }
    },
    (xhr) => {
        console.log(`⏳ Téléchargement VRM: ${(xhr.loaded / xhr.total * 100).toFixed(1)}%`);
    },
    (error) => {
        console.error("❌ Erreur chargement VRM:", error);
        document.body.innerHTML = `
            <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%;
                        background: #1a1a1a; color: #fff; font-family: sans-serif;
                        display: flex; flex-direction: column; align-items: center; justify-content: center;">
                <h1>❌ Erreur chargement avatar</h1>
                <p>Impossible de charger le modèle VRM (${AVATAR_URL}).
                Vérifiez que le fichier existe dans le dossier public.</p>
                <p>Erreur: ${error.message}</p>
            </div>
        `;
    }
);

const clock = new THREE.Clock();

function animate() {
    requestAnimationFrame(animate);

    // Lissage du pilotage souris (indépendant du framerate).
    const dt = Math.min(0.1, clock.getDelta());
    const k = 1 - Math.exp(-dt / 0.06);
    headCurrent.yaw += (headTarget.yaw - headCurrent.yaw) * k;
    headCurrent.pitch += (headTarget.pitch - headCurrent.pitch) * k;
    headCurrent.panX += (headTarget.panX - headCurrent.panX) * k;
    headCurrent.panY += (headTarget.panY - headCurrent.panY) * k;
    headCurrent.zoom += (headTarget.zoom - headCurrent.zoom) * k;
    applyHeadPose();

    // La cible du regard suit la caméra, avec les micro-saccades.
    gazeTarget.position.copy(camera.position).add(gazeOffset);

    // Animation idle procédurale (respiration + micro-mouvements de tête).
    updateIdleAnimation(clock.getElapsedTime());

    // Mise à jour de l'avatar si disponible
    if (currentVrm) {
        try {
            currentVrm.update(dt);
        } catch (e) {
            console.warn("⚠️ Erreur mise à jour avatar:", e);
        }
    }

    try {
        renderer.render(scene, camera);
    } catch (e) {
        console.error("❌ Erreur rendu:", e);
    }
}

animate();

// OVERLAY APP TRANSPARENCY: redimensionnement sur #scene, avec repli sur la fenêtre.
window.addEventListener('resize', () => {
    const renderWidth = sceneContainer?.clientWidth || window.innerWidth;
    const renderHeight = sceneContainer?.clientHeight || window.innerHeight;
    camera.aspect = renderWidth / renderHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(renderWidth, renderHeight);
    if (currentVrm) frameAvatar(currentVrm);
});

// ─────────────────────────────────────────────────────────────────────────────
// 🗣️ Boucle conversationnelle : réflexion → requête Gemini → lipsync de la réponse
// ─────────────────────────────────────────────────────────────────────────────
const CHAT_ENDPOINT = 'http://127.0.0.1:3000/api/chat';
// OVERLAY APP CORRECTION: Timeout réduit à 8 secondes (était 90000)
const CHAT_TIMEOUT_MS = 8000;

// Toutes les expressions que la boucle peut toucher, pour un reset propre.
const FACIAL_CHANNELS = ['blink', 'angry', 'squint', 'aa', 'ih', 'ou', 'ee', 'oh', 'jawOpen'];

let thinkingFrameId = 0;
let chatInFlight = false;

// ============================================================================
// OVERLAY APP: MODE D'ÉCOUTE CONTINUE (micro ON/OFF + reprise automatique)
// ============================================================================
let micEnabled = false;        // intention utilisateur : ON / OFF
let recognitionActive = false; // reconnaissance réellement en cours
let micSuspended = false;      // Sarra parle : micro suspendu (anti-écho)
let micRecognition = null;
let micButtonEl = null;
let micRestartTimer = 0;

function setMicButtonListening(on) {
    const btn = micButtonEl || document.getElementById('mic-btn');
    if (!btn) return;
    btn.classList.toggle('listening', on);
    btn.style.transition = 'background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease';
    btn.style.background = on ? 'rgba(220, 40, 40, 0.9)' : '';
    btn.style.transform = on ? 'translateX(-50%) scale(1.1)' : 'translateX(-50%) scale(1)';
    btn.style.boxShadow = on
        ? '0 6px 18px rgba(0, 0, 0, 0.45), 0 0 0 6px rgba(220, 40, 40, 0.25)'
        : '';
    btn.title = on
        ? 'Micro actif — écoute continue (cliquer pour couper)'
        : 'Micro coupé (cliquer pour activer)';
}

function scheduleMicRestart(delay = 350) {
    if (!micEnabled || micSuspended || recognitionActive || !micRecognition) return;
    clearTimeout(micRestartTimer);
    micRestartTimer = setTimeout(() => {
        if (!micEnabled || micSuspended || recognitionActive) return;
        try {
            micRecognition.start();
            console.log('🎤 Écoute redémarrée (mode continu)');
        } catch (error) {
            // InvalidStateError = déjà démarré : on ignore silencieusement.
            if (error?.name !== 'InvalidStateError') {
                console.warn('⚠️ Redémarrage micro:', error.message);
            }
        }
    }, delay);
}

// Appelé dès qu'une question part : coupe l'écoute et bloque toute reprise
// jusqu'à la fin de la réponse parlée (évite que Sarra s'écoute elle-même).
function suspendMicForSpeech() {
    micSuspended = true;
    clearTimeout(micRestartTimer);
    if (micRecognition && recognitionActive) {
        try { micRecognition.stop(); } catch (error) { /* déjà arrêté */ }
    }
}

function resumeMicAfterSpeech() {
    micSuspended = false;
    scheduleMicRestart(350);
}

// Annulation propre du lipsync en cours (corrige la bouche bloquée).
let activeLipsyncStop = null;

function stopActiveLipsync(reason = 'arrêt forcé') {
    const stop = activeLipsyncStop;
    activeLipsyncStop = null;
    if (typeof stop === 'function') stop(reason);
    else resetMouthMorphs();
}

function setExpression(name, value) {
    const expressionManager = currentVrm?.expressionManager;
    if (!expressionManager) return;
    // On vérifie l'existence du preset : tous les VRM n'ont pas 'angry'.
    if (!expressionManager.expressionMap[name]) return;
    expressionManager.setValue(name, value);
}

// État "réflexion" : yeux mi-clos qui respirent + sourcils légèrement froncés + inclinaison naturelle du cou.
// Animé en continu pour que l'avatar ne paraisse jamais figé pendant la latence.
function startThinking() {
    if (!currentVrm) return;
    isIdle = false;
    stopThinking();

    const startedAt = performance.now();
    const neckNode = currentVrm.humanoid?.getNormalizedBoneNode?.('neck');
    // OVERLAY APP: intensité du froncement et de l'inclinaison configurables.
    const neckAmp = Number.parseFloat(localStorage.getItem('emoNeck') || '0.08');
    const angryAmp = Number.parseFloat(localStorage.getItem('emoAngry') || '0.1');
    const blinkAmp = Number.parseFloat(localStorage.getItem('emoBlink') || '0.8');
    const tick = (now) => {
        if (!currentVrm) return;
        const t = (now - startedAt) / 1000;
        setExpression('blink', blinkAmp * (0.85 + 0.15 * Math.sin(t * 2.2)));
        setExpression('angry', angryAmp + 0.05 * Math.sin(t * 1.1));
        // Inclinaison légère du cou pour simuler la réflexion.
        if (neckNode) {
            neckNode.rotation.z = neckAmp * Math.sin(t * 0.8);
            neckNode.rotation.x = 0.05 * Math.sin(t * 1.2);
        }
        thinkingFrameId = requestAnimationFrame(tick);
    };
    thinkingFrameId = requestAnimationFrame(tick);
}

function stopThinking() {
    if (thinkingFrameId) cancelAnimationFrame(thinkingFrameId);
    thinkingFrameId = 0;
    setExpression('blink', 0);
    setExpression('angry', 0);
    isIdle = true; // La courbe sinusoïdale reprendra naturellement sans snap

    // Réinitialisation uniquement du cou (spécifique à la réflexion)
    if (currentVrm) {
        const neckNode = currentVrm.humanoid?.getNormalizedBoneNode?.('neck');
        if (neckNode) {
            neckNode.rotation.z = 0;
            neckNode.rotation.x = 0;
        }
    }
    // Reprend le clignement naturel après la réflexion.
    startNaturalBlinking();
}

function resetFacialExpressions() {
    // Stoppe d'abord toute animation de bouche encore active : sinon la boucle
    // de visèmes réécrit les morphs juste après le reset (bouche "bloquée").
    stopActiveLipsync('reset des expressions');
    stopThinking();
    // Remettre à zéro les cibles d'expression oculaire (screenContext).
    eyeCtxSquintTarget = 0;
    eyeCtxHeadPitchTarget = 0;
    startEyeContextAnimation();
    for (const channel of FACIAL_CHANNELS) currentVrm?.expressionManager?.setValue(channel, 0);
    // Les dents/la mâchoire sont pilotées en direct : on les remet à plat aussi.
    resetMouthMorphs();
    // Reprend le clignement naturel après un reset d'erreur.
    startNaturalBlinking();
}

// MODE DÉMO: surveillance backend / badge de connexion désactivés
// ( appel direct à Gemini — voir askSarraDirect ci-dessous ).

// ============================================================================
// OVERLAY APP: MODE DÉMO — appel direct à Gemini REST (sans backend Node.js)
// ============================================================================
const GEMINI_API_KEY_DEMO = "TA_CLE_API_ICI"; // ⚠️ Remplacer par la vraie clé (AQ... ou AIzaSy...)
// Modèles vérifiés le 27/11/2026 avec la clé de démo (ListModels + appels réels).
// ⚠️ gemini-2.0-flash-exp, gemini-2.0-flash et gemini-1.5-flash renvoient 404
// (retirés de l'API) : ne pas les réintroduire. Les modèles "lite" sont les
// seuls à répondre en < 1 s ; gemini-3.8-flash / flash-latest sont en 503.
const GEMINI_MODEL_ORDER = [
    'gemini-3.5-flash-lite',      // défaut : répond avec les deux clés testées (200 en ~0,5 s)
    'gemini-flash-lite-latest',   // fallback stable (200 en ~0,6 s)
    'gemini-2.5-flash-lite'       // ancien Lite : 404 sur les clés récentes, utile sur les anciennes
];
const DEFAULT_REASONING_MODEL = GEMINI_MODEL_ORDER[0];
const GEMINI_MODEL_DEMO = GEMINI_MODEL_ORDER.includes(localStorage.getItem('reasoningModel'))
    ? localStorage.getItem('reasoningModel')
    : DEFAULT_REASONING_MODEL;
// TTS premium : cascade de modèles vérifiés le 27/11/2026 (tous 200).
// Un seul modèle ne doit plus condamner toute la session au repli navigateur.
const GEMINI_TTS_MODELS = [
    'gemini-2.5-flash-preview-tts',   // défaut historique, testé 200
    'gemini-3.8-flash-tts',           // meilleure qualité
    'gemini-3.1-flash-tts-preview',
    'gemini-3.8-flash-lite-tts'
];
const GEMINI_TTS_MODEL = GEMINI_TTS_MODELS[0]; // compatibilité
const TTS_MODEL_COOLDOWN_MS = 20000;
const ttsModelCooldownUntil = new Map();
const GEMINI_FALLBACK_MODELS_DEMO = GEMINI_MODEL_ORDER.slice(1);

// Anti-retry : un modèle saturé est mis en repos 10 s (au lieu de 60 s) pour
// permettre un réessai rapide quand la saturation redescend. Les autres modèles
// restent essayés immédiatement dans la même boucle (aucune attente du cooldown).
const MODEL_COOLDOWN_MS = 10000;
const modelCooldownUntil = new Map();

// Modèle prioritaire lu à chaque appel : un changement dans le panneau prend
// effet immédiatement, sans rechargement de l'overlay.
function getPreferredReasoningModel() {
    const saved = localStorage.getItem('reasoningModel');
    return GEMINI_MODEL_ORDER.includes(saved) ? saved : DEFAULT_REASONING_MODEL;
}

function getReasoningModels() {
    const all = [getPreferredReasoningModel(), ...GEMINI_FALLBACK_MODELS_DEMO]
        .filter((m, i, list) => m && list.indexOf(m) === i);
    const now = Date.now();
    const ready = all.filter((m) => (modelCooldownUntil.get(m) || 0) <= now);
    const cooling = all.filter((m) => (modelCooldownUntil.get(m) || 0) > now);
    return [...ready, ...cooling];
}

function isRetryableDemoError(error) {
    const status = Number(error?.status) || 0;
    return error?.name === 'AbortError' || status === 503 || status === 429 || status === 404;
}

// ─── Function calling : Sarra exécute vraiment ce qu'elle annonce ────────────
const SARRA_ACTION_TOOLS = [{
    functionDeclarations: [
        {
            name: 'open_url',
            description: "Ouvre une URL http(s) dans le navigateur de l'utilisateur. À appeler dès qu'il demande d'ouvrir un site.",
            parameters: {
                type: 'OBJECT',
                properties: {
                    url: { type: 'STRING', description: 'URL complète, par exemple https://www.youtube.com' }
                },
                required: ['url']
            }
        },
        {
            name: 'youtube_search',
            description: "Lance une recherche YouTube dans le navigateur de l'utilisateur.",
            parameters: {
                type: 'OBJECT',
                properties: {
                    query: { type: 'STRING', description: 'Termes de recherche YouTube' }
                },
                required: ['query']
            }
        },
        {
            name: 'web_search',
            description: 'Lance une recherche Google dans le navigateur.',
            parameters: {
                type: 'OBJECT',
                properties: {
                    query: { type: 'STRING', description: 'Termes de recherche' }
                },
                required: ['query']
            }
        }
    ]
}];

// RÈGLE ABSOLUE : si l'utilisateur demande une action, Gemini doit émettre
// un functionCall et jamais décrire l'action en texte. Une description
// textuelle sans tool call est traitée comme une erreur, pas comme un succès.
const ACTION_SYSTEM_RULE = "RÈGLE ABSOLUE : Si l'utilisateur demande une action (ouvrir un site, lancer une recherche), tu DOIS UNIQUEMENT émettre un functionCall vers l'outil correspondant. Tu ne dois JAMAIS répondre par du texte pour dire que tu vas le faire. Si tu émets du texte descriptif au lieu d'un functionCall, c'est une erreur de ta part. Après l'appel de l'outil, réponds en une phrase courte confirmant l'exécution.";

async function callGeminiDirect(model, key, message, signal, imagePart = null) {
    const provider = document.getElementById('cfg-reasoning-provider')?.value
        || localStorage.getItem('reasoningProvider')
        || 'gemini';
    const avatarName = localStorage.getItem('avatarName')?.trim();
    const userName = localStorage.getItem('userName')?.trim();
    const identityLine = avatarName || userName
        ? `Identité : ${avatarName ? `tu t'appelles ${avatarName}` : ''}${avatarName && userName ? ', ' : ''}${userName ? `et l'utilisateur s'appelle ${userName}` : ''}. `
        : '';
    const memoryItems = getMemoryContext();
    const memoryBlock = memoryItems.length
        ? `\nMémoire des derniers échanges :\n${memoryItems.map((m) => `- ${m}`).join('\n')}`
        : '';
    const directives = identityLine
        + (localStorage.getItem('coreDirectives')?.trim()
            || 'Réponds en français, avec un ton naturel et concis.')
        + ' Réponds en 2 phrases courtes maximum à l’oral, sans introduction ni conclusion.'
        + memoryBlock
        + ACTION_SYSTEM_RULE;

    // Groq (llama-3.3) ne voit pas les images : avec une capture, on reste sur
    // Gemini. OpenRouter reçoit l'image au format image_url.
    const useOpenAiCompat = (provider === 'groq' || provider === 'openrouter')
        && !(imagePart && provider === 'groq');

    if (useOpenAiCompat) {
        const isGroq = provider === 'groq';
        const url = isGroq
            ? 'https://api.groq.com/openai/v1/chat/completions'
            : 'https://openrouter.ai/api/v1/chat/completions';
        const openRouterKey = localStorage.getItem('openRouterKey') || localStorage.getItem('openrouterKey');
        const providerKey = (isGroq ? localStorage.getItem('groqKey') : openRouterKey) || key;
        const headers = { 'Content-Type': 'application/json', Authorization: `Bearer ${providerKey}` };
        if (!isGroq) {
            headers['HTTP-Referer'] = 'https://sarra-final.local';
            headers['X-Title'] = 'Sarra Final Avatar';
        }
        const remoteModel = isGroq ? 'llama-3.3-70b-versatile' : await getOpenRouterFreeModel();
        const userContent = imagePart
            ? [
                { type: 'text', text: message },
                { type: 'image_url', image_url: { url: `data:${imagePart.mimeType};base64,${imagePart.data}` } }
            ]
            : message;
        const response = await fetch(url, {
            method: 'POST', headers,
            body: JSON.stringify({
                model: remoteModel,
                max_tokens: 150,
                messages: [{ role: 'system', content: directives }, { role: 'user', content: userContent }]
            }),
            signal
        });
        if (!response.ok) {
            const error = new Error(`API Error: ${response.status}`);
            error.status = response.status;
            throw error;
        }
        const data = await response.json();
        return { text: data?.choices?.[0]?.message?.content || '', functionCall: null };
    }

    if (imagePart && provider === 'groq') {
        console.warn('⚠️ Vision: Groq ne gère pas les images, appel Gemini pour ce message.');
    }

    const url = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent?key=${encodeURIComponent(key)}`;
    const parts = [{ text: message }];
    let screenInstruction = '';

    if (imagePart) {
        parts.push({ inlineData: imagePart });
        screenInstruction = " Tu vois actuellement l'écran de l'utilisateur (capture la plus récente). Utilise cette image pour répondre si la question s'y rapporte.";
    } else if (SCREEN_VISION_ENABLED()) {
        // Angle mort corrigé : l'IA sait qu'elle est aveugle temporairement
        screenInstruction = " ⚠️ ALERTE SYSTÈME : La capture d'écran a échoué ou a expiré (>90s). Tu ne voitS PAS l'écran actuellement. Si l'utilisateur te demande ce qu'il y a à l'écran, responds honnêtement : 'Je ne parviens plus à capturer ton écran pour le moment. Peux-tu me décrire ce que tu vois ou réessayer dans un instant ?' Ne tente jamais d'inventer le contenu de l'écran.";
    }
    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            contents: [{ role: 'user', parts }],
            systemInstruction: { parts: [{ text: directives + screenInstruction }] },
            tools: SARRA_ACTION_TOOLS,
            toolConfig: { functionCallingConfig: { mode: 'AUTO' } },
            generationConfig: { temperature: 0.9, maxOutputTokens: 150 }
        }),
        signal
    });
    if (!response.ok) {
        const error = new Error(`API Error: ${response.status}`);
        error.status = response.status;
        throw error;
    }
    const data = await response.json();
    const outParts = data?.candidates?.[0]?.content?.parts || [];
    const functionCall = outParts.find((part) => part.functionCall)?.functionCall || null;
    const text = outParts
        .filter((part) => typeof part.text === 'string')
        .map((part) => part.text)
        .join(' ')
        .trim();
    return { text, functionCall };
}

async function executeSarraAction(call) {
    if (!call?.name) return { ok: false, error: 'ACTION_VIDE' };
    const args = call.args || {};
    const payload = call.name === 'youtube_search'
        ? { type: 'youtube_search', query: args.query }
        : call.name === 'web_search'
            ? { type: 'web_search', query: args.query }
            : { type: 'open_url', url: args.url };
    const resp = await fetch(ACTION_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'X-Sarra-Client': 'sarra-desktop' },
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(20000)
    });
    const data = await resp.json().catch(() => ({}));
    if (resp.ok && data.ok !== false) {
        console.log('🌐 Action exécutée:', call.name, data.opened);
        return { ok: true, ...data };
    }
    console.error('❌ Action refusée:', call.name, data.error || resp.status);
    return { ok: false, ...data };
}

function actionConfirmation(call, result) {
    if (!result.ok) return "Je n'ai pas pu exécuter l'action, mais je reste disponible.";
    if (call.name === 'youtube_search') return 'Je lance la recherche YouTube.';
    if (call.name === 'web_search') return 'Je lance la recherche.';
    let host = '';
    try { host = new URL(result.opened).hostname.replace(/^www\./, ''); } catch (error) { /* ignore */ }
    return host ? `C'est fait, j'ouvre ${host}.` : "C'est fait, j'ouvre la page.";
}

function resolveDemoApiKey() {
    const configured = GEMINI_API_KEY_DEMO && GEMINI_API_KEY_DEMO !== "TA_CLE_API_ICI"
        ? GEMINI_API_KEY_DEMO
        : '';
    const key = configured || localStorage.getItem('apiKey') || localStorage.getItem('geminiKey') || '';
    if (!key) {
        console.error("❌ Clé API démo manquante : remplace GEMINI_API_KEY_DEMO ou saisis la clé dans le panneau.");
    }
    return key;
}

// TTS haute qualité : la meilleure voix française disponible est injectée dans
// animateLipSyncFromText (qui parle déjà) — pas de second speechSynthesis.speak().
let demoPreferredVoice = null;
let demoMuteBrowserVoice = false; // TTS distant : lipsync actif, voix navigateur muette
let premiumFailureCount = 0;          // échecs consécutifs du TTS premium (session seulement)
let premiumCooldownUntil = 0;         // ms — après ce timestamp, cascade relancée même si count < 2
let alertShown = false;               // une seule alerte utilisateur par session

// État temporaire du provider TTS premium persistant dans sessionStorage
// (persiste across refresh, cleared on tab/browser close — jamais localStorage).
premiumFailureCount = Number(sessionStorage.getItem('sarraPremiumFailureCount') || 0);
premiumCooldownUntil = Number(sessionStorage.getItem('sarraPremiumCooldownUntil') || 0);

// Toast discret et unique par session (ou forcé pour erreur bloquante TTS local).
function showToast(message, force = false) {
  if (alertShown && !force) return;
  if (!force) alertShown = true;
  const el = document.createElement('div');
  el.className = 'sarra-toast';
  el.textContent = message;
  el.style.cssText = 'position:fixed;left:50%;bottom:24px;transform:translateX(-50%);background:rgba(20,20,20,.92);color:#fff;padding:10px 16px;border-radius:10px;font:14px/1.4 system-ui,sans-serif;z-index:9999;box-shadow:0 8px 24px rgba(0,0,0,.35);max-width:80vw;';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 6000);
}
window.__sarra = window.__sarra || {};
window.__sarra.showToast = showToast;

function pickBestFrenchVoice() {
    const voices = window.speechSynthesis.getVoices();
    const preferredName = localStorage.getItem('selectedVoice');
    if (preferredName) {
        const matched = voices.find((v) => v.name === preferredName);
        if (matched) return matched;
    }
    const fr = (v) => (v.lang || '').toLowerCase().startsWith('fr');
    return voices.find((v) => v.name.includes('Julie'))
        || voices.find((v) => v.name.includes('Hortense'))
        || voices.find((v) => v.name.includes('Microsoft') && fr(v))
        || voices.find((v) => v.name.includes('Google') && fr(v))
        || voices.find((v) => v.lang === 'fr-FR')
        || voices.find(fr)
        || null;
}

function getTtsProvider() {
    return document.getElementById('cfg-tts-provider')?.value
        || localStorage.getItem('ttsProvider')
        || 'local-tts';
}

function getLocalTtsVoice() {
    return document.getElementById('cfg-local-tts-voice')?.value
        || localStorage.getItem('localTtsVoice')
        || 'F1';
}

function getElevenLabsKey() {
    return document.getElementById('cfg-elevenlabs-key')?.value.trim()
        || localStorage.getItem('elevenlabsKey')
        || localStorage.getItem('ttsKey')
        || '';
}

function getElevenLabsVoiceId() {
    return document.getElementById('cfg-elevenlabs-voice')?.value.trim()
        || localStorage.getItem('elevenVoiceId')
        || '';
}

async function fetchElevenLabsVoices(key) {
    const response = await fetch('https://api.elevenlabs.io/v1/voices', {
        headers: { 'xi-api-key': key }
    });
    if (!response.ok) throw new Error(`ElevenLabs HTTP ${response.status}`);
    const data = await response.json();
    return Array.isArray(data.voices) ? data.voices : [];
}

function pickElevenLabsVoice(voices) {
    return voices.find((v) => /french|français/i.test(JSON.stringify(v.labels || {})))
        || voices.find((v) => (v.labels?.language || '').toLowerCase().startsWith('fr'))
        || voices[0]
        || null;
}

async function resolveElevenLabsVoice(key, requested) {
    // Le panneau propose des noms (Rachel, Domi…) : on les résout en voice_id.
    if (/^[a-f0-9]{20,}$/i.test(requested)) return requested;
    const voices = await fetchElevenLabsVoices(key);
    const match = voices.find((v) => v.name?.toLowerCase() === requested.toLowerCase())
        || pickElevenLabsVoice(voices);
    if (!match) throw new Error('Aucune voix ElevenLabs disponible.');
    localStorage.setItem('elevenVoiceId', match.voice_id);
    console.log('🎙️ Voix ElevenLabs sélectionnée:', match.name, match.voice_id);
    return match.voice_id;
}

async function speakWithElevenLabs(text) {
    const key = getElevenLabsKey();
    if (!key) throw new Error('Clé ElevenLabs manquante (onglet Voix).');

    let voiceId = getElevenLabsVoiceId();
    if (!voiceId) {
        const voices = await fetchElevenLabsVoices(key);
        const voice = pickElevenLabsVoice(voices);
        if (!voice) throw new Error('Aucune voix ElevenLabs disponible.');
        voiceId = voice.voice_id;
        localStorage.setItem('elevenVoiceId', voiceId);
        console.log('🎙️ Voix ElevenLabs sélectionnée:', voice.name, voiceId);
    } else {
        voiceId = await resolveElevenLabsVoice(key, voiceId);
    }

    const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${encodeURIComponent(voiceId)}`, {
        method: 'POST',
        headers: {
            'xi-api-key': key,
            'Content-Type': 'application/json',
            Accept: 'audio/mpeg'
        },
        body: JSON.stringify({
            text,
            model_id: 'eleven_multilingual_v2',
            voice_settings: { stability: 0.5, similarity_boost: 0.75 }
        })
    });
    if (!response.ok) throw new Error(`ElevenLabs TTS HTTP ${response.status}`);

    return playRemoteTtsAudio(await response.blob(), text);
}

// Lecture d'un audio TTS distant avec lipsync (voix navigateur muette).
function playRemoteTtsAudio(blob, text) {
    const url = URL.createObjectURL(blob);
    const audio = new Audio(url);
    audio.volume = 1.0;

    demoMuteBrowserVoice = true;
    if (typeof animateLipSyncFromText === 'function') {
        animateLipSyncFromText(text).catch((error) => console.warn('⚠️ Lipsync TTS distant:', error));
    }

    return new Promise((resolve) => {
        let done = false;
        const finish = () => {
            if (done) return;
            done = true;
            // L'audio distant est terminé : on coupe immédiatement le lipsync
            // (souvent une utterance muette encore en cours) et la synthèse.
            stopActiveLipsync('fin audio TTS');
            try { window.speechSynthesis.cancel(); } catch (error) { /* ignore */ }
            demoMuteBrowserVoice = false;
            URL.revokeObjectURL(url);
            resolve();
        };
        audio.onended = finish;
        audio.onerror = finish;
        audio.play().catch((error) => {
            console.error('❌ Lecture audio TTS distant:', error);
            finish();
        });
        setTimeout(finish, Math.max(8000, text.length * 120)); // sécurité
    });
}

// Gemini TTS : audio PCM16 → WAV lisible par le navigateur.
function pcm16ToWav(base64, sampleRate = 24000) {
    const raw = atob(base64);
    const pcm = new Uint8Array(raw.length);
    for (let i = 0; i < raw.length; i += 1) pcm[i] = raw.charCodeAt(i);
    const buffer = new ArrayBuffer(44 + pcm.length);
    const view = new DataView(buffer);
    const write = (offset, str) => {
        for (let i = 0; i < str.length; i += 1) view.setUint8(offset + i, str.charCodeAt(i));
    };
    write(0, 'RIFF');
    view.setUint32(4, 36 + pcm.length, true);
    write(8, 'WAVE');
    write(12, 'fmt ');
    view.setUint32(16, 16, true);
    view.setUint16(20, 1, true);          // PCM
    view.setUint16(22, 1, true);          // mono
    view.setUint32(24, sampleRate, true);
    view.setUint32(28, sampleRate * 2, true);
    view.setUint16(32, 2, true);          // block align
    view.setUint16(34, 16, true);         // bits per sample
    write(36, 'data');
    view.setUint32(40, pcm.length, true);
    new Uint8Array(buffer).set(pcm, 44);
    return new Blob([buffer], { type: 'audio/wav' });
}

function getGeminiVoice() {
    return document.getElementById('cfg-gemini-tts-voice')?.value
        || localStorage.getItem('geminiTTSVoice')
        || localStorage.getItem('geminiVoice')
        || 'Kore';
}

async function speakWithGemini(text, options = {}) {
    const key = options.key || resolveDemoApiKey();
    if (!key) throw new Error('Clé Gemini manquante (onglet IA & Voix).');
    const voiceName = options.voiceName || getGeminiVoice();
    const model = options.model || GEMINI_TTS_MODEL;
    localStorage.setItem('geminiVoice', voiceName);
    localStorage.setItem('geminiTTSVoice', voiceName);

    const url = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent?key=${encodeURIComponent(key)}`;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 20000);
    let response;
    try {
        response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text }] }],
                generationConfig: {
                    responseModalities: ['AUDIO'],
                    speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName } } }
                }
            }),
            signal: controller.signal
        });
    } finally {
        clearTimeout(timeoutId);
    }
    if (!response.ok) {
        const error = new Error(`Gemini TTS HTTP ${response.status}`);
        error.status = response.status;
        throw error;
    }

    const data = await response.json();
    const inline = data?.candidates?.[0]?.content?.parts?.find((p) => p.inlineData?.data)?.inlineData;
    if (!inline) throw new Error('Gemini TTS: aucun audio retourné');
    const sampleRate = Number((inline.mimeType || '').match(/rate=(\d+)/)?.[1]) || 24000;
    console.log('🎙️ Gemini TTS:', model, voiceName, inline.mimeType, sampleRate);
    return playRemoteTtsAudio(pcm16ToWav(inline.data, sampleRate), text);
}

// Cascade TTS : un 429/503 sur un modèle ne condamne plus toute la session.
// Retourne true si un audio premium a été joué, false sinon.
async function speakWithGeminiCascade(text, key, voiceName) {
    const ready = GEMINI_TTS_MODELS.filter((model) => (ttsModelCooldownUntil.get(model) || 0) <= Date.now());
    const cooling = GEMINI_TTS_MODELS.filter((model) => !ready.includes(model));
    for (const model of [...ready, ...cooling]) {
        try {
            await speakWithGemini(text, { key, voiceName, model });
            ttsModelCooldownUntil.delete(model);
            return true;
        } catch (error) {
            ttsModelCooldownUntil.set(model, Date.now() + TTS_MODEL_COOLDOWN_MS);
            console.warn(`⚠️ TTS ${model} indisponible (${error.status || error.name || 'erreur'}) — modèle suivant...`);
        }
    }
    return false;
}

const FR_ABBREVIATIONS_RE = /(?:^|[\s(«"'])(?:M|Mme|Mmes|Mlle|Mlles|Dr|Prof|Pr|Sr|St|Ste|Mgr|Me|etc|cf|ex|env|av|apr|p|pp|n°|no|vol|fig|art|ch|chap|al|éd|J\.-C)\.\s*$/i;

function splitFrenchSentences(text) {
    const clean = String(text || '').replace(/\s+/g, ' ').trim();
    if (!clean) return [];
    const rawParts = [];
    let start = 0;
    for (let i = 0; i < clean.length; i += 1) {
        const ch = clean[i];
        if (ch !== '.' && ch !== '!' && ch !== '?' && ch !== '…') continue;
        // Points de suspension (...) : avancer jusqu'au dernier point
        if (ch === '.' && clean[i + 1] === '.') continue;
        // Nombres décimaux (ex: 3.14)
        if (ch === '.' && i > 0 && /\d/.test(clean[i - 1]) && /\d/.test(clean[i + 1] || '')) continue;
        // Initiale ou sigle interne (ex: J.-C., U.E.)
        if (ch === '.' && clean[i + 1] === '-') continue;
        const nextChar = clean[i + 1] || '';
        if (nextChar && !/[\s»"')\]…]/.test(nextChar)) continue;
        // Vérifier abréviation française (uniquement pour '.')
        const candidate = clean.slice(start, i + 1);
        if (ch === '.' && FR_ABBREVIATIONS_RE.test(candidate)) continue;
        // Attendre éventuellement la fermeture de guillemet/parenthèse avant de couper
        let end = i + 1;
        while (end < clean.length && /[»"')\]…]/.test(clean[end])) end += 1;
        if (end < clean.length && !/\s/.test(clean[end])) continue;
        const piece = clean.slice(start, end).trim();
        if (piece) rawParts.push(piece);
        start = end;
        while (start < clean.length && /\s/.test(clean[start])) start += 1;
        i = start - 1;
    }
    const tail = clean.slice(start).trim();
    if (tail) rawParts.push(tail);
    if (rawParts.length <= 1) return rawParts;

    // Fusionner les fragments trop courts (< 12 caractères) pour éviter des micro-chunks artificiels.
    const merged = [];
    for (const part of rawParts) {
        if (!merged.length) {
            merged.push(part);
        } else if (part.length < 12) {
            merged[merged.length - 1] = `${merged[merged.length - 1]} ${part}`;
        } else if (merged[merged.length - 1].length < 12) {
            merged[merged.length - 1] = `${merged[merged.length - 1]} ${part}`;
        } else {
            merged.push(part);
        }
    }
    return merged;
}

let activeLocalAudioStop = null;
let localTtsPlaybackSeq = 0;
let sharedLocalAudioCtx = null;

function stopLocalTtsPlayback() {
    localTtsPlaybackSeq += 1;
    if (typeof activeLocalAudioStop === 'function') {
        const stopFn = activeLocalAudioStop;
        activeLocalAudioStop = null;
        stopFn('interruption');
    }
}

function playLocalTtsAudio(blob, text) {
    if (typeof activeLocalAudioStop === 'function') {
        activeLocalAudioStop('nouvel audio local');
    }
    const url = URL.createObjectURL(blob);
    const audio = new Audio(url);
    audio.volume = 1.0;

    const vrm = currentVrm;
    const expressionManager = vrm?.expressionManager || null;
    const track = buildVisemeTrack(String(text || ''));
    const weights = { aa: 0, ih: 0, ou: 0, ee: 0, oh: 0, jawOpen: 0 };

    let analyser = null;
    let sourceNode = null;
    let timeDomainData = null;
    try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx && typeof audio.addEventListener === 'function') {
            if (!sharedLocalAudioCtx || sharedLocalAudioCtx.state === 'closed') {
                sharedLocalAudioCtx = new AudioCtx();
            }
            if (sharedLocalAudioCtx.state === 'suspended') {
                sharedLocalAudioCtx.resume().catch(() => {});
            }
            analyser = sharedLocalAudioCtx.createAnalyser();
            analyser.fftSize = 512;
            sourceNode = sharedLocalAudioCtx.createMediaElementSource(audio);
            sourceNode.connect(analyser);
            analyser.connect(sharedLocalAudioCtx.destination);
            timeDomainData = new Float32Array(analyser.fftSize);
        }
    } catch (e) {
        analyser = null;
        sourceNode = null;
        timeDomainData = null;
    }

    if (activeLipsyncStop) stopActiveLipsync('audio local');
    isIdle = false;

    return new Promise((resolve) => {
        let done = false;
        let frameId = 0;
        let safetyTimer = 0;
        let lastFrameAt = performance.now();

        const finish = () => {
            if (done) return;
            done = true;
            if (activeLocalAudioStop === finish) activeLocalAudioStop = null;
            cancelAnimationFrame(frameId);
            clearTimeout(safetyTimer);
            try { audio.pause(); } catch { /* noop */ }
            try { sourceNode?.disconnect(); } catch { /* noop */ }
            try { analyser?.disconnect(); } catch { /* noop */ }
            isIdle = true;
            if (vrm) resetMouthMorphs();
            URL.revokeObjectURL(url);
            resolve();
        };

        activeLocalAudioStop = finish;

        const tick = (now) => {
            if (done) return;
            const dt = Math.min(0.05, Math.max(0.001, (now - lastFrameAt) / 1000));
            lastFrameAt = now;

            if (expressionManager && track.entries.length) {
                const dur = Number.isFinite(audio.duration) && audio.duration > 0
                    ? audio.duration
                    : Math.max(0.6, track.entries.length / LIPSYNC_CHARS_PER_SECOND);
                const cur = Number.isFinite(audio.currentTime) ? audio.currentTime : 0;
                const playhead = Math.min(track.totalWeight, Math.max(0, (cur / dur) * track.totalWeight));

                let current = track.entries[0];
                let next = null;
                for (let idx = 0; idx < track.entries.length; idx += 1) {
                    const entry = track.entries[idx];
                    if (playhead >= entry.start) {
                        current = entry;
                        next = track.entries[idx + 1] || null;
                    } else {
                        break;
                    }
                }

                let rmsGate = audio.paused ? 0 : 1.0;
                if (analyser && timeDomainData) {
                    analyser.getFloatTimeDomainData(timeDomainData);
                    let sumSq = 0;
                    for (let k = 0; k < timeDomainData.length; k += 1) {
                        const s = timeDomainData[k];
                        sumSq += s * s;
                    }
                    const rms = Math.sqrt(sumSq / timeDomainData.length);
                    const threshold = Math.max(0, Math.min(0.25, Number.parseFloat(localStorage.getItem('lipThreshold') || '0.02') || 0.02));
                    rmsGate = rms <= threshold ? 0 : Math.min(1.25, (rms - threshold) / Math.max(0.05, 0.20 - threshold));
                }

                const targets = { aa: 0, ih: 0, ou: 0, ee: 0, oh: 0 };
                let jawTarget = 0;
                if (current && rmsGate > 0) {
                    const segDur = Math.max(0.01, current.weight);
                    const progress = Math.min(1, Math.max(0, (playhead - current.start) / segDur));
                    const envelope = Math.sin(progress * Math.PI) * rmsGate;
                    if (current.viseme) targets[current.viseme] = LIPSYNC_GAIN * envelope;
                    jawTarget = current.jaw * envelope;
                    if (next && next.viseme && progress > 0.7) {
                        const blend = ((progress - 0.7) / 0.3) * 0.5 * rmsGate;
                        targets[next.viseme] = Math.max(targets[next.viseme], LIPSYNC_GAIN * blend);
                    }
                }

                const applied = {};
                for (const channel of LIPSYNC_CHANNELS) {
                    weights[channel] = smoothValue(
                        weights[channel],
                        targets[channel],
                        dt,
                        LIPSYNC_CONFIG.attackSeconds,
                        LIPSYNC_CONFIG.releaseSeconds
                    );
                    applied[channel] = weights[channel];
                    expressionManager.setValue(channel, weights[channel]);
                }
                weights.jawOpen = smoothValue(
                    weights.jawOpen,
                    jawTarget,
                    dt,
                    LIPSYNC_CONFIG.attackSeconds,
                    LIPSYNC_CONFIG.releaseSeconds
                );
                applied.jawOpen = weights.jawOpen * LIPSYNC_JAW_WEIGHT;
                expressionManager.setValue('jawOpen', applied.jawOpen);
                applyMouthMorphs(applied);
            }

            frameId = requestAnimationFrame(tick);
        };

        audio.onended = finish;
        audio.onerror = finish;
        frameId = requestAnimationFrame(tick);
        audio.play().catch((error) => {
            console.error('❌ Lecture audio TTS local:', error);
            finish();
        });
        safetyTimer = setTimeout(finish, Math.max(12000, String(text || '').length * 180));
    });
}

async function fetchLocalTtsWav(chunkText, voice, lang, signal) {
    const response = await fetch(LOCAL_TTS_ENDPOINT, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Sarra-Client': 'sarra-desktop'
        },
        body: JSON.stringify({ text: chunkText, voice, lang }),
        signal: signal || AbortSignal.timeout(15000)
    });
    if (!response.ok) {
        let details = '';
        let code = '';
        try {
            const errJson = await response.json();
            code = errJson?.code || errJson?.error || '';
            details = errJson?.message || '';
        } catch { /* ignore */ }
        const error = new Error(`TTS local HTTP ${response.status}${code ? ` (${code})` : ''}${details ? `: ${details}` : ''}`);
        error.status = response.status;
        error.code = code;
        throw error;
    }
    return response.blob();
}

async function speakWithLocalTts(text, options = {}) {
    const cleanText = String(text || '').trim();
    if (!cleanText) return;
    stopLocalTtsPlayback();
    const mySeq = localTtsPlaybackSeq;
    const voice = options.voice || getLocalTtsVoice();
    const lang = options.lang || 'fr';
    const chunks = splitFrenchSentences(cleanText);
    if (!chunks.length) return;

    let nextPromise = fetchLocalTtsWav(chunks[0], voice, lang, options.signal);
    for (let i = 0; i < chunks.length; i += 1) {
        if (mySeq !== localTtsPlaybackSeq) break;
        const blob = await nextPromise;
        if (mySeq !== localTtsPlaybackSeq) break;
        // Pré-synthèse parallèle de la phrase suivante pendant la lecture de la courante.
        nextPromise = (i + 1 < chunks.length)
            ? fetchLocalTtsWav(chunks[i + 1], voice, lang, options.signal).catch((err) => ({ __prefetchError: err }))
            : null;
        if (blob?.__prefetchError) throw blob.__prefetchError;
        await playLocalTtsAudio(blob, chunks[i]);
    }
}

function speakWithBestVoice(text) {
    if (!text) return Promise.resolve();
    const provider = getTtsProvider();
    const fallbackNever = localStorage.getItem('ttsFallback') === 'never';

    if (provider === 'local-tts') {
        return speakWithLocalTts(text).catch((error) => {
            console.error('❌ TTS local indisponible (aucun repli cloud):', error);
            showToast(`❌ Voix locale hors-ligne indisponible : ${error?.message || 'vérifiez server.js et models/supertonic-3'}.`, true);
            if (fallbackNever) {
                console.error('❌ TTS local indisponible — repli navigateur désactivé (ttsFallback=never).');
                return undefined;
            }
            console.warn('⚠️ TTS local indisponible — repli voix navigateur.');
            return speakWithBrowserVoice(text);
        });
    }

    // Gemini TTS (si sélectionné manuellement) ; cascade puis repli navigateur.
    const geminiTTSKey = localStorage.getItem('geminiTTSKey')
        || localStorage.getItem('geminiKey')
        || localStorage.getItem('apiKey')
        || '';
    const voiceName = localStorage.getItem('geminiTTSVoice')
        || localStorage.getItem('geminiVoice')
        || 'Kore';

    if (provider === 'gemini-tts' || provider === 'gemini') {
        if (!geminiTTSKey) {
            if (fallbackNever) {
                console.error('❌ TTS premium: aucune clé Gemini — repli navigateur désactivé (ttsFallback=never).');
                return Promise.resolve();
            }
            console.warn('⚠️ TTS premium: aucune clé Gemini — repli navigateur.');
            return speakWithBrowserVoice(text);
        }
        // Proactivité : sauter la cascade si déjà en cooldown.
        if (Date.now() < premiumCooldownUntil) {
            if (fallbackNever) {
                console.error('❌ TTS en refroidissement — repli navigateur désactivé (ttsFallback=never).');
                return Promise.resolve();
            }
            console.log('⚡ TTS en refroidissement — voix navigateur directe.');
            if (!alertShown) {
                alertShown = true;
                showToast('⚠️ Voix premium temporairement indisponible — bascule sur la voix système.');
            }
            return speakWithBrowserVoice(text);
        }
        // Après 2 échecs consécutifs, désactiver le premium pour la session (état en mémoire/sessionStorage).
        if (premiumFailureCount >= 2) {
            if (fallbackNever) {
                console.error('❌ TTS premium désactivé (2 échecs) — repli navigateur désactivé (ttsFallback=never).');
                return Promise.resolve();
            }
            console.warn('⚠️ TTS premium désactivé pour la session (2 échecs consécutifs). Voix navigateur.');
            return speakWithBrowserVoice(text);
        }
        return speakWithGeminiCascade(text, geminiTTSKey, voiceName).then((premiumPlayed) => {
            if (premiumPlayed) {
                premiumFailureCount = 0;
                sessionStorage.setItem('sarraPremiumFailureCount', 0);
                premiumCooldownUntil = 0;
                sessionStorage.setItem('sarraPremiumCooldownUntil', 0);
                return undefined;
            }
            premiumFailureCount += 1;
            sessionStorage.setItem('sarraPremiumFailureCount', premiumFailureCount);
            premiumCooldownUntil = Date.now() + 30 * 60 * 1000; // 30 min cooldown
            sessionStorage.setItem('sarraPremiumCooldownUntil', premiumCooldownUntil);
            console.warn('⚠️ TTS failure — launching 30-minute premium cooldown.');
            // Préférence utilisateur : ttsFallback=never = silence plutôt que voix robotique (avant le compteur d'échecs).
            if (localStorage.getItem('ttsFallback') === 'never') {
                console.error('❌ TTS premium indisponible — repli navigateur désactivé (ttsFallback=never).');
                return undefined;
            }
            if (premiumFailureCount >= 2) {
                return speakWithBrowserVoice(text);
            }
            // Alerte une seule fois par session, même si la cascade échoue.
            showToast('⚠️ Voix premium momentanément indisponible — bascule sur la voix système.');
            console.warn('⚠️ TTS premium indisponible après cascade — repli voix navigateur (robotique).');
            return speakWithBrowserVoice(text);
        });
    }
    if (provider === 'elevenlabs') {
        return speakWithElevenLabs(text).catch((error) => {
            console.error('❌ ElevenLabs indisponible:', error);
            if (localStorage.getItem('ttsFallback') === 'never') {
                console.error('❌ ElevenLabs indisponible — repli navigateur désactivé (ttsFallback=never).');
                return undefined;
            }
            return speakWithBrowserVoice(text);
        });
    }
    return speakWithBrowserVoice(text);
}

function speakWithBrowserVoice(text) {
    window.speechSynthesis.cancel(); // Arrêter toute parole en cours

    const run = () => {
        demoPreferredVoice = pickBestFrenchVoice();
        if (demoPreferredVoice) {
            console.log("🎙️ Voix TTS sélectionnée:", demoPreferredVoice.name, demoPreferredVoice.lang);
        }
        if (typeof animateLipSyncFromText === 'function') {
            return animateLipSyncFromText(text); // parle + anime la bouche
        }
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'fr-FR';
        utterance.rate = 1.0;
        utterance.pitch = 1.0;
        if (demoPreferredVoice) utterance.voice = demoPreferredVoice;
        window.speechSynthesis.speak(utterance);
        return Promise.resolve();
    };

    // Les voix peuvent arriver après le premier appel : on attend l'événement.
    if (window.speechSynthesis.getVoices().length === 0) {
        return new Promise((resolve) => {
            let done = false;
            const finish = () => {
                if (done) return;
                done = true;
                window.speechSynthesis.removeEventListener('voiceschanged', finish);
                resolve(run());
            };
            window.speechSynthesis.addEventListener('voiceschanged', finish);
            setTimeout(finish, 1500);
        });
    }
    return run();
}

export async function askSarraDirect(message) {
    if (!currentVrm) {
        console.warn("⚠️ askSarraDirect: aucun avatar chargé.");
        return null;
    }
    if (chatInFlight) {
        console.warn("⚠️ askSarraDirect: une requête est déjà en cours, message ignoré.");
        return null;
    }

    // OVERLAY APP: cache démo — jamais pour une question écran.
    // Pas d'animation "thinking" : l'avatar reste en idle naturel.
    const wantsScreen = SCREEN_VISION_ENABLED() && SCREEN_QUERY_RE.test(message);
    const cached = wantsScreen ? null : getDemoCache(message);
    if (cached) {
        console.log('💾 Mode démo : réponse servie depuis le cache');
        chatInFlight = true;
        suspendMicForSpeech();
        setTimeout(async () => {
            try {
                await speakWithBestVoice(cached);
            } catch (error) {
                console.warn('⚠️ TTS cache:', error);
            } finally {
                resetFacialExpressions();
                chatInFlight = false;
                resumeMicAfterSpeech();
            }
        }, 250);
        return cached;
    }

    chatInFlight = true;
    // Micro suspendu dès le départ (réseau + parole) pour ne pas s'écouter.
    suspendMicForSpeech();

    try {
        const key = resolveDemoApiKey();
        if (!key) throw new Error("Clé API manquante");

        // Vision écran : capture à CHAQUE message.
        let imagePart = null;
        let visionFailed = false;

        if (SCREEN_VISION_ENABLED()) {
            try {
                imagePart = await captureScreen();
                if (imagePart) {
                    console.log('📸 Capture écran injectée dans le prompt');
                } else {
                    visionFailed = true;
                    console.warn('⚠️ Vision: capture échouée ou expirée (>90s). Aucune frame envoyée à Gemini.');
                }
            } catch (e) {
                visionFailed = true;
                console.warn('❌ Vision écran indisponible (erreur):', e.message);
            }
        }

        // Avis à l'utilisateur une seule fois par session, même si la capture échoue.
        if (visionFailed && !alertShown) {
            alertShown = true;
            showToast('⚠️ Capture d\'écran temporairement indisponible. Sarra ne voit plus ton écran.');
        }

// Optionnel mais recommandé : si tu as un système de toast/notification dans ton UI, déclenche-le ici :
// if (visionFailed) showUserToast("⚠️ Capture d'écran temporairement indisponible. Sarra ne voit plus ton écran.");

        // Modèles disponibles en priorité ; les saturés sont mis en repos 10 s.
        const models = getReasoningModels();
        console.log('🧠 Cascade modèles:', models.join(' → '));
        const perAttemptMs = Math.max(2500, Math.floor(CHAT_TIMEOUT_MS / models.length));
        let reply = '';
        let pendingAction = null;
        for (const model of models) {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), perAttemptMs);
            try {
                const result = await callGeminiDirect(model, key, message, controller.signal, imagePart);
                reply = result?.text || '';
                pendingAction = result?.functionCall || null;
                if (reply || pendingAction) {
                    modelCooldownUntil.delete(model);
                    console.log('✅ Modèle utilisé:', model, pendingAction ? `(tool: ${pendingAction.name})` : '');
                    break;
                }
            } catch (error) {
                if (!isRetryableDemoError(error)) throw error;
                // 503/429/404/timeout : on marque le modèle en repos et on passe
                // immédiatement au suivant, sans attendre la fin du cooldown.
                modelCooldownUntil.set(model, Date.now() + MODEL_COOLDOWN_MS);
                console.warn(`⚠️ Modèle ${model} indisponible (${error.status || error.name || 'erreur'}), repos ${MODEL_COOLDOWN_MS / 1000} s — bascule...`);
            } finally {
                clearTimeout(timeoutId);
            }
        }

        // Si Gemini n'a pas émis de functionCall, l'action n'a pas été exécutée.
        // Aucun contournement local : on ne devine jamais l'action de l'utilisateur.
        if (!pendingAction) {
            console.warn("⚠️ Aucun functionCall de Gemini — l'action n'a pas été exécutée.");
        }

        if (pendingAction) {
            const outcome = await executeSarraAction(pendingAction);
            reply = actionConfirmation(pendingAction, outcome);
        }

        if (!reply) throw new Error("Réponse Gemini vide");

        console.log("🗣️ Sarra répond (direct):", reply);
        addMemory(message, reply);
        await speakWithBestVoice(reply);
        // Une réponse d'action n'est jamais mise en cache : au replay, l'action
        // ne serait pas exécutée.
        if (!pendingAction) saveDemoCache(message, reply);
        resetFacialExpressions();
        return reply;

    } catch (error) {
        console.error("❌ Erreur Gemini direct:", error);
        resetFacialExpressions();
        await speakWithBestVoice("Les serveurs de Google sont saturés en ce moment. Je bascule sur un mode dégradé. Réessayez dans quelques secondes.");
        resetFacialExpressions();
        return null;
    } finally {
        chatInFlight = false;
        stopThinking();
        // Fin de la réponse (succès ou erreur) : on rend la parole au micro.
        resumeMicAfterSpeech();
    }
}

// Alias de compatibilité pour les appelants existants.
export const askSarra = askSarraDirect;

// ─────────────────────────────────────────────────────────────────────────────
// 🎤 Lipsync local (aucun appel API) : speechSynthesis + modules src/lipsync
// Visèmes du modèle VRM pilotés : aa, ih, ou, ee, oh (+ jawOpen).
// ─────────────────────────────────────────────────────────────────────────────
const LIPSYNC_CHANNELS = ['aa', 'ih', 'ou', 'ee', 'oh'];

// Table de correspondance voyelle → visème VRM + ouverture de mâchoire.
// `dur` est un poids relatif : la timeline est ensuite mise à l'échelle sur la
// durée réelle de la synthèse vocale.
const VISEME_TABLE = Object.freeze([
    { re: /[aàâä]/, viseme: 'aa', jaw: 1.0, dur: 1.0 },
    { re: /[oôö]/, viseme: 'oh', jaw: 0.85, dur: 1.0 },
    { re: /[uùûü]/, viseme: 'ou', jaw: 0.60, dur: 1.0 },
    { re: /[eéèêëœ]/, viseme: 'ee', jaw: 0.45, dur: 0.9 },
    { re: /[iîïy]/, viseme: 'ih', jaw: 0.35, dur: 0.9 }
]);

// Digraphes français : une seule forme de bouche, plus longue.
const VISEME_DIGRAPHS = Object.freeze([
    { pair: 'eau', viseme: 'oh', jaw: 0.85, dur: 1.6 },
    { pair: 'ou', viseme: 'ou', jaw: 0.60, dur: 1.4 },
    { pair: 'au', viseme: 'oh', jaw: 0.85, dur: 1.4 },
    { pair: 'an', viseme: 'aa', jaw: 0.70, dur: 1.3 },
    { pair: 'am', viseme: 'aa', jaw: 0.70, dur: 1.3 },
    { pair: 'en', viseme: 'aa', jaw: 0.65, dur: 1.3 },
    { pair: 'on', viseme: 'oh', jaw: 0.75, dur: 1.3 },
    { pair: 'om', viseme: 'oh', jaw: 0.75, dur: 1.3 },
    { pair: 'in', viseme: 'ih', jaw: 0.40, dur: 1.3 },
    { pair: 'ai', viseme: 'ee', jaw: 0.45, dur: 1.2 },
    { pair: 'oi', viseme: 'oh', jaw: 0.70, dur: 1.2 }
]);

// Débit mesuré dans Chrome (~10,5 caractères/seconde à rate = 1) : simple point
// de départ, la vitesse est ensuite recalée sur les frontières de mots réelles.
const LIPSYNC_CHARS_PER_SECOND = 10.5;

// Construit la timeline de visèmes à partir du texte réel (et non d'une démo).
// Chaque entrée porte son caractère source, ce qui permet la resynchronisation
// sur les événements `boundary` de la synthèse vocale.
function buildVisemeTrack(text) {
    const chars = Array.from(String(text));
    const entries = [];
    let totalWeight = 0;

    for (let i = 0; i < chars.length; i++) {
        const c = chars[i].toLocaleLowerCase('fr-FR');

        let viseme = null;
        let jaw = 0;
        let dur = 0.4;
        let skip = 0;

        if (/[.!?…]/.test(c)) dur = 2.4;
        else if (/[,;:]/.test(c)) dur = 1.3;
        else if (/\s|['']/.test(c)) dur = 0.5;
        else {
            // Digraphes (2-3 caractères incluant le caractère courant).
            const lookahead1 = chars[i + 1] ? chars[i + 1].toLocaleLowerCase('fr-FR') : '';
            const lookahead2 = chars[i + 2] ? chars[i + 2].toLocaleLowerCase('fr-FR') : '';
            const pair2 = c + lookahead1;
            const pair3 = pair2 + lookahead2;
            const digraph = VISEME_DIGRAPHS.find((d) =>
                d.pair === pair3 || d.pair === pair2
            );
            if (digraph) {
                viseme = digraph.viseme;
                jaw = digraph.jaw;
                dur = digraph.dur;
                skip = digraph.pair.length - 1;
            } else if (/[pb]/.test(c)) dur = 0.45;          // occlusion : bouche fermée
            else if (/[fv]/.test(c)) { viseme = 'oh'; jaw = 0.22; dur = 0.5; }
            else if (/[mn]/.test(c)) { viseme = null; jaw = 0; dur = 0.4; } // nasales : bouche fermée
            else if (/[sʃzj]/.test(c)) { viseme = 'ih'; jaw = 0.20; dur = 0.45; }
            else if (/[tdkglr]/.test(c)) dur = 0.4;
            else {
                const row = VISEME_TABLE.find((r) => r.re.test(c));
                if (row) { viseme = row.viseme; jaw = row.jaw; dur = row.dur; }
            }
        }

        entries.push({ char: i, viseme, jaw, start: totalWeight, weight: dur });
        totalWeight += dur;
        i += skip;
    }

    return { entries, totalWeight: totalWeight || 1 };
}

const LIPSYNC_CONFIG = sanitizeNaturalLipsyncConfig(DEFAULT_NATURAL_LIPSYNC_CONFIG);

// Gain global : garde la bouche dans une amplitude crédible.
const LIPSYNC_GAIN = 0.85;
// Le morph jawOpen s'ajoute aux visèmes : on le pondère pour ne pas béer.
const LIPSYNC_JAW_WEIGHT = 0.45;

// Certains VRM (dont sarra7.vrm) ne lient le preset 'jawOpen' qu'au maillage de
// la tête : les dents du bas ne suivent pas. On applique donc les mêmes poids
// directement sur chaque maillage qui possède le morph.
let mouthMorphMeshes = [];

function collectMouthMorphMeshes(vrm) {
    mouthMorphMeshes = [];
    const wanted = [...LIPSYNC_CHANNELS, 'jawOpen'];
    vrm.scene.traverse((obj) => {
        if (!obj.isMesh || !obj.morphTargetDictionary) return;
        const dict = obj.morphTargetDictionary;
        const indices = {};
        for (const name of wanted) {
            if (dict[name] !== undefined) indices[name] = dict[name];
        }
        if (Object.keys(indices).length) mouthMorphMeshes.push({ mesh: obj, indices });
    });
    console.log("🦷 Maillages du lipsync:", mouthMorphMeshes.map((entry) => entry.mesh.name).join(", "));
}

// Écrit les poids sur les morphs directs. On affecte (et non max) : sinon les
// dents gardent en mémoire leur valeur maximale et ne redescendent jamais.
// Si un mesh n'a pas de morph `ee` mais en a `ih`, on répartit le poids `ee` vers `ih`
// après avoir appliqué tous les autres poids.
function applyMouthMorphs(weights) {
    // OVERLAY APP: sensibilité générale et amplitude de mâchoire configurables.
    const lipSens = Number.parseFloat(localStorage.getItem('lipSensitivity') || '1');
    const lipJaw = Number.parseFloat(localStorage.getItem('lipJaw') || '1');
    const animateTeeth = localStorage.getItem('lipTeeth') !== 'false';
    for (const { mesh, indices } of mouthMorphMeshes) {
        if (!animateTeeth && /teeth|dent|gum/i.test(mesh.name || '')) continue;
        const influences = mesh.morphTargetInfluences;
        if (!influences) continue;

        // Appliquer tous les poids aux indices existants.
        for (const name in indices) {
            const multiplier = name === 'jawOpen' ? lipSens * lipJaw : lipSens;
            influences[indices[name]] = (weights[name] ?? 0) * multiplier;
        }

        // Fallback : mesh sans morph 'ee' mais possédant 'ih' → mapper `ee` vers `ih`.
        if (indices.ih !== undefined && indices.ee === undefined && weights.ee !== undefined) {
            influences[indices.ih] = Math.max(influences[indices.ih] ?? 0, (weights.ee ?? 0) * lipSens);
        }
    }
}

function resetMouthMorphs() {
    const zeros = { aa: 0, ih: 0, ou: 0, ee: 0, oh: 0, jawOpen: 0 };
    for (const channel of LIPSYNC_CHANNELS) currentVrm?.expressionManager?.setValue(channel, 0);
    currentVrm?.expressionManager?.setValue('jawOpen', 0);
    applyMouthMorphs(zeros);
}

// Parle `text` avec la voix du navigateur et anime la bouche pendant la phrase.
// La timeline de visèmes est construite depuis le texte, mise à l'échelle sur la
// durée réelle de la synthèse, et resynchronisée sur les événements `boundary`.
async function animateLipSyncFromText(text) {
    if (!currentVrm) {
        console.warn("⚠️ Lipsync: aucun avatar chargé.");
        return;
    }
    // Une seule animation de bouche à la fois : on annule la précédente.
    if (activeLipsyncStop) stopActiveLipsync('nouvelle phrase');
    isIdle = false;
    if (!('speechSynthesis' in window) || typeof SpeechSynthesisUtterance === 'undefined') {
        console.error("❌ speechSynthesis indisponible dans ce navigateur.");
        isIdle = true;
        return;
    }

    // Une seule phrase à la fois.
    window.speechSynthesis.cancel();

    const vrm = currentVrm;
    const expressionManager = vrm.expressionManager;
    const spoken = String(text);

    const utterance = new SpeechSynthesisUtterance(spoken);
    utterance.lang = 'fr-FR';
    // OVERLAY APP MODE DÉMO: voix française optimisée sélectionnée par speakWithBestVoice.
    if (demoPreferredVoice) utterance.voice = demoPreferredVoice;
    // ElevenLabs fournit l'audio : on garde la timeline de visèmes mais on coupe
    // la voix navigateur pour éviter une double prononciation.
    if (demoMuteBrowserVoice) utterance.volume = 0;
    utterance.pitch = 1.0;
    // OVERLAY APP: vitesse de parole réglée depuis le panneau de configuration.
    utterance.rate = Number.parseFloat(localStorage.getItem('lipSpeed') || '1');

    const track = buildVisemeTrack(spoken);
    // Durée estimée du texte, puis budget de sécurité (onend peut ne jamais
    // arriver sans voix installée ou en arrière-plan).
    const estimatedMs = (track.entries.length / LIPSYNC_CHARS_PER_SECOND) * 1000;
    const budgetMs = estimatedMs + 4000;

    return new Promise((resolve) => {
        const weights = { aa: 0, ih: 0, ou: 0, ee: 0, oh: 0, jawOpen: 0 };

        // La bouche ne démarre qu'au son : `onstart` peut arriver tard.
        let startedAt = null;
        let lastFrameAt = performance.now();
        let finished = false;
        let frameId = 0;
        let safetyTimer = 0;

        // Auto-calibrage : la vitesse (poids de timeline par seconde) est estimée
        // au départ, puis recalée à chaque frontière de mot observée. C'est ce qui
        // absorbe les écarts de débit entre la voix et l'estimation.
        let speed = track.totalWeight / Math.max(0.2, estimatedMs / 1000);
        let anchorWeight = 0;
        let anchorTime = 0;
        let playhead = 0;

        // Position (en unités de timeline) du caractère `charIndex`.
        const positionForChar = (charIndex) => {
            let w = 0;
            for (const entry of track.entries) {
                if (entry.char <= charIndex) w = entry.start;
                else break;
            }
            return w;
        };

        const finish = (reason) => {
            if (finished) return;
            finished = true;
            if (activeLipsyncStop === finish) activeLipsyncStop = null;
            cancelAnimationFrame(frameId);
            clearTimeout(safetyTimer);
            isIdle = true;
            resetMouthMorphs();
            console.log(`🎤 Lipsync terminé (${reason}).`);
            resolve();
        };

        // Permet à resetFacialExpressions()/stopActiveLipsync() d'arrêter la
        // boucle immédiatement (fin de l'audio TTS distant, erreur, reset...).
        activeLipsyncStop = finish;

        const tick = (now) => {
            if (finished) return;

            const dt = Math.min(0.1, Math.max(0, (now - lastFrameAt) / 1000));
            lastFrameAt = now;

            // Hors phase de parole (attente du son), on garde la bouche fermée.
            if (startedAt == null) {
                frameId = requestAnimationFrame(tick);
                return;
            }

            const elapsed = (now - startedAt) / 1000;
            playhead = Math.min(track.totalWeight, anchorWeight + (elapsed - anchorTime) * speed);

            // Entrée courante de la timeline (celle qui contient le playhead).
            let current = null;
            let next = null;
            for (let i = 0; i < track.entries.length; i++) {
                const entry = track.entries[i];
                if (playhead >= entry.start) {
                    current = entry;
                    next = track.entries[i + 1] || null;
                } else break;
            }

            const targets = { aa: 0, ih: 0, ou: 0, ee: 0, oh: 0 };
            let jawTarget = 0;

            if (current) {
                const span = Math.max(0.001, current.weight);
                const progress = Math.min(1, Math.max(0, (playhead - current.start) / span));

                // Enveloppe douce : montée rapide, descente en fin de segment.
                const envelope = Math.sin(Math.PI * Math.min(1, progress * 0.9 + 0.05));

                if (current.viseme) targets[current.viseme] = LIPSYNC_GAIN * envelope;
                jawTarget = current.jaw * envelope;

                // Anticipation du visème suivant sur la fin du segment.
                if (next && next.viseme && progress > 0.7) {
                    const blend = ((progress - 0.7) / 0.3) * 0.5;
                    targets[next.viseme] = Math.max(targets[next.viseme], LIPSYNC_GAIN * blend);
                }
            }

            // Lissage attaque/relâchement puis application sur le VRM.
            const applied = {};
            for (const channel of LIPSYNC_CHANNELS) {
                weights[channel] = smoothValue(
                    weights[channel],
                    targets[channel],
                    dt,
                    LIPSYNC_CONFIG.attackSeconds,
                    LIPSYNC_CONFIG.releaseSeconds
                );
                applied[channel] = weights[channel];
                expressionManager.setValue(channel, weights[channel]);
            }

            weights.jawOpen = smoothValue(
                weights.jawOpen,
                jawTarget,
                dt,
                LIPSYNC_CONFIG.attackSeconds,
                LIPSYNC_CONFIG.releaseSeconds
            );
            applied.jawOpen = weights.jawOpen * LIPSYNC_JAW_WEIGHT;
            expressionManager.setValue('jawOpen', applied.jawOpen);

            // Dents et autres maillages non couverts par les presets du VRM.
            applyMouthMorphs(applied);

            frameId = requestAnimationFrame(tick);
        };

        utterance.onstart = () => {
            startedAt = performance.now();
            lastFrameAt = startedAt;
            anchorWeight = 0;
            anchorTime = 0;
            playhead = 0;
            console.log(`🗣️ Synthèse vocale démarrée (${track.entries.length} segments).`);
        };

        // Chaque frontière de mot recale la timeline : on en déduit la vitesse
        // réelle de la voix, ce qui supprime la dérive quand elle parle plus vite
        // ou plus lentement que l'estimation.
        utterance.onboundary = (event) => {
            if (startedAt == null || !Number.isFinite(event.charIndex)) return;
            const elapsed = (performance.now() - startedAt) / 1000;
            const weight = positionForChar(event.charIndex);
            // On ignore la première frontière (poids 0) et les mesures trop tôt.
            if (weight <= 0.5 || elapsed < 0.15) return;

            speed = Math.max(0.5, Math.min(60, weight / elapsed));
            anchorWeight = weight;
            anchorTime = elapsed;
            playhead = weight;
        };

        utterance.onend = () => {
            isIdle = true; // Remise à vrai à la fin de la parole
            finish("fin de la parole");
        };
        utterance.onerror = (event) => {
            isIdle = true; // Remise à vrai en cas d'erreur
            console.error("❌ Erreur de synthèse vocale:", event.error);
            finish("erreur de synthèse");
        };

        safetyTimer = setTimeout(() => finish("timeout de sécurité"), budgetMs);
        window.speechSynthesis.speak(utterance);
        frameId = requestAnimationFrame(tick);
    });
}

// ============================================================================
// OVERLAY APP : fonctionnalités bureau (ajouts uniquement — pas de modification
// du lipsync, de l'animation idle ou du rendu 3D existants)
// ============================================================================

// OVERLAY APP: mémoire persistante des échanges, limitée par le réglage du panneau.
let avatarMemory = (() => {
    try {
        const saved = JSON.parse(localStorage.getItem('avatarMemory') || '[]');
        return Array.isArray(saved) ? saved : [];
    } catch {
        return [];
    }
})();

function addMemory(userText, replyText) {
    if (localStorage.getItem('memoryEnabled') === 'false') return;
    const avatarLabel = localStorage.getItem('avatarName')?.trim() || 'Sarra';
    const entry = `Utilisateur: "${String(userText).slice(0, 60)}" → ${avatarLabel}: "${String(replyText).slice(0, 60)}"`;
    avatarMemory.push(entry);
    const parsedMax = Number.parseInt(localStorage.getItem('memorySize') || '10', 10);
    const maxMemory = Math.max(0, Math.min(10, Number.isFinite(parsedMax) ? parsedMax : 10));
    avatarMemory = maxMemory ? avatarMemory.slice(-maxMemory) : [];
    localStorage.setItem('avatarMemory', JSON.stringify(avatarMemory));
    updateMemoryPreview();
}

function getMemoryContext() {
    if (localStorage.getItem('memoryEnabled') === 'false') return [];
    return avatarMemory.slice();
}

// ---------- Onboarding : premier démarrage ----------
function isConfigured() {
    if (localStorage.getItem('onboardingSkipped') === 'true') return true;
    return !!localStorage.getItem('apiKey')
        && !!localStorage.getItem('userName')
        && !!localStorage.getItem('avatarName');
}

let refreshClickThroughHandler = null;
function refreshClickThroughState() {
    refreshClickThroughHandler?.();
}

function showOnboarding() {
    const modal = document.getElementById('onboarding-modal');
    if (modal) modal.style.display = 'flex';
    refreshClickThroughState();
}

function hideOnboarding() {
    const modal = document.getElementById('onboarding-modal');
    if (modal) modal.style.display = 'none';
    refreshClickThroughState();
}

function saveOnboarding() {
    const apiKey = document.getElementById('apiKey')?.value.trim() || '';
    const userName = document.getElementById('userName')?.value.trim() || '';
    const avatarName = document.getElementById('avatarName')?.value.trim() || 'Sarra';
    const obStatus = document.getElementById('ob-status');
    if (!apiKey || !userName) {
        if (obStatus) {
            obStatus.textContent = 'Renseignez votre prénom et votre clé API (ou cliquez sur « Plus tard »).';
        }
        return;
    }
    if (obStatus) obStatus.textContent = '';
    localStorage.setItem('apiKey', apiKey);
    if (!localStorage.getItem('geminiKey')) localStorage.setItem('geminiKey', apiKey);
    if (!localStorage.getItem('geminiTTSKey')) localStorage.setItem('geminiTTSKey', apiKey);
    localStorage.setItem('userName', userName);
    localStorage.setItem('avatarName', avatarName);
    localStorage.removeItem('onboardingSkipped');
    hideOnboarding();
    const sceneDiv = document.getElementById('scene');
    if (sceneDiv) sceneDiv.style.display = 'block';
}

function skipOnboarding() {
    const userName = document.getElementById('userName')?.value.trim() || '';
    const avatarName = document.getElementById('avatarName')?.value.trim() || 'Sarra';
    if (userName) localStorage.setItem('userName', userName);
    if (avatarName) localStorage.setItem('avatarName', avatarName);
    localStorage.setItem('onboardingSkipped', 'true');
    hideOnboarding();
    const sceneDiv = document.getElementById('scene');
    if (sceneDiv) sceneDiv.style.display = 'block';
}

// ---------- Panneau de configuration (toggle via Ctrl+Shift+K / IPC) ----------
function toggleConfigPanel(forceOpen) {
    const panel = document.getElementById('config-panel');
    if (!panel) return;
    const isCurrentlyOpen = panel.classList.contains('is-open') || getComputedStyle(panel).display !== 'none';
    const show = typeof forceOpen === 'boolean' ? forceOpen : !isCurrentlyOpen;
    panel.style.display = '';
    panel.classList.toggle('is-open', show);
    if (show) {
        loadConfigValuesV2();
        applySavedPanelState();
        populateVoiceList();
        updateMemoryPreview();
        updateAvatarBoundsInfo();
    }
    refreshClickThroughState();
}

// ============================================================================
// PANNEAU PROFESSIONNEL v2 — presets, fallback et persistance position avatar
// ============================================================================
const DIRECTIVE_PRESETS = Object.freeze({
    friendly: "Tu es Sarra, une assistante bienveillante. Tu parles français avec un ton chaleureux, simple et naturel. Tu tutoiens ton interlocuteur et restes concise à l'oral.",
    professional: "Tu es Sarra, assistante stratégique senior. Français exclusif, ton calme et direct. Un fait concret vaut mieux qu'un adjectif. Maximum deux phrases à l'oral.",
    pedagogical: "Tu es Sarra, tutrice pédagogique. Français clair, explications courtes et concrètes, une seule idée par phrase. Tu vérifies la compréhension avec une question brève.",
    humorous: "Tu es Sarra, assistante décontractée et humoristique. Français naturel, ton léger et bienveillant, sans jamais détourner la réponse de la question posée."
});

function applyFallbackSetting() {
    const enabled = document.getElementById('cfg-auto-fallback')?.checked ?? true;
    GEMINI_FALLBACK_MODELS_DEMO.length = 0;
    if (enabled) GEMINI_FALLBACK_MODELS_DEMO.push(...GEMINI_MODEL_ORDER.slice(1));
}

function applySavedPosition() {
    if (localStorage.getItem('sarra_window_state')) {
        restoreAvatarState();
        return;
    }
    const container = document.getElementById('avatar-container');
    if (!container) return;
    const width = clamp(Number(localStorage.getItem('avatarWidth')) || 400, 200, 1920);
    const height = clamp(Number(localStorage.getItem('avatarHeight')) || 400, 200, 1080);
    const savedX = localStorage.getItem('avatarPosX');
    const savedY = localStorage.getItem('avatarPosY');
    const x = savedX === null ? 100 : Number(savedX);
    const y = savedY === null ? 100 : Number(savedY);
    container.style.width = `${width}px`;
    container.style.height = `${height}px`;
    container.style.left = `${Number.isFinite(x) ? x : 100}px`;
    container.style.top = `${Number.isFinite(y) ? y : 100}px`;
}

// Drag & resize persist handled in initAdvancedInteraction

// OVERLAY APP CORRECTION: Microphone via Web Speech API native
// Mode "push-to-talk permanent" : un clic active l'écoute continue, un second coupe.
function initMic() {
  // OVERLAY APP CORRECTION: Détection robuste de la Web Speech API
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    console.error("❌ Web Speech API non disponible dans ce contexte Electron");
    console.error("→ Solution: utiliser un input texte ou un micro externe");
    const micBtn = document.getElementById('mic-btn');
    if (micBtn) {
      micBtn.style.opacity = '0.3';
      micBtn.title = 'Micro désactivé';
      micBtn.style.pointerEvents = 'none';
    }
    return;
  }

  const micBtn = document.getElementById('mic-btn');
  if (!micBtn) return;

  micButtonEl = micBtn;
  setMicButtonListening(false);

  const recognition = new SpeechRecognition();
  micRecognition = recognition;
  recognition.lang = 'fr-FR';
  recognition.continuous = false; // Chrome coupe après chaque phrase : on relance nous-mêmes.
  recognition.interimResults = false;

  let isSubmittingRecognition = false;
  let lastSubmittedTranscript = '';
  let lastSubmittedAt = 0;

  micBtn.addEventListener('click', () => {
    if (micEnabled) {
      // OFF : coupe l'écoute et empêche toute relance dans onend.
      micEnabled = false;
      clearTimeout(micRestartTimer);
      try { recognition.abort(); } catch (error) { /* déjà arrêté */ }
      setMicButtonListening(false);
      console.log('🔴 Mode Continu Désactivé');
      return;
    }

    // ON : active l'écoute continue.
    micEnabled = true;
    setMicButtonListening(true);
    console.log('🟢 Mode Continu Activé');
    if (!micSuspended && !recognitionActive) {
      try {
        recognition.start();
      } catch (error) {
        console.warn('⚠️ Démarrage micro:', error.message);
        scheduleMicRestart(400);
      }
    }
  });

  recognition.onstart = () => {
    recognitionActive = true;
    if (!micEnabled) {
      // Clic OFF arrivé avant le démarrage effectif.
      try { recognition.abort(); } catch (error) { /* ignore */ }
      setMicButtonListening(false);
      return;
    }
    setMicButtonListening(true);
    console.log('🎤 Écoute active (mode continu)');
  };

  recognition.onresult = async (event) => {
    // OVERLAY APP: ne traiter que les nouveaux résultats finaux, jamais les intermédiaires/répétés.
    for (let index = event.resultIndex; index < event.results.length; index += 1) {
      const result = event.results[index];
      if (!result.isFinal) continue;

      const text = result[0]?.transcript?.trim();
      if (!text) continue;
      const normalizedText = text.toLocaleLowerCase('fr-FR');
      const now = Date.now();
      if (isSubmittingRecognition ||
          (normalizedText === lastSubmittedTranscript && now - lastSubmittedAt < 5000)) {
        console.warn('⚠️ Résultat vocal répété ignoré:', text);
        continue;
      }

      lastSubmittedTranscript = normalizedText;
      lastSubmittedAt = now;
      isSubmittingRecognition = true;
      console.log("🗣️ Texte reconnu:", text);
      try {
        if (typeof askSarraDirect === 'function') await askSarraDirect(text);
      } finally {
        isSubmittingRecognition = false;
      }
    }
  };

  recognition.onend = () => {
    recognitionActive = false;
    // Reprise automatique : seulement si l'utilisateur n'a pas coupé
    // et que Sarra ne parle pas (anti-écho).
    if (micEnabled && !micSuspended) {
      scheduleMicRestart(300);
    } else {
      setMicButtonListening(micEnabled);
    }
  };

  recognition.onerror = (event) => {
    recognitionActive = false;
    if (event.error === 'aborted') return; // arrêt volontaire : rien à signaler

    const fatal = event.error === 'not-allowed' || event.error === 'service-not-allowed';
    if (fatal) {
      micEnabled = false;
      setMicButtonListening(false);
      console.error('❌ Micro refusé:', event.error);
      return;
    }

    if (event.error === 'no-speech') {
      console.log('🎤 Silence détecté — reprise de l\'écoute');
    } else {
      console.warn('⚠️ Micro:', event.error);
    }
    if (micEnabled && !micSuspended) scheduleMicRestart(700);
  };
}

// OVERLAY APP: Persistance de l'état de la fenêtre
function updateAvatarBoundsInfo() {
  const el = document.getElementById('bounds-info');
  const container = document.getElementById('avatar-container');
  if (!el || !container) return;
  const w = Math.round(container.offsetWidth || Number.parseFloat(container.style.width) || 400);
  const h = Math.round(container.offsetHeight || Number.parseFloat(container.style.height) || 400);
  const x = Math.round(container.offsetLeft || Number.parseFloat(container.style.left) || 0);
  const y = Math.round(container.offsetTop || Number.parseFloat(container.style.top) || 0);
  el.textContent = `Avatar : ${w} × ${h} px (${x}, ${y})`;
}

function saveAvatarState() {
  const container = document.getElementById('avatar-container');
  if (!container) return;
  const state = {
    x: container.offsetLeft,
    y: container.offsetTop,
    w: container.offsetWidth,
    h: container.offsetHeight
  };
  localStorage.setItem('sarra_window_state', JSON.stringify(state));
  updateAvatarBoundsInfo();
}

function restoreAvatarState() {
  const saved = localStorage.getItem('sarra_window_state');
  const container = document.getElementById('avatar-container');
  if (saved && container) {
    const state = JSON.parse(saved);
    container.style.left = `${state.x}px`;
    container.style.top = `${state.y}px`;
    container.style.width = `${state.w}px`;
    container.style.height = `${state.h}px`;
  }
  updateAvatarBoundsInfo();
}

// OVERLAY APP: Zonage souris Drag (haut) / Resize (bas)
function initAdvancedInteraction() {
  const container = document.getElementById('avatar-container');
  if (!container) return;

  let isDragging = false, isResizing = false;
  let startX, startY, initialX, initialY, initialW, initialH;

  // Mise à jour du curseur au survol
  container.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    const relativeY = e.clientY - rect.top;
    container.style.cursor = (relativeY < rect.height / 2) ? 'grab' : 'nwse-resize';
  });

  container.addEventListener('mousedown', (e) => {
    if (e.target.closest('#mic-btn, #cfg-open-btn')) return; // Ignore si clic sur micro ou réglages
    const rect = container.getBoundingClientRect();
    const relativeY = e.clientY - rect.top;

    if (relativeY < rect.height / 2) {
      // ZONE DRAG (Haut)
      isDragging = true;
      startX = e.clientX; startY = e.clientY;
      initialX = container.offsetLeft; initialY = container.offsetTop;
      container.style.cursor = 'grabbing';
    } else {
      // ZONE RESIZE (Bas) - uniquement si proche du coin inférieur droit
      const relativeX = e.clientX - rect.left;
      if (relativeX > rect.width * 0.7) {
        isResizing = true;
        startX = e.clientX; startY = e.clientY;
        initialW = rect.width; initialH = rect.height;
      }
    }
    e.preventDefault();
  });

  document.addEventListener('mousemove', (e) => {
    if (isDragging) {
      container.style.left = `${initialX + (e.clientX - startX)}px`;
      container.style.top = `${initialY + (e.clientY - startY)}px`;
    } else if (isResizing) {
      const newW = Math.max(200, initialW + (e.clientX - startX));
      const newH = Math.max(200, initialH + (e.clientY - startY));
      container.style.width = `${newW}px`;
      container.style.height = `${newH}px`;
    }
  });

  document.addEventListener('mouseup', () => {
    if (isDragging || isResizing) {
      saveAvatarState(); // Sauvegarde à la fin de l'action
      isDragging = false; isResizing = false;
      container.style.cursor = 'grab';
    }
  });
}

// ---------- État géométrique du panneau (déplacement souris + redimensionnement) ----------
const PANEL_STATE_KEY = 'sarra_panel_state';
const PANEL_MIN_WIDTH = 380;
const PANEL_MIN_HEIGHT = 360;
const PANEL_DEFAULT_WIDTH = 640;
const PANEL_DEFAULT_HEIGHT = 760;
let isPanelInteracting = false;

function readSavedPanelState() {
    try {
        const raw = localStorage.getItem(PANEL_STATE_KEY);
        if (!raw) return null;
        const parsed = JSON.parse(raw);
        return parsed && typeof parsed === 'object' ? parsed : null;
    } catch {
        return null;
    }
}

function savePanelState(panel, extra = {}) {
    if (!panel) return;
    const prev = readSavedPanelState() || {};
    const rect = panel.getBoundingClientRect();
    const isCollapsed = panel.classList.contains('is-collapsed');
    const state = {
        x: Math.round(Number.isFinite(Number.parseFloat(panel.style.left)) ? Number.parseFloat(panel.style.left) : rect.left),
        y: Math.round(Number.isFinite(Number.parseFloat(panel.style.top)) ? Number.parseFloat(panel.style.top) : rect.top),
        w: Math.round(Number.isFinite(Number.parseFloat(panel.style.width)) ? Number.parseFloat(panel.style.width) : (prev.w || rect.width || PANEL_DEFAULT_WIDTH)),
        h: isCollapsed
            ? (prev.h || PANEL_DEFAULT_HEIGHT)
            : Math.round(Number.isFinite(Number.parseFloat(panel.style.height)) ? Number.parseFloat(panel.style.height) : (prev.h || rect.height || PANEL_DEFAULT_HEIGHT)),
        collapsed: isCollapsed,
        ...extra
    };
    localStorage.setItem(PANEL_STATE_KEY, JSON.stringify(state));
}

function updatePanelSizeHud(panel, width, height) {
    const hud = document.getElementById('panel-size-hud');
    if (hud) hud.textContent = `${Math.round(width)} × ${Math.round(height)}`;
    if (panel) panel.dataset.sizeLabel = `${Math.round(width)}×${Math.round(height)}`;
}

function clampPanelToViewport() {
    const panel = document.getElementById('config-panel');
    if (!panel || !panel.classList.contains('is-open')) return;
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const margin = 8;
    const rect = panel.getBoundingClientRect();
    if (!rect.width && !rect.height) return;

    const collapsed = panel.classList.contains('is-collapsed');
    const maxW = Math.max(PANEL_MIN_WIDTH, vw - margin * 2);
    const maxH = Math.max(PANEL_MIN_HEIGHT, vh - margin * 2);
    const curW = Number.parseFloat(panel.style.width) || rect.width || PANEL_DEFAULT_WIDTH;
    const curH = Number.parseFloat(panel.style.height) || rect.height || PANEL_DEFAULT_HEIGHT;
    const nextW = clamp(curW, Math.min(PANEL_MIN_WIDTH, maxW), maxW);

    if (panel.style.width || rect.width > maxW) panel.style.width = `${Math.round(nextW)}px`;

    if (!collapsed) {
        const nextH = clamp(curH, Math.min(PANEL_MIN_HEIGHT, maxH), maxH);
        if (panel.style.height || rect.height > maxH) panel.style.height = `${Math.round(nextH)}px`;
        updatePanelSizeHud(panel, nextW, nextH);
    }

    if (panel.style.left !== '' && panel.style.left !== 'auto') {
        const updatedRect = panel.getBoundingClientRect();
        const curL = Number.parseFloat(panel.style.left);
        const curT = Number.parseFloat(panel.style.top);
        const maxL = Math.max(margin, vw - updatedRect.width - margin);
        const maxT = Math.max(margin, vh - updatedRect.height - margin);
        panel.style.left = `${Math.round(clamp(Number.isFinite(curL) ? curL : updatedRect.left, margin, maxL))}px`;
        panel.style.top = `${Math.round(clamp(Number.isFinite(curT) ? curT : updatedRect.top, margin, maxT))}px`;
        panel.style.right = 'auto';
        panel.style.bottom = 'auto';
    }
}

function applySavedPanelState() {
    const panel = document.getElementById('config-panel');
    if (!panel) return;
    const saved = readSavedPanelState();
    if (!saved) {
        panel.classList.remove('is-collapsed');
        panel.style.left = '';
        panel.style.top = '';
        panel.style.right = '';
        panel.style.bottom = '';
        panel.style.width = '';
        panel.style.height = '';
        const r = panel.getBoundingClientRect();
        updatePanelSizeHud(panel, r.width || PANEL_DEFAULT_WIDTH, r.height || PANEL_DEFAULT_HEIGHT);
        clampPanelToViewport();
        return;
    }
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const margin = 8;
    const maxW = Math.max(PANEL_MIN_WIDTH, vw - margin * 2);
    const maxH = Math.max(PANEL_MIN_HEIGHT, vh - margin * 2);
    const w = clamp(Number(saved.w) || PANEL_DEFAULT_WIDTH, Math.min(PANEL_MIN_WIDTH, maxW), maxW);
    const h = clamp(Number(saved.h) || PANEL_DEFAULT_HEIGHT, Math.min(PANEL_MIN_HEIGHT, maxH), maxH);
    const collapsed = Boolean(saved.collapsed);

    panel.style.width = `${Math.round(w)}px`;
    panel.style.height = `${Math.round(h)}px`;
    panel.classList.toggle('is-collapsed', collapsed);
    panel.style.right = 'auto';
    panel.style.bottom = 'auto';

    const effectiveH = collapsed ? 54 : h;
    const maxL = Math.max(margin, vw - w - margin);
    const maxT = Math.max(margin, vh - effectiveH - margin);
    const x = clamp(Number.isFinite(Number(saved.x)) ? Number(saved.x) : (vw - w - 24), margin, maxL);
    const y = clamp(Number.isFinite(Number(saved.y)) ? Number(saved.y) : 24, margin, maxT);
    panel.style.left = `${Math.round(x)}px`;
    panel.style.top = `${Math.round(y)}px`;
    updatePanelSizeHud(panel, w, h);
}

function resetPanelLayout() {
    const panel = document.getElementById('config-panel');
    if (!panel) return;
    localStorage.removeItem(PANEL_STATE_KEY);
    panel.classList.remove('is-collapsed');
    panel.style.left = '';
    panel.style.top = '';
    panel.style.right = '';
    panel.style.bottom = '';
    panel.style.width = '';
    panel.style.height = '';
    const minBtn = document.getElementById('cfg-minimize');
    if (minBtn) minBtn.textContent = '—';
    clampPanelToViewport();
}

function initConfigPanelDragAndResize(setClickThrough) {
    const panel = document.getElementById('config-panel');
    if (!panel) return;
    const header = panel.querySelector('.panel-header-drag');
    let mode = null; // 'drag' | 'resize'
    let resizeDir = '';
    let activePointerId = null;
    let startX = 0;
    let startY = 0;
    let startLeft = 0;
    let startTop = 0;
    let startWidth = 0;
    let startHeight = 0;

    const beginInteraction = (event, nextMode, dir = '') => {
        const rect = panel.getBoundingClientRect();
        panel.style.right = 'auto';
        panel.style.bottom = 'auto';
        panel.style.left = `${Math.round(rect.left)}px`;
        panel.style.top = `${Math.round(rect.top)}px`;
        if (!panel.classList.contains('is-collapsed')) {
            panel.style.width = `${Math.round(rect.width)}px`;
            panel.style.height = `${Math.round(rect.height)}px`;
        }
        mode = nextMode;
        resizeDir = dir;
        activePointerId = event.pointerId;
        startX = event.clientX;
        startY = event.clientY;
        startLeft = rect.left;
        startTop = rect.top;
        startWidth = rect.width;
        startHeight = rect.height;
        isPanelInteracting = true;
        setClickThrough?.(false);
        panel.classList.toggle('is-dragging', nextMode === 'drag');
        panel.classList.toggle('is-resizing', nextMode === 'resize');
        if (nextMode === 'resize') updatePanelSizeHud(panel, startWidth, startHeight);
        try { event.target?.setPointerCapture?.(event.pointerId); } catch { /* noop */ }
        event.preventDefault();
    };

    header?.addEventListener('pointerdown', (event) => {
        if (event.button !== 0 && event.pointerType === 'mouse') return;
        if (event.target.closest('button, a, input, select, .no-drag')) return;
        beginInteraction(event, 'drag');
    });

    header?.addEventListener('dblclick', (event) => {
        if (event.target.closest('button, a, input, select, .no-drag')) return;
        togglePanelCollapse();
    });

    panel.querySelectorAll('.panel-resize-handle, .panel-resize-edge').forEach((handle) => {
        handle.addEventListener('pointerdown', (event) => {
            if (event.button !== 0 && event.pointerType === 'mouse') return;
            if (panel.classList.contains('is-collapsed')) return;
            beginInteraction(event, 'resize', handle.dataset.resize || 'se');
        });
    });

    window.addEventListener('pointermove', (event) => {
        if (!mode || (activePointerId !== null && event.pointerId !== activePointerId)) return;
        const margin = 8;
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        const dx = event.clientX - startX;
        const dy = event.clientY - startY;

        if (mode === 'drag') {
            const maxL = Math.max(margin, vw - startWidth - margin);
            const maxT = Math.max(margin, vh - startHeight - margin);
            const nextL = clamp(startLeft + dx, margin, maxL);
            const nextT = clamp(startTop + dy, margin, maxT);
            panel.style.left = `${Math.round(nextL)}px`;
            panel.style.top = `${Math.round(nextT)}px`;
            return;
        }

        if (mode === 'resize') {
            const minW = Math.min(PANEL_MIN_WIDTH, vw - margin * 2);
            const minH = Math.min(PANEL_MIN_HEIGHT, vh - margin * 2);
            let nextL = startLeft;
            let nextW = startWidth;
            let nextH = startHeight;

            if (resizeDir.includes('e')) {
                const maxW = Math.max(minW, vw - startLeft - margin);
                nextW = clamp(startWidth + dx, minW, maxW);
            }
            if (resizeDir.includes('w')) {
                const maxW = Math.max(minW, startLeft + startWidth - margin);
                nextW = clamp(startWidth - dx, minW, maxW);
                nextL = startLeft + (startWidth - nextW);
            }
            if (resizeDir.includes('s')) {
                const maxH = Math.max(minH, vh - startTop - margin);
                nextH = clamp(startHeight + dy, minH, maxH);
            }

            panel.style.left = `${Math.round(nextL)}px`;
            panel.style.width = `${Math.round(nextW)}px`;
            panel.style.height = `${Math.round(nextH)}px`;
            updatePanelSizeHud(panel, nextW, nextH);
        }
    });

    const endInteraction = (event) => {
        if (!mode || (event && activePointerId !== null && event.pointerId !== activePointerId)) return;
        panel.classList.remove('is-dragging', 'is-resizing');
        savePanelState(panel);
        mode = null;
        resizeDir = '';
        activePointerId = null;
        isPanelInteracting = false;
    };

    window.addEventListener('pointerup', endInteraction);
    window.addEventListener('pointercancel', endInteraction);
    window.addEventListener('resize', clampPanelToViewport);
}

function togglePanelCollapse() {
    const panel = document.getElementById('config-panel');
    if (!panel) return;
    const willCollapse = !panel.classList.contains('is-collapsed');
    if (willCollapse) {
        // Mémoriser la hauteur étendue avant de replier.
        const rect = panel.getBoundingClientRect();
        if (!panel.style.height && rect.height > 80) {
            panel.style.height = `${Math.round(rect.height)}px`;
        }
        savePanelState(panel, { collapsed: true });
        panel.classList.add('is-collapsed');
    } else {
        panel.classList.remove('is-collapsed');
        const saved = readSavedPanelState();
        if (saved?.h) panel.style.height = `${Math.round(saved.h)}px`;
        clampPanelToViewport();
        savePanelState(panel, { collapsed: false });
    }
    const minBtn = document.getElementById('cfg-minimize');
    if (minBtn) minBtn.textContent = willCollapse ? '+' : '—';
}

// ---------- Initialisation overlay ----------
function initOverlay() {
    const container = document.getElementById('avatar-container');

    // Centrage initial via JS : ne recalcule que si aucun état sauvegardé dans localStorage.
    const centerAvatar = () => {
        if (localStorage.getItem('sarra_window_state')) {
            restoreAvatarState();
            return;
        }
        if (localStorage.getItem('avatarPosX') !== null || localStorage.getItem('avatarPosY') !== null) {
            applySavedPosition();
            return;
        }
        const w = container.offsetWidth || 640;
        const h = container.offsetHeight || 360;
        container.style.left = Math.max(0, window.innerWidth / 2 - w / 2) + 'px';
        container.style.top = Math.max(0, window.innerHeight / 2 - h / 2) + 'px';
    };
    centerAvatar();
    window.addEventListener('resize', centerAvatar);

    // Écoute IPC : raccourci global Ctrl+Shift+K via le preload sécurisé.
    // Plus aucun accès Node direct depuis le renderer (contextIsolation: true).
    try {
        window.sarraAPI?.onToggleConfig?.(() => toggleConfigPanel());
    } catch (e) {
        // Navigateur classique : le raccourci clavier local prend le relais.
    }

    // Premier démarrage : modal onboarding si configuration manquante.
    if (!isConfigured()) {
        showOnboarding();
    } else {
        const sceneDiv = document.getElementById('scene');
        if (sceneDiv) sceneDiv.style.display = 'block';
    }

    // Liaison des boutons.
    const btnSaveOnboard = document.getElementById('btn-save-onboard');
    if (btnSaveOnboard) btnSaveOnboard.addEventListener('click', saveOnboarding);
    document.getElementById('btn-skip-onboarding')?.addEventListener('click', skipOnboarding);

    // Lien externe : création de la clé API Gemini (Google AI Studio).
    const btnCreateKey = document.getElementById('btn-create-gemini-key');
    if (btnCreateKey) {
        btnCreateKey.addEventListener('click', async () => {
            try {
                const opened = await window.sarraAPI?.openExternal?.('https://aistudio.google.com/app/apikey');
                if (!opened) window.open('https://aistudio.google.com/app/apikey', '_blank', 'noopener,noreferrer');
            } catch (e) { console.warn('❌ openExternal:', e); }
        });
    }

    // OVERLAY APP: click-through OS piloté par géométrie (pointer-events: none cassait le hit-test).
    const clickThroughZones = [
        '#avatar-container',
        '#config-panel',
        '#mic-btn',
        '#cfg-open-btn',
        '#onboarding-modal'
    ];
    let lastPointerX = null;
    let lastPointerY = null;
    function isOverInteractive(x, y) {
        if (isPanelInteracting) return true;
        if (!Number.isFinite(x) || !Number.isFinite(y)) return false;
        for (const sel of clickThroughZones) {
            const el = document.querySelector(sel);
            if (!el) continue;
            if (getComputedStyle(el).display === 'none') continue;
            const r = el.getBoundingClientRect();
            if (r.width === 0 && r.height === 0) continue;
            if (x >= r.left && x <= r.right && y >= r.top && y <= r.bottom) return true;
        }
        return false;
    }
    function setClickThrough(enable) {
        try { window.sarraAPI?.setIgnoreMouseEvents?.(enable); } catch (e) { console.warn('⚠️ click-through:', e); }
    }
    refreshClickThroughHandler = () => {
        if (lastPointerX === null || lastPointerY === null) {
            const panel = document.getElementById('config-panel');
            const modal = document.getElementById('onboarding-modal');
            const panelOpen = Boolean(panel && panel.classList.contains('is-open'));
            const modalOpen = Boolean(modal && getComputedStyle(modal).display !== 'none');
            setClickThrough(!(panelOpen || modalOpen));
            return;
        }
        setClickThrough(!isOverInteractive(lastPointerX, lastPointerY));
    };
    window.addEventListener('mousemove', (e) => {
        lastPointerX = e.clientX;
        lastPointerY = e.clientY;
        setClickThrough(!isOverInteractive(e.clientX, e.clientY));
    });
    window.addEventListener('mouseleave', () => {
        if (!isPanelInteracting) setClickThrough(true);
    });

    // Drag & resize du panneau de configuration (souris & tactile, avec persistance).
    initConfigPanelDragAndResize(setClickThrough);

    // OVERLAY APP: initialiser le panneau professionnel v2 et la persistance de position.
    initConfigPanelV2();
    initMic();

    // L'état JSON (MODULE 3) prévaut sur les anciennes clés avatarPos*/avatar*.
    restoreAvatarState();
    initAdvancedInteraction();
    updateAvatarBoundsInfo();

    // MODE DÉMO: aucun health-check backend (appel direct à Gemini).
}

// ============================================================================
// OVERLAY APP: Panneau de configuration (style configuration.html + live sync)
// ============================================================================
function markPanelDirty() {
    const badge = document.getElementById('saved-badge');
    if (badge) {
        badge.textContent = 'modifications non enregistrées';
        badge.classList.add('dirty');
        badge.classList.remove('saved');
    }
}

function markPanelSaved(savedAt = Date.now()) {
    const badge = document.getElementById('saved-badge');
    if (badge) {
        badge.textContent = `enregistré ${new Date(savedAt).toLocaleTimeString('fr-FR')}`;
        badge.classList.remove('dirty');
        badge.classList.add('saved');
    }
}

function updateKeyBadges() {
    const setBadge = (id, hasKey, emptyLabel = 'non configurée') => {
        const el = document.getElementById(id);
        if (!el) return;
        el.textContent = hasKey ? 'configurée' : emptyLabel;
        el.classList.toggle('on', Boolean(hasKey));
    };
    const geminiKey = document.getElementById('cfg-gemini-key')?.value.trim() || localStorage.getItem('geminiKey') || localStorage.getItem('apiKey') || '';
    const ttsKey = document.getElementById('cfg-gemini-tts-key')?.value.trim() || localStorage.getItem('geminiTTSKey') || '';
    const groqKey = document.getElementById('cfg-groq-key')?.value.trim() || localStorage.getItem('groqKey') || '';
    const orKey = document.getElementById('cfg-openrouter-key')?.value.trim() || localStorage.getItem('openRouterKey') || localStorage.getItem('openrouterKey') || '';
    const elKey = document.getElementById('cfg-elevenlabs-key')?.value.trim() || localStorage.getItem('elevenlabsKey') || localStorage.getItem('ttsKey') || '';

    setBadge('key-badge-gemini', Boolean(geminiKey));
    setBadge('key-badge-gemini-tts', Boolean(ttsKey && ttsKey !== geminiKey), 'auto (clé Gemini)');
    setBadge('key-badge-groq', Boolean(groqKey));
    setBadge('key-badge-openrouter', Boolean(orKey));
    setBadge('key-badge-elevenlabs', Boolean(elKey));
}

function syncAltProvidersVisibility() {
    const details = document.getElementById('alt-providers-details');
    if (!details) return;
    const reasoner = document.getElementById('cfg-reasoning-provider')?.value || localStorage.getItem('reasoningProvider') || 'gemini';
    const tts = document.getElementById('cfg-tts-provider')?.value || localStorage.getItem('ttsProvider') || 'local-tts';
    if (reasoner !== 'gemini' || (tts !== 'local-tts' && tts !== 'gemini-tts')) {
        details.open = true;
    }
}

function formatSliderValue(id, rawValue) {
    const num = Number(rawValue);
    if (!Number.isFinite(num)) return String(rawValue);
    if (id === 'cfg-emo-blink-rate') return `${Math.round(num)}s`;
    if (id === 'cfg-emo-breath') return num.toFixed(3);
    if (id === 'cfg-lip-smoothing' || id === 'cfg-lip-threshold' || id === 'cfg-emo-neck' || id === 'cfg-emo-gaze' || id === 'cfg-emo-brow') {
        return num.toFixed(2);
    }
    return num.toFixed(1);
}

function syncActivePresetButtons(currentText) {
    const trimmed = String(currentText || '').trim();
    document.querySelectorAll('.btn-preset').forEach((btn) => {
        const presetText = DIRECTIVE_PRESETS[btn.dataset.preset];
        btn.classList.toggle('active', Boolean(presetText && presetText.trim() === trimmed));
    });
}

let emotionPreviewTimer = 0;
function previewVrmEmotion(emotionKey, labelText = '') {
    clearTimeout(emotionPreviewTimer);
    document.querySelectorAll('#emotion-preview-buttons [data-preview-emotion]').forEach((btn) => {
        btn.classList.toggle('active', btn.dataset.previewEmotion === emotionKey);
    });
    const presets = ['happy', 'sad', 'angry', 'surprised', 'relaxed'];
    presets.forEach((p) => setExpression(p, 0));
    if (emotionKey && emotionKey !== 'neutral') {
        setExpression(emotionKey, 0.85);
        emotionPreviewTimer = setTimeout(() => {
            presets.forEach((p) => setExpression(p, 0));
        }, 2500);
    }
    const status = document.getElementById('emotion-status');
    if (status) {
        status.textContent = labelText ? `Aperçu en direct : ${labelText}` : '';
        status.className = 'status ok';
    }
}

function armTwoStepConfirm(button, confirmLabel, onConfirm) {
    if (!button) return;
    let timer = 0;
    button.addEventListener('click', () => {
        if (button.dataset.confirmArmed === 'true') {
            clearTimeout(timer);
            delete button.dataset.confirmArmed;
            button.classList.remove('confirming');
            if (button.dataset.origLabel) button.textContent = button.dataset.origLabel;
            onConfirm();
            return;
        }
        button.dataset.origLabel = button.textContent;
        button.dataset.confirmArmed = 'true';
        button.textContent = confirmLabel;
        button.classList.add('confirming');
        clearTimeout(timer);
        timer = setTimeout(() => {
            delete button.dataset.confirmArmed;
            button.classList.remove('confirming');
            if (button.dataset.origLabel) button.textContent = button.dataset.origLabel;
        }, 3500);
    });
}

function initConfigPanelV2() {
    initDemoCacheControls();

    // Bouton discret d'ouverture sur le conteneur avatar + fermetures du panneau.
    document.getElementById('cfg-open-btn')?.addEventListener('click', (event) => {
        event.stopPropagation();
        toggleConfigPanel();
    });

    // Ferme uniquement le panneau de configuration (sans fermer l'application Sarra).
    document.getElementById('cfg-close')?.addEventListener('click', () => toggleConfigPanel(false));
    document.getElementById('close-footer')?.addEventListener('click', () => toggleConfigPanel(false));

    // Réduit / déplie le panneau en barre compacte.
    document.getElementById('cfg-minimize')?.addEventListener('click', () => togglePanelCollapse());

    // Recentre et réinitialise la taille du panneau.
    document.getElementById('cfg-reset-layout')?.addEventListener('click', () => resetPanelLayout());
    document.getElementById('btn-reset-panel-pos')?.addEventListener('click', () => resetPanelLayout());

    document.getElementById('btn-reset-avatar-pos')?.addEventListener('click', () => {
        const container = document.getElementById('avatar-container');
        if (!container) return;
        const w = 400;
        const h = 400;
        const x = Math.max(0, Math.round(window.innerWidth / 2 - w / 2));
        const y = Math.max(0, Math.round(window.innerHeight / 2 - h / 2));
        container.style.width = `${w}px`;
        container.style.height = `${h}px`;
        container.style.left = `${x}px`;
        container.style.top = `${y}px`;
        saveAvatarState();
    });

    // Liens externes vers les portails API (via preload sécurisé en Electron).
    document.querySelectorAll('#config-panel .api-link').forEach((link) => {
        link.addEventListener('click', async (event) => {
            if (typeof window.sarraAPI?.openExternal !== 'function') return;
            try {
                const url = new URL(link.href);
                const allowedHosts = new Set(['aistudio.google.com', 'console.cloud.google.com', 'console.groq.com', 'openrouter.ai']);
                if (allowedHosts.has(url.hostname)) {
                    event.preventDefault();
                    await window.sarraAPI.openExternal(link.href);
                }
            } catch { /* noop */ }
        });
    });

    // Boutons œil pour afficher/masquer les clés API.
    document.querySelectorAll('.btn-eye[data-toggle-secret]').forEach((btn) => {
        btn.addEventListener('click', () => {
            const input = document.getElementById(btn.dataset.toggleSecret);
            if (!input) return;
            const reveal = input.type === 'password';
            input.type = reveal ? 'text' : 'password';
            btn.textContent = reveal ? '🙈' : '👁️';
        });
    });

    // Identité (avatar & utilisateur)
    document.getElementById('cfg-avatar-name')?.addEventListener('input', (e) => {
        localStorage.setItem('avatarName', e.target.value.trim() || 'Sarra');
        markPanelDirty();
    });
    document.getElementById('cfg-user-name')?.addEventListener('input', (e) => {
        localStorage.setItem('userName', e.target.value.trim());
        markPanelDirty();
    });

    // Moteurs IA & voix (selects)
    document.getElementById('cfg-reasoning-provider')?.addEventListener('change', (e) => {
        localStorage.setItem('reasoningProvider', e.target.value);
        syncAltProvidersVisibility();
        markPanelDirty();
    });
    document.getElementById('cfg-reasoning-model')?.addEventListener('change', (e) => {
        localStorage.setItem('reasoningModel', e.target.value);
        markPanelDirty();
    });
    document.getElementById('cfg-tts-provider')?.addEventListener('change', (e) => {
        localStorage.setItem('ttsProvider', e.target.value);
        syncAltProvidersVisibility();
        markPanelDirty();
    });
    document.getElementById('cfg-browser-voice')?.addEventListener('change', (e) => {
        localStorage.setItem('selectedVoice', e.target.value);
        markPanelDirty();
    });
    document.getElementById('cfg-local-tts-voice')?.addEventListener('change', (e) => {
        localStorage.setItem('localTtsVoice', e.target.value || 'F1');
        markPanelDirty();
    });
    document.getElementById('cfg-elevenlabs-voice')?.addEventListener('change', (e) => {
        localStorage.setItem('elevenVoiceId', e.target.value);
        markPanelDirty();
    });
    document.getElementById('cfg-gemini-tts-voice')?.addEventListener('change', (e) => {
        localStorage.setItem('geminiTTSVoice', e.target.value);
        localStorage.setItem('geminiVoice', e.target.value);
        markPanelDirty();
    });

    // Sliders avec sauvegarde temps réel + formatage précis.
    const liveSliders = {
        'cfg-lip-sensitivity': 'lipSensitivity',
        'cfg-lip-speed': 'lipSpeed',
        'cfg-lip-jaw': 'lipJaw',
        'cfg-lip-smoothing': 'lipSmoothing',
        'cfg-lip-threshold': 'lipThreshold',
        'cfg-emo-blink-rate': 'emoBlinkRate',
        'cfg-emo-blink': 'emoBlink',
        'cfg-emo-neck': 'emoNeck',
        'cfg-emo-breath': 'emoBreath',
        'cfg-emo-gaze': 'emoGaze',
        'cfg-emo-brow': 'emoBrow'
    };
    Object.entries(liveSliders).forEach(([id, key]) => {
        const slider = document.getElementById(id);
        const valueDisplay = document.getElementById(`val-${id.replace('cfg-', '')}`);
        if (!slider) return;
        slider.addEventListener('input', () => {
            localStorage.setItem(key, slider.value);
            if (key === 'emoBrow') localStorage.setItem('emoAngry', slider.value);
            if (valueDisplay) valueDisplay.textContent = formatSliderValue(id, slider.value);
            markPanelDirty();
        });
    });

    // Checkboxes & mémoire avec persistance immédiate.
    document.getElementById('cfg-lip-teeth')?.addEventListener('change', (e) => {
        localStorage.setItem('lipTeeth', String(e.target.checked));
        markPanelDirty();
    });
    document.getElementById('cfg-auto-fallback')?.addEventListener('change', (e) => {
        localStorage.setItem('autoFallback', String(e.target.checked));
        applyFallbackSetting();
        markPanelDirty();
    });
    document.getElementById('cfg-screen-vision')?.addEventListener('change', (e) => {
        localStorage.setItem('screenVision', e.target.checked ? 'true' : 'false');
        markPanelDirty();
    });
    document.getElementById('cfg-demo-mode')?.addEventListener('change', (e) => {
        localStorage.setItem('demoMode', String(e.target.checked));
        markPanelDirty();
    });
    document.getElementById('cfg-memory-enabled')?.addEventListener('change', (e) => {
        localStorage.setItem('memoryEnabled', String(e.target.checked));
        markPanelDirty();
    });
    document.getElementById('cfg-memory-size')?.addEventListener('input', (e) => {
        const parsed = Number.parseInt(e.target.value, 10);
        const limit = Math.max(0, Math.min(10, Number.isFinite(parsed) ? parsed : 10));
        localStorage.setItem('memorySize', String(limit));
        avatarMemory = limit ? avatarMemory.slice(-limit) : [];
        localStorage.setItem('avatarMemory', JSON.stringify(avatarMemory));
        updateMemoryPreview();
        markPanelDirty();
    });

    // Synchronisation immédiate des clés saisies + badges.
    const liveKeyBindings = [
        ['cfg-gemini-key', ['geminiKey', 'apiKey']],
        ['cfg-groq-key', ['groqKey']],
        ['cfg-openrouter-key', ['openRouterKey', 'openrouterKey']],
        ['cfg-elevenlabs-key', ['elevenlabsKey', 'ttsKey']],
        ['cfg-gemini-tts-key', ['geminiTTSKey', 'geminiTtsKey']]
    ];
    liveKeyBindings.forEach(([id, keys]) => {
        const input = document.getElementById(id);
        if (!input) return;
        const sync = () => {
            const val = input.value.trim();
            keys.forEach((k) => localStorage.setItem(k, val));
            updateKeyBadges();
            markPanelDirty();
        };
        input.addEventListener('change', sync);
        input.addEventListener('input', updateKeyBadges);
    });

    // Directives principales
    const directivesTextarea = document.getElementById('cfg-core-directives');
    const charCount = document.getElementById('directive-count');
    if (directivesTextarea && charCount) {
        directivesTextarea.addEventListener('input', () => {
            charCount.textContent = String(directivesTextarea.value.length);
            localStorage.setItem('coreDirectives', directivesTextarea.value);
            syncActivePresetButtons(directivesTextarea.value);
            markPanelDirty();
        });
    }

    const applyDirectivePreset = (preset) => {
        const text = DIRECTIVE_PRESETS[preset];
        if (text && directivesTextarea) {
            directivesTextarea.value = text;
            if (charCount) charCount.textContent = String(text.length);
            localStorage.setItem('coreDirectives', text);
            syncActivePresetButtons(text);
            markPanelDirty();
        }
    };

    document.querySelectorAll('.btn-preset').forEach((btn) => {
        btn.addEventListener('click', () => applyDirectivePreset(btn.dataset.preset));
    });
    document.getElementById('directive-template')?.addEventListener('change', (event) => {
        if (event.target.value) applyDirectivePreset(event.target.value);
        event.target.value = '';
    });
    document.getElementById('reset-directives')?.addEventListener('click', () => {
        if (directivesTextarea) {
            directivesTextarea.value = '';
            if (charCount) charCount.textContent = '0';
            localStorage.setItem('coreDirectives', '');
            syncActivePresetButtons('');
            markPanelDirty();
        }
    });

    // Tests API & voix
    document.querySelectorAll('.btn-test').forEach((btn) => {
        btn.addEventListener('click', async () => {
            const provider = btn.dataset.test;
            if (!provider) return;
            const statusEl = document.getElementById(`status-${provider}`);
            const origLabel = btn.dataset.origLabel || btn.textContent;
            btn.dataset.origLabel = origLabel;
            btn.disabled = true;
            btn.textContent = '⏳ Test...';
            if (statusEl) {
                statusEl.textContent = 'Test en cours...';
                statusEl.className = 'status-indicator loading';
            }
            try {
                let result;
                const value = (id) => document.getElementById(id)?.value?.trim() || '';
                if (provider === 'gemini') result = await testGeminiKey(value('cfg-gemini-key') || resolveDemoApiKey());
                else if (provider === 'groq') result = await testGroqKey(value('cfg-groq-key'));
                else if (provider === 'openrouter') result = await testOpenRouterKey(value('cfg-openrouter-key'));
                else if (provider === 'elevenlabs') result = await testElevenLabsKey(value('cfg-elevenlabs-key'));
                else if (provider === 'gemini-tts') {
                    const key = value('cfg-gemini-tts-key') || value('cfg-gemini-key') || resolveDemoApiKey();
                    result = await testGeminiTTSKey(key);
                } else if (provider === 'local-tts') {
                    const voice = value('cfg-local-tts-voice') || 'F1';
                    await speakWithLocalTts('Bonjour, je suis Sarra, votre assistante vocale locale.', { voice });
                    result = { ok: true, message: `✅ TTS local (${voice})` };
                } else if (provider === 'browser-voice') {
                    testBrowserVoice();
                    if (statusEl) {
                        statusEl.textContent = '✅ Voix lancée';
                        statusEl.className = 'status-indicator success';
                    }
                    return;
                }
                if (statusEl) {
                    statusEl.textContent = result.ok ? (result.message || '✅ Valide') : `❌ ${result.error}`;
                    statusEl.className = `status-indicator ${result.ok ? 'success' : 'error'}`;
                }
            } catch (e) {
                if (statusEl) {
                    statusEl.textContent = e?.message ? `❌ ${e.message}` : '❌ Erreur réseau';
                    statusEl.className = 'status-indicator error';
                }
            } finally {
                btn.disabled = false;
                btn.textContent = origLabel;
            }
        });
    });

    // Test capture d'écran
    document.getElementById('btn-test-vision')?.addEventListener('click', async () => {
        const btn = document.getElementById('btn-test-vision');
        const statusEl = document.getElementById('status-vision');
        const preview = document.getElementById('vision-preview');
        if (!btn) return;
        const label = btn.textContent;
        btn.disabled = true;
        btn.textContent = '⏳ Capture...';
        if (statusEl) {
            statusEl.textContent = 'Capture en cours...';
            statusEl.className = 'status-indicator loading';
        }
        try {
            const started = performance.now();
            const image = await captureScreen();
            if (!image) throw new Error('Capture indisponible (Electron ou backend 3000)');
            if (preview) {
                preview.src = `data:${image.mimeType};base64,${image.data}`;
                preview.style.display = 'block';
            }
            if (statusEl) {
                statusEl.textContent = `✅ Capture OK (${Math.round(performance.now() - started)} ms)`;
                statusEl.className = 'status-indicator success';
            }
        } catch (e) {
            if (preview) preview.style.display = 'none';
            if (statusEl) {
                statusEl.textContent = `❌ ${e.message}`;
                statusEl.className = 'status-indicator error';
            }
        } finally {
            btn.disabled = false;
            btn.textContent = label;
        }
    });

    // Lipsync : test, calibration & reset
    document.getElementById('btn-auto-calibrate')?.addEventListener('click', runAutoCalibration);
    document.getElementById('btn-test-lipsync')?.addEventListener('click', () => {
        const name = localStorage.getItem('avatarName')?.trim() || 'Sarra';
        const phrase = `Bonjour, je suis ${name}. Enchantée de faire votre connaissance.`;
        if (typeof speakWithBestVoice === 'function') speakWithBestVoice(phrase);
        else if (typeof animateLipSyncFromText === 'function') animateLipSyncFromText(phrase);
    });
    document.getElementById('btn-reset-lipsync')?.addEventListener('click', () => {
        const defaults = {
            'cfg-lip-sensitivity': ['lipSensitivity', '1'],
            'cfg-lip-speed': ['lipSpeed', '1'],
            'cfg-lip-jaw': ['lipJaw', '1'],
            'cfg-lip-smoothing': ['lipSmoothing', '0.1'],
            'cfg-lip-threshold': ['lipThreshold', '0.05']
        };
        Object.entries(defaults).forEach(([id, [key, val]]) => {
            const el = document.getElementById(id);
            if (el) el.value = val;
            localStorage.setItem(key, val);
            const disp = document.getElementById(`val-${id.replace('cfg-', '')}`);
            if (disp) disp.textContent = formatSliderValue(id, val);
        });
        const teeth = document.getElementById('cfg-lip-teeth');
        if (teeth) teeth.checked = true;
        localStorage.setItem('lipTeeth', 'true');
        markPanelDirty();
        const st = document.getElementById('calibration-status');
        if (st) {
            st.textContent = 'Réglages lipsync remis par défaut.';
            st.className = 'status warn';
        }
    });

    // Émotions : aperçu direct + reset
    document.querySelectorAll('#emotion-preview-buttons [data-preview-emotion]').forEach((btn) => {
        btn.addEventListener('click', () => {
            previewVrmEmotion(btn.dataset.previewEmotion, btn.textContent);
        });
    });
    document.getElementById('btn-reset-emotions')?.addEventListener('click', () => {
        const defaults = {
            'cfg-emo-blink-rate': ['emoBlinkRate', '4'],
            'cfg-emo-blink': ['emoBlink', '0.8'],
            'cfg-emo-neck': ['emoNeck', '0.08'],
            'cfg-emo-breath': ['emoBreath', '0.015'],
            'cfg-emo-gaze': ['emoGaze', '0.03'],
            'cfg-emo-brow': ['emoBrow', '0.1']
        };
        Object.entries(defaults).forEach(([id, [key, val]]) => {
            const el = document.getElementById(id);
            if (el) el.value = val;
            localStorage.setItem(key, val);
            if (key === 'emoBrow') localStorage.setItem('emoAngry', val);
            const disp = document.getElementById(`val-${id.replace('cfg-', '')}`);
            if (disp) disp.textContent = formatSliderValue(id, val);
        });
        previewVrmEmotion('neutral', 'Neutre (valeurs par défaut)');
        markPanelDirty();
    });

    // Mémoire
    document.getElementById('btn-view-memory')?.addEventListener('click', () => {
        updateMemoryPreview();
        const status = document.getElementById('memory-status');
        if (status) {
            status.textContent = 'Liste actualisée.';
            status.className = 'status ok';
        }
    });

    armTwoStepConfirm(document.getElementById('btn-clear-memory'), 'Confirmer ?', () => {
        localStorage.removeItem('avatarMemory');
        avatarMemory = [];
        updateMemoryPreview();
        const status = document.getElementById('memory-status');
        if (status) {
            status.textContent = 'Mémoire effacée.';
            status.className = 'status ok';
        }
    });

    armTwoStepConfirm(document.getElementById('btn-factory-reset'), 'Confirmer reset ?', factoryReset);
    document.getElementById('cfg-save')?.addEventListener('click', saveAllConfigV2);

    if ('speechSynthesis' in window) {
        window.speechSynthesis.addEventListener('voiceschanged', populateVoiceList);
    }

    loadConfigValuesV2();
    populateVoiceList();
    updateMemoryPreview();
    updateAvatarBoundsInfo();
}

async function testGeminiKey(key) {
    if (!key || key.length < 20) return { ok: false, error: 'Clé trop courte' };
    const models = [getPreferredReasoningModel(), ...GEMINI_FALLBACK_MODELS_DEMO]
        .filter((m, i, all) => m && all.indexOf(m) === i);
    let lastError = 'Erreur réseau';
    for (const model of models) {
        try {
            const resp = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent?key=${encodeURIComponent(key)}`, {
                method: 'POST', headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ contents: [{ parts: [{ text: 'Hi' }] }] }),
                signal: AbortSignal.timeout(8000)
            });
            if (resp.ok) return { ok: true, message: `✅ Valide (${model})` };
            const err = await resp.json().catch(() => ({}));
            lastError = err.error?.message || `HTTP ${resp.status}`;
            if (!(resp.status === 503 || resp.status === 429 || resp.status === 404)) break;
        } catch (e) {
            if (e?.name !== 'AbortError') lastError = 'Erreur réseau';
        }
    }
    return { ok: false, error: lastError };
}

async function testGroqKey(key) {
    if (!key || !key.startsWith('gsk_')) return { ok: false, error: 'Format invalide (gsk_...)' };
    try {
        const resp = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST', headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
            body: JSON.stringify({ model: 'llama-3.3-70b-versatile', messages: [{ role: 'user', content: 'Hi' }] })
        });
        if (resp.ok) return { ok: true };
        const body = await resp.json().catch(() => ({}));
        const message = body?.error?.message || '';
        if (/developer role|team owners/i.test(message)) {
            return { ok: false, error: 'Compte Groq sans rôle développeur : créez la clé depuis un compte propriétaire' };
        }
        return { ok: false, error: message || `HTTP ${resp.status}` };
    } catch (e) {
        return { ok: false, error: 'Erreur réseau' };
    }
}

let cachedOpenRouterModel = null;
async function getOpenRouterFreeModel() {
    if (cachedOpenRouterModel) return cachedOpenRouterModel;
    const resp = await fetch('https://openrouter.ai/api/v1/models');
    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
    const data = await resp.json().catch(() => ({}));
    const models = Array.isArray(data?.data) ? data.data : [];
    const free = models.find((m) => typeof m.id === 'string' && m.id.endsWith(':free')) || models[0];
    if (!free?.id) throw new Error('Aucun modèle OpenRouter disponible');
    cachedOpenRouterModel = free.id;
    return cachedOpenRouterModel;
}

// OVERLAY APP CORRECTION: OpenRouter headers + modèle valide
async function testOpenRouterKey(key) {
    if (!key || !key.startsWith('sk-or-')) return { ok: false, error: 'Format invalide' };
    try {
        const headers = {
            Authorization: `Bearer ${key}`,
            'Content-Type': 'application/json',
            'HTTP-Referer': 'https://sarra-final.local',
            'X-Title': 'Sarra Final Avatar'
        };
        const current = await getOpenRouterFreeModel();
        const models = [
            current,
            'meta-llama/llama-3.3-70b-instruct:free',
            'google/gemini-2.0-flash-exp:free'
        ].filter((m, i, all) => m && all.indexOf(m) === i);

        let lastStatus = 0;
        for (const model of models) {
            const resp = await fetch('https://openrouter.ai/api/v1/chat/completions', {
                method: 'POST', headers,
                body: JSON.stringify({ model, messages: [{ role: 'user', content: 'Hi' }], max_tokens: 5 })
            });
            if (resp.ok) return { ok: true };
            lastStatus = resp.status;
            if (resp.status !== 404 && resp.status !== 503 && resp.status !== 429) break;
        }
        return { ok: false, error: `HTTP ${lastStatus}` };
    } catch (e) {
        return { ok: false, error: 'Erreur réseau' };
    }
}

async function testElevenLabsKey(key) {
    if (!key) return { ok: false, error: 'Clé manquante' };
    try {
        const resp = await fetch('https://api.elevenlabs.io/v1/user', { headers: { 'xi-api-key': key } });
        return resp.ok ? { ok: true } : { ok: false, error: `HTTP ${resp.status}` };
    } catch (e) {
        return { ok: false, error: 'Erreur réseau' };
    }
}

async function testGeminiTTSKey(key) {
    if (!key || key.length < 20) return { ok: false, error: 'Clé Gemini manquante' };
    const voiceName = getGeminiVoice();
    const avatarLabel = document.getElementById('cfg-avatar-name')?.value.trim() || localStorage.getItem('avatarName') || 'Sarra';
    const userLabel = document.getElementById('cfg-user-name')?.value.trim() || localStorage.getItem('userName') || '';
    const sample = `Bonjour${userLabel ? ` ${userLabel}` : ''}, je suis ${avatarLabel}. Voici ma voix par défaut.`;
    try {
        localStorage.setItem('geminiTTSKey', key);
        localStorage.setItem('geminiTtsKey', key);
        await speakWithGemini(sample, { key, voiceName, model: GEMINI_TTS_MODELS[0] });
        return { ok: true, message: `✅ Voix "${voiceName}"` };
    } catch (e) {
        return { ok: false, error: e?.message || 'TTS indisponible' };
    }
}

function testBrowserVoice() {
    const avatarLabel = document.getElementById('cfg-avatar-name')?.value.trim() || localStorage.getItem('avatarName') || 'Sarra';
    const userLabel = document.getElementById('cfg-user-name')?.value.trim() || localStorage.getItem('userName') || '';
    const utter = new SpeechSynthesisUtterance(`Bonjour${userLabel ? ` ${userLabel}` : ''}, je suis ${avatarLabel}.`);
    utter.lang = 'fr-FR';
    const voiceName = document.getElementById('cfg-browser-voice')?.value;
    if (voiceName) {
        localStorage.setItem('selectedVoice', voiceName);
        const voice = speechSynthesis.getVoices().find((v) => v.name === voiceName);
        if (voice) utter.voice = voice;
    }
    speechSynthesis.cancel();
    speechSynthesis.speak(utter);
}

async function runAutoCalibration() {
    const statusEl = document.getElementById('calibration-status');
    if (statusEl) {
        statusEl.textContent = '🎯 Calibration en cours... Sarra va prononcer une phrase test.';
        statusEl.className = 'status warn';
    }
    const testPhrase = "Bonjour, je suis Sarra. Comment allez-vous aujourd'hui ?";
    if (typeof speakWithBestVoice === 'function') await speakWithBestVoice(testPhrase);
    else if (typeof animateLipSyncFromText === 'function') animateLipSyncFromText(testPhrase);

    const sensitivity = Math.min(1.5, 0.8 + (testPhrase.length / 200));
    const input = document.getElementById('cfg-lip-sensitivity');
    const display = document.getElementById('val-lip-sensitivity');
    if (input) input.value = sensitivity.toFixed(1);
    if (display) display.textContent = sensitivity.toFixed(1);
    localStorage.setItem('lipSensitivity', sensitivity.toFixed(1));
    if (statusEl) {
        statusEl.textContent = `✅ Calibration terminée. Sensibilité ajustée à ${sensitivity.toFixed(1)}`;
        statusEl.className = 'status ok';
    }
}

function loadConfigValuesV2() {
    const get = (id, key, def) => {
        const el = document.getElementById(id);
        if (el) el.value = localStorage.getItem(key) ?? def;
    };

    get('cfg-avatar-name', 'avatarName', 'Sarra');
    get('cfg-user-name', 'userName', '');

    if (!GEMINI_MODEL_ORDER.includes(localStorage.getItem('reasoningModel'))) {
        localStorage.setItem('reasoningModel', GEMINI_MODEL_DEMO);
    }
    if (localStorage.getItem('reasoningProvider') === null) {
        localStorage.setItem('reasoningProvider', 'gemini');
    }
    get('cfg-reasoning-provider', 'reasoningProvider', 'gemini');
    get('cfg-reasoning-model', 'reasoningModel', GEMINI_MODEL_DEMO);

    if (localStorage.getItem('ttsProvider') === null) {
        localStorage.setItem('ttsProvider', 'local-tts');
    }
    if (localStorage.getItem('localTtsVoice') === null) {
        localStorage.setItem('localTtsVoice', 'F1');
    }
    if (localStorage.getItem('geminiTTSVoice') === null) {
        localStorage.setItem('geminiTTSVoice', localStorage.getItem('geminiVoice') || 'Kore');
    }
    if (localStorage.getItem('geminiVoice') === null) {
        localStorage.setItem('geminiVoice', localStorage.getItem('geminiTTSVoice') || 'Kore');
    }
    get('cfg-tts-provider', 'ttsProvider', 'local-tts');
    get('cfg-local-tts-voice', 'localTtsVoice', 'F1');

    const geminiKey = localStorage.getItem('geminiKey') || localStorage.getItem('apiKey') || '';
    if (localStorage.getItem('geminiTTSKey') === null) {
        localStorage.setItem('geminiTTSKey', geminiKey);
    }
    get('cfg-gemini-key', 'geminiKey', '');
    if (!document.getElementById('cfg-gemini-key')?.value) {
        const gEl = document.getElementById('cfg-gemini-key');
        if (gEl) gEl.value = geminiKey;
    }
    get('cfg-groq-key', 'groqKey', '');
    const openRouterEl = document.getElementById('cfg-openrouter-key');
    if (openRouterEl) openRouterEl.value = localStorage.getItem('openRouterKey') ?? localStorage.getItem('openrouterKey') ?? '';
    get('cfg-elevenlabs-key', 'elevenlabsKey', localStorage.getItem('ttsKey') || '');
    get('cfg-gemini-tts-key', 'geminiTTSKey', localStorage.getItem('geminiTtsKey') || geminiKey);
    get('cfg-elevenlabs-voice', 'elevenVoiceId', 'Rachel');
    const voiceSelect = document.getElementById('cfg-gemini-tts-voice');
    if (voiceSelect) {
        voiceSelect.value = localStorage.getItem('geminiTTSVoice')
            || localStorage.getItem('geminiVoice')
            || 'Kore';
    }
    get('cfg-core-directives', 'coreDirectives', DIRECTIVE_PRESETS.friendly);

    const memEnabledEl = document.getElementById('cfg-memory-enabled');
    if (memEnabledEl) memEnabledEl.checked = localStorage.getItem('memoryEnabled') !== 'false';

    const savedMem = Number.parseInt(localStorage.getItem('memorySize') || '10', 10);
    const clampedMem = Math.max(0, Math.min(10, Number.isFinite(savedMem) ? savedMem : 10));
    const memEl = document.getElementById('cfg-memory-size');
    if (memEl) memEl.value = String(clampedMem);

    get('cfg-lip-sensitivity', 'lipSensitivity', '1');
    get('cfg-lip-speed', 'lipSpeed', '1');
    get('cfg-lip-jaw', 'lipJaw', '1');
    get('cfg-lip-smoothing', 'lipSmoothing', '0.1');
    get('cfg-lip-threshold', 'lipThreshold', '0.05');
    get('cfg-emo-blink-rate', 'emoBlinkRate', '4');
    get('cfg-emo-blink', 'emoBlink', '0.8');
    get('cfg-emo-neck', 'emoNeck', '0.08');
    get('cfg-emo-breath', 'emoBreath', '0.015');
    get('cfg-emo-gaze', 'emoGaze', '0.03');
    get('cfg-emo-brow', 'emoBrow', localStorage.getItem('emoAngry') || '0.1');

    document.querySelectorAll('#config-panel input[type="range"]').forEach((slider) => {
        const valueDisplay = document.getElementById(`val-${slider.id.replace('cfg-', '')}`);
        if (valueDisplay) valueDisplay.textContent = formatSliderValue(slider.id, slider.value);
    });

    const teethEl = document.getElementById('cfg-lip-teeth');
    if (teethEl) teethEl.checked = localStorage.getItem('lipTeeth') !== 'false';

    const fallbackEl = document.getElementById('cfg-auto-fallback');
    if (fallbackEl) fallbackEl.checked = localStorage.getItem('autoFallback') !== 'false';

    const directivesTextarea = document.getElementById('cfg-core-directives');
    const charCount = document.getElementById('directive-count');
    if (charCount && directivesTextarea) {
        charCount.textContent = String(directivesTextarea.value.length);
        syncActivePresetButtons(directivesTextarea.value);
    }

    const demoModeEl = document.getElementById('cfg-demo-mode');
    if (demoModeEl) demoModeEl.checked = localStorage.getItem('demoMode') === 'true';

    if (localStorage.getItem('screenVision') === null) {
        localStorage.setItem('screenVision', 'true');
    }
    const visionEl = document.getElementById('cfg-screen-vision');
    if (visionEl) visionEl.checked = SCREEN_VISION_ENABLED();

    const minBtn = document.getElementById('cfg-minimize');
    const panel = document.getElementById('config-panel');
    if (minBtn && panel) minBtn.textContent = panel.classList.contains('is-collapsed') ? '+' : '—';

    localStorage.setItem('apiKey', geminiKey);
    localStorage.setItem('emoAngry', localStorage.getItem('emoBrow') || '0.1');
    applyFallbackSetting();
    updateKeyBadges();
    syncAltProvidersVisibility();
    applySavedPosition();
    updateAvatarBoundsInfo();
    markPanelSaved();
}

function saveAllConfigV2() {
    const set = (id, key) => {
        const el = document.getElementById(id);
        if (el) localStorage.setItem(key, el.value);
    };
    const avatarVal = document.getElementById('cfg-avatar-name')?.value.trim() || 'Sarra';
    const userVal = document.getElementById('cfg-user-name')?.value.trim() || '';
    localStorage.setItem('avatarName', avatarVal);
    localStorage.setItem('userName', userVal);

    set('cfg-gemini-key', 'geminiKey');
    set('cfg-groq-key', 'groqKey');
    set('cfg-openrouter-key', 'openRouterKey');
    set('cfg-elevenlabs-key', 'elevenlabsKey');
    set('cfg-gemini-tts-key', 'geminiTTSKey');
    set('cfg-browser-voice', 'selectedVoice');
    set('cfg-local-tts-voice', 'localTtsVoice');
    set('cfg-elevenlabs-voice', 'elevenVoiceId');
    set('cfg-gemini-tts-voice', 'geminiTTSVoice');
    set('cfg-reasoning-provider', 'reasoningProvider');
    set('cfg-reasoning-model', 'reasoningModel');
    set('cfg-tts-provider', 'ttsProvider');
    set('cfg-core-directives', 'coreDirectives');

    const memEnabled = document.getElementById('cfg-memory-enabled')?.checked ?? true;
    localStorage.setItem('memoryEnabled', String(memEnabled));

    const memInput = document.getElementById('cfg-memory-size');
    const parsedMem = Number.parseInt(memInput?.value || '10', 10);
    const clampedMem = Math.max(0, Math.min(10, Number.isFinite(parsedMem) ? parsedMem : 10));
    if (memInput) memInput.value = String(clampedMem);
    localStorage.setItem('memorySize', String(clampedMem));
    avatarMemory = clampedMem ? avatarMemory.slice(-clampedMem) : [];
    localStorage.setItem('avatarMemory', JSON.stringify(avatarMemory));

    set('cfg-lip-sensitivity', 'lipSensitivity');
    set('cfg-lip-speed', 'lipSpeed');
    set('cfg-lip-jaw', 'lipJaw');
    set('cfg-lip-smoothing', 'lipSmoothing');
    set('cfg-lip-threshold', 'lipThreshold');
    set('cfg-emo-blink-rate', 'emoBlinkRate');
    set('cfg-emo-blink', 'emoBlink');
    set('cfg-emo-neck', 'emoNeck');
    set('cfg-emo-breath', 'emoBreath');
    set('cfg-emo-gaze', 'emoGaze');
    set('cfg-emo-brow', 'emoBrow');

    // Miroirs utilisés par le moteur d'IA, le TTS et l'animation.
    localStorage.setItem('apiKey', localStorage.getItem('geminiKey') || '');
    localStorage.setItem('openrouterKey', localStorage.getItem('openRouterKey') || '');
    localStorage.setItem('ttsKey', localStorage.getItem('elevenlabsKey') || '');
    localStorage.setItem('geminiTtsKey', localStorage.getItem('geminiTTSKey') || '');
    localStorage.setItem('geminiVoice', localStorage.getItem('geminiTTSVoice') || 'Kore');
    localStorage.setItem('emoAngry', localStorage.getItem('emoBrow') || '0.1');
    localStorage.setItem('ttsProvider', getTtsProvider());
    localStorage.setItem('lipTeeth', String(document.getElementById('cfg-lip-teeth')?.checked ?? true));
    localStorage.setItem('autoFallback', String(document.getElementById('cfg-auto-fallback')?.checked ?? true));
    localStorage.setItem('screenVision', String(document.getElementById('cfg-screen-vision')?.checked ?? true));
    localStorage.setItem('demoMode', String(document.getElementById('cfg-demo-mode')?.checked ?? false));
    applyFallbackSetting();
    updateKeyBadges();
    saveAvatarState();
    savePanelState(document.getElementById('config-panel'));
    updateMemoryPreview();
    markPanelSaved();

    const status = document.getElementById('save-status');
    if (status) {
        status.textContent = '✅ Configuration sauvegardée comme défaut.';
        status.className = 'save-state success';
        setTimeout(() => { status.textContent = ''; }, 3000);
    }
}

function factoryReset() {
    const keys = [
        'avatarName', 'userName', 'onboardingSkipped',
        'geminiKey', 'groqKey', 'openRouterKey', 'openrouterKey', 'elevenlabsKey', 'geminiTTSKey', 'geminiTtsKey',
        'apiKey', 'ttsKey', 'coreDirectives', 'memoryEnabled', 'memorySize', 'lipSensitivity', 'lipSpeed', 'lipJaw',
        'lipSmoothing', 'lipThreshold', 'lipTeeth', 'emoBlinkRate', 'emoBlink', 'emoNeck', 'emoBreath',
        'emoGaze', 'emoBrow', 'emoAngry', 'reasoningProvider', 'reasoningModel', 'ttsProvider',
        'autoFallback', 'screenVision', 'demoMode', 'selectedVoice', 'localTtsVoice', 'elevenVoiceId', 'geminiVoice',
        'geminiTTSVoice', 'avatarMemory', 'sarra_window_state', PANEL_STATE_KEY
    ];
    keys.forEach((k) => localStorage.removeItem(k));
    location.reload();
}

function updateMemoryPreview() {
    const box = document.getElementById('memory-preview');
    const stats = document.getElementById('memory-stats');
    let mem = [];
    try { mem = JSON.parse(localStorage.getItem('avatarMemory') || '[]'); } catch { mem = []; }
    if (!Array.isArray(mem)) mem = [];

    const maxMem = Math.max(0, Math.min(10, Number.parseInt(localStorage.getItem('memorySize') || '10', 10) || 10));
    if (stats) {
        const countSpan = document.createElement('span');
        countSpan.innerHTML = `échanges <b>${mem.length}</b>`;
        const maxSpan = document.createElement('span');
        maxSpan.innerHTML = `plafond <b>${maxMem}</b>`;
        stats.replaceChildren(countSpan, maxSpan);
    }

    if (!box) return;
    box.replaceChildren();
    if (!mem.length) {
        const li = document.createElement('li');
        li.className = 'note';
        li.textContent = 'Aucun souvenir pour le moment : les échanges s’ajoutent automatiquement.';
        box.appendChild(li);
        return;
    }

    mem.forEach((entry, index) => {
        const li = document.createElement('li');
        const kind = document.createElement('span');
        kind.className = 'kind';
        kind.textContent = 'Échange';
        const text = document.createElement('span');
        text.className = 'text';
        text.textContent = entry;
        const forget = document.createElement('button');
        forget.type = 'button';
        forget.textContent = 'Oublier';
        forget.addEventListener('click', () => {
            avatarMemory = mem.filter((_, i) => i !== index);
            localStorage.setItem('avatarMemory', JSON.stringify(avatarMemory));
            updateMemoryPreview();
            const status = document.getElementById('memory-status');
            if (status) {
                status.textContent = 'Souvenir oublié.';
                status.className = 'status ok';
            }
        });
        li.append(kind, text, forget);
        box.appendChild(li);
    });
}

function populateVoiceList() {
    const select = document.getElementById('cfg-browser-voice');
    if (!select) return;
    select.replaceChildren();
    const allVoices = window.speechSynthesis?.getVoices() || [];
    const frVoices = allVoices.filter(v => (v.lang || '').toLowerCase().startsWith('fr'));
    const list = frVoices.length ? frVoices : allVoices;
    if (!list.length) {
        const opt = document.createElement('option');
        opt.value = '';
        opt.textContent = 'Voix système par défaut';
        select.appendChild(opt);
        return;
    }
    list.forEach(v => {
        const opt = document.createElement('option');
        opt.value = v.name;
        opt.textContent = `${v.name} (${v.lang})`;
        select.appendChild(opt);
    });
    const saved = localStorage.getItem('selectedVoice');
    if (saved && list.some(v => v.name === saved)) select.value = saved;
}

// Démarrage de l'overlay une fois le DOM prêt.
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initOverlay);
} else {
    initOverlay();
}

// OVERLAY APP MODE DÉMO: exposition globale de la fonction directe
window.askSarra = askSarraDirect;
window.askSarraDirect = askSarraDirect;
window.speakWithBestVoice = speakWithBestVoice;
window.speakWithLocalTts = speakWithLocalTts;
window.__sarra = window.__sarra || {};
window.__sarra.toggleConfigPanel = toggleConfigPanel;
