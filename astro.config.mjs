// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [],
  image: {
    domains: ["images.jspears.me"],
    layout: "constrained",
  },
});
