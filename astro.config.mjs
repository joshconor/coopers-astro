// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://coopersgrassfedbeef.com',
  // The thank-you page is noindex, so keep it out of the sitemap too —
  // otherwise the sitemap tells Google to index a page that refuses indexing.
  integrations: [sitemap({ filter: (page) => !page.includes('/thank-you') })],
  server: { port: Number(process.env.PORT) || 4321, host: true },
  vite: {
    plugins: [tailwindcss()],
  },
});
