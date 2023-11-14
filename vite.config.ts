import { svelte } from "@sveltejs/vite-plugin-svelte";
import fs from "fs";
import type { Plugin } from "rollup";
import svgInlineLoader from "svg-inline-loader";
import { defineConfig } from "vite";

//TODO: remove this once https://github.com/vitejs/vite/pull/2909 gets merged
export const svgLoader: () => Plugin = () => {
  return {
    name: "vite-svg-patch-plugin",
    transform: function (code, id) {
      if (!id.endsWith(".svg")) return code;

      return `export default 'data:image/svg+xml;base64,${btoa(
        svgInlineLoader.getExtractedSVG(fs.readFileSync(id, "utf8"))
      )}'`;
    },
  };
};
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte({
      compilerOptions: {
        css: "injected",
        customElement: true,
      },
    }),
    svgLoader(),
  ],
  build: {
    assetsInlineLimit: 52428800,
  },
});
