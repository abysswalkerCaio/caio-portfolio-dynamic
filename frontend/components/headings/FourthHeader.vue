<template>
  <h4
    class="text-xl sm:text-2xl md:text-3xl mb-4 text-zinc-800 dark:text-zinc-200 font-sans font-bold break-all"
  >
    {{ content }}
  </h4>
</template>

<script setup lang="ts">
type TProps = {
  content: string;
};

const props = defineProps<TProps>();
</script>
