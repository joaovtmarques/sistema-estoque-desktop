/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1D1D1D',
        secondary: '#252525',
        purple1: '#4D61FC',
        purple2: '#94A0FD',
        blue: '#269EDB',
        white: '#F1F1F1',
        gray1: '#868A91',
        gray2: '#7C7A80'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      }
    }
  },
  plugins: []
}
