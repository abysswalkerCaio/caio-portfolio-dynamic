<template>
  <nav class="flex items-center gap-10 h-full">
    <li
      v-for="link in links"
      class="h-full flex items-center border-b-4 border-transparent hover:border-b-lilly-costa-950 dark:hover:border-b-lilly-costa-100 transition ease-in-out font-semibold"
    >
      <a :href="link.to" class="flex items-center gap-2 h-full">
        <font-awesome-icon :icon="link.icon" /> {{ link.content }}
      </a>
    </li>
  </nav>
</template>

<script setup lang="ts">
const links = [
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
];
</script>
