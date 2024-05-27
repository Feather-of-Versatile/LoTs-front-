import type { Metadata } from "next";
import "./globals.scss";
import { Noto_Sans_KR } from "next/font/google";
import Nav from "./_compoents/nav/nav";

export const metadata: Metadata = {
  title: "LoTs",
  description: "라츠를 통한 편리한 팀구성",
};

const noto_sans = Noto_Sans_KR({ subsets: ['latin'] });

interface RootLayoutProps {
  children: React.ReactNode;
  types?: string; // 선택적 필드 추가
}

export default function RootLayout({
  children,
  types, // 선택적 필드 추가
}: Readonly<RootLayoutProps>) {
  return (
    <html lang="kr">
      <body className={noto_sans.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
