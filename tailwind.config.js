/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      rose: colors.rose,
      green: colors.green,
    },
    // screens:{
    //   sm: '375px',
    //   xl:'1440px',
    // },  
    extend: {
      colors: {
        "gradient1": "hsl(6, 100%, 80%)",
        "gradient2":"hsl(335, 100%, 65%)",
        'blue':{
          'pale':'hsl(243, 100%, 93%)',
          'grayish':'hsl(229, 7%, 55%)',
          'dark':'hsl(228, 56%, 26%)',
          'very-dark':'hsl(229, 57%, 11%)'
        }
      },
    },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
      },

  },
  plugins: [],
};
