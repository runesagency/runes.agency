// @ts-check

const plugin = require("tailwindcss/plugin");
const fs = typeof window === "undefined" ? require("fs") : null;
const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: [
        "./src/**/*.{js,ts,jsx,tsx}", //
    ],
    corePlugins: {
        container: false,
    },
    theme: {
        fontFamily: {
            "playfair-display": ["var(--font-playfair-display)", ...fontFamily.serif],
            mulish: ["var(--font-mulish)", ...fontFamily.sans],
        },
        colors: {
            transparent: "transparent",
            current: "currentColor",
            white: "#FFFFFF",
            black: "#272727",
            gray: "#D9D9D9",
            green: "#D2D8B3",
            pink: "#E5989B",
            purple: "#B5838D",
            yellow: {
                light: "#EFD09E",
                dark: "#B58266",
            },
            blue: {
                light: "#B3C6D8",
                dark: "#839DB5",
            },
            },
            screens: {
                "3xl": "1920px",
            },
        },
    },
    plugins: [],
};
