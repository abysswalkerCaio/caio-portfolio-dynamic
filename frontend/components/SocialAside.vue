<template>
  <aside
    class="max-[767px]:hidden absolute flex flex-col w-16 h-fit top-1/2 -translate-y-1/2 bg-zinc-300 dark:bg-zinc-900 shadow-md dark:shadow-zinc-800"
  >
    <li
      v-for="link in links"
      class="flex text-3xl text-zinc-800 dark:text-zinc-200 p-2"
    >
      <a
        :href="link.to"
        target="_blank"
        class="p-3 w-full flex justify-center hover:bg-lilly-costa-200 dark:hover:bg-lilly-costa-900 transition ease-in-out rounded-lg"
      >
        <font-awesome-icon :icon="link.icon" />
      </a>
    </li>
  </aside>
</template>

<script setup lang="ts">
import type { TProps } from "../types/aside";

const props = defineProps<TProps>();
</script>
