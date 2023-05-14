import "@/styles/globals.css";

import type { Metadata } from "next";

import { LanguageProvider } from "@/lib/i18n";
import { theme } from "tailwind.config";

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

export const metadata: Metadata = {
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
    themeColor: theme.colors.yellow.light,
    category: "Digital Creative Agency",
    openGraph: {
        title: "Runes | Digital Creative Agency",
        description: "We help grow, elevating your brand from other competitors. We make solutions so that you don’t have to work it yourself.",
        type: "website",
        url: "https://runes.agency/",
        locale: "en_US",
    },
    twitter: {
        title: "Runes | Digital Creative Agency",
        description: "We help grow, elevating your brand from other competitors. We make solutions so that you don’t have to work it yourself.",
        card: "summary_large_image",
    },
    metadataBase: new URL("https://runes.agency/"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <link rel="stylesheet" href="https://assets.calendly.com/assets/external/widget.css" />

                {/* <!-- Primary Meta Tags --> */}
                <meta name="robots" content="index, follow" />
                <meta name="language" content="English" />
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            </head>

            <body className={clsx(playfairDisplay.variable, mulish.variable, "h-full w-full")}>
                <LanguageProvider>{children}</LanguageProvider>

                <Script src="//embed.typeform.com/next/embed.js" />
                <Script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async />

                <Script async src="https://www.googletagmanager.com/gtag/js?id=G-28KTD5HK3R" strategy="afterInteractive" />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'G-28KTD5HK3R');
                    `}
                </Script>
            </body>
        </html>
    );
}
