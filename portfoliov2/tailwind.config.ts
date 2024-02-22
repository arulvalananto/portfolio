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
      fontFamily: {
        DMSans: ["var(--font-DMSans)"],
        poppins: ["var(--font-poppins)"],
        quicksand: ["var(--font-quicksand)"],
        dancingScript: ["var(--font-dancingscript)"],
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
