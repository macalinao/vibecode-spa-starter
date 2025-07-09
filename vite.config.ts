/**
 * Vite configuration for Vibecode Vite Starter
 * Created by Ian Macalinao
 * https://github.com/macalinao/vibecode-vite-starter
 */

import tailwindcss from "@tailwindcss/vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPaths(), TanStackRouterVite(), react(), tailwindcss()],
  server: {
    port: 3000,
    host: true,
  },
  build: {
    target: "esnext",
    outDir: "dist",
    sourcemap: true,
  },
});
