import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node',
    globals: true,
    include: ['scripts/woo/**/*.spec.ts'],
    exclude: ['scripts/woo/woo-rest-committed-registry.spec.ts'],
  },
});
