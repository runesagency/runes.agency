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
};

module.exports = nextConfig;
