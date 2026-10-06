import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// Variáveis opcionais (ambiente ou .env): HOST, PORT, PREVIEW_PORT, BASE
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '')
  const host = env.HOST || '0.0.0.0'

  return {
    base: env.BASE || '/',
    plugins: [react()],
    server: { host, port: Number(env.PORT) || 5174, strictPort: true },
    preview: { host, port: Number(env.PREVIEW_PORT) || 4174, strictPort: true },
  }
})
