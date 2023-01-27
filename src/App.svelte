<script lang="ts">
  import { onMount } from "svelte";
  import Content from "./Content.svelte";
  import { AppConfig } from "./def";

  onMount(async () => {
    const ArcOS = (window as any).__arcos;

    if (!ArcOS) throw new Error("Can't hook onto exposed API, halting.");

    const loadWindow: WindowLoader = ArcOS.loadWindow;

    await loadWindow("customApp", { ...AppConfig, content: Content });
  });
</script>
