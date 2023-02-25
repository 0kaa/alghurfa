/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {

      // colors
      colors: {
        primary: '#FCEA10',
        dark: '#1D1D1B',
        'light-gray': '#F3F3F3',
      },
      // fonts
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
        notoSans: ['Noto Sans Arabic', 'sans-serif'],
      },
      // font sizes
      fontSize: {
        'main': ['20px', '30px'],
      },

    },
  },
  plugins: [],
}
