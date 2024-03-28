/* @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00274C",
      },
      fontFamily: {
        'noto-sans': ['"Noto Sans"', 'sans-serif'],
        'karma': ['"Crimson Pro"', 'serif']
      }
    },
  },
  plugins: [],
};
