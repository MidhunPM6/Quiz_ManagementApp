/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
      bricolage: ["Bricolage Grotesque", "sans-serif"],
      poppins : ["Poppins", "sans-serif"],
      Kaushan : ["Kaushan Script", "cursive"],
      OpenSans : ["Open Sans", "sans-serif"],

      
      colors: {
          transparent: 'transparent',
          current: 'currentColor',
          'pista' : '#84b067'
      }

    }},
  },
  plugins: [],
}

 
