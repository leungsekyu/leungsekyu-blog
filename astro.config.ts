import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import UnoCSS from "unocss/astro";

export default defineConfig({
  // used to generate images
  site:
    process.env.VERCEL_ENV === "production"
      ? "https://brutal.elian.codes/"
      : process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}/`
        : "https://localhost:3000/",
  trailingSlash: "ignore",
  integrations: [sitemap(), UnoCSS({ injectReset: true })],
  vite: {
    resolve: {
      alias: {
        "@icons": "/public/icons", // 为 SCSS 配置别名
      },
    },
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },
});
