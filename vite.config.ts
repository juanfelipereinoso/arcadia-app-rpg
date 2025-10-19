import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'prompt',
      includeAssets: ['logo-arcadia.png', 'favicon.ico'],
      manifest: {
        name: 'Arcadia — Comunidad viva',
        short_name: 'Arcadia',
        start_url: '/',
        scope: '/',
        display: 'standalone',
        theme_color: '#120a24',
        background_color: '#120a24',
        icons: [
          { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: '/icon-512.png', sizes: '512x512', type: 'image/png' }
          // Si tienes máscara:
          // { src: '/icon-512-maskable.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,webp}']
      }
    })
  ],
  // En Firebase, la base debe ser raíz
  base: '/'
})

