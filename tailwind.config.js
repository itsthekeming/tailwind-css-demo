const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Archivo", ...defaultTheme.fontFamily.sans],
        banner: ["DSG-Sans-Bold"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
