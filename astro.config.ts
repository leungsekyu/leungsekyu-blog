import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import unocss from "unocss/astro";

export default defineConfig({
  site: "https://leungsekyu.com",
  integrations: [sitemap(), unocss({ injectReset: true })],
  vite: {
    resolve: {
      alias: {
        "@icons": "/public/icons",
      },
    },
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },
});
