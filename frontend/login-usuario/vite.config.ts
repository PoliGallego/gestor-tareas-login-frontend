import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  console.log(process.cwd())

  return {
    plugins: [react()],
    base: env.VITE_LOGIN_URL || '/log-in',
    server: {
      port: Number(env.LOGIN_PORT) || 3000,
      strictPort: true,
      proxy: {
        '/login': {
          target: 'http://localhost:' + (env.AUTH_BACK_PORT || '8090'),
          changeOrigin: true,
          secure: false,
        } 
      }
    }
  }
})