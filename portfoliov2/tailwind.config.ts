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
        inter: ["var(--font-inter)"]
      },
      colors: {
        subheading: "#747474",
        "portfolio-blue": "#006FC0",
        "portfolio-yellowGreen": "#EEFF7C",
        "portfolio-about-section": "#1E1E1E",
        "portfolio-about-title": "#A79CF8",
        linkedIn: "#0A66C2",
        github: "#010409",
        medium: "#292929",
        twitter: "#1D9BF0",
        webDevelopment: "#5D91BB",
        architectualDesign: "#F05539",
        react: "#66DBFB",
        webDesign: "#0B9DC7",
        node: "#6AA05B",
        mongoDB: "#47301E",
        mongoDBColor: "#84C16A",
        typescript: "#007BCD",
        javascript: "#F7E018",
        expressJS: "#EEEEEE",
        webpack: "#2B3A42",
        tailwindcss: "#0B1120",
        tailwindcssColor: "#35B2E9",
        sass: "#CD669A",
        redux: "#272822",
        reduxColor: "#7449B9",
        formik: "#0050CE",
        playwright: "#2B3137",
        css: "#254BDD",
        git: "#FFFFFF",
        gitColor: "#DA4B35",
        jest: "#910E1B",
        vite: "#1B1B1F",
        python: "#265074",
        firebase: "#1A73E8",
        redis: "#161F31",
        angular: "#1257B2",
        stripe: "#675DFF",
        storybook: "#FF4785",
        fastapi: "#009485",
        mysql: "#265074",
        django: "#082E23",
        postgresql: "#336690",
        figma: "#74C0FC",
        airdeck: "#4F4FF1",
        landgenius: "#FF8577",
        vidable: "#FFAB2C",
      },
      backgroundPosition: {
        "minus-one": "-1px -1px",
      },
    },
  },
  plugins: [],
};
export default config;
