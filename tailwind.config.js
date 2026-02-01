// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        satoshi: ['Satoshi', 'sans-serif'], // Adding Satoshi as an option
      },
    },
  },
  plugins: [],
}
