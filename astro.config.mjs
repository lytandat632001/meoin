import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://meoin.pages.dev',
  integrations: [sitemap()],
});