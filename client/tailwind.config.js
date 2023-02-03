/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      "2xl": "1900px",
      xl: "1400px",
      lg: "980px",
      md: "540px",
      sm: "360px",
      xs: "400px",
      "2xs": "345px",
    },
  },
  plugins: [],
};
