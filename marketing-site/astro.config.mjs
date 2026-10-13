import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://apnagalla.in',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    server: { proxy: { '/api': { target: process.env.DEV_API_TARGET || 'http://127.0.0.1:8010', changeOrigin: true } } },
    build: {
      assetsInlineLimit: 0,
      cssMinify: true,
    },
  },
});
