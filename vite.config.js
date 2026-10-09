// Relativ base så det byggede spil virker uanset hvor det hostes
import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  build: { chunkSizeWarningLimit: 1200, assetsInlineLimit: 0 },
  server: { host: true },
});
