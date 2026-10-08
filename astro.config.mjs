// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://joseguzman.dev',
  server: { port: 4321 },
  devToolbar: { enabled: false },
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
});
