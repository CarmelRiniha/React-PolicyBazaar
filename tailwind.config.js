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
      'help-line':'#0065ff',
      'help-box':'#5e6384',
      'getpb-bg':'#f7f9ff',
      'pc-pink':'#fff1ed',
      'pc-blue':'#e6fcff',
      'pc-violet':'#f0edff',
      'partner':'#0000005C',
      'fea-green':'#31c48d',
      'fea-blue':'#3f83f8',
      'fea-pink':'#f8b4d9',
      'dark-blue':'#2d3cd9',
      'light-blue':'#0bbdf2',
      'light-green':'#47d990',
      'yellow':'#ffc400',
      'bg-gray':'#f2f7ff',
      'green':'#b6f4b4',
      'purple':'#998dd9',
      'orange':'#ff9a9a',
      'blue':'#00b8d9',
      'ash':'#6b778c',
      'hoverblue':'#01458c',
      'lilac':'#776bfd',
      'lightorange':'#ff9b2c',
      
    },
   
    extend: {
      fontFamily:{
        roboto:['Roboto','sans-serif']
      }
    },
  },
  plugins: [],
}

