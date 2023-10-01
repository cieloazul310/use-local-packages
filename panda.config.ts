import { defineConfig } from "@pandacss/dev";
import preset from "@my-monorepo/core/preset";
import ship from "@my-monorepo/core/ship";

export default defineConfig({
  presets: ["@pandacss/preset-panda", preset],
  // Whether to use css reset
  preflight: true,
  // Where to look for your css declarations
  include: ["./src/**/*.{ts,astro}", ...ship],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          specificColorFromWebApp: { value: "#262626" },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "@my-monorepo/ui-lib",
  emitPackage: true,
});
