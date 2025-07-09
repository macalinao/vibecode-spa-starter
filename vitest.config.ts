import path from "node:path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    environment: "jsdom",
    setupFiles: ["./src/test/setup.ts"],
    globals: true,
    css: true,
    include: ["src/**/*.{test,spec}.{ts,tsx}"],
    exclude: ["tests/**/*", "node_modules/**/*", "**/*.e2e.*", "**/*.spec.ts"],
    coverage: {
      reporter: ["text", "json", "html"],
      exclude: [
        "node_modules/",
        "src/test/",
        "**/*.d.ts",
        "**/*.config.*",
        "**/*.test.*",
        "**/*.spec.*",
        "src/routes/**/*.tsx",
        "src/main.tsx",
      ],
    },
  },
});
