/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'shadeblack': '#050403',
        'lightblack' : '#737373',
        'lightwhite' : "#8c8c8c"
      },
      position:{
        'leftposition' : '27rem'
      }
    },
  },
  plugins: [],
};