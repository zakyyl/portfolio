/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/data/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#171717",
        accent: "#2d2011",
        textlight: "#51463b",
        text: "#61574d",
      },
    },
  },
  plugins: [],
};
