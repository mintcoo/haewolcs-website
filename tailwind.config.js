/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Noto Sans KR", "Arial", "sans-serif"],
        dokdo: ["dokdo"],
      },
      height: {
        "1/10": "10%",
        "10vh": "10vh",
      },
      fontSize: {
        "1vw": "1vw",
        "1.2vw": "1.2vw",
        "1.5vw": "1.5vw",
        "2vw": "2vw",
        "2.5vw": "2.5vw",
        "3vw": "3vw",
        "30vw": "30vw",
      },
    },
  },
  plugins: [],
};
