import { defineConfig, UserConfigExport } from 'vite'
import react from '@vitejs/plugin-react'
/// <reference types="vitest" />
/// <reference types="vite/client" />

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test:{
    globals: true,
    enverionment: 'jsdom',
  }
} as UserConfigExport)
