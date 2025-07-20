/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: "#3A1E66",
        indigo: "#491CA0",
        orange: "#FFA200",
        black: "#000000",
        white: "#FFFFFF",
      },
      fontFamily: {
        sans: ["'Uncut Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
