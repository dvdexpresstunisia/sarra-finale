import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 5173,
    watch: {
      // Les .vrm sont de gros fichiers souvent verrouillés (copie, Blender...).
      // Les surveiller fait planter le serveur avec EBUSY : on ignore ce dossier.
      ignored: ['**/public/**']
    }
  },
  resolve: {
    extensions: ['.mjs', '.js', '.json']
  },
  optimizeDeps: {
    include: ['three', '@pixiv/three-vrm']
  }
})
