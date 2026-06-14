import { defineConfig } from "vite";

export default defineConfig({
  plugins: [], // Added empty plugins array to allow modification by Cloudflare/Wrangler
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});