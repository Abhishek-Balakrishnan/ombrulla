import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import '@fontsource/space-grotesk';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://Abhishek-Balakrishnan.github.io',
  base: '/ombrulla',
});