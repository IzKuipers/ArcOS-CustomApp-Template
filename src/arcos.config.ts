import svelteIcon from "./assets/svelte.svg";

export const APP_ELEMENT_TAG = "app-id-goes-here"; // Make sure this matches the tag in App.svelte!

export const APP: App = {
  info: {
    name: "YOUR APP NAME HERE",
    description: "YOUR APP DESCRIPTION HERE",
    builtin: false,
    version: "0.0.0", // x.x.x version
    icon: svelteIcon, // Import to an image to use as app icon.
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
  // ! LEAVE THIS VALUE AS TRUE !
  sideloaded: true,
};
