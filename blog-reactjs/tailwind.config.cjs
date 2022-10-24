/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        col1:"#1f2937",
        col2:"#6b7280",
        col3:"#d1d5db",
        col4:"#9ca3af"
      }
    },
  },
  plugins: [],
}