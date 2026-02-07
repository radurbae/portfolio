import { fileURLToPath } from "node:url";
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

const isProd = process.env.NODE_ENV === "production";

export default defineConfig({
  site: process.env.SITE_URL || "https://radurbae.github.io",
  base: isProd ? "/portfolio" : "/",
  output: "static",
  trailingSlash: "always",
  integrations: [tailwind()],
  vite: {
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url))
      }
    }
  }
});
