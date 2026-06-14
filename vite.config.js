import { defineConfig } from "vite";

import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  plugins: [cloudflare()], // Added empty plugins array to allow modification by Cloudflare/Wrangler
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});