<template>
  <Container>
    <section
      id="home"
      class="flex flex-col gap-4 md:gap-10 justify-center items-center py-40 px-4 bg-gradient-to-b from-zinc-100 to-zinc-300 dark:bg-gradient-to-b dark:from-zinc-900 dark:to-zinc-800"
    >
      <HeadingsPrimaryHeader :content="'Hello, I\'m Caio Costa'" />
      <p class="md:w-1/2 md:text-xl text-center text-zinc-800 dark:text-zinc-200">
        I'm a fullstack developer who not only masters the secrets of both
        back-end and front-end, but also translates them into digital
        experiences that transcend expectations, bringing every pixel to life
        with innovation and technical excellence.
      </p>
      <ButtonSectionsPage :content="'PROJECTS'" :to="'#projects'" />
    </section>
    <section
      id="about"
      class="flex justify-center items-center py-32 px-4 bg-gradient-to-b from-zinc-300 to-zinc-100 dark:bg-gradient-to-b dark:from-zinc-800 dark:to-zinc-900"
    >
      <HeadingsSecondaryHeader :content="'About'" />
    </section>
    <section
      id="projects"
      class="flex justify-center items-center py-32 px-4 bg-gradient-to-b from-zinc-100 to-zinc-300 dark:bg-gradient-to-b dark:from-zinc-900 dark:to-zinc-800"
    >
      <HeadingsSecondaryHeader :content="'Projects'" />
    </section>
    <section
      id="contact"
      class="flex justify-center items-center py-32 px-4 bg-gradient-to-b from-zinc-300 to-zinc-400 dark:bg-gradient-to-b dark:from-zinc-800 dark:to-zinc-950"
    >
      <HeadingsSecondaryHeader :content="'Contact'" />
    </section>
  </Container>
</template>
