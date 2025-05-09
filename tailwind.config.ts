import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {},
      width: {
        "1/20": "5%",
        "5vw": "5vw",
        "10vw": "10vw",
        "20vw": "20vw",
        "30vw": "30vw",
      },
      height: {
        "1/10": "10%",
        "5vh": "5vh",
        "10vh": "10vh",
        "20vh": "20vh",
        "25vh": "25vh",
        "30vh": "30vh",
      },
      fontSize: {
        "1vw": "1vw",
        "1.1vw": "1.1vw",
        "1.2vw": "1.2vw",
        "1.5vw": "1.5vw",
        "2vw": "2vw",
        "2.5vw": "2.5vw",
        "3vw": "3vw",
        "30vw": "30vw",
      },
      keyframes: {
        hourglass: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        zoomout: {
          "0%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1.0)" },
        },
      },
      animation: {
        hourglass: "hourglass 2s ease-in-out infinite",
        zoomout: "zoomout 10s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
