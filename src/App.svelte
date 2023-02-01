<!--

  ArcOS-CustomApp-Template

  This file is the main entrypoint for your app. Any code in here should
  NOT be touched as it loads the window into the WindowStore, and defines
  the ArcOS API's locally.

  Modifying this code is possible, but changing the wrong thing can lead
  to breakages of the boilerplate.

  Written by Izaak Kuipers on January 31st, 2023.

-->
<script lang="ts">
  import { onMount } from "svelte";
  import config from "../app.config.json";
  import { loadArcAPIs } from "./api";
  import Content from "./Content.svelte";
  import { AppConfig } from "./def";

  onMount(() => {
    const ArcOS = (window as ExtendedWindow).__arcos;

    if (!ArcOS || !ArcOS.loadWindow)
      return console.error(
        `App ${config.meta.name} failed to load because the ArcOS hooks could not be found. Is the frontend updated?`
      );

    // Get the loadWindow function from __arcos
    const loadWindow: WindowLoader = ArcOS.loadWindow;

    // Get the metadata from app.config.json
    const { version, author, name } = config.meta;
    const { info } = AppConfig;

    // Append the app to the WindowStore, including properties from app.config.json
    loadWindow(config.id, {
      ...AppConfig,
      content: Content,
      info: {
        ...info,
        version,
        author,
        name,
      },
    });

    // Set the global ArcOS object to __arcos
    loadArcAPIs(ArcOS);
  });
</script>
