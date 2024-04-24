<template>
  <section
    id="contact"
    class="flex flex-col justify-center items-center py-32 px-4 gap-6 md:gap-10 bg-gradient-to-b from-zinc-300 to-zinc-400 dark:bg-gradient-to-b dark:from-zinc-800 dark:to-zinc-950"
  >
    <HeadingsSecondaryHeader :content="'CONTACT'" />
    <p class="md:w-2/4 md:text-xl text-center text-zinc-800 dark:text-zinc-200">
      Please feel free to contact me by submitting the form below, and I will
      respond promptly at my earliest convenience.
    </p>
    <SectionsContactForm />
  </section>
</template>
