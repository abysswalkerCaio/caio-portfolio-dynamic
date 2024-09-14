<template>
  <section
    id="projects"
    class="flex flex-col justify-center items-center py-32 px-4 gap-6 bg-gradient-to-b from-zinc-100 to-zinc-300 dark:bg-gradient-to-b dark:from-zinc-900 dark:to-zinc-800"
  >
    <HeadingsSecondaryHeader :content="'PROJECTS'" />
    <p class="md:w-2/4 md:text-xl text-center text-zinc-800 dark:text-zinc-200">
      Here is a selection of personal projects I've developed, each with a case
      study detailing key challenges, solutions, and results, emphasizing my
      focus on innovation, efficiency, and quality.
    </p>
    <SectionsProjectsContent />
  </section>
</template>
