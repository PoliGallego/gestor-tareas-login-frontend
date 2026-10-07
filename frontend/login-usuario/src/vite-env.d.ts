/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_AUTH_API_URL: string;
  readonly VITE_TASKS_APP_URL: string;
  readonly VITE_SIGNUP_APP_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
