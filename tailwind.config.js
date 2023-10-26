/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "button-text": "#1F2328",
      "gray-btn": "#F5F8FA",
      "light-gray": "#646D76",
      "background-gray": "#F3F4F6",
      "blue-link": "#0968DA",
    },
  },
  plugins: [require("daisyui")],
};
