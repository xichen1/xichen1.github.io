/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "bg-code-light": "#F1F9F5",
        "font-code-light": "#859900",
        "bg-code-dark": "#2A2734",
        "font-code-dark": "#FFCC99",
        "selection-dark": "#91AD70"
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
