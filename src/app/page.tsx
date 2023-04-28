"use client";

import { theme } from "tailwind.config";

import {
    IconArrowLeft,
    IconArrowRight,
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
import Link from "next/link";

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

    type Service = {
        name: string;
        description: string;
        color: string;
    };

    const services: Service[] = [
        {
            name: "Graphic Design",
            description: "Build your own imaginative world.",
            color: theme.colors.green,
        },
        {
            name: "UI/UX Design",
            description: "Designing experiences that delight and inspire.",
            color: theme.colors.yellow.light,
        },
        {
            name: "Chat Bot",
            description: "Revolutionize your customer support with chatbots",
            color: theme.colors.blue.light,
        },
        {
            name: "Social Media Management",
            description: "Boost your brand with strategic social media.",
            color: theme.colors.pink,
        },
        {
            name: "Digital Advertising",
            description: "Maximizing your online presence with targeted ads.",
            color: theme.colors.green,
        },
        {
            name: "Web Development",
            description: "Building digital solutions that power your business.",
            color: theme.colors.yellow.light,
        },
        {
            name: "Branding",
            description: "Crafting identities that leave a lasting impression.",
            color: theme.colors.blue.light,
        },
        {
            name: "Managed Hosting",
            description: "Secure, reliable, and hassle-free hosting solutions.",
            color: theme.colors.pink,
        },
    ];

    return (
        <main className="flex h-full w-full flex-col">
            {/* Hero */}
            <section className="flex flex-col items-center gap-20 bg-yellow-light pb-40 pt-20">
                <div className="flex w-full max-w-7xl items-center justify-between">
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

                <div className="flex flex-col items-center gap-10">
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

                <div className="flex gap-10 stroke-black font-mulish text-xl font-semibold text-black">
                    <button className="rounded-full bg-black px-7 py-3 font-bold text-yellow-light">See The Story</button>

                    <button className="flex items-center gap-4 rounded-full bg-blue-light px-7 py-3 font-bold">
                        <IconPresentation size={24} />
                        <span>View Our Company Deck</span>
                    </button>

                    <button className="flex items-center gap-4 rounded-full bg-pink px-7 py-3 font-bold">
                        <IconCurrencyDollar size={24} />
                        <span>View Our Pricing</span>
                    </button>
                </div>

                <div className="flex max-w-full items-center gap-20 overflow-auto">
                    <div className="success-story-card" />

                    {[...Array(9)].map((_, i) => (
                        <img key={i} src={`/success-story/${i + 1}.JPG`} alt="Story 1" className="success-story-card rounded-xl" />
                    ))}

                    <div className="success-story-card" />
                </div>

                <span className="font-mulish text-2xl font-medium">Running a business alone is hard...</span>
            </section>

            {/* Introduction */}
            <section className="flex flex-col items-center justify-center gap-14 py-44">
                <svg width="118" height="58" viewBox="0 0 118 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_197_66)">
                        <path d="M29.75 58C45.9043 58 59 45.0163 59 29C59 12.9837 45.9043 0 29.75 0C13.5957 0 0.5 12.9837 0.5 29C0.5 45.0163 13.5957 58 29.75 58Z" fill="#B3C6D8" />
                        <path d="M88.25 0L59 29L88.25 58L117.5 29L88.25 0Z" fill="#E5989B" />
                    </g>
                    <defs>
                        <clipPath id="clip0_197_66">
                            <rect width="117" height="58" fill="white" transform="translate(0.5)" />
                        </clipPath>
                    </defs>
                </svg>

                <p className="max-w-5xl text-center font-mulish text-4.5xl text-black">
                    We believe that every process should be <b>simple and easy</b> for everyone to understand.
                    <br />
                    <br />
                    And we also believe that great products <b>should be delivered to everyone</b> regardless of market level or anything.
                </p>
            </section>

            {/* Partners */}
            <section className="flex flex-col items-center justify-center gap-16 pt-20">
                <hr className="w-full max-w-lg border-gray" />

                <div className="flex w-full max-w-5xl flex-col items-center gap-16">
                    <p className="font-mulish text-2xl italic">These were the brands who trusted us to grow their brand to the top.</p>

                    {partners.map((list, i) => (
                        <div key={i} className="flex w-full items-center justify-between gap-2">
                            {list.map(({ slug, name, height }, j) => (
                                <img key={j} src={`/partners/${slug}.png`} alt={name} style={{ height }} />
                            ))}
                        </div>
                    ))}
                </div>

                <img src="/illustrations/giving.png" alt="Hupa Giving to Luna" className="h-96" />
            </section>

            {/* Services */}
            <section className="flex flex-col gap-20 py-32">
                <div className="mx-auto flex w-full max-w-screen-2xl items-center justify-between">
                    <h2 className="font-playfair-display text-6.5xl font-medium text-black">
                        We Do <span className="font-semibold">A Lot</span> Of <span className="font-semibold italic">Things</span>
                    </h2>

                    <div className="flex gap-6">
                        <button className="flex h-14 w-14 items-center justify-center rounded-full bg-black">
                            <IconArrowLeft width={20} className="stroke-white" />
                        </button>

                        <button className="flex h-14 w-14 items-center justify-center rounded-full bg-black">
                            <IconArrowRight width={20} className="stroke-white" />
                        </button>
                    </div>
                </div>

                <div className="flex w-full gap-10 overflow-auto">
                    {services.map(({ color, name, description }, i) => (
                        <button key={i} className="flex aspect-square h-full w-full max-w-lg shrink-0 flex-col items-start justify-between p-10" style={{ backgroundColor: color }}>
                            <section className="flex flex-col gap-5 text-left font-mulish text-black">
                                <h3 className="text-4xl font-bold">{name}</h3>
                                <p className="text-2xl">{description}</p>
                            </section>

                            <section className="flex w-full items-center justify-between">
                                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M80 40L40 80L0 40L40 0L80 40Z" fill="#B3C6D8" />
                                </svg>

                                <svg width="41" height="16" viewBox="0 0 41 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M40.7071 8.70711C41.0976 8.31658 41.0976 7.68342 40.7071 7.29289L34.3431 0.928932C33.9526 0.538408 33.3195 0.538408 32.9289 0.928932C32.5384 1.31946 32.5384 1.95262 32.9289 2.34315L38.5858 8L32.9289 13.6569C32.5384 14.0474 32.5384 14.6805 32.9289 15.0711C33.3195 15.4616 33.9526 15.4616 34.3431 15.0711L40.7071 8.70711ZM0 9H40V7H0V9Z"
                                        fill="#272727"
                                    />
                                </svg>
                            </section>
                        </button>
                    ))}
                </div>
            </section>

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

                    <div className="w-full max-w-lg shrink-0">
                        <img src="/illustrations/waving.png" alt="Waving" className="mx-auto" />
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
            <section className="flex flex-col items-center gap-14 bg-blue-light pt-32">
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

                <img src="/illustrations/work-together.png" alt="Work Together" />
            </section>

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
