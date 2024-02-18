import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";
import { dmSans, quickSand } from "./lib/fonts";

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
    <html lang="en" className={`${dmSans.variable} ${quickSand.variable}`}>
      <head>
        <meta name="theme-color" content="#ffffff" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Arul Valan Anto S" />
        <meta name="publisher" content="Arul Valan Anto S" />
        <meta name="type" content="website" />
        <meta name="description" content="Portfolio of Arul Valan Anto" />
        <meta
          name="keywords"
          content="Arul Valan Anto, Portfolio, Software Engineer, React Developer"
        />

        <meta property="og:title" content="Portfolio - Arul Valan Anto S" />
        <meta
          property="og:description"
          content="Portfolio of Arul Valan Anto"
        />
        <meta property="og:url" content="https://arulvalananto.vercel.app" />
        <meta property="og:image" content="[IMAGE_URL]" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:alt" content="Portfolio of Arul Valan Anto" />
        <meta property="og:site_name" content="Portfolio - Arul Valan Anto" />
        <meta property="og:locale" content="en_US" />

        <meta property="twitter:title" content="Portfolio - Arul Valan Anto" />
        <meta
          property="twitter:description"
          content="Portfolio of Arul Valan Anto"
        />
        <meta
          property="twitter:image"
          content="https://arulvalananto.vercel.app"
        />
        <meta
          property="twitter:image:alt"
          content="Portfolio of Arul Valan Anto"
        />
        <meta property="twitter:site" content="@arulvalananto_" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:creator" content="@arulvalananto_" />
        <meta
          property="twitter:url"
          content="https://arulvalananto.vercel.app"
        />
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
      </head>

      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
