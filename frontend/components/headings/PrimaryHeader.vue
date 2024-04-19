<template>
  <h1
    class="text-4xl md:text-5xl text-lilly-costa-950 dark:text-lilly-costa-100 py-6 font-sans font-bold break-all"
  >
    {{ content }}
  </h1>
</template>

<script setup lang="ts">
type TProps = {
  content: string;
};

const props = defineProps<TProps>();
</script>
