"use client";

import { LanguageProvider } from "@/lib/i18n";
import "@/styles/globals.css";

import clsx from "clsx";
import { Playfair_Display, Mulish } from "next/font/google";
import Script from "next/script";

const playfairDisplay = Playfair_Display({
    variable: "--font-playfair-display",
    preload: true,
    adjustFontFallback: true,
    display: "swap",
    fallback: ["serif"],
    weight: ["400", "500", "600", "700"],
    style: ["normal", "italic"],
    subsets: ["latin", "latin-ext"],
});

const mulish = Mulish({
    variable: "--font-mulish",
    preload: true,
    adjustFontFallback: true,
    display: "swap",
    fallback: ["sans-serif"],
    weight: ["400", "500", "600", "700"],
    style: ["normal", "italic"],
    subsets: ["latin", "latin-ext"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                {/* <!-- Primary Meta Tags --> */}
                <title>Runes | Digital Creative Agency</title>
                <meta name="title" content="Runes | Digital Creative Agency" />
                <meta name="description" content="We help grow, elevating your brand from other competitors. We make solutions so that you don’t have to work it yourself." />

                {/* <!-- Open Graph / Facebook --> */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://metatags.io/" />
                <meta property="og:title" content="Runes | Digital Creative Agency" />
                <meta property="og:description" content="We help grow, elevating your brand from other competitors. We make solutions so that you don’t have to work it yourself." />
                <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />

                {/* <!-- Twitter --> */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://metatags.io/" />
                <meta property="twitter:title" content="Runes | Digital Creative Agency" />
                <meta property="twitter:description" content="We help grow, elevating your brand from other competitors. We make solutions so that you don’t have to work it yourself." />
                <meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />

                <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
            </head>

            <body className={clsx(playfairDisplay.variable, mulish.variable, "h-full w-full")}>
                <LanguageProvider>{children}</LanguageProvider>

                <Script src="//embed.typeform.com/next/embed.js" />
                <Script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async />
            </body>
        </html>
    );
}
