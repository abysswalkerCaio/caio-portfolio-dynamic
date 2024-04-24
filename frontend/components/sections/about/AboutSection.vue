<template>
  <section
    id="about"
    class="flex flex-col justify-center items-center py-32 px-4 gap-6 md:gap-10 bg-gradient-to-b from-zinc-300 to-zinc-100 dark:bg-gradient-to-b dark:from-zinc-800 dark:to-zinc-900"
  >
    <HeadingsSecondaryHeader :content="'ABOUT ME'" />
    <p class="md:w-2/4 md:text-xl text-center text-zinc-800 dark:text-zinc-200">
      Here, you'll find a more comprehensive description of me, my work, and
      my current skills, focusing on programming and technology.
    </p>
    <SectionsAboutContent />
  </section>
</template>
