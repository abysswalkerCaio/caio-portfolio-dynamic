<template>
  <NuxtLayout>
    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} - Caio Costa's Portfolio`
      : "Caio Costa | Caio Dev | Fullstack Developer";
  },
});
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>
