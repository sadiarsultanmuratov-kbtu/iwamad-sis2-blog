/// <reference types="vitest/config" />
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/iwamad-sis2-blog/', // Pages serves the blog from /iwamad-sis2-blog/
  build: { outDir: 'docs' }, // Pages: Deploy from a branch -> main -> /docs
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.ts',
  },
})
