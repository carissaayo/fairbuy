/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "400px",
        sm: "640px",
        md: "840px",
        lg: "1098px",
        xl: "1280px",
        "2xl": "1400px",
      },
      colors: {
        lightPrimaryBg: "#A98467",
        darkPrimaryBg: "#373435",
        primaryText: "#000000",
        mainIconColor: "#6C584C",
      },
    },
  },
  plugins: [],
};