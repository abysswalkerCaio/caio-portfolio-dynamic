<template>
  <div
    class="bg-zinc-100 text-lilly-costa-950 dark:bg-zinc-900 dark:text-lilly-costa-100 font-roboto h-screen grid grid-rows-[auto_360px] grid-cols-1"
  >
    <Header />
    <slot />
    <Footer />
    <ThemeButton />
  </div>
</template>
