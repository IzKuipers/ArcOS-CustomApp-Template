import { svelte } from "@sveltejs/vite-plugin-svelte";
import fs, { readFile } from "fs/promises";
import path from "path";
import type { Plugin } from "rollup";
import svgInlineLoader from "svg-inline-loader";
import { defineConfig } from "vite";

/**
 * @function svgLoader
 * Responsible for inlining SVG images into the JS bundle
 */
export const svgLoader: () => Plugin = () => {
  return {
    name: "vite-svg-patch-plugin",
    transform: async function (code, id) {
      if (!id.endsWith(".svg")) return code;

      return `export default 'data:image/svg+xml;base64,${btoa(
        svgInlineLoader.getExtractedSVG(
          await fs.readFile(id, { encoding: "utf-8" })
        )
      )}'`;
    },
  };
};

export const appmod: () => Plugin = () => {
  return {
    name: "arcos-create-appmod",
    async closeBundle() {
      const dir = path.resolve(__dirname, "dist/assets");
      const files = await fs.readdir(dir);

      files.forEach(async (file: string) => {
        const split = file.split(".");
        const ext = split[split.length - 1];

        if (ext != "js") return;

        await fs.writeFile(
          path.resolve(dir, "..", "app.base64"),
          `data:text/javascript;base64,${btoa(
            await readFile(path.resolve(dir, file), { encoding: "utf-8" })
          )}`
        );

        await fs.rename(
          path.resolve(dir, file),
          path.resolve(dir, `..`, `app.js`)
        );
      });
    },
  };
};

export default defineConfig({
  plugins: [
    svelte({
      compilerOptions: {
        css: "injected",
        customElement: true,
      },
    }),
    svgLoader(),
    appmod(),
  ],
  build: {
    assetsInlineLimit: 52428800,
  },
});
