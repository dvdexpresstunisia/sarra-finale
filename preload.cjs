// preload.cjs — Pont IPC minimal et sécurisé.
// Aucun accès Node arbitraire n'est exposé au renderer (contextIsolation: true).
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('sarraAPI', Object.freeze({
    // Seul canal autorisé : le raccourci global Ctrl+Shift+K.
    onToggleConfig(callback) {
        if (typeof callback !== 'function') return () => {};
        const listener = () => callback();
        ipcRenderer.on('toggle-config-panel', listener);
        return () => ipcRenderer.removeListener('toggle-config-panel', listener);
    },
    // Capture d'écran (desktopCapturer côté main) pour le contexte Vision.
    captureScreen() {
        return ipcRenderer.invoke('sarra:capture-screen');
    },
    // Ouvre un lien externe contrôlé (clé API Gemini, etc.).
    openExternal(url) {
        return ipcRenderer.invoke('sarra:open-external', url);
    },
    // Active/désactive le click-through OS (true = clics traversent la fenêtre).
    setIgnoreMouseEvents(ignore) {
        ipcRenderer.send('sarra:set-ignore-mouse', Boolean(ignore));
    },
    // Réduit la fenêtre (overlay frameless : pas de bouton natif).
    minimizeWindow() {
        return ipcRenderer.invoke('sarra:window-minimize');
    },
    // Ferme la fenêtre (overlay frameless : pas de bouton natif).
    closeWindow() {
        return ipcRenderer.invoke('sarra:window-close');
    }
}));
