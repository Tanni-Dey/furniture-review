const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Bree Serif', ...defaultTheme.fontFamily.sans],
        'serif': ['Nanum Myeongjo', ...defaultTheme.fontFamily.serif],
      }
    },
  },
  plugins: [],
}
