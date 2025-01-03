/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'sm': '390px',
        'md': '570px',
        'lg' : '768px',
        'xl' : '1024px',
        '2xl' : '1280px',
      }
    },
  },
  plugins: [],
}