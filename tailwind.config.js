/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#f2f7f5",
        headline: "#00473e",
        paragraph: "#475d5b",
        button: "#faae2b",
        "button-text": "#00473e",
        stroke: "#00332c",
        highlight: "#faae2b",
        secondary: "#fa5246",
        tertiary: "#ffa8ba",
      },
    },
  },
  plugins: [],
};
