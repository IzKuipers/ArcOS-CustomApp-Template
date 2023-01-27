<script lang="ts">
  import config from "../app.config.json";
  import { onMount } from "svelte";
  import Content from "./Content.svelte";
  import { AppConfig } from "./def";

  onMount(async () => {
    const ArcOS = (window as ExtendedWindow).__arcos;

    if (!ArcOS || !ArcOS.loadWindow)
      console.error(
        `App ${AppConfig.info.name} failed to load because the ArcOS hooks could not be found. Is the frontend updated?`
      );

    const loadWindow: WindowLoader = ArcOS.loadWindow;

    // Append the app to the WindowStore
    await loadWindow(config.id, { ...AppConfig, content: Content });
  });
</script>
