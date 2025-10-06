import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuration Vite pour React + déploiement Vercel
export default defineConfig({
  plugins: [react()],
  base: '/', // important pour les routes absolues
  build: {
    outDir: 'dist', // dossier de sortie par défaut pour Vercel
  },
  server: {
    port: 5173,
    open: true,
  },
})
