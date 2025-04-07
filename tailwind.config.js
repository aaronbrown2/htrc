/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", 
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        htrcGrey: '#252525',
        htrcWhite: '#fdfdfd',
        htrcOrange: '#ffa000',
      },
    },
  },
  plugins: [],
}
