/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: "rgb(39, 55, 77)",
        customTeal: "rgb(82, 109, 130)",
        customGray: "rgb(157, 178, 191)",
        customLightGray: "rgb(221, 230, 237)",
      },
    },
  },
  plugins: [],
};
