import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arul Valan Anto :: Profile",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
