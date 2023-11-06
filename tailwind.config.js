/** @type {import('tailwindcss').Config} */
export default {
  darkMode:'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        Rubik: "'Rubik', sans-serif",
        
      },
      colors: {
        "btn-bg": "#24dc7a",
      },
    },
  },
  plugins: [require("daisyui")],

};
