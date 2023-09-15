/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    screens: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      // fontFamily: {
      //   helvetica: ["Helvetica"],
      // },
      // fontFamily: {
      //   // "sf-pro": ["SF Pro"],
      // },
      // fontFamily: {
      //   inter: ["Inter"],
      // },
    },
  },
  plugins: [require("flowbite/plugin")],
};
