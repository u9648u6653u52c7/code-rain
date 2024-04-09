import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: "lib/index.ts",
      name: "CodeRain",
      fileName: "index",
    },
  },
});
