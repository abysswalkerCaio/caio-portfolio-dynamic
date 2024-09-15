<template>
  <section
    id="home"
    class="flex flex-col gap-6 md:gap-10 justify-center items-center py-40 px-4 bg-gradient-to-b from-zinc-100 to-zinc-300 dark:bg-gradient-to-b dark:from-zinc-900 dark:to-zinc-800"
  >
    <HeadingsPrimaryHeader :content="'Hello, I\'m Caio Costa'" />
    <p
      class="w-full md:w-2/4 md:text-xl py-8 pb-6 text-center text-zinc-800 dark:text-zinc-200"
    >
      I'm a frontend developer with experience in backend and databases, I
      integrate different layers of technology to create digital experiences
      that exceed expectations. Combining innovation and technical excellence, I
      bring every detail to life, from the interface to the inner workings.
    </p>
    <SectionsButtonSectionsPage :content="'PROJECTS'" :to="'#projects'" />
    <GoToAboutArrow :to="'#about'" />
  </section>
</template>
