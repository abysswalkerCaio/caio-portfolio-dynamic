<template>
  <a
    :href="to"
    class="absolute bottom-0 mb-20 text-3xl p-2 hover:text-lilly-costa-900 dark:hover:text-lilly-costa-200 transition ease-in-out"
  >
    <font-awesome-icon :icon="'arrow-down'" class="fa-bounce" />
  </a>
</template>

<script setup lang="ts">
type TProps = {
  to: string;
};

const props = defineProps<TProps>();
</script>
