"use client";

import Services from "@/components/Services";

import {
    IconBrandBehance,
    IconBrandInstagram,
    IconBrandLinkedin,
    IconBrandTiktok,
    IconBrandWhatsapp,
    IconCalendarTime,
    IconChevronDown,
    IconCurrencyDollar,
    IconHeartHandshake,
    IconMail,
    IconMapPin,
    IconPresentation,
} from "@tabler/icons-react";
import clsx from "clsx";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function HomePage() {
    type Partner = {
        name: string;
        slug: string;
        height: number;
    };

    const partners: Partner[][] = [
        [
            {
                name: "Feby Putri",
                slug: "feby-putri",
                height: 55,
            },
            {
                name: "Madaya Group",
                slug: "madaya-group",
                height: 56,
            },
            {
                name: "Briton English",
                slug: "briton-english",
                height: 57,
            },
            {
                name: "Araloka Studio",
                slug: "araloka-studio",
                height: 49,
            },
        ],
        [
            {
                name: "Tune",
                slug: "tune",
                height: 56,
            },
            {
                name: "Green Bot",
                slug: "green-bot",
                height: 60,
            },
            {
                name: "Invite Manager",
                slug: "invite-manager",
                height: 36,
            },
            {
                name: "HarvPort",
                slug: "harvport",
                height: 58,
            },
        ],
    ];

    const hero = useRef<HTMLDivElement>(null);
    const storyboard = useRef<HTMLDivElement>(null);
    const stories = useRef<(HTMLDivElement | null)[]>([]);
    const storySubtitle = useRef<HTMLSpanElement>(null);

    const [currentStoryIndex, setStoryIndex] = useState(0);

    useEffect(() => {
        if (!storyboard.current || !hero.current) return;

        // Get the scroll of the previous sibling so the current story was snapped in the middle
        const storiesScrollLength = stories.current.map((story) => (story?.previousElementSibling as HTMLDivElement)?.offsetLeft);

        let lastSlideIndex = -1;
        let lastTypewritingInterval: NodeJS.Timeout | undefined = undefined;
        let lastSubtitle = "";

        const heroGapSize = Number(getComputedStyle(hero.current).gap.replace("px", ""));
        const heroHeightSize = hero.current.getBoundingClientRect().height ?? 0;

        const storyboardParentPreviousSibling = storyboard.current.parentElement?.previousElementSibling;
        if (!storyboardParentPreviousSibling) return;

        const storyboardParentPreviousSiblingRect = storyboardParentPreviousSibling.getBoundingClientRect();
        const storyboardParentPreviousSiblingToTop = storyboardParentPreviousSiblingRect.top + storyboardParentPreviousSiblingRect.height + heroGapSize + window.scrollY;

        const storySubtitles = [
            "Running a business alone is hard...",
            undefined,
            undefined,
            "You get tired, and sometimes you get stressed...",
            undefined,
            "But don't worry, we're here to help you!",
            undefined,
            undefined,
            "Let's grow together and make your business shine! ✨",
        ];

        storyboard.current.scrollTo({ left: 0 });

        const getSubtitle = (index: number): string => {
            const subtitle = storySubtitles[index];
            if (subtitle !== undefined) return subtitle;
            return getSubtitle(index - 1);
        };

        const onScroll = () => {
            const scrollPosition = window.scrollY || document.documentElement.scrollTop;

            if (scrollPosition > storyboardParentPreviousSiblingToTop && scrollPosition < heroHeightSize) {
                const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

                const totalHeight = Math.max(
                    document.body.scrollHeight,
                    document.body.offsetHeight,
                    document.documentElement.clientHeight,
                    document.documentElement.scrollHeight,
                    document.documentElement.offsetHeight
                );

                const totalScrollableHeight = totalHeight - viewportHeight;

                const scrollPercentage = Math.max(
                    0,
                    Math.min(
                        100,
                        ((scrollPosition - storyboardParentPreviousSiblingToTop) / (heroHeightSize - storyboardParentPreviousSiblingToTop)) *
                            100 *
                            (totalScrollableHeight / (totalHeight - storyboardParentPreviousSiblingToTop - viewportHeight))
                    )
                );

                const distanceBetweenSlide = 100 / stories.current.length;
                const slideIndex = Math.round(scrollPercentage / distanceBetweenSlide) - 1;

                if (slideIndex === lastSlideIndex || slideIndex < 0) return;

                const subtitle = getSubtitle(slideIndex);

                if (storySubtitle.current && subtitle !== lastSubtitle) {
                    if (lastTypewritingInterval) {
                        clearInterval(lastTypewritingInterval);
                        lastTypewritingInterval = undefined;
                        storySubtitle.current.innerText = "";
                    }

                    const subtitleText = subtitle.split("");
                    let subtitleIndex = 0;

                    lastTypewritingInterval = setInterval(() => {
                        if (subtitleIndex >= subtitleText.length) {
                            clearInterval(lastTypewritingInterval);
                            return;
                        }

                        storySubtitle.current?.append(subtitleText[subtitleIndex]);
                        subtitleIndex++;
                    }, 50);

                    lastSubtitle = subtitle;
                }
                storyboard.current?.scrollTo({
                    left: storiesScrollLength[slideIndex],
                    behavior: "smooth",
                });

                setStoryIndex(slideIndex);
                lastSlideIndex = slideIndex;
                console.log(slideIndex);
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    return (
        <main className="flex h-full w-full flex-col">
            {/* Hero */}
            <section ref={hero} className="relative flex flex-col items-center gap-20 bg-yellow-light pt-20" style={{ height: "8000px" }}>
                <div className="relative z-10 flex w-full max-w-7xl items-center justify-between">
                    <img src="/logo.svg" alt="Logo" className="h-10" />

                    <button className="flex items-center justify-center gap-3 rounded-xl bg-black px-4 py-2">
                        <svg width="32" height="21" viewBox="0 0 32 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M28.4444 0H3.55556C2.61256 0 1.70819 0.340383 1.0414 0.94627C0.374602 1.55216 0 2.37392 0 3.23077L0 10.5H32V3.23077C32 2.37392 31.6254 1.55216 30.9586 0.94627C30.2918 0.340383 29.3874 0 28.4444 0Z"
                                fill="#DC1F26"
                            />
                            <path
                                d="M32 17.7692C32 18.6261 31.6254 19.4478 30.9586 20.0537C30.2918 20.6596 29.3874 21 28.4444 21H3.55556C2.61256 21 1.70819 20.6596 1.0414 20.0537C0.374602 19.4478 0 18.6261 0 17.7692V10.5H32V17.7692Z"
                                fill="#EEEEEE"
                            />
                        </svg>

                        <p className="font-mulish text-lg text-white">Bahasa Indonesia</p>

                        <IconChevronDown className="stroke-white" />
                    </button>
                </div>

                <div className="relative z-10 flex flex-col items-center gap-10">
                    <h1 className="text-center font-playfair-display text-9xl font-medium leading-tight text-black">
                        Making Things
                        <br />
                        <span className="font-semibold">
                            <i>Simple</i> For You
                        </span>
                    </h1>

                    <p className="max-w-3xl text-center font-mulish text-2xl leading-normal">
                        <b>Let's grow your brand together</b>. We know handling business is hard, let us help you so you don't have to do everything yourself.
                    </p>
                </div>

                <div className="relative z-10 flex gap-10 stroke-black font-mulish text-xl font-semibold text-black">
                    <a href="#story" className="rounded-full bg-black px-7 py-3 font-bold text-yellow-light">
                        See The Story
                    </a>

                    <button className="flex items-center gap-4 rounded-full bg-blue-light px-7 py-3 font-bold">
                        <IconPresentation size={24} />
                        <span>View Our Company Deck</span>
                    </button>

                    <button className="flex items-center gap-4 rounded-full bg-pink px-7 py-3 font-bold">
                        <IconCurrencyDollar size={24} />
                        <span>View Our Pricing</span>
                    </button>
                </div>

                <div className="sticky top-10 z-10 flex min-h-screen w-full flex-col items-center gap-20 pb-40">
                    <div ref={storyboard} id="story" className="hide-scrollbar relative z-10 flex w-full snap-x items-center gap-20 overflow-x-auto overflow-y-visible scroll-smooth">
                        <div className="aspect-square h-full w-full max-w-md shrink-0" />

                        {[...Array(9)].map((_, i) => (
                            <div
                                key={i}
                                ref={(ref) => (stories.current[i] = ref)}
                                className={clsx(
                                    "aspect-square max-w-md shrink-0 select-none snap-center overflow-hidden rounded-xl transition-all duration-500",
                                    currentStoryIndex === i ? "scale-100" : " scale-90 opacity-40"
                                )}
                            >
                                <img src={`/success-story/${i + 1}.JPG`} alt="Story 1" className="h-full w-full object-cover object-center" loading="lazy" draggable={false} />
                            </div>
                        ))}

                        <div className="aspect-square h-full w-full max-w-md shrink-0" />
                    </div>

                    <span ref={storySubtitle} className=" relative z-10 max-w-md text-center font-mulish text-2xl font-medium" />

                    <img src="/patterns/2.svg" alt="" className="absolute bottom-0 left-0 w-full max-w-xl select-none" loading="lazy" draggable={false} />
                </div>

                <img src="/patterns/1.svg" alt="" className="absolute right-0 top-0 w-full max-w-xl select-none" loading="lazy" draggable={false} />
            </section>

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

                <p className="max-w-5xl text-center font-mulish text-4.5xl text-black">
                    We believe that every process should be <b>simple and easy</b> for everyone to understand.
                    <br />
                    <br />
                    And we also believe that great products <b>should be delivered to everyone</b> regardless of market level or anything.
                </p>
            </section>

            {/* Partners */}
            <section className="relative flex flex-col items-center justify-center gap-16 pt-20">
                <hr className="w-full max-w-lg border-gray" />

                <div className="flex w-full max-w-5xl flex-col items-center gap-16">
                    <p className="font-mulish text-2xl italic">These were the brands who trusted us to grow their brand to the top.</p>

                    {partners.map((list, i) => (
                        <div key={i} className="flex w-full items-center justify-between gap-2">
                            {list.map(({ slug, name, height }, j) => (
                                <img key={j} src={`/partners/${slug}.png`} alt={name} style={{ height }} loading="lazy" className="select-none" draggable={false} />
                            ))}
                        </div>
                    ))}
                </div>

                <img src="/illustrations/giving.png" alt="Hupa Giving to Luna" className="relative z-20 h-96 select-none" loading="lazy" draggable={false} />

                <img src="/patterns/3.svg" alt="" className="absolute bottom-0 left-0 z-10 h-72 select-none" loading="lazy" draggable={false} />
                <img src="/patterns/4.svg" alt="" className="absolute bottom-0 right-0 z-10 h-72 select-none" loading="lazy" draggable={false} />
                <svg viewBox="0 0 1920 116" className="absolute bottom-0 left-0 w-full fill-green opacity-50">
                    <path d="M0 32.4239C752.345 -8.49521 1173.01 -13.0605 1920 32.4239V116H0V32.4239Z" />
                </svg>
            </section>

            {/* Services */}
            <Services />

            {/* Portfolio */}
            <section className="flex flex-col items-center bg-green py-20">
                <div className="flex flex-col items-center gap-10 text-black">
                    <h2 className="font-playfair-display text-6.5xl font-semibold">Featured Projects</h2>
                    <div className="flex gap-10 font-mulish text-xl text-black">
                        <button className="rounded-full border-2 border-black bg-black px-6 py-3 text-white">Graphic Design</button>
                        <button className="rounded-full border-2 border-black px-6 py-3">UI/UX Design</button>
                        <button className="rounded-full border-2 border-black px-6 py-3">Chat Bot</button>
                        <button className="rounded-full border-2 border-black px-6 py-3">Web Development</button>
                        <button className="rounded-full border-2 border-black px-6 py-3">Social Media Management</button>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-32">
                <main className="mx-auto flex w-full max-w-7xl gap-20">
                    <div className="flex flex-1 flex-col gap-10">
                        <h2 className="font-playfair-display text-6.5xl font-medium text-black">
                            You Probably <b>Ask</b>
                            <br />
                            <b>
                                <i>This Questions</i>
                            </b>
                        </h2>

                        <div className="flex flex-col gap-10">
                            <article className="flex flex-col gap-5">
                                <section className="flex items-center justify-between">
                                    <h3 className="font-mulish text-2xl font-bold text-black">I have a question?</h3>
                                    <IconChevronDown width={24} className="stroke-black" />
                                </section>
                            </article>
                        </div>
                    </div>

                    <div className="relative w-full max-w-lg shrink-0">
                        <img src="/illustrations/waving.png" alt="Waving" className="relative z-20 mx-auto select-none" draggable={false} loading="lazy" />

                        <img src="/patterns/5.svg" alt="" className="absolute bottom-0 left-0 z-10 w-full select-none" draggable={false} loading="lazy" />

                        <div className="absolute inset-0 flex h-full w-full items-end justify-center">
                            <svg viewBox="0 0 397 400" className="h-full w-9/12 fill-yellow-light">
                                <path d="M0.0450439 198.498C0.0450439 88.9194 88.8762 0.0883789 198.455 0.0883789C308.034 0.0883789 396.865 88.9195 396.865 198.498V517H0.0450439V198.498Z" />
                            </svg>
                        </div>
                    </div>
                </main>
            </section>

            {/* Blogs */}
            <section className="flex flex-col gap-10 py-20">
                <div className="flex w-full max-w-screen-2xl items-center justify-between">
                    <h2 className="font-playfair-display text-4.5xl font-semibold text-black">Blogs & Insights</h2>
                    <button className="rounded-full bg-black px-7 py-3 font-mulish font-bold text-white">See More</button>
                </div>

                <div className="flex gap-7">
                    <Link href="#" className="flex w-full max-w-lg flex-col gap-5">
                        <div className="h-80 w-full overflow-hidden rounded-xl bg-gray">
                            <img
                                src="https://images.unsplash.com/photo-1682277149061-69bb5222036f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8YWxsfDV8fHx8fHwyfHwxNjgyNTg0Mzgz&ixlib=rb-4.0.3&q=80&w=1200"
                                alt="Cover"
                                className="h-full w-full object-cover object-center"
                                loading="lazy"
                            />
                        </div>

                        <p className="font-mulish text-2xl font-medium text-black">Belajar Branding Ala Redbull</p>
                    </Link>
                </div>
            </section>

            {/* Contact */}
            <section className="relative flex flex-col items-center gap-14 bg-blue-light pt-32">
                <h2 className="text-center font-playfair-display text-8xl font-semibold leading-tight text-black">
                    Every Great Thing{" "}
                    <span className="font-medium">
                        Is
                        <br /> Always
                    </span>{" "}
                    Made <i>Together</i>
                </h2>

                <p className="max-w-4xl text-center font-mulish text-2xl leading-normal text-black">
                    <b>Ready to take your business to the next level?</b> Whether you have a specific project in mind or need ongoing support, our team is here to provide you with top-notch service
                    and creative solutions.
                </p>

                <div className="flex gap-10">
                    <button className="flex items-center justify-center gap-6 rounded-full bg-yellow-light px-9 py-5">
                        <IconCalendarTime size={40} stroke={1} className="stroke-black" />

                        <span className="font-mulish text-2xl font-semibold text-black">
                            {" "}
                            Schedule A{" "}
                            <b>
                                <i>Meeting</i>
                            </b>
                        </span>
                    </button>

                    <button className="flex items-center justify-center gap-6 rounded-full bg-black px-9 py-5">
                        <IconHeartHandshake size={40} stroke={1} className="stroke-white" />

                        <span className="font-mulish text-2xl font-semibold text-white">Contact Us</span>
                    </button>
                </div>

                <img src="/illustrations/work-together.png" alt="Work Together" className="relative z-10 select-none" draggable={false} />

                <div className="absolute bottom-0 left-0 flex w-full justify-center">
                    <img src="/patterns/6.svg" alt="" className="max-w-7xl select-none" loading="lazy" draggable={false} />
                </div>
            </section>

            {/* Footer */}
            <footer className="flex flex-col items-center gap-20 bg-black py-20">
                <main className="flex w-full max-w-7xl justify-between">
                    <div className="flex flex-col gap-8">
                        <img src="/logo-yellow.svg" alt="Logo" className="h-14" />

                        <button className="flex items-center gap-3">
                            <svg width="32" height="21" viewBox="0 0 32 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M28.4444 0H3.55556C2.61256 0 1.70819 0.340383 1.0414 0.94627C0.374602 1.55216 0 2.37392 0 3.23077L0 10.5H32V3.23077C32 2.37392 31.6254 1.55216 30.9586 0.94627C30.2918 0.340383 29.3874 0 28.4444 0Z"
                                    fill="#DC1F26"
                                />
                                <path
                                    d="M32 17.7692C32 18.6261 31.6254 19.4478 30.9586 20.0537C30.2918 20.6596 29.3874 21 28.4444 21H3.55556C2.61256 21 1.70819 20.6596 1.0414 20.0537C0.374602 19.4478 0 18.6261 0 17.7692V10.5H32V17.7692Z"
                                    fill="#EEEEEE"
                                />
                            </svg>

                            <p className="font-mulish text-lg text-white">Bahasa Indonesia</p>

                            <IconChevronDown className="stroke-white" />
                        </button>

                        <div className="flex items-center gap-6">
                            <IconBrandTiktok size={40} stroke={1} className="stroke-yellow-light" />
                            <IconBrandInstagram size={40} stroke={1} className="stroke-yellow-light" />
                            <IconBrandLinkedin size={40} stroke={1} className="stroke-yellow-light" />
                            <IconBrandBehance size={40} stroke={1} className="stroke-yellow-light" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <h3 className="font-playfair-display text-2xl font-medium text-yellow-light">
                            Let's Get{" "}
                            <b>
                                <i>Connected</i>
                            </b>
                        </h3>

                        <button className="flex items-center gap-6">
                            <IconMail size={32} className="stroke-yellow-light" />
                            <p className="font-mulish text-xl font-bold text-white">team@runes.asia</p>
                        </button>

                        <button className="flex items-center gap-6">
                            <IconBrandWhatsapp size={32} className="stroke-yellow-light" />
                            <p className="font-mulish text-xl text-white">+62 851-5658-2791 (Text Only)</p>
                        </button>

                        <button className="flex items-center gap-6">
                            <IconMapPin size={32} className="stroke-yellow-light" />
                            <p className="max-w-sm text-left font-mulish text-xl leading-relaxed text-white">JL. Inpres Raya No. 5, Larangan, Kota Tangerang, Banten, Indonesia 15154</p>
                        </button>
                    </div>
                </main>

                <div className="flex w-full max-w-7xl items-end justify-between font-mulish text-white">
                    <span>
                        © 2023 Runes. All Rights Reserved.
                        <br />A brand of <b>PT Rumah Kreasi Bersama</b>, company registered in Indonesia.
                    </span>

                    <span>
                        Made With 💖 in <b>Indonesia</b>.
                    </span>
                </div>
            </footer>
        </main>
    );
}
