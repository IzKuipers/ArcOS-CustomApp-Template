import AppSvelte from "./App.svelte";
import { APP, APP_ELEMENT_TAG } from "./arcos.config";

// Load the application into ArcOS
window.ArcOS.applogic.loadWindow(APP_ELEMENT_TAG, APP);

// Make sure the compiler actually processes the Svelte
AppSvelte;
