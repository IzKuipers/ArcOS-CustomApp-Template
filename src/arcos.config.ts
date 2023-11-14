import svelteIcon from "./assets/svelte.svg";
import { LogLevel } from "./types/interface";

export const APP_ELEMENT_TAG = "custom-app-template";

export const APP: App = {
  info: {
    name: "Custom App",
    description: "CustomAppTemplate",
    builtin: false,
    version: "0.0.0",
    icon: svelteIcon,
  },
  pos: { x: 0, y: 0 },
  minSize: { w: 100, h: 100 },
  maxSize: { w: 1000, h: 1000 },
  size: { w: 800, h: 600 },
  controls: { min: true, max: true, cls: true },
  state: {
    windowState: {
      max: false,
      min: false,
      fll: false,
    },
    headless: false,
    resizable: true,
  },
  content: null,
  glass: true,
  sideloaded: true,
  events: {
    open() {
      window.ArcOS.arcConsole.Log("CustomAppTemplate", "Yes.", LogLevel.warn);
    },
  },
};
