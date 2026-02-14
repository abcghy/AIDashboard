// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://abcghy.github.io',
  base: '/AIDashboard',
  vite: {
    plugins: [tailwindcss()]
  }
});