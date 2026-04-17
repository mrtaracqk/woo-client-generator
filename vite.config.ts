import path from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  root: path.join(__dirname, "playground"),
  resolve: {
    alias: {
      "@woo-sdk": path.resolve(__dirname, "generated/woo-sdk/src"),
    },
  },
  build: {
    outDir: path.join(__dirname, "dist-playground"),
    emptyOutDir: true,
  },
});
