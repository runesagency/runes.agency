"use client";

import Blog from "@/components/Blog";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import { LanguageChooser } from "@/lib/i18n/i18n";

import {
    IconBrandBehance,
    IconBrandInstagram,
    IconBrandLinkedin,
    IconBrandTiktok,
    IconBrandWhatsapp,
    IconCalendarTime,
    IconChevronDown,
    IconHeartHandshake,
    IconMail,
    IconMapPin,
} from "@tabler/icons-react";

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

    return (
        <main className="flex h-full w-full flex-col">
            {/* Hero */}
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
            <Blog />

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

                        <LanguageChooser className="!justify-start !p-0" />

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
