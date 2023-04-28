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
        icon: (props: React.SVGProps<SVGSVGElement>) => React.ReactElement;
    };

    const services: Service[] = [
        {
            name: "Graphic Design",
            description: "Build your own imaginative world.",
            color: theme.colors.green,
            icon: (props) => (
                <svg {...props} viewBox="0 0 80 80">
                    <path d="M80 40L40 80L0 40L40 0L80 40Z" className="fill-blue-light" />
                </svg>
            ),
        },
        {
            name: "UI/UX Design",
            description: "Designing experiences that delight and inspire.",
            color: theme.colors.yellow.light,
            icon: (props) => (
                <svg {...props} viewBox="0 0 70 80">
                    <path
                        d="M68.981 21.7964C68.981 33.8343 59.2224 43.5929 47.1846 43.5929C35.1467 43.5929 25.3881 33.8343 25.3881 21.7964C25.3881 9.75859 35.1467 0 47.1846 0C59.2224 0 68.981 9.75859 68.981 21.7964Z"
                        className="fill-purple"
                    />
                    <path
                        d="M3.68463 27.6329C1.58875 31.9301 0.359786 36.598 0.0679089 41.3702C-0.223968 46.1423 0.426957 50.9252 1.98352 55.4458C3.54008 59.9664 5.9718 64.1361 9.13983 67.7169C12.3079 71.2977 16.1502 74.2195 20.4474 76.3154C24.7446 78.4113 29.4125 79.6402 34.1846 79.9321C38.9568 80.224 43.7397 79.573 48.2603 78.0165C52.7809 76.4599 56.9506 74.0282 60.5314 70.8602C64.1122 67.6921 67.034 63.8498 69.1298 59.5527L3.68463 27.6329Z"
                        className="fill-pink"
                    />
                </svg>
            ),
        },
        {
            name: "Chat Bot",
            description: "Revolutionize your customer support with chatbots",
            color: theme.colors.blue.light,
            icon: (props) => (
                <svg {...props} viewBox="0 0 160 80">
                    <path d="M40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80Z" className="fill-blue-dark" />
                    <path d="M120 80C142.091 80 160 62.0914 160 40C160 17.9086 142.091 0 120 0C97.9086 0 80 17.9086 80 40C80 62.0914 97.9086 80 120 80Z" className="fill-yellow-light" />
                </svg>
            ),
        },
        {
            name: "Social Media Management",
            description: "Boost your brand with strategic social media.",
            color: theme.colors.pink,
            icon: (props) => (
                <svg {...props} viewBox="0 0 73 80">
                    <path
                        d="M13.777 26.5096C27.9278 4.41824 51.2458 0 51.2458 0C51.2458 0 49.9786 30.5774 36.216 52.0626C22.4535 73.5478 0.000948865 80 0.000948865 80C0.000948865 80 -0.373895 48.601 13.777 26.5096Z"
                        className="fill-yellow-light"
                    />
                    <path
                        d="M35.0228 26.5096C49.1736 4.41824 72.4916 0 72.4916 0C72.4916 0 71.2243 30.5774 57.4618 52.0626C43.6992 73.5478 21.2467 80 21.2467 80C21.2467 80 20.8719 48.601 35.0228 26.5096Z"
                        className="fill-blue-light"
                    />
                </svg>
            ),
        },
        {
            name: "Digital Advertising",
            description: "Maximizing your online presence with targeted ads.",
            color: theme.colors.green,
            icon: (props) => (
                <svg {...props} viewBox="0 0 80 80">
                    <path
                        d="M0 2.69918e-06C-1.29114e-07 5.25288 1.03463 10.4543 3.04482 15.3073C5.05501 20.1604 8.00139 24.5699 11.7157 28.2843C15.4301 31.9986 19.8396 34.945 24.6927 36.9552C29.5457 38.9654 34.7471 40 40 40C45.2529 40 50.4543 38.9654 55.3073 36.9552C60.1604 34.945 64.5699 31.9986 68.2843 28.2843C71.9986 24.5699 74.945 20.1604 76.9552 15.3073C78.9654 10.4543 80 5.25287 80 0L0 2.69918e-06Z"
                        className="fill-blue-light"
                    />
                    <path
                        d="M0 80C-1.29114e-07 74.7471 1.03463 69.5457 3.04482 64.6927C5.05501 59.8396 8.00139 55.4301 11.7157 51.7157C15.4301 48.0014 19.8396 45.055 24.6927 43.0448C29.5457 41.0346 34.7471 40 40 40C45.2529 40 50.4543 41.0346 55.3073 43.0448C60.1604 45.055 64.5699 48.0014 68.2843 51.7157C71.9986 55.4301 74.945 59.8396 76.9552 64.6927C78.9654 69.5457 80 74.7471 80 80H0Z"
                        className="fill-blue-dark"
                    />
                </svg>
            ),
        },
        {
            name: "Web Development",
            description: "Building digital solutions that power your business.",
            color: theme.colors.yellow.light,
            icon: (props) => (
                <svg {...props} viewBox="0 0 122 80">
                    <path d="M18.327 0L43.7405 27.7368L80.198 18.2818L52.3926 43.6325L61.871 80L36.4575 52.2632L0 61.7182L27.8054 36.3675L18.327 0Z" className="fill-purple" />
                    <path d="M112.386 19.3333L107.312 37.9873L121.634 50.537L102.753 46.2001L89.4455 60.6667L94.5202 42.0127L80.198 29.463L99.0784 33.7999L112.386 19.3333Z" className="fill-pink" />
                </svg>
            ),
        },
        {
            name: "Branding",
            description: "Crafting identities that leave a lasting impression.",
            color: theme.colors.blue.light,
            icon: (props) => (
                <svg {...props} viewBox="0 0 80 80">
                    <path d="M40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80Z" className="fill-pink" />
                    <path d="M40 60C51.0457 60 60 51.0457 60 40C60 28.9543 51.0457 20 40 20C28.9543 20 20 28.9543 20 40C20 51.0457 28.9543 60 40 60Z" className="fill-yellow-light" />
                </svg>
            ),
        },
        {
            name: "Managed Hosting",
            description: "Secure, reliable, and hassle-free hosting solutions.",
            color: theme.colors.pink,
            icon: (props) => (
                <svg {...props} viewBox="0 0 80 80">
                    <path d="M80 0H0V80H80V0Z" className="fill-yellow-light" />
                    <path d="M60 20H20V60H60V20Z" className="fill-purple" />
                </svg>
            ),
        },
    ];

    return (
        <main className="flex h-full w-full flex-col">
            {/* Hero */}
            <section className="relative flex flex-col items-center gap-20 bg-yellow-light pb-40 pt-20">
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

                <div className="relative z-10 flex max-w-full items-center gap-20 overflow-auto">
                    <div className="success-story-card" />

                    {[...Array(9)].map((_, i) => (
                        <img key={i} src={`/success-story/${i + 1}.JPG`} alt="Story 1" className="success-story-card rounded-xl" loading="lazy" />
                    ))}

                    <div className="success-story-card" />
                </div>

                <span className="relative z-10 font-mulish text-2xl font-medium">Running a business alone is hard...</span>

                <img src="/patterns/1.svg" alt="" className="absolute right-0 top-0 w-full max-w-xl" loading="lazy" />
                <img src="/patterns/2.svg" alt="" className="absolute bottom-0 left-0 w-full max-w-xl" loading="lazy" />
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
            <section className="relative flex flex-col items-center justify-center gap-16 pt-20">
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

                <img src="/illustrations/giving.png" alt="Hupa Giving to Luna" className="relative z-20 h-96" loading="lazy" />

                <img src="/patterns/3.svg" alt="" className="absolute bottom-0 left-0 z-10 h-72" loading="lazy" />
                <img src="/patterns/4.svg" alt="" className="absolute bottom-0 right-0 z-10 h-72" loading="lazy" />
                <svg viewBox="0 0 1920 116" className="absolute bottom-0 left-0 w-full fill-green opacity-50">
                    <path d="M0 32.4239C752.345 -8.49521 1173.01 -13.0605 1920 32.4239V116H0V32.4239Z" />
                </svg>
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
                    {services.map(({ color, name, description, icon: Icon }, i) => (
                        <button key={i} className="flex aspect-square h-full w-full max-w-lg shrink-0 flex-col items-start justify-between p-10" style={{ backgroundColor: color }}>
                            <section className="flex flex-col gap-5 text-left font-mulish text-black">
                                <h3 className="text-4xl font-bold">{name}</h3>
                                <p className="text-2xl">{description}</p>
                            </section>

                            <section className="flex w-full items-center justify-between">
                                <Icon className="h-20" />

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

                    <div className="relative w-full max-w-lg shrink-0">
                        <img src="/illustrations/waving.png" alt="Waving" className="relative z-20 mx-auto" />

                        <img src="/patterns/5.svg" alt="" className="absolute bottom-0 left-0 z-10 w-full" />

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

                <img src="/illustrations/work-together.png" alt="Work Together" className="relative z-10" />

                <div className="absolute bottom-0 left-0 flex w-full justify-center">
                    <img src="/patterns/6.svg" alt="" className="max-w-7xl" />
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
