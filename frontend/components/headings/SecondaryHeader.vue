<template>
  <h2
    class="text-3xl md:text-4xl text-lilly-costa-950 dark:text-lilly-costa-100 font-sans font-bold"
  >
    {{ content }}
  </h2>
</template>

<script setup lang="ts">
type TProps = {
  content: string;
};

const props = defineProps<TProps>();
</script>
