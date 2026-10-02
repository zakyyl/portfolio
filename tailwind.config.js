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
        deepblack: "#050606",
        surface: "#111318",
        "surface-2": "#1C202A",
        "cool-glow": "#222939",
        bronze: "#372D1D",
        taupe: "#554933",
        gold: "#A49872",
        accent: "#D6B96A",
        champagne: "#CDCBA7",
        warmwhite: "#F4F5E7",
        muted: "#85898F",
        primary: "#050606",
        secondary: "#111318",
      },
    },
  },
  plugins: [],
};
