# Login - Gestor de Tareas (Frontend)

## Variables de entorno

Este frontend es uno de los nodos del sistema distribuido; las URLs de los demás
servicios se configuran con variables de entorno en lugar de estar fijas en el código.

1. Copia la plantilla: `cp .env.example .env`
2. Ajusta los valores según dónde corra cada servicio:

| Variable              | Descripción                                   | Valor por defecto        |
|-----------------------|-----------------------------------------------|--------------------------|
| `VITE_AUTH_API_URL`   | Microservicio de autenticación (`POST /auth`) | `http://localhost:8090`  |
| `VITE_TASKS_APP_URL`  | App de tareas (redirección tras el login)     | `http://localhost:5173`  |
| `VITE_SIGNUP_APP_URL` | Frontend de registro                          | `http://localhost:3010`  |
| `PORT`                | Puerto de este frontend                       | `3000`                   |
| `HOST`                | Interfaz de escucha (`0.0.0.0` para la red)   | `localhost`              |

Notas:
- Las variables `VITE_*` se incrustan en el bundle al ejecutar `npm run build`;
  si cambias una URL debes volver a compilar. No pongas secretos en ellas.
- Si los servicios corren en máquinas distintas, usa la IP/hostname real
  (p. ej. `http://192.168.1.20:8090`) y recuerda habilitar CORS con
  `credentials` en el backend de auth para el origen de este frontend.
- Para entornos distintos puedes crear `.env.development` y `.env.production`.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.
You can also try [the experimental native React Compiler support in plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md#rust-react-compiler) by using `compiler: true` in the plugin options instead of using the Babel plugin.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```

You can also install [eslint-plugin-react-x](https://npmx.dev/package/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://npmx.dev/package/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```
