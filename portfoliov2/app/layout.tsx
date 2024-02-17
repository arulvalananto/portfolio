import type { Metadata } from "next";

import "./globals.css";
import { dmSans } from "./lib/fonts";

export const metadata: Metadata = {
  title: "Portfolio - Arul Valan Anto",
  description: "A portfolio of Arul Valan Anto, a software engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dmSans.className}>
      <body>{children}</body>
    </html>
  );
}
