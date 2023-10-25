/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "button-black-text": "#1F2328",
      "gray-btn": "#F5F8FA",
      "background-gray": "#F3F4F6",
    },
  },
  plugins: [require("daisyui")],
};
