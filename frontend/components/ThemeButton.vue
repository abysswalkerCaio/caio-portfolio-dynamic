<template>
  <ClientOnly>
    <button class="fixed p-6 bottom-0 text-xl" @click="isDark = !isDark">
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
