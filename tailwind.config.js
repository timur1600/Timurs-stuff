/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  darkMode:'class',
  theme: {
    extend: {},
  },
  plugins: [],
}


module.exports = {
  //.... All the initial code
  theme: {
      extend: {
          fontFamily: {
              'ming1' : ['MINGLIU'],  // after you font, add some fonts separated by commas to handle fallback.
          }
      }
  }
  //.... All the initial code
}

