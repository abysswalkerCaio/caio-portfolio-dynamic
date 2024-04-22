<template>
  <ClientOnly>
    <button
      class="fixed bottom-0 text-xl p-6 hover:text-lilly-costa-900 dark:hover:text-lilly-costa-200 transition ease-in-out"
      @click="isDark = !isDark"
    >
      <font-awesome-icon :icon="isDark ? 'moon' : 'sun'" />
    </button>
  </ClientOnly>
</template>

<script setup lang="ts">
const colorMode = useColorMode();
const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set() {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
  },
});
</script>
