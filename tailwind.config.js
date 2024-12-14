/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    colors: {
      'footer-bg':'#091a38',
      'footer-white':'#ffffff',
      'footer-gray':'#b3bac5',
      'help-head':'#253858',
      'help-line':'#0065ff'
    },
   
    extend: {
      fontFamily:{
        'roboto':['Roboto','sans-serif']
      }
    },
  },
  plugins: [],
}

