/**
 * ArcOS Application Definition File
 *
 * This file contains the basic definitions for any ArcOS app.
 *
 * Written by Izaak Kuipers on January 26th, 2023.
 */

export const AppConfig: App = {
  info: {
    name: "(app name goes here)",
    description: "(description goes here)",
    builtin: false,
    version: "0.0.0",
    author: "(your name here)",
  },
  size: { w: 600, h: 300 },
  pos: { x: 30, y: 40 },
  minSize: { w: 600, h: 300 },
  maxSize: { w: 600, h: 300 },
  controls: { min: false, max: false, cls: true },
  state: {
    headless: false,
    resizable: false,
    windowState: { min: false, max: false, fll: false },
  },
  content: null,
  glass: false,
};
