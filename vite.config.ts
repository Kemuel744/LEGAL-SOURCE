import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * Le chemin de base et l'URL publique sont pilotés par `.env`
 * (`VITE_BASE_PATH` et `VITE_SITE_URL`) afin d'éviter les valeurs
 * codées en dur dans le code source, le HTML et le script 404.
 */
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const base = env.VITE_BASE_PATH || '/LOCAL-SOURCES/'

  return {
    base,
    plugins: [react()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    server: {
      port: 5173,
    },
    preview: {
      port: 4173,
    },
  }
})
