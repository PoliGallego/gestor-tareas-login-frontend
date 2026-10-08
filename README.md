# Gestor de tareas - Frontend de Login

Aplicación frontend para autenticación de usuarios del sistema de gestión de tareas. Este proyecto está desarrollado con React + TypeScript + Vite y se encarga de renderizar el formulario de inicio de sesión, validar los datos ingresados y navegar hacia la pantalla principal o de registro según el flujo de la aplicación.

## Descripción general

El módulo de login permite:

- Iniciar sesión con correo electrónico y contraseña.
- Validar formato de email y longitud mínima de contraseña.
- Mostrar mensajes de error cuando las credenciales son incorrectas.
- Integrarse con el backend mediante una petición POST a `/login`.
- Redirigir a la pantalla principal con `setPage("home")` o a registro con `setPage("signup")`.
- Usar una librería compartida de componentes visuales: `@gestor-tareas/react-components`.

## Tecnologías utilizadas

- React 19
- TypeScript
- Vite
- CSS moderno para la UI del formulario
- Font Awesome para iconografía
- Librería compartida de componentes: `@gestor-tareas/react-components`

## Estructura del proyecto

```text
gestor-tareas-login-frontend/
├── frontend/
│   └── login-usuario/
│       ├── public/
│       ├── src/
│       │   ├── assets/
│       │   ├── components/
│       │   ├── exceptions/
│       │   ├── service/
│       │   ├── App.tsx
│       │   ├── PageContext.tsx
│       │   └── main.tsx
│       ├── .gitignore
│       ├── eslint.config.js
│       ├── index.html
│       ├── package.json
│       ├── tsconfig.json
│       ├── vite.config.ts
│       └── package-lock.json
├── README.md
└── .git
```

## Requisitos previos

Antes de ejecutar el proyecto, asegúrate de tener instalado:

- Node.js 18 o superior
- npm o pnpm
- Un backend o API que exponga el endpoint `POST /login`

## Instalación

Desde la raíz del proyecto:

```bash
cd frontend/login-usuario
npm install
```

## Ejecutar en modo desarrollo

```bash
npm run dev
```

Esto levantará el proyecto con Vite, normalmente en:

```text
http://localhost:5173
```

## Scripts disponibles

```bash
npm run dev      # inicia el entorno de desarrollo
npm run build    # compila la app para producción
npm run lint     # ejecuta ESLint
npm run preview  # previsualiza el build generado
```

## Variables y dependencias locales

Este frontend depende de una librería local compartida:

```json
"@gestor-tareas/react-components": "file:../../../../../ReactLibrary"
```

Si la librería no existe en esa ruta, debes ajustar la referencia o clonar la librería compartida en la ubicación indicada antes de instalar dependencias.

## Flujo de autenticación

1. El usuario ingresa su correo y contraseña.
2. La app valida el formato del email y la longitud de la contraseña.
3. Se realiza una petición a `/login` con `fetch`.
4. Si la respuesta es exitosa (`202 Accepted`), se navega a la vista principal.
5. Si ocurre un error de autenticación, se muestra un mensaje informativo.
6. Si hay un problema de carga o del backend, se muestra un mensaje de error interno.

## Contribución

Si quieres colaborar en este proyecto:

1. Haz un fork o clona el repositorio.
2. Crea una rama para tu cambio.
3. Realiza tus modificaciones y valida el comportamiento.
4. Abre un pull request con una descripción clara.

## Licencia

Este proyecto no especifica una licencia explícita en el repositorio. Si necesitas usarlo en producción o compartirlo públicamente, revisa antes las condiciones de uso del proyecto completo y los componentes compartidos relacionados.
