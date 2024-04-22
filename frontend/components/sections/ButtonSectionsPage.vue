<template>
  <a
    :href="to"
    class="shadow-md dark:shadow-zinc-800 select-none relative bg-lilly-costa-950 hover:bg-lilly-costa-900 text-lilly-costa-100 dark:bg-lilly-costa-100 dark:hover:bg-lilly-costa-200 dark:text-lilly-costa-950 hover:-translate-y-1 transition ease-in-out duration-300 rounded p-4 w-56 text-center font-semibold"
    >{{ content }}</a
  >
</template>

<script setup lang="ts">
type TProps = {
  content: string;
  to: string;
};

const props = defineProps<TProps>();
</script>
