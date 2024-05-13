import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Nav from "./_compoents/nav/nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LoTs",
  description: "라츠를 통한 편리한 팀구성",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
