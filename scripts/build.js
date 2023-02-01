/**
 * ArcOS application module generator
 *
 * This file is used to generate the application JSON **AFTER** the Svelte project is compiled.
 *
 * Below you can find several options you can modify:
 *
 * @var CONFIGFILE The path to the app configuration file
 * @var ASSETS_DIR The compiled Svelte Project assets directory
 * @var MODULE_OUT The path to which the application JSON file will be written.
 *
 * * These options will be called from build.config.json by default *
 *
 * Written by Izaak Kuipers on January 27th, 2023.
 */

import fs, { writeFile } from "fs/promises";
import path from "path";
import buildconfig from "../build.config.json" assert { type: "json" };

const CONFIGFILE = buildconfig.configFile;
const ASSETS_DIR = buildconfig.assetsDir;
const MODULE_OUT = buildconfig.outFile;

(async () => {
  console.log("\nSTATUS  : Creating app file for ExternalAppLoader");

  let info;

  try {
    info = JSON.parse(await fs.readFile(CONFIGFILE));
  } catch {
    return console.log(
      `FATAL   : ${CONFIGFILE} file doesn't exist or is invalid. Aborting.`
    );
  }

  if (!info)
    return console.log(
      `FATAL   : parsed config is empty. Please check ${CONFIGFILE}.`
    );

  console.log(`STATUS  : Verifying properties of ${CONFIGFILE}`);

  const meta = info.meta || {};
  const id = info.id || "";

  const name = meta.name || "";
  const version = meta.version || "";
  const author = meta.author || "";

  const verifyList = [meta, id, name, version, author];

  for (let i = 0; i < verifyList.length; i++) {
    if (!verifyList[i])
      return console.log(
        `FATAL   : Configuration file is missing one or more required properties.`
      );
  }

  console.log(
    `SUCCESS : All properties in ${CONFIGFILE} are valid, proceeding.`
  );

  const target = MODULE_OUT.split("$$ID").join(id);

  const out = {
    meta,
    id,
  };

  console.log("STATUS  : Getting compiled svelte JS and CSS");

  const files = await fs.readdir(ASSETS_DIR, { encoding: "utf-8" });

  for (let i = 0; i < files.length; i++) {
    if (!files[i].startsWith("index-")) continue;

    if (files[i].endsWith(".css")) {
      out.css = await fs.readFile(path.join(ASSETS_DIR, files[i]), {
        encoding: "utf-8",
      });
    }

    if (files[i].endsWith(".js")) {
      out.js = await fs.readFile(path.join(ASSETS_DIR, files[i]), {
        encoding: "utf-8",
      });
    }
  }

  out.js = out.js.replace(".$$.root", "");
  out.js = `"use strict"; (() => {${out.js};})()`;

  console.log(`STATUS  : Creating ${target}`);

  await writeFile(target, JSON.stringify(out), {
    encoding: "utf-8",
  });

  console.log(`SUCCESS : file generated: check ${target}\n`);
})();
