import {
  DM_Sans,
  Dancing_Script,
  League_Spartan,
  Poppins,
  Quicksand,
} from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
export const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-DMSans",
});

export const poppins = Poppins({
  subsets: ["devanagari", "latin", "latin-ext"],
  weight: ["500", "600"],
  display: "swap",
  variable: "--font-poppins",
});

export const quickSand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
  variable: "--font-quicksand",
});

export const dancingScript = Dancing_Script({
  subsets: ["vietnamese", "latin", "latin-ext"],
  weight: ["400"],
  display: "swap",
  variable: "--font-dancingscript",
});

export const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-leagueSpartan",
});
