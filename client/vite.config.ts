/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    css: true,
    coverage: {
      provider: 'c8',
      all: true,
      lines: 60,
      functions: 70,
      branches: 70,
      statements: 70,
    },
  },
})
