import { useAOS } from "@/lib/hooks/use-aos";
import { useIntersectionRatio } from "@/lib/hooks/use-intersection-ratio";
import { LanguageChooser, useLanguage } from "@/lib/i18n";

import clsx from "clsx";
import { useCallback, useEffect, useRef, useState } from "react";

export default function Hero() {
    const { t } = useLanguage();
    const { setRefForAOS } = useAOS();
    const { elementRef: containerRef, intersectionRatio } = useIntersectionRatio("bottom");

    const storyboardContainerRef = useRef<HTMLDivElement | null>(null);
    const storyboardRef = useRef<HTMLDivElement>(null);
    const storiesRefs = useRef<HTMLDivElement[]>([]);
    const subtitleRef = useRef<HTMLSpanElement>(null);

    const lastTypewritingIntervalRef = useRef<NodeJS.Timeout | undefined>(undefined);
    const lastSubtitleRef = useRef<string>("");

    const [storyIndex, setStoryIndex] = useState(0);
    const [storyPercentage, setStoryPercentage] = useState(0);

    const setStoryRef = useCallback((element: HTMLDivElement | null, index: number) => {
        if (!element) return;
        storiesRefs.current[index] = element;
    }, []);

    const setStoryboardContainerRef = useCallback(
        (element: HTMLDivElement | null) => {
            if (!element) return;
            storyboardContainerRef.current = element;
            setRefForAOS(element);
        },
        [setRefForAOS]
    );

    const getSubtitle = useCallback(
        (index: number): string => {
            const subtitle = t.mainStorySubtitles[index];
            if (subtitle !== undefined) return subtitle;
            return getSubtitle(index - 1);
        },
        [t]
    );

    const onStorySkipClick = useCallback(() => {
        const posY = containerRef.current?.getBoundingClientRect().height ?? 0;
        window.scrollTo({ top: posY, behavior: "smooth" });
    }, [containerRef]);

    const onCompanyDeckClick = useCallback(() => {
        window.gtag("event", "button_click", {
            event_category: "engagement",
            event_label: "company_deck",
        });
    }, []);

    const onPricingGuideClick = useCallback(() => {
        window.gtag("event", "button_click", {
            event_category: "engagement",
            event_label: "pricing_guide",
        });
    }, []);

    useEffect(() => {
        const container = containerRef.current;
        const storyboardContainer = storyboardContainerRef.current;
        const storyboard = storyboardRef.current;
        const stories = storiesRefs.current;

        if (!container || !storyboardContainer || !storyboard || stories.length === 0) return;

        let lastSlideIndex = -1;

        const heroGapSize = Number(getComputedStyle(container).gap.replace("px", ""));
        const heroHeightSize = container.getBoundingClientRect().height ?? 0;

        const storyboardContainerPreviousSibling = storyboardContainer.previousElementSibling;
        if (!storyboardContainerPreviousSibling) return;

        const storyboardParentPreviousSiblingRect = storyboardContainerPreviousSibling.getBoundingClientRect();
        const storyboardParentPreviousSiblingToTop = storyboardParentPreviousSiblingRect.top + storyboardParentPreviousSiblingRect.height + heroGapSize + window.scrollY;

        const onScroll = () => {
            const scrollPosition = window.scrollY;

            if (scrollPosition > storyboardParentPreviousSiblingToTop && scrollPosition < heroHeightSize) {
                const viewportHeight = window.innerHeight;

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

                setStoryPercentage(scrollPercentage);

                const distanceBetweenSlide = 100 / stories.length;
                const slideIndex = Math.round(scrollPercentage / distanceBetweenSlide);

                if (slideIndex !== lastSlideIndex && slideIndex >= 0 && slideIndex < stories.length) {
                    const subtitleText = getSubtitle(slideIndex);
                    const subtitle = subtitleRef.current;
                    const lastTypewritingInterval = lastTypewritingIntervalRef.current;

                    if (subtitle && subtitleText !== lastSubtitleRef.current) {
                        if (lastTypewritingInterval) {
                            clearInterval(lastTypewritingInterval);
                            lastTypewritingIntervalRef.current = undefined;
                            subtitle.innerText = "";
                        }

                        const subtitleTextSplitted = subtitleText.split("");
                        let subtitleIndex = 0;

                        lastTypewritingIntervalRef.current = setInterval(() => {
                            if (subtitleIndex >= subtitleTextSplitted.length) {
                                clearInterval(lastTypewritingInterval);
                                return;
                            }

                            subtitle.append(subtitleTextSplitted[subtitleIndex]);
                            subtitleIndex++;
                        }, 50);

                        lastSubtitleRef.current = subtitleText;
                    }

                    const currentStory = stories[slideIndex];
                    const scrollLength = currentStory.offsetLeft - window.innerWidth / 2 + currentStory.getBoundingClientRect().width / 2;

                    storyboard.scrollTo({
                        left: scrollLength,
                        behavior: "smooth",
                    });

                    setStoryIndex(slideIndex);
                    lastSlideIndex = slideIndex;
                }
            }
        };

        onScroll();
        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, [containerRef, getSubtitle]);

    return (
        // eslint-disable-next-line tailwindcss/no-arbitrary-value
        <section ref={containerRef} className="relative flex h-[8000px] flex-col items-center gap-20 bg-yellow-light pt-20" style={{ "--tw-bg-opacity": intersectionRatio } as React.CSSProperties}>
            {/* Header */}
            <div className="relative z-10 flex w-full flex-col items-center justify-between gap-4 md:max-w-2xl md:flex-row lg:max-w-4xl xl:max-w-7xl">
                <img ref={setRefForAOS} src="/logo.svg" alt="Logo" className="h-10 animate-fade-right" />

                <LanguageChooser innerRef={setRefForAOS} className="animate-fade-left" />
            </div>

            {/* Title */}
            <div className="relative z-10 flex flex-col items-center gap-4 text-black md:gap-10">
                <h1 ref={setRefForAOS} className="animate-fade-up text-center font-playfair-display text-5.5xl font-medium md:text-8xl xl:text-9xl">
                    <span className="block md:pb-6">{t.mainTitle[0]}</span>

                    <span className="font-semibold">
                        <i>{t.mainTitle[1]}</i> {t.mainTitle[2]}
                    </span>
                </h1>

                <p ref={setRefForAOS} className="max-w-sm animate-fade-up text-center font-mulish text-lg leading-normal animate-delay-200 md:max-w-2xl md:text-2xl lg:max-w-3xl">
                    <b>{t.mainSubtitle[0]}</b> {t.mainSubtitle[1]}
                </p>
            </div>

            {/* Buttons */}
            <div className="relative z-10 flex flex-wrap justify-center gap-6 stroke-black text-center font-mulish text-xl font-semibold text-black md:gap-10">
                <a
                    ref={setRefForAOS}
                    href="#story"
                    className="hidden animate-fade-up rounded-full bg-black px-7 py-3 font-bold text-yellow-light duration-200 animate-delay-300 hover:scale-105 lg:block"
                >
                    {t.mainStoryButton}
                </a>

                {/* <a
                    ref={setRefForAOS}
                    href="/runes-capabilities-deck.pdf"
                    target="_blank"
                    className="flex animate-fade-up items-center gap-4 rounded-full bg-blue-light px-7 py-3 font-bold duration-200 animate-delay-500 hover:scale-105"
                >
                    <IconPresentation className="h-6 w-6" />
                    <span>{t.mainDeckButton}</span>
                </a> */}

                {/* <a
                    ref={setRefForAOS}
                    href="/pricing-guide.pdf"
                    target="_blank"
                    className="flex animate-fade-up items-center gap-4 rounded-full bg-pink px-7 py-3 font-bold duration-200 animate-delay-700 hover:scale-105"
                >
                    <IconCurrencyDollar className="h-6 w-6" />
                    <span>{t.mainPricingButton}</span>
                </a> */}
            </div>

            {/* Story (Images + Subtitle) */}
            <div ref={setStoryboardContainerRef} className="sticky top-0 z-10 min-h-screen w-full animate-fade-up pb-40">
                {/* Images + Subtitle + Skip Button */}
                <div className="relative z-10 flex h-screen w-full flex-col items-center justify-center gap-12">
                    {/* Images */}
                    <div ref={storyboardRef} className="hide-scrollbar relative flex w-full gap-20 overflow-x-auto overflow-y-visible">
                        <div className="aspect-square h-full w-full max-w-md shrink-0" />
                        <div className="aspect-square h-full w-full max-w-md shrink-0" />

                        {[...Array(t.mainStorySubtitles.length)].map((_, i) => (
                            <div key={i} ref={(ref) => setStoryRef(ref, i)} data-index={i} className="relative aspect-square max-w-sm shrink-0 select-none overflow-hidden xl:max-w-md">
                                <img
                                    src={`/success-story/${i + 1}.webp`}
                                    alt="Story 1"
                                    className={clsx("h-full w-full origin-center rounded-xl object-cover object-center duration-500", storyIndex === i ? "scale-100" : "scale-90 opacity-40")}
                                    loading="lazy"
                                    draggable={false}
                                />
                            </div>
                        ))}

                        <div className="aspect-square h-full w-full max-w-md shrink-0" />
                        <div className="aspect-square h-full w-full max-w-md shrink-0" />
                    </div>

                    {/* Subtitle + Skip Button */}
                    <div className="relative z-20 flex max-w-sm flex-col items-center gap-4 font-mulish md:max-w-md">
                        <span ref={subtitleRef} id="story" className="text-center text-2xl font-medium text-black" />

                        <a
                            onClick={onStorySkipClick}
                            className={clsx(
                                "w-max cursor-pointer rounded-full bg-black px-4 py-1.5 text-base font-bold text-yellow-light duration-200 hover:scale-105",
                                (storyIndex === 0 || storyIndex === storiesRefs.current.length - 1) && "opacity-0"
                            )}
                        >
                            Skip Story
                        </a>
                    </div>

                    {/* Touch Blocker */}
                    <div className="absolute z-10 h-full w-full" />
                </div>

                {/* Pattern Left Bottom */}
                <img
                    ref={setRefForAOS}
                    src="/patterns/2.svg"
                    alt=""
                    className="absolute bottom-0 left-0 w-full max-w-md animate-fade-right select-none 2xl:max-w-xl"
                    loading="lazy"
                    draggable={false}
                />

                {/* Progress Bar */}
                <div className="absolute left-0 top-0 z-10 h-1 w-full">
                    <div
                        className={clsx("h-full bg-black duration-500", (storyIndex === 0 || storyIndex === storiesRefs.current.length - 1) && "opacity-0")}
                        style={{
                            width: storyPercentage + "%",
                        }}
                    />
                </div>
            </div>

            {/* Pattern Right Top */}
            <img
                ref={setRefForAOS}
                src="/patterns/1.svg"
                alt=""
                className="absolute right-0 top-0 w-full max-w-xs animate-fade-down select-none animate-delay-150 md:max-w-sm lg:max-w-md 2xl:max-w-xl"
                loading="eager"
                draggable={false}
            />
        </section>
    );
}
