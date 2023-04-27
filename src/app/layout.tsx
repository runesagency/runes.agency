"use client";

import "@/styles/globals.css";

import clsx from "clsx";
import { Playfair_Display, Mulish } from "next/font/google";

const playfairDisplay = Playfair_Display({
    variable: "--font-playfair-display",
    preload: true,
    adjustFontFallback: true,
    display: "swap",
    fallback: ["serif"],
    weight: ["400", "500", "600", "700"],
    style: ["normal"],
    subsets: ["latin", "latin-ext"],
});

const mulish = Mulish({
    variable: "--font-mulish",
    preload: true,
    adjustFontFallback: true,
    display: "swap",
    fallback: ["sans-serif"],
    weight: ["400", "500", "600", "700"],
    style: ["normal"],
    subsets: ["latin", "latin-ext"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={clsx(playfairDisplay.variable, mulish.variable, "h-full w-full")}>{children}</body>
        </html>
    );
}
