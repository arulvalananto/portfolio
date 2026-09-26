import type { Metadata } from 'next';

import constants from '../lib/constants';

export const metadata: Metadata = {
    title: constants.aboutMe.metadataTitle,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <div>{children}</div>;
}
