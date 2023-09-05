/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        rays: "url('/src/assets/rays.svg')",
      },
      fontFamily: {
        agrandirRegular: ['Agrandir-Regular'],
        agrandirGrandHeavy: ['Agrandir-GrandHeavy'],
        agrandirTextBold: ['Agrandir-TextBold'],
        mulish: ["Mulish"],
      }
    },
  },
  plugins: [],
}

