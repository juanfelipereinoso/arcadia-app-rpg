
# Arcadia R.P.G. — Producción `19.10.25.1140`

**Arcadia** es el ecosistema comunitario donde comercios, emprendedores y vecinos crean su propio espacio digital.  
Esta versión incorpora el **módulo Red Neuronal** (mapa interactivo de conexión de Mariana IA con los módulos de Arcadia), optimizada para **móvil y escritorio**, con navegación SPA y PWA lista para deploy.  
Sitio: https://arcadiaapp-dev.web.app

> **Build:** 19.10.25.1140  
> **Fecha:** 2025-10-19  
> **Estado:** ✅ _Producción_

---

## 🧱 Stack

- **Vite + React 18**
- **TypeScript**
- **TailwindCSS 3**
- **Framer Motion**
- **lucide-react**
- **react-router-dom 6**
- **vite-plugin-pwa** (PWA lista para offline)
- **Firebase Hosting**

---

## 🚀 Desarrollo local

```bash
npm install
npm run dev
```

URL local: http://localhost:5173

---

## 🏗️ Build y Deploy

```bash
rmdir /s /q dist  2>nul   # en Windows (opcional)
npm run build:fb
firebase deploy --only hosting
```

Asegúrate de que `firebase.json` use `"public": "dist"` y SPA rewrite a `/index.html`.

---

## ☁️ Deploy automático (GitHub Actions)

### 1) Crear credencial (una sola vez)
En Firebase Console:
- *Configuración del proyecto → Cuentas de servicio → Firebase Admin SDK → Generar nueva clave privada*.
- Guarda el JSON y crea un **Secret** en GitHub:
  - Nombre: `FIREBASE_SERVICE_ACCOUNT`
  - Valor: **contenido completo del JSON**

> Alternativa: usa `FIREBASE_PROJECT_ID` (default: `arcadiaapp-dev`).

### 2) Workflow
Archivo: `.github/workflows/deploy.yml`  
Cada push a `main` ejecuta *checkout → Node → build → deploy*.

---

## 📲 PWA

- Manifest: `public/manifest.webmanifest`
- Icons: `public/icon-192.png`, `public/icon-512.png`, `public/icon-512-maskable.png`
- SW: generado por `vite-plugin-pwa`
- Registro: `registerSW()` en `src/main.tsx`

Prueba en Android: menú ⋮ → *Instalar app* (o botón **Instalar app 📲** en el header).  
En iOS: *Compartir → Añadir a pantalla de inicio*.

---

## 🧭 Rutas

- `/` → **Home**
- `/red-neuronal` → **Red Neuronal – Conexión IA Mariana**

---

## 🧰 Comandos útiles

```bash
npm run preview       # vista previa http://localhost:4173
firebase hosting:channel:deploy staging
firebase hosting:clone arcadiaapp-dev:staging arcadiaapp-dev:live
```

Rollback rápido: Firebase → Hosting → *Releases* → **Restore** versión previa.

---

## 📁 Estructura

```
public/
  icon-192.png
  icon-512.png
  logo-arcadia.png
  hero-arcadia.webp
  manifest.webmanifest

src/
  App.tsx
  main.tsx
  ArcadiaNetworkMapV3.tsx
index.html
vite.config.ts
firebase.json
```

---

## 🔥 Novedades versión 19.10.25.1140

- **Título centrado** en su propio renglón (desktop: 2 líneas) con **glow** inspirado en el core.  
- **Botón _Inicio_** en controles (móvil/escritorio) + **BONUS chip Inicio** en desktop.  
- **Panel inferior fijo** (z-60) con chips de dependencias.  
- **Chips del Home**: una línea en PC y *wrap* natural en móvil.  
- SPA + PWA estables; estilos unificados y calibraciones **ANG / RDELTA / LABEL_OFF** intactas.  
- Integración completa con navegación **SPA** vía `react-router-dom`.

---

## ♿ Accesibilidad y UX

- Contraste AA en botones/chips.  
- Estados `:hover`, `:focus-visible` y `active` incluidos.  
- Botón **Inicio** siempre visible en Red Neuronal.  
- Navegación fluida sin recarga.

---

## 👥 Créditos

- **Eureka Labs** — Dirección y diseño de producto.  
- **Juan Felipe Reinoso Reinoso** — Backend & Ops, calibración visual y coordinación técnica.  
- **Colaboradores** — UI/Frontend, animación y accesibilidad.

---

## 📄 Licencia

Todos los derechos reservados © **Arcadia R.P.G. / Eureka Labs — 2025**.  
Con ❤️ por **Eureka Labs & Marianita AI**.

---

### 🏷️ GitHub Release `v19.10.25.1140`

**Título:**  
`Versión Producción 19.10.25.1140 – Red Neuronal centrada y optimizada`

**Texto sugerido para el release:**

> **Highlights**
> - Mapa Red Neuronal optimizado: centrado, dos líneas, responsive.  
> - Botón _Inicio_ fijo y chip de navegación extra.  
> - SPA y PWA integradas, rendimiento mejorado.
>
> **Deploy:** Firebase Hosting  
> **Fecha:** 19/oct/2025 – 11:40  
> **Build:** 19.10.25.1140  
> **Estado:** Producción estable ✅
