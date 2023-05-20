/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      yellow: "#ffc61a",
      red: "#ed1b2e",
      marron: "#b52525",
      darkRed: "#841b1b",
      white: "#FFFFFF",
      peach: "#ffecb3",
      lightYellow: "#fff9e6",
      blue: "#45b7ff",
      grey: "#3f3f3f",
    },
    extend: {},
  },
  plugins: [require("tailwind-scrollbar")],
};
