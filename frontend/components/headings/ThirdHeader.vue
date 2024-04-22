<template>
  <h3
    class="text-2xl sm:text-3xl md:text-4xl mb-4 text-lilly-costa-950 dark:text-lilly-costa-100 font-sans font-bold break-all"
  >
    {{ content }}
  </h3>
</template>

<script setup lang="ts">
type TProps = {
  content: string;
};

const props = defineProps<TProps>();
</script>
