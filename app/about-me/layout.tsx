import type { Metadata } from "next";

import { portfolio as constants } from "../data";

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
