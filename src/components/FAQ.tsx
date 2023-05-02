import { useAOS } from "@/lib/hooks/use-aos";
import { useLanguage } from "@/lib/i18n";

import { IconChevronDown } from "@tabler/icons-react";
import clsx from "clsx";
import { useCallback, useState } from "react";

export default function FAQ() {
    const { t } = useLanguage();
    const { setRefForAOS } = useAOS();
    const [faqIndex, setFaqIndex] = useState(-1);

    const onFaqClick = useCallback(
        (index: number) => () => {
            if (faqIndex === index) {
                setFaqIndex(-1);
            } else {
                setFaqIndex(index);
            }
        },
        [faqIndex]
    );

    return (
        <section className="pb-0 pt-20 lg:py-32">
            <main className="mx-auto flex w-full max-w-2xl flex-col gap-12 lg:max-w-4xl lg:flex-row xl:max-w-7xl xl:gap-20">
                <div className="mx-auto flex max-w-sm flex-1 flex-col gap-10 md:mx-0 md:max-w-none">
                    <h2 ref={setRefForAOS} className="animate-fade-right font-playfair-display text-5xl font-medium leading-snug text-black xl:text-6.5xl">
                        <span className="block">
                            {t.faqTitle[0]} <b>{t.faqTitle[1]}</b>
                        </span>

                        <span className="font-bold italic">{t.faqTitle[2]}</span>
                    </h2>

                    <div className="group flex flex-col gap-10">
                        {t.faqContents.map(({ question, answer }, i) => (
                            <button
                                ref={setRefForAOS}
                                key={i}
                                className="group/faq flex animate-fade-right flex-col gap-5 text-left font-mulish text-black"
                                style={{ animationDelay: `${i * 100 + 100}ms` }}
                            >
                                <section
                                    className={clsx("flex w-full items-center justify-between gap-4 duration-200", faqIndex !== i && "hover:!opacity-100 group-hover:opacity-40")}
                                    onClick={onFaqClick(i)}
                                >
                                    <h3 className="text-xl font-bold xl:text-2xl">{question}</h3>
                                    <IconChevronDown className={clsx("w-6 stroke-black duration-200", faqIndex === i && "rotate-180")} />
                                </section>

                                {faqIndex === i &&
                                    answer.map((paragraph, i) => (
                                        <p key={i} className="text-lg leading-normal">
                                            {paragraph}
                                        </p>
                                    ))}
                            </button>
                        ))}
                    </div>
                </div>

                <div ref={setRefForAOS} className="sticky top-10 mx-auto h-full w-full max-w-md shrink-0 animate-fade-left xl:max-w-lg">
                    <img
                        ref={setRefForAOS}
                        src="/illustrations/waving.webp"
                        alt="Waving"
                        className="relative z-20 mx-auto animate-fade-up select-none animate-delay-500"
                        draggable={false}
                        loading="lazy"
                    />

                    <img
                        ref={setRefForAOS}
                        src="/patterns/5.svg"
                        alt=""
                        className="absolute bottom-0 left-0 z-10 w-full animate-fade-up select-none animate-delay-300"
                        draggable={false}
                        loading="lazy"
                    />

                    <div className="absolute inset-0 flex h-full w-full items-end justify-center">
                        <svg viewBox="0 0 397 400" className="h-full w-9/12 fill-yellow-light">
                            <path d="M0.0450439 198.498C0.0450439 88.9194 88.8762 0.0883789 198.455 0.0883789C308.034 0.0883789 396.865 88.9195 396.865 198.498V517H0.0450439V198.498Z" />
                        </svg>
                    </div>
                </div>
            </main>
        </section>
    );
}
