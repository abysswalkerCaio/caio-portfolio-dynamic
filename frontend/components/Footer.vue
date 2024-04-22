<template>
  <footer
    class="flex flex-col gap-10 bg-zinc-400 dark:bg-zinc-950 text-lilly-costa-950 dark:text-lilly-costa-100 py-12 px-10 md:px-32"
  >
    <div
      class="flex flex-col-reverse md:flex-row md:justify-between gap-10 border-b border-b-zinc-500 pb-14"
    >
      <div class="flex flex-col">
        <HeadingsFifthHeader :content="'CAIO COSTA'" />
        <p
          class="md:max-w-[500px] text-sm sm:text-base text-zinc-800 dark:text-zinc-200"
        >
          I'm a fullstack developer who not only masters the secrets of both
          back-end and front-end, but also translates them into digital
          experiences that transcend expectations, bringing every pixel to life
          with innovation and technical excellence.
        </p>
      </div>
      <div class="flex flex-col">
        <HeadingsFifthHeader :content="'SOCIAL'" />
        <div class="flex gap-5 text-2xl text-zinc-800 dark:text-zinc-200">
          <li v-for="link in social" class="list-none">
            <a
              :href="link.to"
              target="_blank"
              class="hover:text-lilly-costa-900 dark:hover:text-lilly-costa-200 transition ease-out"
              ><font-awesome-icon :icon="link.icon"
            /></a>
          </li>
        </div>
      </div>
    </div>
    <span class="text-center text-sm text-zinc-800 dark:text-zinc-200"
      >© Copyright 2024. Made by Caio Costa</span
    >
  </footer>
</template>

<script setup lang="ts">
const social = [
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
];
</script>
