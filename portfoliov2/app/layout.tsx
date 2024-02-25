import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";
import Navbar from "./ui/navbar";
import MetaTag from "./metatag";
import { dmSans, poppins, quickSand } from "./lib/fonts";

export const metadata: Metadata = {
  title: "Arul Valan Anto :: Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${poppins.variable} ${quickSand.variable}`}
    >
      <MetaTag />
      <body>
        <Navbar />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
