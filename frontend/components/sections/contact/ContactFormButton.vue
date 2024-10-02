<template>
  <button
    :disabled="
      contactForm.name == '' ||
      contactForm.email == '' ||
      contactForm.description == ''
    "
    type="submit"
    class="disabled:opacity-75 shadow-md dark:shadow-zinc-800 select-none bg-lilly-costa-950 enabled:hover:bg-lilly-costa-900 text-lilly-costa-100 dark:bg-lilly-costa-100 enabled:dark:hover:bg-lilly-costa-200 dark:text-lilly-costa-950 enabled:hover:-translate-y-1 transition ease-in-out duration-300 rounded p-4 w-full max-w-56 text-center self-end font-semibold"
  >
    {{ content }}
  </button>
</template>

<script setup lang="ts">
type TProps = {
  content: string;
};

const contactForm = useContactFormStore();

const props = defineProps<TProps>();
</script>
