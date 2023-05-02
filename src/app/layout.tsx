"use client";

import "@/styles/globals.css";

import type { Metadata } from "next";

import { LanguageProvider } from "@/lib/i18n";

import clsx from "clsx";
import { Playfair_Display, Mulish } from "next/font/google";
import Script from "next/script";
import { Fragment } from "react";

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

const metadata = {
    title: "Runes | Digital Creative Agency",
    description: "We help grow, elevating your brand from other competitors. We make solutions so that you don’t have to work it yourself.",
    keywords: [
        "digital creativity",
        "innovative solutions",
        "design excellence",
        "branding",
        "marketing",
        "advertising",
        "web development",
        "user experience",
        "graphic design",
        "content creation",
        "social media management",
        "video production",
        "animation",
        "virtual reality",
        "augmented reality",
        "3D modeling",
        "creative strategy",
        "visual storytelling",
    ],
    themeColor: "EFD09E",
    icons: {
        icon: "/icon.png",
    },
    category: "Digital Creative Agency",
    openGraph: {
        type: "website",
        url: "https://runes.agency/",
        images: [
            {
                url: "https://runes.agency/banner.png",
                width: 1358,
                height: 711,
                alt: "Runes | Digital Creative Agency",
            },
        ],
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        images: ["https://runes.agency/banner.png"],
    },
} satisfies Metadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <title>Runes | Digital Creative Agency</title>

                <link rel="icon" href={metadata.icons.icon} />
                <link rel="stylesheet" href="https://assets.calendly.com/assets/external/widget.css" />

                {/* <!-- Primary Meta Tags --> */}
                <meta name="title" content={metadata.title} />
                <meta name="description" content={metadata.description} />
                <meta name="keywords" content={metadata.keywords.join(", ")} />
                <meta name="theme-color" content={metadata.themeColor} />
                <meta name="robots" content="index, follow" />
                <meta name="language" content="English" />
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

                {/* <!-- Open Graph / Facebook --> */}
                <meta property="og:title" content={metadata.title} />
                <meta property="og:description" content={metadata.description} />
                <meta property="og:type" content={metadata.openGraph.type} />
                <meta property="og:url" content={metadata.openGraph.url} />
                {metadata.openGraph.images.map((image, index) => (
                    <Fragment key={index}>
                        {Object.entries(image).map(([key, value]) => {
                            return <meta key={index} property={`og:image:${key}`} content={String(value)} />;
                        })}
                    </Fragment>
                ))}

                {/* <!-- Twitter --> */}
                <meta property="twitter:card" content={metadata.twitter.card} />
                <meta property="twitter:title" content={metadata.title} />
                <meta property="twitter:description" content={metadata.description} />
                {metadata.twitter.images.map((image, index) => (
                    <meta key={index} property="twitter:image" content={image} />
                ))}
            </head>

            <body className={clsx(playfairDisplay.variable, mulish.variable, "h-full w-full")}>
                <LanguageProvider>{children}</LanguageProvider>

                <Script src="//embed.typeform.com/next/embed.js" />
                <Script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async />
            </body>
        </html>
    );
}
