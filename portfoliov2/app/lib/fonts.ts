import { DM_Sans } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
export const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-DMSans",
});
