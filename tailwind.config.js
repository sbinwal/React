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
      },
      screens: {
        'sm': '360px',
        // => @media (min-width: 360px) { ... }
  
        'md': '640px',
        // => @media (min-width: 640px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
  defaultScreen: 'xl'
};