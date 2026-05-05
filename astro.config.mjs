// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  server: { port: Number(process.env.PORT) || 4321, host: true },

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: cloudflare(),
});