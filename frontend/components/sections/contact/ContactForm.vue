<template>
  <form
    class="w-full sm:max-w-[750px] flex flex-col gap-6 bg-zinc-200 shadow-md dark:shadow-zinc-800 dark:bg-zinc-900 p-10 rounded"
  >
    <div class="flex flex-col gap-2 text-zinc-800 dark:text-zinc-200">
      <label for="name" class="text-xs sm:text-sm"><b>Name</b></label>
      <input
        type="text"
        id="name"
        name="name"
        class="rounded p-4 bg-zinc-300 dark:bg-zinc-800 placeholder:text-zinc-500 focus:outline-none w-full"
        placeholder="Your name..."
        maxlength="255"
        v-model="contactForm.name"
      />
    </div>
    <div class="flex flex-col gap-2 text-zinc-800 dark:text-zinc-200">
      <label for="email" class="text-xs sm:text-sm"><b>E-mail</b></label>
      <input
        type="text"
        id="email"
        name="email"
        class="rounded p-4 bg-zinc-300 dark:bg-zinc-800 placeholder:text-zinc-500 focus:outline-none w-full"
        placeholder="Your e-mail..."
        maxlength="255"
        v-model="contactForm.email"
      />
    </div>
    <div class="flex flex-col gap-2 text-zinc-800 dark:text-zinc-200">
      <label for="description" class="text-xs sm:text-sm"
        ><b>Description</b></label
      >
      <textarea
        type="text"
        id="description"
        name="description"
        class="resize-y rounded p-4 max-h-80 h-32 bg-zinc-300 dark:bg-zinc-800 placeholder:text-zinc-500 focus:outline-none w-full"
        placeholder="Your description..."
        maxlength="255"
        v-model="contactForm.description"
      />
    </div>
    <ContactFormButton :content="'SUBMIT'" :request-body="valueBody" />
  </form>
</template>

<script setup lang="ts">
import ContactFormButton from "./ContactFormButton.vue";

const contactForm = useContactFormStore();

const requestBody = ref({
  name: contactForm.name,
  email: contactForm.email,
  description: contactForm.description,
});

const valueBody = requestBody.value;
</script>
