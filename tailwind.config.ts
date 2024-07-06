import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Noto Sans KR", "Arial", "sans-serif"],
        dokdo: ["dokdo"],
      },
      width: {
        "10vw": "10vw",
        "20vw": "20vw",
        "30vw": "30vw",
      },
      height: {
        "1/10": "10%",
        "10vh": "10vh",
        "20vh": "20vh",
        "30vh": "30vh",
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
      animation: {
        moving: "moving 0.2s ease-in-out",
      },
      keyframes: {
        moving: {
          "0%": { transform: "translateY(-10vh)" },
          "100%": { transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
