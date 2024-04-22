import { _fontFamily } from "#tailwind-config/theme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        "lilly-costa": {
          "50": "#ffeeee",
          "100": "#ffdada",
          "200": "#ffbbbb",
          "300": "#ff8b8b",
          "400": "#ff4949",
          "500": "#ff1111",
          "600": "#ff0000",
          "700": "#e70000",
          "800": "#be0000",
          "900": "#990000",
          "950": "#560000",
        },
      },
    },
  },
  plugins: [],
};
