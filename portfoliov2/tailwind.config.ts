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
      screens: {
        xs: "425px",
      },
      backgroundImage: {
        "radial-gradient":
          "radial-gradient(50% 50% at 50% 50%, #ffca43 48%, #ff603d 72%, #fc4dd5 88%)",
        dot: "radial-gradient(black 1px, transparent 0)",
      },
      keyframes: {
        bouncer: {
          "0%": { transform: "translateX(80px)" },
          "50%": { transform: "translateX(-25px)" },
          "100%": { transform: "translateX(0px)" },
        },
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
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
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
        "bounce-right": "bouncer 1.5s ease-out",
        wiggle: "wiggle 1s ease-in-out infinite",
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
      backgroundPosition: {
        "minus-one": "-1px -1px",
      },
    },
  },
  plugins: [],
};
export default config;
