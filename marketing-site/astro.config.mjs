import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://apnagalla.com',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    build: {
      cssMinify: true,
    },
  },
});
