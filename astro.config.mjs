// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://coopersgrassfedbeef.com',
  integrations: [sitemap()],
  server: { port: Number(process.env.PORT) || 4321, host: true },
  vite: {
    plugins: [tailwindcss()],
  },
});
