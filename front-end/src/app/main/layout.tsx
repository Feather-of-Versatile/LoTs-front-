import type { Metadata } from "next";
import "@/app/globals.scss"
import { Noto_Sans_KR } from "next/font/google";
import Nav from "../_compoents/nav/nav";
const noto_sans = Noto_Sans_KR({ subsets: ['latin'] });

interface RootLayoutProps {
    children: React.ReactNode;
    types: string;
}

export default function RootLayout({
    children,
    types,
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
