/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/pages/*.{js,jsx,ts,tsx}",
    "./src/components/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    extend: {
        fontFamily: {
          'poppins':['Poppins']
        },
        screens: {
          'sm':'320px',
          'md': '640px',    
          'lg': '1024px',    
          'xl': '1280px',
        },
    }, 
  },
  plugins: [],
}