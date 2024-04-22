<template>
  <header
    class="fixed flex justify-between h-16 sm:h-20 md:h-24 lg:h-28 items-center pl-6 md:px-12 bg-zinc-200 shadow-md dark:shadow-zinc-800 dark:bg-zinc-900 w-full z-10"
  >
    <div class="flex items-center h-full">
      <span
        class="h-full flex items-center font-sans font-bold text-lg md:text-xl"
        >CAIO COSTA</span
      >
    </div>
    <Navbar :links="links" />
  </header>
</template>

<script setup lang="ts">
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
