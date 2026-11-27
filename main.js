// OVERLAY APP: Point d'entrée Electron en mode ESM
import { app, BrowserWindow, globalShortcut, screen, ipcMain, desktopCapturer, shell } from 'electron';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Fenêtre principale (référence globale pour les IPC).
let mainWindow = null;

// Recréer __dirname et __filename en mode ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// OVERLAY APP CORRECTION: Activation Web Speech API dans Electron.
app.commandLine.appendSwitch('enable-speech-dispatcher');
app.commandLine.appendSwitch('enable-features', 'WebSpeechAPI');
// Lecture audio TTS (ElevenLabs) après une requête asynchrone, sans geste utilisateur frais.
app.commandLine.appendSwitch('autoplay-policy', 'no-user-gesture-required');

// OVERLAY APP CORRECTION: Fenêtre plein écran transparente always-on-top
async function loadFrontend(win, tries = 20) {
  for (let i = 0; i < tries; i++) {
    try {
      await win.loadURL('http://localhost:5173/');
      console.log(`[Sarra] Vite OK — origine active: ${win.webContents.getURL()}`);
      return;
    } catch (error) {
      if (i === tries - 1) {
        console.warn('[Sarra] Dernière tentative Vite échouée:', error?.message || error);
      }
      await new Promise(r => setTimeout(r, 500));
    }
  }
  console.error('[Sarra] Vite injoignable après 10s (20 × 500ms) → repli dist/index.html (origine file://, localStorage distinct de http://localhost:5173)');
  await win.loadFile(join(__dirname, 'dist', 'index.html'));
  console.log(`[Sarra] Origine de repli chargée: ${win.webContents.getURL()}`);
}

function createWindow() {
  const primaryDisplay = screen.getPrimaryDisplay();
  const { width, height } = primaryDisplay.size;

  mainWindow = new BrowserWindow({
    width: width,
    height: height,
    x: 0,
    y: 0,
    transparent: true,
    frame: false,
    alwaysOnTop: true,
    skipTaskbar: true,
    focusable: true,         // UI interactive : le click-through est géré en CSS
    hasShadow: false,
    resizable: false,
    movable: false,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: false,        // CRITIQUE: désactivé pour Web Speech API
      webSecurity: true,
      allowRunningInsecureContent: false,
      preload: join(__dirname, 'preload.cjs'),
      // Rendu 3D conservé.
      webgl: true,
      experimentalFeatures: true
    }
  });

  // PAS de setIgnoreMouseEvents : le click-through est géré par le CSS frontend.
  mainWindow.setAlwaysOnTop(true, 'screen-saver');            // Au-dessus de TOUT

  // Activer le click-through par défaut (les zones interactives le désactiveront).
  mainWindow.setIgnoreMouseEvents(true, { forward: true });
  console.log('[Sarra] Click-through activé au démarrage (forward=true)');

  if (process.env.NODE_ENV === 'development') {
    loadFrontend(mainWindow);
  } else {
    console.log('[Sarra] Mode production → chargement dist/index.html (origine file://)');
    mainWindow.loadFile(join(__dirname, 'dist', 'index.html'));
  }

  // SÉCURITÉ conservée: interdire toute navigation vers une origine non maîtrisée.
  mainWindow.webContents.on('will-navigate', (event, url) => {
    const allowed = url.startsWith('http://localhost:5173/')
      || url.startsWith('http://127.0.0.1:5173/')
      || url.startsWith('file://');
    if (!allowed) {
      event.preventDefault();
      console.warn('🚫 Navigation bloquée:', url);
    }
  });
  mainWindow.webContents.setWindowOpenHandler(() => ({ action: 'deny' }));

  globalShortcut.register('CommandOrControl+Shift+K', () => {
    mainWindow.webContents.send('toggle-config-panel');
  });
}

// Capture d'écran pour le contexte Vision de Sarra (IPC sécurisé, main uniquement).
ipcMain.handle('sarra:capture-screen', async () => {
  try {
    const sources = await desktopCapturer.getSources({
      types: ['screen'],
      thumbnailSize: { width: 1280, height: 720 }
    });
    const source = sources[0];
    if (!source) return null;
    return source.thumbnail.toDataURL({ format: 'jpeg', quality: 0.7 });
  } catch (error) {
    console.warn('⚠️ Capture écran indisponible:', error.message);
    return null;
  }
});

// Ouvre un lien externe dans le navigateur par défaut (clé API Gemini, etc.).
// Liste blanche stricte : seuls les domaines officiels sont autorisés.
ipcMain.handle('sarra:open-external', async (_event, url) => {
  try {
    const parsed = new URL(String(url));
    const allowedHosts = new Set([
      'aistudio.google.com',
      'console.cloud.google.com',
      'console.groq.com',
      'openrouter.ai'
    ]);
    if (parsed.protocol !== 'https:' || !allowedHosts.has(parsed.hostname)) {
      console.warn('[Sarra] openExternal refusé (domaine non autorisé):', url);
      return false;
    }
    await shell.openExternal(parsed.toString());
    console.log('[Sarra] Lien externe ouvert:', parsed.toString());
    return true;
  } catch (error) {
    console.error('[Sarra] openExternal échoué:', error.message);
    return false;
  }
});

// Click-through : le renderer indique si la souris survole une zone interactive.
// ignore=true  → les clics traversent la fenêtre vers les applis en dessous.
// ignore=false → la fenêtre capture les clics (avatar, panneau, micro, modal).
ipcMain.on('sarra:set-ignore-mouse', (_event, ignore) => {
  if (!mainWindow) return;
  try {
    mainWindow.setIgnoreMouseEvents(Boolean(ignore), { forward: true });
  } catch (error) {
    console.error('[Sarra] setIgnoreMouseEvents échoué:', error.message);
  }
});

// Bouton « Réduire fenêtre » : minimise la fenêtre frameless overlay.
ipcMain.handle('sarra:window-minimize', async () => {
  if (!mainWindow) return false;
  try {
    mainWindow.minimize();
    console.log('[Sarra] Fenêtre réduite (IPC minimize)');
    return true;
  } catch (error) {
    console.error('[Sarra] minimize échoué:', error.message);
    return false;
  }
});

// Bouton « Fermer fenêtre » : ferme proprement l'application.
ipcMain.handle('sarra:window-close', async () => {
  if (!mainWindow) return false;
  try {
    mainWindow.close();
    console.log('[Sarra] Fenêtre fermée (IPC close)');
    return true;
  } catch (error) {
    console.error('[Sarra] close échoué:', error.message);
    return false;
  }
});

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});