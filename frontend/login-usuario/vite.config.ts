import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig, loadEnv } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      react(),
      babel({ presets: [reactCompilerPreset()] })
    ],
    server: {
      host: env.HOST || 'localhost',
      port: Number(env.PORT) || 3000,
      strictPort: true
    },
    preview: {
      host: env.HOST || 'localhost',
      port: Number(env.PORT) || 3000,
      strictPort: true
    }
  }
})
