/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["NanumGothic", "Arial", "sans-serif"],
      },
      height: {
        "1/10": "10%",
      },
    },
  },
  plugins: [],
};
