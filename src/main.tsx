import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// === Registro del Service Worker para PWA ===
// Ignoramos el tipo temporalmente porque Vite lo genera en build
// @ts-ignore
import { registerSW } from 'virtual:pwa-register'

registerSW({
  onNeedRefresh() {
    console.log('Nueva versión disponible. Refresca para actualizar.')
  },
  onOfflineReady() {
    console.log('App lista para funcionar sin conexión 💜')
  },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

