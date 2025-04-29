/** @type {import("tailwindcss").Config} */

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // colors: {
      //   accent: {
      //     950: "var(--color-accent-950)",
      //   },
      //   primary: {
      //     500: "var(--color-primary-500)",
      //   },
      // },
    },
  },
  plugins: [],
};
