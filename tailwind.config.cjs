const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: [
    './src/**/*.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#202225",
        secondary: "#5865f2",
        gray: colors.trueGray,
        gray: {
          900: "#202225",
          800: "#222428",
          700: "#2f3136",
          600: "#36393f",
          500: "#4f545c",
          400: "#d4d7dc",
          300: "#e3e5e8",
          200: "#ebedef",
          100: "#f2f3f5",
        }

      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
