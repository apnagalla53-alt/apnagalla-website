import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://apnagalla.in',
  integrations: [sitemap({filter:page=>!/^\/(?:login|signup|404)(?:\/|\.html|$)/.test(new URL(page).pathname)})],
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
