<template>
  <nav class="h-full">
    <div class="flex items-center gap-10 h-full max-[767px]:hidden">
      <li
        v-for="link in links"
        class="h-full flex items-center hover:text-lilly-costa-900 dark:hover:text-lilly-costa-200 transition ease-in-out font-semibold"
      >
        <a :href="link.to" class="flex items-center gap-2 h-full">
          <font-awesome-icon :icon="link.icon" /> {{ link.content }}
        </a>
      </li>
    </div>
    <div class="md:hidden h-full w-20 transition ease-in-out">
      <button
        @click="mobileNavbar = !mobileNavbar"
        class="h-full w-full text-xl cursor-default"
      >
        <font-awesome-icon :icon="mobileNavbar ? 'xmark' : 'bars-staggered'" />
      </button>
      <Transition>
        <ul
          v-if="mobileNavbar"
          class="shadow-md absolute flex flex-col justify-end left-0 w-full divide-y divide-zinc-300 bg-zinc-200 dark:divide-zinc-800 dark:bg-zinc-900"
        >
          <li
            v-for="link in links"
            class="transition ease-in-out font-semibold list-none w-full hover:text-lilly-costa-900 hover:dark:text-lilly-costa-200"
          >
            <a
              :href="link.to"
              class="flex items-center justify-end gap-2 py-4 px-6 h-full"
            >
              <font-awesome-icon :icon="link.icon" /> {{ link.content }}
            </a>
          </li>
        </ul>
      </Transition>
    </div>
  </nav>
</template>

<script setup lang="ts">
import type { TProps } from "../types/navbar";

const isOpen = ref(false);
const mobileNavbar = computed({
  get() {
    return isOpen.value;
  },
  set() {
    isOpen.value = !isOpen.value;
  },
});

const props = defineProps<TProps>();
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
