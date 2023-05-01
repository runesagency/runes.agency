import { useLanguage } from "@/lib/i18n";
import { theme } from "tailwind.config";

import clsx from "clsx";
import { useCallback, useState } from "react";

type PortfolioItem = {
    type: "portfolio";
    title: string;
    description?: string;
    url: string;
    backgroundColor: string;
    textColor?: "white" | "black";
    imageUrl?: string;
    imagePosition?: "left top" | "left center" | "left bottom" | "right top" | "right center" | "right bottom" | "center top" | "center" | "center bottom";
    imageFit?: "contain" | "cover";
};

type PortfolioContainer = {
    type: "container";
    items: (PortfolioItem | PortfolioContainer)[];
    align: "vertical" | "horizontal";
};

const portfolio: PortfolioContainer[][] = [
    [
        {
            type: "container",
            align: "horizontal",
            items: [
                {
                    type: "portfolio",
                    title: "Behind The Runes",
                    description: "Illustrations for team behind Runes",
                    url: "#0",
                    imageUrl: "behind-the-runes.png",
                    textColor: "white",
                    backgroundColor: theme.colors.black,
                },
                {
                    type: "container",
                    align: "vertical",
                    items: [
                        {
                            type: "portfolio",
                            title: "Lemo, Luna, and Hupa",
                            description: "Our lovely mascot 💖",
                            url: "#0",
                            imageUrl: "lemo-luna-hupa.png",
                            imagePosition: "right top",
                            backgroundColor: theme.colors.green,
                        },
                        {
                            type: "portfolio",
                            title: "HarvPort",
                            url: "#0",
                            textColor: "white",
                            imageUrl: "harvport.png",
                            imagePosition: "right center",
                            backgroundColor: theme.colors.black,
                        },
                    ],
                },
            ],
        },
        {
            type: "container",
            align: "horizontal",
            items: [
                {
                    type: "portfolio",
                    title: "Si Paling Tahu",
                    description: "Mascot for @tahubergaya Instagram",
                    url: "#0",
                    imageUrl: "si-paling-tahu.png",
                    backgroundColor: theme.colors.yellow.light,
                },
                {
                    type: "portfolio",
                    title: "Ramadhan Kareem",
                    url: "#0",
                    textColor: "white",
                    imageUrl: "ramadhan-kareem.png",
                    imageFit: "cover",
                    backgroundColor: theme.colors.black,
                },
                {
                    type: "portfolio",
                    title: "Pretty Girl",
                    url: "#0",
                    imageUrl: "pretty-girl.png",
                    imageFit: "cover",
                    backgroundColor: theme.colors.blue.light,
                },
            ],
        },
    ],
    [
        {
            type: "container",
            align: "horizontal",
            items: [
                {
                    type: "portfolio",
                    title: "Sleek",
                    url: "#0",
                    imageUrl: "sleek.png",
                    backgroundColor: theme.colors.blue.light,
                },
                {
                    type: "portfolio",
                    title: "Tune Music Bot",
                    url: "#0",
                    imageUrl: "tune-music-bot.png",
                    backgroundColor: theme.colors.pink,
                },
            ],
        },
        {
            type: "container",
            align: "horizontal",
            items: [
                {
                    type: "portfolio",
                    title: "PowTalk Omnichannel",
                    url: "#0",
                    imageUrl: "powtalk-omnichannel.png",
                    imagePosition: "left bottom",
                    backgroundColor: theme.colors.blue.light,
                },
                {
                    type: "portfolio",
                    title: "Green Bot Music Dashboard",
                    url: "#0",
                    imageUrl: "green-bot-music-dashboard.png",
                    imagePosition: "left bottom",
                    backgroundColor: theme.colors.green,
                },
                {
                    type: "portfolio",
                    title: "Tune Music Bot Dashboard",
                    url: "#0",
                    imageUrl: "tune-music-bot-dashboard.png",
                    imagePosition: "left bottom",
                    backgroundColor: theme.colors.pink,
                },
            ],
        },
        {
            type: "container",
            align: "horizontal",
            items: [
                {
                    type: "portfolio",
                    title: "Invite Manager",
                    url: "#0",
                    imageUrl: "invite-manager.png",
                    backgroundColor: theme.colors.blue.light,
                },
                {
                    type: "portfolio",
                    title: "Briton English Education",
                    url: "#0",
                    imageUrl: "briton-english-education.png",
                    backgroundColor: theme.colors.pink,
                },
                {
                    type: "portfolio",
                    title: "Runes",
                    url: "#0",
                    imageUrl: "runes.png",
                    backgroundColor: theme.colors.yellow.light,
                },
            ],
        },
    ],
    [
        {
            type: "container",
            align: "horizontal",
            items: [
                {
                    type: "portfolio",
                    title: "Hupa",
                    description: "Your private DJ in your Discord server",
                    url: "#0",
                    imageUrl: "hupa.png",
                    backgroundColor: theme.colors.blue.light,
                },
            ],
        },
    ],
    [
        {
            type: "container",
            align: "horizontal",
            items: [
                {
                    type: "portfolio",
                    title: "Feby Putri - Bync Recordings",
                    description: "www.byncrecords.com",
                    url: "https://byncrecords.com/",
                    textColor: "white",
                    imageUrl: "feby-putri-bync-recordings.png",
                    backgroundColor: theme.colors.black,
                },
                {
                    type: "portfolio",
                    title: "Madaya Group",
                    description: "www.madayagroup.com",
                    url: "https://madayagroup.com/",
                    imageUrl: "madaya-group.png",
                    backgroundColor: theme.colors.pink,
                },
                {
                    type: "portfolio",
                    title: "Araloka Studio",
                    description: "www.aralokastudios.com",
                    url: "https://aralokastudios.com/",
                    imageUrl: "araloka-studio.png",
                    backgroundColor: theme.colors.green,
                },
            ],
        },
        {
            type: "container",
            align: "horizontal",
            items: [
                {
                    type: "portfolio",
                    title: "Duta Bahasa Inggris 2022",
                    url: "#0",
                    imageUrl: "duta-bahasa-inggris-2022.png",
                    backgroundColor: theme.colors.blue.light,
                },
                {
                    type: "portfolio",
                    title: "Briton English",
                    description: "www.britonenglish.co.id",
                    url: "https://britonenglish.co.id/",
                    imageUrl: "briton-english.png",
                    backgroundColor: theme.colors.pink,
                },
            ],
        },
    ],
    [
        {
            type: "container",
            align: "horizontal",
            items: [
                {
                    type: "portfolio",
                    title: "Tahu Gaya",
                    description: "Instagram @tahubergaya",
                    url: "https://www.instagram.com/tahubergaya/",
                    imageUrl: "tahu-gaya.png",
                    imagePosition: "left bottom",
                    backgroundColor: theme.colors.yellow.light,
                },
            ],
        },
    ],
];

type PortfolioBlockProps = {
    item: PortfolioItem | PortfolioContainer;
};

const PortfolioBlock = ({ item }: PortfolioBlockProps) => {
    if (item.type === "portfolio") {
        return (
            <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className={clsx(
                    "relative flex w-full flex-1 shrink-0 cursor-pointer flex-col justify-between gap-6 overflow-hidden rounded-3xl text-left font-mulish duration-200 hover:!opacity-100 group-hover:opacity-75",
                    item.textColor === "white" ? "text-white" : "text-black",
                    item.backgroundColor === theme.colors.green && "border border-white"
                )}
                style={{
                    backgroundColor: item.backgroundColor ?? "transparent",
                }}
            >
                <div className="relative z-20 flex flex-col gap-2 pl-8 pt-8">
                    <h4 className="text-xl font-bold xl:text-2xl">{item.title}</h4>
                    {item.description && <p className="text-lg xl:text-xl">{item.description}</p>}
                </div>

                <img
                    src={`/portfolio/${item.imageUrl}`}
                    alt={item.title}
                    loading="lazy"
                    className="w-full object-contain"
                    style={{
                        objectPosition: item.imagePosition ?? "center bottom",
                    }}
                />

                {item.imageFit === "cover" && (
                    <img
                        src={`/portfolio/${item.imageUrl}`}
                        alt={item.title}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover"
                        style={{
                            objectPosition: item.imagePosition ?? "center bottom",
                        }}
                    />
                )}
            </a>
        );
    } else {
        return (
            <div className={clsx("flex flex-1 shrink-0 flex-col items-stretch gap-8", item.align === "horizontal" && "lg:flex-row")}>
                {item.items.map((item, index) => (
                    <PortfolioBlock key={index} item={item} />
                ))}
            </div>
        );
    }
};

export default function Portfolio() {
    const { t } = useLanguage();
    const [categoryId, setCategoryId] = useState(0);

    const onCategorySelect = useCallback(
        (id: number) => () => {
            setCategoryId(id);
        },
        []
    );

    return (
        <section className="flex flex-col items-center gap-20 bg-green py-20">
            <div className="flex w-full flex-col items-center gap-10 text-black">
                <h2 className="text-center font-playfair-display text-6.5xl font-semibold">{t.portfolioTitle}</h2>

                <div className="flex max-w-2xl flex-wrap items-center justify-center gap-4 lg:max-w-none xl:gap-10">
                    {t.portfolioCategories.map((item, index) => (
                        <button
                            key={index}
                            onClick={onCategorySelect(index)}
                            className={clsx(
                                "rounded-full border border-black px-6 py-3 font-mulish text-lg text-black duration-200 lg:text-xl",
                                categoryId === index ? "bg-black text-white" : "text-black hover:bg-black hover:text-white hover:opacity-75"
                            )}
                        >
                            {item}
                        </button>
                    ))}
                </div>
            </div>

            <div className="group mx-auto flex w-full max-w-sm flex-col gap-8 md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl 3xl:max-w-screen-2xl">
                {portfolio[categoryId].map((item, index) => (
                    <PortfolioBlock key={index} item={item} />
                ))}
            </div>

            <a href="https://www.behance.net/runesagency" target="_blank" className="rounded-full bg-black px-7 py-3 font-mulish font-bold text-green duration-200 hover:scale-105" rel="noreferrer">
                {t.portfolioButton}
            </a>
        </section>
    );
}
