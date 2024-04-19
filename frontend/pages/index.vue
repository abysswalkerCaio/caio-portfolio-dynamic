<template>
  <Container>
    <section
      class="flex justify-center items-center py-32 px-4 bg-gradient-to-b from-zinc-100 to-zinc-300 dark:bg-gradient-to-b dark:from-zinc-900 dark:to-zinc-800"
    >
      <HeadingsPrimaryHeader :content="'Hello, I\'m Caio Costa'" />
    </section>
    <section
      class="flex justify-center items-center py-32 px-4 bg-gradient-to-b from-zinc-300 to-zinc-100 dark:bg-gradient-to-b dark:from-zinc-800 dark:to-zinc-900"
    >
      <HeadingsSecondaryHeader :content="'About'" />
    </section>
    <section
      class="flex justify-center items-center py-32 px-4 bg-gradient-to-b from-zinc-100 to-zinc-300 dark:bg-gradient-to-b dark:from-zinc-900 dark:to-zinc-800"
    >
      <HeadingsSecondaryHeader :content="'Projects'" />
    </section>
    <section
      class="flex justify-center items-center py-32 px-4 bg-gradient-to-b from-zinc-300 to-zinc-400 dark:bg-gradient-to-b dark:from-zinc-800 dark:to-zinc-950"
    >
      <HeadingsSecondaryHeader :content="'Contact'" />
    </section>
  </Container>
</template>
