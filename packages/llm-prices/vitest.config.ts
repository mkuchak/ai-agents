import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "node",
    include: [
      "src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}",
      "src/**/*.unit.test.{js,mjs,cjs,ts,mts,cts,jsx,tsx}",
      "src/**/*.integration.test.{js,mjs,cjs,ts,mts,cts,jsx,tsx}",
      "src/**/*.e2e.test.{js,mjs,cjs,ts,mts,cts,jsx,tsx}",
    ],
    exclude: [
      "**/node_modules/**",
      "**/dist/**",
      "**/.{idea,git,cache,output,temp}/**",
    ],
    testTimeout: 30000, // 30 seconds for integration tests
  },
});
