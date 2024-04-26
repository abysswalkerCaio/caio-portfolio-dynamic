<template>
  <Form
    @submit="createMessage(requestBody)"
    :validation-schema="schema"
    class="w-full sm:max-w-[750px] flex flex-col gap-6 bg-zinc-200 shadow-md dark:shadow-zinc-800 dark:bg-zinc-900 p-10 rounded"
  >
    <div class="flex flex-col gap-2 text-zinc-800 dark:text-zinc-200">
      <label for="name" class="text-xs sm:text-sm"><b>Name</b></label>
      <div class="flex flex-col gap-2">
        <div class="flex">
          <div
            class="p-4 rounded-l border-r border-r-zinc-100 dark:border-r-zinc-900 bg-zinc-300 dark:bg-zinc-800"
          >
            <font-awesome-icon :icon="'address-card'" />
          </div>
          <Field
            type="text"
            id="name"
            name="name"
            class="rounded-r p-4 bg-zinc-300 dark:bg-zinc-800 placeholder:text-zinc-500 focus:outline-none w-full"
            placeholder="Your name..."
            v-model="contactForm.name"
          />
        </div>
        <ErrorMessage
          name="name"
          class="text-xs sm:text-sm text-lilly-costa-700 dark:text-lilly-costa-400"
        />
      </div>
    </div>
    <div class="flex flex-col gap-2 text-zinc-800 dark:text-zinc-200">
      <label for="email" class="text-xs sm:text-sm"><b>E-mail</b></label>
      <div class="flex flex-col gap-2">
        <div class="flex">
          <div
            class="p-4 rounded-l border-r border-r-zinc-100 dark:border-r-zinc-900 bg-zinc-300 dark:bg-zinc-800"
          >
            <font-awesome-icon :icon="'envelope'" />
          </div>
          <Field
            type="text"
            id="email"
            name="email"
            class="rounded-r p-4 bg-zinc-300 dark:bg-zinc-800 placeholder:text-zinc-500 focus:outline-none w-full"
            placeholder="Your e-mail..."
            v-model="contactForm.email"
          />
        </div>
        <ErrorMessage
          name="email"
          class="text-xs sm:text-sm text-lilly-costa-700 dark:text-lilly-costa-400"
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
        <Field
          as="textarea"
          type="text"
          id="description"
          name="description"
          class="resize-y rounded-r p-4 max-h-80 h-32 min-h-14 bg-zinc-300 dark:bg-zinc-800 placeholder:text-zinc-500 focus:outline-none w-full"
          placeholder="Your description..."
          v-model="contactForm.description"
        />
      </div>
      <ErrorMessage
        name="description"
        class="text-xs sm:text-sm text-lilly-costa-700 dark:text-lilly-costa-400"
      />
    </div>
    <ContactFormButton :content="'SUBMIT'" />
  </Form>
</template>

<script setup lang="ts">
import ContactFormButton from "./ContactFormButton.vue";
import { object, string } from "yup";

const contactForm = useContactFormStore();
const requestBody = ref(contactForm.$state);
const toast = useToast();

const { errorMessage, meta, value } = useField("description");

const schema = object({
  name: string().required("Name field is required!").max(255),
  email: string()
    .required("E-mail field is required!")
    .email("E-mail must be and valid e-mail!")
    .max(255),
  description: string().required("Description field is required!").max(255),
});

function createMessage(values: object) {
  fetchApi
    .post("/contact", values)
    .then((response) => {
      toastSuccess();
    })
    .catch((error) => {
      const { response } = error;
      toastFails(response._data);
    });
}

function toastSuccess() {
  toast.add({
    title: "Success!",
    description: "The form has been successfully submitted!",
  });
  return;
}

function toastFails(message: string) {
  toast.add({
    title: "Error!",
    description: message,
    color: "red",
  });
  return;
}
</script>
