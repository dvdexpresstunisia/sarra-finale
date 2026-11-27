# context.md — Référence absolue du projet Sarra-Final

> Mis à jour le 26/11/2026 à partir des sources réelles.
> Sources : `main.js`, `preload.cjs`, `server.js`, `index.html`, `index.mjs`, `package.json`, `vite.config.js`, `.env` (sans exposition des secrets), `start.bat`.
> ⚠️ **Mode courant = DÉMO DIRECTE** : le frontend appelle Gemini directement. Le backend Express existe toujours mais **n'est plus utilisé** par la conversation ni par le TTS.

---

## 1. Architecture Globale

```
 Electron MAIN (main.js, ESM)
 ├─ screen.getPrimaryDisplay() → BrowserWindow plein écran (x:0,y:0,w,h écran)
 ├─ transparent / frame:false / alwaysOnTop + 'screen-saver' / skipTaskbar
 ├─ focusable:true / hasShadow:false / resizable:false / movable:false
 ├─ webPreferences : nodeIntegration:false, contextIsolation:true,
 │    sandbox:false (Web Speech API), webSecurity:true, preload.cjs, webgl:true
 ├─ PAS de setIgnoreMouseEvents (click-through via CSS frontend)
 ├─ navigation verrouillée (will-navigate + setWindowOpenHandler deny)
 ├─ loadURL http://localhost:5173/ en dev, repli dist/index.html (file://)
 └─ globalShortcut Ctrl+Shift+K → IPC 'toggle-config-panel'
        │
        ▼
 preload.cjs (contextBridge)
 └─ window.sarraAPI.onToggleConfig(callback)  ← seul canal exposé
        │
        ▼
 RENDERER (index.html + index.mjs, servi par Vite 5173)
 ├─ Three.js / @pixiv/three-vrm : sarra7.vrm (VRM 1.0, 70 blendshapes)
 │   ├─ Renderer : alpha:true, antialias, ACESFilmicToneMapping, exposure 1.0,
 │   │             SRGBColorSpace, PCFSoftShadowMap
 │   ├─ Scène : background = null (transparence), RoomEnvironment + PMREM → environment
 │   ├─ Éclairage studio : Hemisphere + Directional(key, shadows) + Spot(rim)
 │   ├─ Matériaux : castShadow/receiveShadow, roughness >= 0.4 (PBR)
 │   └─ idle / clignement / regard / frameAvatar (tête)  ← INTACT
 ├─ UI overlay : #avatar-container, #mic-btn (ENFANT, bottom-center),
 │               #config-panel v2, #onboarding-modal
 ├─ Interaction : initAdvancedInteraction() → drag moitié haute (grab),
 │                resize coin bas-droit (nwse-resize), min 200x200
 ├─ Persistance : saveAvatarState()/restoreAvatarState() → 'sarra_window_state'
 ├─ Micro : SpeechRecognition fr-FR → window.askSarraDirect(text)
 ├─ Mémoire : avatarMemory (10 échanges max) → addMemory/getMemoryContext
 ├─ Panneau v2 : 6 onglets (IA, Voix, Lipsync, Émotions, Directives, Mémoire),
 │               glassmorphism, providers, tests API, calibration, presets, reset usine
 └─ askSarraDirect() → callGeminiDirect() → Gemini REST (v1beta)
        │
        ├─ Raisonnement : gemini-3.8-flash (défaut) → fallback gemini-3.1-flash-lite
        │   sur AbortError / 503 / 429 / 404 ; directives injectées en systemInstruction
        │
        └─ TTS : Gemini TTS (gemini-2.5-flash-preview-tts, voix Kore par défaut)
            PCM16 → WAV → Audio ; fallback navigateur / ElevenLabs si sélectionné
        │
        ▼
 API GOOGLE GEMINI / ELEVENLABS / GROQ / OPENROUTER (HTTPS direct depuis le renderer)
        │
        ▼
 Node Backend (server.js) — OPTIONNEL, API ONLY, 127.0.0.1:3000
 ├─ / → JSON informatif ; /api/health ; /api/chat ; /api/test-key
 ├─ Sécurité : CORS strict, X-Sarra-Client, rate-limit 30/min, loopback, 404 JSON
 └─ Non démarré par start.bat en mode démo
```

### Démarrage (`start.bat` — mode démo)
1. `npm install`
2. Libération du port **5173** uniquement (3000 libéré aussi si option `--api`)
3. `npm run dev` (Vite 5173)
4. `NODE_ENV=development npm run electron-dev` (overlay)
5. La clé Gemini se saisit dans le panneau `Ctrl+Shift+K` → onglet IA (ou `localStorage.apiKey`).

---

## 2. État Actuel — Fonctionnalités opérationnelles

| Domaine | État | Détail |
|---|---|---|
| Rendu VRM | ✅ | VRM 1.0, 70 blendshapes, cadrage gros plan tête (`frameAvatar`) |
| Rendu cinéma | ✅ | ACESFilmic, sRGB, MSAA, PCFSoft, IBL RoomEnvironment/PMREM, 3 lumières, roughness plancher |
| Transparence | ✅ | `alpha:true`, `clearAlpha 0`, `scene.background === null` |
| Overlay Electron | ✅ | Plein écran, always-on-top `screen-saver`, sans bordure/ombre, skipTaskbar |
| Click-through | ⚠️ partiel | CSS `pointer-events:none` sur `html/body`, `auto` sur avatar/micro/panneau. Sans `setIgnoreMouseEvents`, les clics sur zones vides sont absorbés par la fenêtre Electron |
| Drag / Resize | ✅ | Haut = `grab` + déplacement ; bas-droit (>70 %) = `nwse-resize` ; min 200×200 |
| Micro ancré | ✅ | `#mic-btn` enfant du conteneur, `bottom:-18px`, 48×48, centré, suit drag/resize |
| Persistance fenêtre | ✅ | `sarra_window_state = {x,y,w,h}`, restaurée avant `initAdvancedInteraction()` |
| Reconnaissance vocale | ✅ | Web Speech API `fr-FR`, repli propre si indisponible (micro grisé, titre « Micro désactivé ») |
| Conversation directe | ✅ | `askSarraDirect()` → Gemini REST, réponse → `speakWithBestVoice()` → lipsync |
| Exposition globale | ✅ | `window.askSarra`, `window.askSarraDirect`, `window.speakWithBestVoice` |
| Mémoire | ✅ | `avatarMemory`, 10 échanges max, envoyée dans le prompt via le contexte |
| État de connexion | ⛔ retiré | Badge/health-check désactivés en mode démo (plus de backend) |
| Mode dégradé | ✅ | Si Gemini échoue → voix de secours ; si TTS échoue → voix navigateur |
| Providers IA | ✅ | Gemini (défaut), Groq (Llama 3.3 70B), OpenRouter — cartes cliquables + tests |
| Providers TTS | ✅ | Gemini TTS (défaut, Kore), ElevenLabs, Navigateur — cartes cliquables + tests |
| Panneau v2 | ✅ | 6 onglets, glassmorphism, sliders live, presets de directives, compteur 2000, calibration auto/manuelle, mémoire, réglages usine |
| Sécurité Electron | ✅ | preload/CSP, navigation restreinte, pas de Node dans le renderer |
| Backend API-only | ✅ | `server.js` conservé mais **non requis** en démo |

---

## 3. Contraintes Techniques

### Versions clés
| Composant | Version | Rôle |
|---|---|---|
| Electron | ^31.0.0 | Overlay |
| Three.js | ^0.169.0 | WebGL |
| @pixiv/three-vrm | ^3.4.2 | VRM 1.0 / MToon |
| Vite | ^5.4.0 | Dev server + build |
| @google/genai | ^3.6.1 | SDK (backend optionnel, v1beta) |
| Express | ^4.21.0 | Backend optionnel |
| screenshot-desktop | ^1.15.0 | Capture écran (backend optionnel) |
| Node | v24.22.0 constaté | `AbortSignal.timeout` disponible |
| electron-store | ^8.1.0 | Déclaré, **non utilisé** |

### Ports
- **5173** : Vite (`localhost`, IPv6 `::1`). `main.js` charge `http://localhost:5173/`.
- **3000** : backend optionnel, `127.0.0.1` uniquement.
- **Production** : `dist/index.html` via `file://`.

### Modèles & clés
- Raisonnement : `gemini-3.8-flash` (défaut, `DEFAULT_REASONING_MODEL`), fallback `gemini-3.1-flash-lite`.
  - `gemini-2.5-flash` est **retiré** par Google ; toute valeur obsolète est remplacée.
- TTS : `gemini-2.5-flash-preview-tts`, voix `Kore` par défaut (Aoede/Puck/Charon disponibles).
- Providers alternatifs : Groq `llama-3.3-70b-versatile`, OpenRouter `meta-llama/llama-3.3-70b-instruct:free`, ElevenLabs `eleven_multilingual_v2`.
- `apiVersion: 'v1beta'` obligatoire pour `systemInstruction` et pour le TTS Gemini.
- Clés : saisies dans le panneau, stockées dans `localStorage` (`apiKey`, `geminiKey`, `geminiTTSKey`, `groqKey`, `openRouterKey`, `elevenlabsKey`). `.env` sert uniquement au backend optionnel.

### Timeouts
- `CHAT_TIMEOUT_MS = 8000` (fetch Gemini direct).
- Cascade : budget ~7 s total dans `generateWithFallback`-like loop (`GEMINI_FALLBACK_MODELS_DEMO`, ~3,5 s par tentative).
- Gemini TTS : 20 s (audio asynchrone).
- Tests providers : 10 s.

### localStorage (clés principales)
`apiKey`, `geminiKey`, `geminiTTSKey`, `groqKey`, `openRouterKey`, `elevenlabsKey`, `reasoningProvider`, `reasoningModel`, `ttsProvider`, `geminiTTSVoice`, `geminiVoice`, `coreDirectives`, `autoFallback`, `avatarMemory`, `memorySize`, `lipSensitivity`, `lipSpeed`, `lipJaw`, `lipSmoothing`, `lipThreshold`, `lipTeeth`, `emoBlink`, `emoBlinkRate`, `emoNeck`, `emoBreath`, `emoGaze`, `emoBrow`/`emoAngry`, `sarra_window_state`.

### CSP
`connect-src` autorise : `self`, `blob:`, `data:`, `https://generativelanguage.googleapis.com`, `https://api.elevenlabs.io`, `https://api.groq.com`, `https://openrouter.ai`, `localhost:3000`, `127.0.0.1:3000`, `localhost:5173`, `127.0.0.1:5173`, WS 5173. `object-src`, `frame-src`, `base-uri`, `form-action` = `none`.

### Limitations connues
1. Click-through système incomplet (CSS seul).
2. Web Speech API dépend d'Electron/OS ; sinon micro désactivé.
3. Clés en clair dans `localStorage` (`electron-store`/`safeStorage` non migrés).
4. Quota Google : 429 fréquent sur clés gratuites → message vocal de secours.
5. Gemini TTS peut renvoyer 400 si la clé stockée n'autorise pas le modèle TTS.
6. `/api/chat` du backend optionnel journalise `req.body` et renvoie `details` en 502 (diagnostic, à désactiver après debug).
7. MToon reste toon (IBL ne s'applique pas au skin), rendu moins photoréaliste que PBR.
8. Vite HMR peut recharger la page pendant une requête en cours.

---

## 4. Règles d'Or (non négociables)

1. **Ne jamais modifier** `buildVisemeTrack`, `applyMouthMorphs`, `startThinking`, `updateIdleAnimation`, `frameAvatar`.
2. **Ne jamais toucher** au renderer ni à l'environment map : `alpha:true`, `background:null`, ACES, sRGB, PMREM/RoomEnvironment.
3. **Ne jamais modifier** `main.js`, `preload.cjs` ni la CSP sans validation explicite.
4. **Ne jamais désactiver** le routage IPC via `window.sarraAPI` ni réintroduire `nodeIntegration`/`contextIsolation:false`.
5. **Ne jamais dépasser** 10 échanges dans `avatarMemory` sans test.
6. **Toujours conserver** `X-Sarra-Client` sur les appels au backend optionnel et `apiVersion:'v1beta'` côté SDK.
7. **Toujours conserver** le miroir `apiKey`/`emoAngry` pour le runtime (voix, idle, directives).
8. **Toujours utiliser** `resolveModel()` côté backend et la whitelist côté frontend pour les modèles.
9. **Le fond reste transparent** et la fenêtre reste always-on-top.
10. **Toute nouvelle option du panneau** doit être persistée dans `localStorage` et avoir une valeur par défaut cohérente (Gemini par défaut).

---

## 5. Historique des corrections

| Phase | Correction |
|---|---|
| Overlay | Plein écran transparent, IPC Ctrl+Shift+K, drag/resize, micro enfant ancré |
| Sécurité | preload + CSP + CORS strict + loopback + rate limit + navigation lock |
| Rendu | ACES/sRGB/MSAA, 3 lumières, IBL PMREM, roughness plancher |
| Persistance | `sarra_window_state`, restauration au chargement |
| Voix | `window.askSarra*`, Web Speech fallback, TTS haute qualité (Gemini/ElevenLabs/navigateur) |
| Panneau v2 | Glassmorphism, 6 onglets, providers, tests, calibration, presets, reset usine |
| Mode démo | Appel direct Gemini, suppression badge/health-check, timeout 8 s, cascade 503/429/404/abort |
| Défauts | Gemini raisonnement + Gemini TTS/Kore sélectionnés au premier lancement |

---

## 6. Validation de référence

```powershell
cd D:\avatar-sarra\Sarra-Final
node --check main.js
node --check server.js
node --check index.mjs
npm run build
npm run dev
npm run electron-dev
```

Contrôles runtime attendus :
- `GET http://localhost:3000/` (si backend lancé) → JSON `Sarra Backend API active`.
- `GET /api/health` + header `X-Sarra-Client` → `{"ok":true,"model":"gemini-2.5-flash"}`.
- Après `Ctrl+Shift+K` : 6 onglets, cartes **Gemini** (IA) et **Gemini TTS** (Voix) actives, voix **Kore**.
- `askSarraDirect('bonjour')` → réponse en < 8 s, voix Kore (ou repli navigateur), `avatarMemory` mis à jour.
- Après drag/resize + rechargement → position/taille identiques.
- Console : 0 erreur JS, avatar VRM chargé, `scene.background === null`, renderer `alpha:true`.
