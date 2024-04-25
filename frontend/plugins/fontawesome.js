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
  faArrowDown,
  faAddressCard,
  faEnvelope,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

import {
  faLinkedin,
  faGithub,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  fas,
  faHouse,
  faUser,
  faFolderTree,
  faMobileScreenButton,
  faMoon,
  faSun,
  faBarsStaggered,
  faXmark,
  faArrowDown,
  faLinkedin,
  faGithub,
  faYoutube,
  faAddressCard,
  faEnvelope,
  faPenToSquare
);

config.autoAddCss = false;

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon, {});
});
