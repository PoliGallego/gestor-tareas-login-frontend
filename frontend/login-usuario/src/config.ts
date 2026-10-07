// config.ts
// Centraliza las URLs de los demas servicios del sistema distribuido.
// Los valores vienen de las variables de entorno (.env) en tiempo de build.

function requireEnv(name: keyof ImportMetaEnv): string {
  const value = import.meta.env[name];
  if (!value) {
    throw new Error(`Falta la variable de entorno ${name}. Revisa tu archivo .env (ver .env.example).`);
  }
  return value.replace(/\/+$/, '');
}

export const config = {
  authApiUrl: requireEnv('VITE_AUTH_API_URL'),
  tasksAppUrl: requireEnv('VITE_TASKS_APP_URL'),
  signupAppUrl: requireEnv('VITE_SIGNUP_APP_URL'),
};
