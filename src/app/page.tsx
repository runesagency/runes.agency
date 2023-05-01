"use client";

import Blog from "@/components/Blog";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import { LanguageChooser, useLanguage } from "@/lib/i18n";

import { IconBrandBehance, IconBrandInstagram, IconBrandLinkedin, IconBrandTiktok, IconBrandWhatsapp, IconCalendarTime, IconHeartHandshake, IconMail, IconMapPin } from "@tabler/icons-react";
import clsx from "clsx";
import { useCallback } from "react";

export default function HomePage() {
    const { t, code: languageCode } = useLanguage();

    type Partner = {
        name: string;
        slug: string;
    };

    const partners: Partner[] = [
        {
            name: "Feby Putri",
            slug: "feby-putri",
        },
        {
            name: "Madaya Group",
            slug: "madaya-group",
        },
        {
            name: "Briton English",
            slug: "briton-english",
        },
        {
            name: "Araloka Studio",
            slug: "araloka-studio",
        },
        {
            name: "Tune",
            slug: "tune",
        },
        {
            name: "Green Bot",
            slug: "green-bot",
        },
        {
            name: "Invite Manager",
            slug: "invite-manager",
        },
        {
            name: "HarvPort",
            slug: "harvport",
        },
    ];

    type Social = {
        icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
        href: string;
        label: string;
    };

    const socials: Social[] = [
        {
            icon: IconBrandTiktok,
            href: "https://www.tiktok.com/@runesagency",
            label: "TikTok",
        },
        {
            icon: IconBrandInstagram,
            href: "https://www.instagram.com/runesagency",
            label: "Instagram",
        },
        {
            icon: IconBrandLinkedin,
            href: "https://www.linkedin.com/company/runesagency",
            label: "LinkedIn",
        },
        {
            icon: IconBrandBehance,
            href: "https://www.behance.net/runesagency",
            label: "Behance",
        },
    ];

    type Contact = {
        icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
        href: string;
        label: string;
    };

    const contacts: Contact[] = [
        {
            icon: IconMail,
            href: "mailto:team@runes.agency",
            label: "team@runes.agency",
        },
        {
            icon: IconBrandWhatsapp,
            href: "https://wa.me/6285156582791",
            label: "+62 851 5658 2791",
        },
        {
            icon: IconMapPin,
            href: "https://goo.gl/maps/XoCYnXCsd19bn6YN9",
            label: "Jl. Inpres Raya No.5, Kelurahan Gaga, Larangan, Tangerang, Banten, Indonesia 15154",
        },
    ];

    const typeformsIds = {
        en: "XWnO26mK",
        id: "A9T5d7yX",
    };

    const onScheduleMeetingClick = useCallback(() => {
        window.Calendly.initPopupWidget({ url: "https://calendly.com/runesagency/30min" });
        return false;
    }, []);

    return (
        <main className="flex h-full w-full flex-col">
            <Hero />

            {/* Introduction */}
            <section className="flex flex-col items-center justify-center gap-14 py-44">
                <div className="flex">
                    <svg viewBox="0 0 59 58" className="bounce2 h-14 fill-blue-light">
                        <path d="M29.75 58C45.9043 58 59 45.0163 59 29C59 12.9837 45.9043 0 29.75 0C13.5957 0 0.5 12.9837 0.5 29C0.5 45.0163 13.5957 58 29.75 58Z" />
                    </svg>

                    <svg viewBox="0 0 59 58" className="elastic-spin h-14 origin-center fill-pink">
                        <path d="M29.25 0L0 29L29.25 58L58.5 29L29.25 0Z" />
                    </svg>
                </div>

                <div className="max-w-sm space-y-4 text-center font-mulish text-2xl text-black md:max-w-2xl md:text-4xl lg:max-w-4xl lg:space-y-8 xl:max-w-5xl xl:text-4.5xl">
                    <p className="leading-normal">
                        {t.introText1[0]} <b>{t.introText1[1]}</b> {t.introText1[2]}
                    </p>

                    <p className="leading-normal">
                        {t.introText2[0]} <b>{t.introText2[1]}</b> {t.introText2[2]}
                    </p>
                </div>
            </section>

            {/* Partners */}
            <section className="relative flex flex-col items-center justify-center gap-16 pt-20">
                <hr className="w-full max-w-xs border-gray md:max-w-lg" />

                <div className="flex w-full max-w-4xl flex-col items-center gap-16 xl:max-w-5xl">
                    <p className="max-w-xs text-center font-mulish text-xl italic text-black md:max-w-2xl md:text-2xl lg:max-w-none">{t.partnersText}</p>

                    <div className="grid w-full max-w-xs grid-cols-2 gap-x-6 gap-y-8 md:max-w-2xl md:grid-cols-4 lg:max-w-none">
                        {partners.map(({ slug, name }, j) => (
                            <img key={j} src={`/partners/${slug}.png`} alt={name} loading="lazy" className="h-14 w-full select-none object-contain object-center" draggable={false} />
                        ))}
                    </div>
                </div>

                <img src="/illustrations/giving.webp" alt="Hupa Giving to Luna" className="relative z-20 h-96 max-w-full select-none" loading="lazy" draggable={false} />

                <img src="/patterns/3.svg" alt="" className="absolute bottom-0 left-0 z-10 hidden h-56 select-none md:block xl:h-72" loading="lazy" draggable={false} />
                <img src="/patterns/4.svg" alt="" className="absolute bottom-0 right-0 z-10 h-56 select-none xl:h-72" loading="lazy" draggable={false} />

                <svg viewBox="0 0 1920 116" className="absolute bottom-0 left-0 w-full fill-green opacity-50">
                    <path d="M0 32.4239C752.345 -8.49521 1173.01 -13.0605 1920 32.4239V116H0V32.4239Z" />
                </svg>
            </section>

            <Services />

            <Portfolio />

            <FAQ />

            <Blog />

            {/* Contact */}
            <section className="relative flex flex-col items-center gap-10 bg-blue-light pt-32 xl:gap-14">
                <h2 className="text-center font-playfair-display text-4xl font-semibold text-black md:text-6xl lg:text-7xl xl:text-8xl">
                    <span className="block pb-2 md:pb-4">
                        <span>{t.contactTitle[0]} </span>
                        <span className="font-medium">{t.contactTitle[1]}</span>
                    </span>

                    <span>
                        <span className="font-medium">{t.contactTitle[2]} </span>
                        <span>
                            {t.contactTitle[3]} <i>{t.contactTitle[4]}</i>
                        </span>
                    </span>
                </h2>

                <p className="max-w-sm text-center font-mulish text-lg leading-normal text-black md:max-w-2xl lg:max-w-3xl lg:text-2xl xl:max-w-4xl">
                    <b>{t.contactSubtitle[0]}</b> {t.contactSubtitle[1]}
                </p>

                <div className="flex flex-col gap-4 md:flex-row md:gap-10">
                    <button
                        onClick={onScheduleMeetingClick}
                        className="flex items-center justify-center gap-4 rounded-full bg-yellow-light px-6 py-3 duration-200 hover:scale-105 lg:gap-6 lg:px-9 lg:py-5"
                    >
                        <IconCalendarTime className="h-6 w-6 shrink-0 stroke-black stroke-1.5 lg:h-10 lg:w-10" />

                        <span className="font-mulish text-xl font-semibold text-black lg:text-2xl">
                            <span>{t.contactMeetingButton[0]} </span>
                            <span className="font-bold italic">{t.contactMeetingButton[1]}</span>
                        </span>
                    </button>

                    {Object.entries(typeformsIds).map(([langCode, typeformId]) => (
                        <button
                            key={typeformId}
                            data-tf-popup={typeformId}
                            data-tf-opacity="100"
                            data-tf-size="100"
                            data-tf-iframe-props="title=Runes Contact"
                            data-tf-transitive-search-params
                            data-tf-medium="snippet"
                            className={clsx(
                                "flex items-center justify-center gap-4 rounded-full bg-black px-6 py-3 duration-200 hover:scale-105 lg:gap-6 lg:px-9 lg:py-5",
                                langCode !== languageCode && "hidden"
                            )}
                        >
                            <IconHeartHandshake className="h-6 w-6 shrink-0 stroke-white stroke-1.5 lg:h-10 lg:w-10" />

                            <span className="font-mulish text-xl font-semibold text-white lg:text-2xl">{t.contactUsButton}</span>
                        </button>
                    ))}
                </div>

                <img src="/illustrations/work-together.webp" alt="Work Together" className="relative z-10 max-w-full select-none" draggable={false} />

                <div className="absolute bottom-0 left-0 flex w-full justify-center">
                    <img src="/patterns/6.svg" alt="" className="w-full max-w-7xl select-none" loading="lazy" draggable={false} />
                </div>
            </section>

            {/* Footer */}
            <footer className="flex flex-col items-center gap-20 bg-black py-20">
                <main className="flex w-full max-w-sm flex-col items-start justify-between gap-10 md:max-w-2xl lg:max-w-4xl lg:flex-row xl:max-w-7xl">
                    <div className="flex flex-col gap-8">
                        <img src="/logo-yellow.svg" alt="Logo" className="h-14" />

                        <LanguageChooser className="!justify-start !p-0" />

                        <div className="group flex items-center gap-6">
                            {socials.map(({ icon: Icon, href, label }, index) => (
                                <a key={index} href={href} aria-label={label} target="_blank" rel="noreferrer">
                                    <Icon className="h-10 w-10 stroke-yellow-light stroke-1.5 duration-200 hover:!opacity-100 group-hover:opacity-40" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="group flex flex-col gap-6">
                        <h3 className="font-playfair-display text-2xl font-medium text-yellow-light">
                            <span>{t.footerContactTitle[0]} </span>
                            <span className="font-bold italic">{t.footerContactTitle[1]}</span>
                        </h3>

                        {contacts.map(({ icon: Icon, href, label }, index) => (
                            <a key={index} href={href} target="_blank" className="flex items-center gap-6 duration-200 hover:!opacity-100 group-hover:opacity-40" rel="noreferrer">
                                <Icon className="h-8 w-8 shrink-0 stroke-yellow-light stroke-1.5" />
                                <p className={clsx("max-w-sm text-left font-mulish text-lg text-white lg:text-xl", index === 0 && "font-bold")}>{label}</p>
                            </a>
                        ))}
                    </div>
                </main>

                <div className="flex w-full max-w-sm flex-col justify-between gap-6 font-mulish text-white md:max-w-2xl md:flex-row md:items-end lg:max-w-4xl xl:max-w-7xl">
                    <div className="max-w-sm space-y-2">
                        <p>© 2023 Runes. All Rights Reserved.</p>

                        <p>
                            {t.footerAttributionText[0]} <b>PT Rumah Kreasi Bersama</b>, {t.footerAttributionText[1]}.
                        </p>
                    </div>

                    <span>
                        Made With 💖 in <b>Indonesia</b>.
                    </span>
                </div>
            </footer>
        </main>
    );
}
