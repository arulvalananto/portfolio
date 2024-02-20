import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";
import { dmSans, quickSand } from "./lib/fonts";

export const metadata: Metadata = {
  title: "Arul Valan Anto :: Software Engineer",
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
        <meta
          name="description"
          content="Hey! I am a Software Engineer based in India with more than four years of experience. I design and build robust software products and always strive for excellence."
        />
        <meta
          name="keywords"
          content="Arul Valan Anto, Portfolio, Software Engineer, React Developer"
        />

        <meta
          property="og:title"
          content="Arul Valan Anto :: Full Stack Developer"
        />
        <meta
          property="og:description"
          content="Hey! I am a Software Engineer based in India with more than four years of experience. I design and build robust software products and always strive for excellence."
        />
        <meta property="og:url" content="https://arulvalananto.vercel.app" />
        <meta property="og:image" content="[IMAGE_URL]" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta
          property="og:image:alt"
          content="Arul Valan Anto :: Full Stack Developer"
        />
        <meta
          property="og:site_name"
          content="Arul Valan Anto :: Full Stack Developer"
        />
        <meta property="og:locale" content="en_US" />

        <meta
          property="twitter:title"
          content="Arul Valan Anto :: Full Stack Developer"
        />
        <meta
          property="twitter:description"
          content="Hey! I am a Software Engineer based in India with more than four years of experience. I design and build robust software products and always strive for excellence."
        />
        <meta
          property="twitter:image"
          content="https://arulvalananto.vercel.app"
        />
        <meta
          property="twitter:image:alt"
          content="Arul Valan Anto :: Full Stack Developer"
        />
        <meta property="twitter:site" content="@arulvalananto_" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:creator" content="@arulvalananto_" />
        <meta
          property="twitter:url"
          content="https://arulvalananto.vercel.app"
        />
        <link rel="icon" type="image/png" href="/logo.png" />
      </head>

      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
