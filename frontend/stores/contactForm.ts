import type { IContactForm } from "~/types/contactForm";

const STATE: IContactForm = {
  name: "",
  email: "",
  description: "",
};

export const useContactFormStore = defineStore("contactForm", {
  state: () => STATE,
  persist: {
    storage: persistedState.cookiesWithOptions({
      sameSite: "lax",
    }),
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useContactFormStore, import.meta.hot));
}
