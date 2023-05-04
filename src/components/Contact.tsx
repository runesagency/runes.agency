import { useAOS } from "@/lib/hooks/use-aos";
import { useIntersectionRatio } from "@/lib/hooks/use-intersection-ratio";
import { useLanguage } from "@/lib/i18n";

import { IconCalendarTime, IconHeartHandshake } from "@tabler/icons-react";
import clsx from "clsx";
import { useCallback } from "react";

export default function Contact() {
    const { t, code: languageCode } = useLanguage();
    const { setRefForAOS } = useAOS();
    const { elementRef, intersectionRatio } = useIntersectionRatio("top");

    const typeformsIds = {
        en: "XWnO26mK",
        id: "A9T5d7yX",
    };

    const onScheduleMeetingClick = useCallback(() => {
        window.Calendly.initPopupWidget({ url: "https://calendly.com/runesagency/30min" });
        return false;
    }, []);

    return (
        <section ref={elementRef} className="relative flex flex-col items-center gap-10 bg-blue-light pt-32 xl:gap-14" style={{ "--tw-bg-opacity": intersectionRatio } as React.CSSProperties}>
            <h2 className="text-center font-playfair-display text-4xl font-semibold text-black md:text-6xl lg:text-7xl xl:text-8xl">
                <span className="block pb-2 md:pb-4">
                    <span ref={setRefForAOS} className="animate-fade">
                        {t.contactTitle[0]}{" "}
                    </span>

                    <span ref={setRefForAOS} className="animate-fade font-medium animate-delay-500">
                        {t.contactTitle[1]}
                    </span>
                </span>

                <span>
                    <span ref={setRefForAOS} className="animate-fade font-medium animate-delay-700">
                        {t.contactTitle[2]}{" "}
                    </span>

                    <span ref={setRefForAOS} className="animate-fade animate-delay-1000">
                        {t.contactTitle[3]} <i>{t.contactTitle[4]}</i>
                    </span>
                </span>
            </h2>

            <p ref={setRefForAOS} className="max-w-sm animate-fade text-center font-mulish text-lg leading-normal text-black animate-delay-1000 md:max-w-2xl lg:max-w-3xl lg:text-2xl xl:max-w-4xl">
                <b>{t.contactSubtitle[0]}</b> {t.contactSubtitle[1]}
            </p>

            <div className="flex flex-col gap-4 md:flex-row md:gap-10">
                <button
                    ref={setRefForAOS}
                    onClick={onScheduleMeetingClick}
                    className="flex animate-fade-up items-center justify-center gap-4 rounded-full bg-yellow-light px-6 py-3 duration-200 hover:scale-105 lg:gap-6 lg:px-9 lg:py-5"
                >
                    <IconCalendarTime className="h-6 w-6 shrink-0 stroke-black stroke-1.5 lg:h-10 lg:w-10" />

                    <span className="font-mulish text-xl font-semibold text-black lg:text-2xl">
                        <span>{t.contactMeetingButton[0]} </span>
                        <span className="font-bold italic">{t.contactMeetingButton[1]}</span>
                    </span>
                </button>

                {Object.entries(typeformsIds).map(([langCode, typeformId]) => (
                    <button
                        ref={setRefForAOS}
                        key={typeformId}
                        data-tf-popup={typeformId}
                        data-tf-opacity="100"
                        data-tf-size="100"
                        data-tf-iframe-props="title=Runes Contact"
                        data-tf-transitive-search-params
                        data-tf-medium="snippet"
                        className={clsx(
                            "flex animate-fade-up items-center justify-center gap-4 rounded-full bg-black px-6 py-3 duration-200 animate-delay-200 hover:scale-105 lg:gap-6 lg:px-9 lg:py-5",
                            langCode !== languageCode && "hidden"
                        )}
                    >
                        <IconHeartHandshake className="h-6 w-6 shrink-0 stroke-white stroke-1.5 lg:h-10 lg:w-10" />

                        <span className="font-mulish text-xl font-semibold text-white lg:text-2xl">{t.contactUsButton}</span>
                    </button>
                ))}
            </div>

            <img ref={setRefForAOS} src="/illustrations/work-together.webp" alt="Work Together" className="relative z-10 max-w-full animate-fade-up select-none" draggable={false} />

            <div className="absolute bottom-0 left-0 flex w-full justify-center">
                <img ref={setRefForAOS} src="/patterns/6.svg" alt="" className="w-full max-w-7xl animate-fade-up select-none animate-delay-200" loading="lazy" draggable={false} />
            </div>
        </section>
    );
}
