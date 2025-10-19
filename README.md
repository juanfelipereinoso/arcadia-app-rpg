# Arcadia — Comunidad viva

Frontend React + Vite + Tailwind + PWA (Firebase Hosting).

## 🚀 Desarrollo

```bash
npm install
npm run dev
```

URL local: http://localhost:5173

## 🏗️ Build (producción)

```bash
rmdir /s /q dist  2>nul   # en Windows (opcional)
npm run build
```

## ☁️ Deploy manual a Firebase (live)

Asegúrate de que `firebase.json` use `"public": "dist"` y SPA rewrite a `/index.html`.

```bash
firebase deploy --only hosting
```

Sitio: https://arcadiaapp-dev.web.app

## 📲 PWA

- Manifest: `public/manifest.webmanifest`
- Icons: `public/icon-192.png`, `public/icon-512.png`, `public/icon-512-maskable.png`
- SW: generado por `vite-plugin-pwa` en el build
- Registro: `registerSW()` en `src/main.tsx`

Prueba en Android: menú ⋮ → *Instalar app* (o botón **Instalar app 📲** en el header cuando esté disponible).  
En iOS: *Compartir → Añadir a pantalla de inicio*.

## 🔁 Deploy automático (GitHub Actions)

Este repo incluye un workflow opcional para desplegar automáticamente a Firebase **cuando haces push a `main`**.

### 1) Crear credencial (una sola vez)
En Firebase Console:
- *Configuración del proyecto → Cuentas de servicio → Firebase Admin SDK → Generar nueva clave privada*.
- Guarda el JSON y crea un **Secret** en GitHub:
  - Nombre: `FIREBASE_SERVICE_ACCOUNT`
  - Valor: **contenido completo del JSON**

> Alternativa: almacena el ID del proyecto como secret `FIREBASE_PROJECT_ID` (default: `arcadiaapp-dev`).

### 2) Habilitar Actions
Asegúrate de tener el archivo: `.github/workflows/deploy.yml` (incluido abajo).  
Cada push a `main` ejecutará: *checkout → Node → build → deploy*.

### 3) Despliegue manual (opcional)
También puedes ejecutar el workflow desde la pestaña **Actions** con *Run workflow*.

## 🧰 Comandos útiles

```bash
# Previsualización del build
npm run preview   # abre http://localhost:4173

# Canal de staging temporal (previews)
firebase hosting:channel:deploy staging

# Promover un canal probado a live (sin recompilar)
firebase hosting:clone arcadiaapp-dev:staging arcadiaapp-dev:live
```

## 🧯 Rollback rápido

Firebase → Hosting → *Releases* → **Restore** a una versión previa.

## 📝 Estructura mínima

```
public/
  favicon.ico
  icon-192.png
  icon-512.png
  icon-512-maskable.png
  logo-arcadia.png
  hero-arcadia.webp
  og-arcadia.jpg
  manifest.webmanifest

src/
  App.tsx
  main.tsx
index.html
index.css
vite.config.ts
firebase.json
```

---

Con ❤️ por Eureka Labs & Marianita AI.
