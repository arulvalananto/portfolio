import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

import './globals.css'
import MetaTag from './metatag'
import ActionBar from './ui/actionbar'
import ThemeScript from './ui/theme/script'
import { portfolio as constants } from './data'
import { ThemeProvider, ThemeToggle } from './ui/theme'
import { dmSans, poppins, quickSand } from './lib/fonts'
import PortfolioClickAnalytics from './ui/analytics/PortfolioClickAnalytics'

export const metadata: Metadata = {
    title: constants.site.metadataTitle
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html
            lang={constants.site.language}
            className={`${dmSans.variable} ${poppins.variable} ${quickSand.variable}`}
            suppressHydrationWarning
        >
            <head>
                <ThemeScript />
                <MetaTag />
            </head>
            <body suppressHydrationWarning>
                <ThemeProvider>
                    <ActionBar />
                    <ThemeToggle />
                    <PortfolioClickAnalytics />
                    <div className="h-28 xs:h-20"></div>
                    {children}
                    <SpeedInsights />
                    <Analytics />
                </ThemeProvider>
            </body>
        </html>
    )
}
