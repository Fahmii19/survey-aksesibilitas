/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "*.{html,js}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    screens: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin", "tw-elements/dist/plugin.cjs")],
};
