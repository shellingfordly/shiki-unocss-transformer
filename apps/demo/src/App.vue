<script setup lang="ts">
// @ts-ignore
import HelloWorld from "./components/HelloWorld.md";

function onDark() {
  if (document.documentElement.classList.contains("dark"))
    document.documentElement.classList.remove("dark");
  else document.documentElement.classList.add("dark");
}
</script>

<template>
  <div class="w-800px ma">
    <div class="p5 space-x-3">
      <span
        class="cursor-pointer dark:c-white i-mdi:lightbulb-off dark:i-mdi:lightbulb-on"
        @click="onDark"
      />
      <a
        class="dark:c-white cursor-pointer i-mdi:github"
        href="https://github.com/shellingfordly/shiki-unocss-transformer"
        target="_blank"
      />
    </div>
    <HelloWorld />
  </div>
</template>
