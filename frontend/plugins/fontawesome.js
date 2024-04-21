// For Nuxt 3
import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import {
  faHouse,
  faUser,
  faFolderTree,
  faMobileScreenButton,
  faMoon,
  faSun,
  faBarsStaggered,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

config.autoAddCss = false;

library.add(
  fas,
  faHouse,
  faUser,
  faFolderTree,
  faMobileScreenButton,
  faMoon,
  faSun,
  faBarsStaggered,
  faXmark
);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon, {});
});
