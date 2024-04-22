<template>
  <div class="flex flex-col items-center gap-8">
    <h2
      class="text-3xl sm:text-4xl md:text-5xl text-lilly-costa-950 dark:text-lilly-costa-100 font-sans font-bold"
    >
      {{ content }}
    </h2>
    <div class="border-4 border-lilly-costa-950 dark:border-lilly-costa-100 rounded-lg w-10"></div>
  </div>
</template>

<script setup lang="ts">
type TProps = {
  content: string;
};

const props = defineProps<TProps>();
</script>
