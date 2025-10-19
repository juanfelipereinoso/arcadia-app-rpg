// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Si VITE_BASE no está definida, usamos '/'
const base = process.env.VITE_BASE ?? '/'

export default defineConfig({
  plugins: [react()],
  base,
})

