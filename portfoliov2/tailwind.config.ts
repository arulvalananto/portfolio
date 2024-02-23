import type { Config } from "tailwindcss";
import { dancingScript } from "./app/lib/fonts";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "radial-gradient":
          "radial-gradient(50% 50% at 50% 50%, #ffca43 48%, #ff603d 72%, #fc4dd5 88%)",
      },
      keyframes: {
        shaker: {
          "0%": { transform: "rotate(-10deg)" },
          "100%": { transform: "rotate(10deg)" },
        },
        sizeup: {
          "0%": { transform: "scale(0%)" },
          "100%": { transform: "scale(100%)" },
        },
        "shaker-reverse": {
          "0%": { transform: "rotate(10deg)" },
          "100%": { transform: "rotate(-10deg)" },
        },
        loadIn: {
          "0%": {
            opacity: "0",
            transform: "translateY(25px)",
          },
          "100%": {
            opacity: "100%",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        shaker: "shaker .8s infinite alternate",
        "shaker-reverse-slow": "shaker-reverse 1s infinite alternate",
        "shaker-reverse": "shaker-reverse 1.5s infinite alternate-reverse",
        loadIn: "loadIn .5s forwards",
        "loadIn-slow": "loadIn .3s forwards",
        "loadIn-iframe": "loadIn 1s forwards",
        "sizeup-veryslow": "sizeup 2s forwards",
        "sizeup-slow": "sizeup 1s forwards",
        "sizeup-moderate": "sizeup .5s forwards",
        "sizeup-fast": "sizeup .3s forwards",
      },
      fontFamily: {
        DMSans: ["var(--font-DMSans)"],
        poppins: ["var(--font-poppins)"],
        quicksand: ["var(--font-quicksand)"],
        dancingScript: ["var(--font-dancingscript)"],
        leagueSpartan: ["var(--font-leagueSpartan)"],
      },
      colors: {
        "portfolio-blue": "#006FC0",
        "portfolio-yellowGreen": "#EEFF7C",
        "portfolio-about-section": "#1E1E1E",
        "portfolio-about-title": "#A79CF8",
      },
    },
  },
  plugins: [],
};
export default config;
