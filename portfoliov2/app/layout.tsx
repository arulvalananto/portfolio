import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

import './globals.css'
import MetaTag from './metatag'
import ActionBar from './ui/actionbar'
import { portfolio as constants } from './data'
import { dmSans, poppins, quickSand } from './lib/fonts'

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
        >
            <MetaTag />
            <body>
                <ActionBar />
                <div className="h-20"></div>
                {children}
                <SpeedInsights />
                <Analytics />
            </body>
        </html>
    )
}
