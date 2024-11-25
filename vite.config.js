import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
  server: {
    open: true,
    port: process.env.PORT || 3000,
    host: '0.0.0.0',
  },
  plugins: [react()],
  base: '/',
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
