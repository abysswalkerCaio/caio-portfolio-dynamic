<template>
  <header
    class="fixed flex justify-between h-16 sm:h-20 md:h-24 lg:h-28 items-center pl-6 md:px-12 bg-zinc-200 shadow-md dark:shadow-zinc-800 dark:bg-zinc-900 w-full z-10"
  >
    <div class="flex items-center h-full">
      <ClientOnly>
        <img
          v-if="colorMode.value === 'light'"
          src="../assets/img/caio-costa-logo-light.png"
          alt="Caio Costa's Website Logo"
          class="h-full object-contain"
        />
        <img
          v-else
          src="../assets/img/caio-costa-logo-dark.png"
          alt="Caio Costa's Website Logo"
          class="h-full object-contain"
        />
      </ClientOnly>
    </div>
    <Navbar :links="links" />
    <ScrollProgress />
  </header>
</template>

<script setup lang="ts">
const colorMode = useColorMode();

const links = ref([
  {
    content: "HOME",
    to: "#home",
    icon: "home",
  },
  {
    content: "ABOUT",
    to: "#about",
    icon: "user",
  },
  {
    content: "PROJECTS",
    to: "#projects",
    icon: "folder-tree",
  },
  {
    content: "CONTACT",
    to: "#contact",
    icon: "mobile-screen-button",
  },
]);
</script>
