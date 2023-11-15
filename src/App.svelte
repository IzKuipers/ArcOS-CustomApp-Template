<!-- Change tag to your own ID. -->
<svelte:options customElement={{ tag: "app-id-goes-here", shadow: "none" }} />

<!--
  ! DO NOT MODIFY THIS FILE BEYOND THIS POINT !

  This file may be used in the future for making the app work. Please keep
  this file as is from this point onward to prevent breakages in the future.

  >> Your app content lives in ./lib/Content.svelte.
-->

<script lang="ts">
  import { onMount } from "svelte";
  import Content from "./lib/Content.svelte";

  onMount(() => {
    if (!window.ArcOS) console.error("No ArcOS bridge! Is ArcOS up-to-date?");
  });
</script>

<Content />
