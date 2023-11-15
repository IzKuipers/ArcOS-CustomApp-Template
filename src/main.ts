/**
 * ! LEAVE THIS FILE AS IS !
 *
 * You shouldn't modify any code in this file as it has to
 * do with registering the application with ArcOS.
 */

import AppSvelte from "./App.svelte";
import { APP, APP_ELEMENT_TAG } from "./arcos.config";

if (!window.ArcOS) throw new Error("No ArcOS bridge! Is ArcOS up-to-date?");

// Load the application into ArcOS
window.ArcOS.applogic.loadWindow(APP_ELEMENT_TAG, APP);

// Make sure the compiler actually processes the Svelte
AppSvelte;
