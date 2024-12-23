/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary_1: "#799958",
        primary_2: "#A5DB6E",
        primary_3: "#343C2C",
        primary_4: "#406D13",
        secondary: "#C9E1AF",
        accent: "#5AA40E",
      },
      flex: {
        2: '2 2 0%', // Растягивается в два раза больше других
        3: '3 3 0%', // Растягивается в три раза больше других
      },
      boxShadow: {
        'bottom-only': '0 6px 5px rgba(0, 0, 0, 0.2)', // Тень только снизу
      },
    },
  },
  plugins: [],
}