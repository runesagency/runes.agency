// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    poweredByHeader: false,
    experimental: {
        appDir: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    redirects: async () => {
        return [
            {
                source: "/pricing-deck.pdf",
                destination: "/deck/pricing",
                permanent: true,
            },
            {
                source: "/pricing-deck-id.pdf",
                destination: "/deck/pricing",
                permanent: true,
            },
            {
                source: "/company-deck.pdf",
                destination: "/deck/intro",
                permanent: true,
            },
            {
                source: "/company-deck-id.pdf",
                destination: "/deck/intro",
                permanent: true,
            },
        ];
    },
};

module.exports = nextConfig;
