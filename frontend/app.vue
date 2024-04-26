<template>
  <NuxtLayout>
    <NuxtPage></NuxtPage>
    <UNotifications />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} - Caio Costa's Portfolio`
      : "Caio Costa | Caio Dev | Fullstack Developer";
  },
  meta: [
    {
      name: "description",
      content: "My new, enhanced and dyanamic portfolio.",
    },
    {
      name: "keywords",
      content:
        "Fullstack Developer, Back-end, Front-end, Hard Skills, Soft Skills, HTML, CSS, JavaScript, TypeScript, Vue.js, Nuxt.js, PHP, Laravel, MySQL, Microsoft Windows, Linux",
    },
    {
      name: "autor",
      content: "Caio Costa",
    },
  ],
});
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>
