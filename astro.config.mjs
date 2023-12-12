import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  output: 'hybrid',
  adapter: vercel()
});

/* error   Cannot use `output: 'server'` or `output: 'hybrid'` without an adapter. Please install and configure the appropriate server adapter for your final deployment.
 Hint:
   See https://docs.astro.build/en/guides/server-side-rendering/ for more information.
 Error reference:
   https://docs.astro.build/en/reference/errors/no-adapter-installed/
 File:
   /vercel/path0/node_modules/.pnpm/astro@3.4.3_typescript@5.2.2/node_modules/astro/dist/core/build/static-build.js:35:11 */