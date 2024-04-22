<template>
  <h5
    class="text-lg sm:text-xl md:text-2xl mb-4 text-zinc-800 dark:text-zinc-200 font-sans font-bold break-all"
  >
    {{ content }}
  </h5>
</template>

<script setup lang="ts">
type TProps = {
  content: string;
};

const props = defineProps<TProps>();
</script>
