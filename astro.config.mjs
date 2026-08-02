import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.gilchen-zion.com",
  integrations: [sitemap()],
});
