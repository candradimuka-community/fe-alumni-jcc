/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'primary-yellow':'#FFD026',
        'primary-blue':'#1E88E5',
        'primary-green':'#16A75C'
      }
    },
  },
  plugins: [],
}
