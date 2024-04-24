<template>
  <section
    id="home"
    class="flex flex-col gap-6 md:gap-10 justify-center items-center py-40 px-4 bg-gradient-to-b from-zinc-100 to-zinc-300 dark:bg-gradient-to-b dark:from-zinc-900 dark:to-zinc-800"
  >
    <HeadingsPrimaryHeader :content="'Hello, I\'m Caio Costa'" />
    <p
      class="w-full md:w-2/4 md:text-xl py-8 pb-6 text-center text-zinc-800 dark:text-zinc-200"
    >
      I'm a fullstack developer who not only masters the secrets of both
      back-end and front-end, but also translates them into digital experiences
      that transcend expectations, bringing every pixel to life with innovation
      and technical excellence.
    </p>
    <SectionsButtonSectionsPage :content="'PROJECTS'" :to="'#projects'" />
    <font-awesome-icon
      :icon="'arrow-down'"
      class="absolute bottom-0 mb-20 text-3xl fa-bounce"
    />
  </section>
</template>
