<template>
  <form
    class="w-full sm:max-w-[750px] flex flex-col gap-6 bg-zinc-200 shadow-md dark:shadow-zinc-800 dark:bg-zinc-900 p-10 rounded"
  >
    <div class="flex flex-col gap-2 text-zinc-800 dark:text-zinc-200">
      <label for="name" class="text-xs sm:text-sm"><b>Name</b></label>
      <div class="flex">
        <div
          class="p-4 rounded-l border-r border-r-zinc-100 dark:border-r-zinc-900 bg-zinc-300 dark:bg-zinc-800"
        >
          <font-awesome-icon :icon="'address-card'" />
        </div>
        <input
          type="text"
          id="name"
          name="name"
          class="rounded-r p-4 bg-zinc-300 dark:bg-zinc-800 placeholder:text-zinc-500 focus:outline-none w-full"
          placeholder="Your name..."
          maxlength="255"
          v-model="contactForm.name"
        />
      </div>
    </div>
    <div class="flex flex-col gap-2 text-zinc-800 dark:text-zinc-200">
      <label for="email" class="text-xs sm:text-sm"><b>E-mail</b></label>
      <div class="flex">
        <div
          class="p-4 rounded-l border-r border-r-zinc-100 dark:border-r-zinc-900 bg-zinc-300 dark:bg-zinc-800"
        >
          <font-awesome-icon :icon="'envelope'" />
        </div>
        <input
          type="text"
          id="email"
          name="email"
          class="rounded-r p-4 bg-zinc-300 dark:bg-zinc-800 placeholder:text-zinc-500 focus:outline-none w-full"
          placeholder="Your e-mail..."
          maxlength="255"
          v-model="contactForm.email"
        />
      </div>
    </div>
    <div class="flex flex-col gap-2 text-zinc-800 dark:text-zinc-200">
      <label for="description" class="text-xs sm:text-sm"
        ><b>Description</b></label
      >
      <div class="flex h-full">
        <div
          class="flex items-center h-full p-4 rounded-l border-r border-r-zinc-100 dark:border-r-zinc-900 bg-zinc-300 dark:bg-zinc-800"
        >
          <font-awesome-icon :icon="'pen-to-square'" />
        </div>
        <textarea
          type="text"
          id="description"
          name="description"
          class="resize-y rounded-r p-4 max-h-80 h-32 bg-zinc-300 dark:bg-zinc-800 placeholder:text-zinc-500 focus:outline-none w-full"
          placeholder="Your description..."
          maxlength="255"
          v-model="contactForm.description"
        />
      </div>
    </div>
    <ContactFormButton :content="'SUBMIT'" :request-body="requestBody" />
  </form>
</template>

<script setup lang="ts">
import ContactFormButton from "./ContactFormButton.vue";

const contactForm = useContactFormStore();

const requestBody = ref(contactForm.$state);
</script>
