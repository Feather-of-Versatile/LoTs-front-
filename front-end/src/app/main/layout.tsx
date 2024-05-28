import type { Metadata } from "next";
import "@/app/globals.scss"
import { Noto_Sans_KR } from "next/font/google";
import Nav from "../_compoents/nav/nav";

interface MainLayoutProps {
    children: React.ReactNode;
    types: string;
}

export default function MainLayout({
    children,
    types,
}: Readonly<MainLayoutProps>) {
    return (
        <section>
            <Nav />
            {children}
        </section>
    )
}