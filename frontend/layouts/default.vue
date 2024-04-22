<template>
  <div
    class="bg-zinc-100 text-lilly-costa-950 dark:bg-zinc-900 dark:text-lilly-costa-100 font-roboto h-screen grid grid-rows-[auto_auto] grid-cols-1"
  >
    <Header />
    <slot />
    <Footer />
    <SocialAside :links="links" />
    <ThemeButton />
  </div>
</template>

<script setup lang="ts">
const links = ref([
  {
    to: "https://www.linkedin.com/in/caio-costa-dev/",
    icon: "fa-brands fa-linkedin",
  },
  {
    to: "https://github.com/abysswalkerCaio",
    icon: "fa-brands fa-github",
  },
  {
    to: " https://www.youtube.com/@gaiuskuste",
    icon: "fa-brands fa-youtube",
  },
]);
</script>

<style>
html.light {
  ::selection {
    background: #ffbbbb;
  }
}

html.dark {
  ::selection {
    background: #560000;
  }
}
</style>
