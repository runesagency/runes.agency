import { useAOS } from "@/lib/hooks/use-aos";
import { useIntersectionRatio } from "@/lib/hooks/use-intersection-ratio";
import { LanguageChooser, useLanguage } from "@/lib/i18n";

import clsx from "clsx";
import { useCallback, useEffect, useRef, useState } from "react";

export default function Hero() {
    const { t } = useLanguage();
    const { setRefForAOS } = useAOS();
    const { elementRef: containerRef, intersectionRatio } = useIntersectionRatio("bottom");

    const storyboardContainerRef = useRef<HTMLDivElement>(null);
    const storyboardRef = useRef<HTMLDivElement>(null);
    const storiesRefs = useRef<HTMLDivElement[]>([]);
    const subtitleRef = useRef<HTMLSpanElement>(null);

    const [storyIndex, setStoryIndex] = useState(0);
    const [storyPercentage, setStoryPercentage] = useState(0);

    const setStoryRef = useCallback((element: HTMLDivElement | null, index: number) => {
        if (!element) return;
        storiesRefs.current[index] = element;
    }, []);

    const getSubtitle = useCallback(
        (index: number): string => {
            const subtitle = t.mainStorySubtitles[index];
            if (subtitle !== undefined) return subtitle;
            return getSubtitle(index - 1);
        },
        [t]
    );

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const storyboardContainer = storyboardContainerRef.current;
        if (!storyboardContainer) return;

        const storyboard = storyboardRef.current;
        if (!storyboard) return;

        // Get the scroll of the previous sibling so the current story was snapped in the middle
        const storiesScrollLength = storiesRefs.current.map((story) => (story?.previousElementSibling as HTMLDivElement)?.offsetLeft);

        let lastSlideIndex = -1;
        let lastTypewritingInterval: NodeJS.Timeout | undefined = undefined;
        let lastSubtitle = "";

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

                const distanceBetweenSlide = 100 / storiesRefs.current.length;
                const slideIndex = Math.round(scrollPercentage / distanceBetweenSlide) - 1;

                if (slideIndex === lastSlideIndex || slideIndex < 0) return;

                const subtitle = getSubtitle(slideIndex);

                if (subtitleRef.current && subtitle !== lastSubtitle) {
                    if (lastTypewritingInterval) {
                        clearInterval(lastTypewritingInterval);
                        lastTypewritingInterval = undefined;
                        subtitleRef.current.innerText = "";
                    }

                    const subtitleText = subtitle.split("");
                    let subtitleIndex = 0;

                    lastTypewritingInterval = setInterval(() => {
                        if (subtitleIndex >= subtitleText.length) {
                            clearInterval(lastTypewritingInterval);
                            return;
                        }

                        subtitleRef.current?.append(subtitleText[subtitleIndex]);
                        subtitleIndex++;
                    }, 50);

                    lastSubtitle = subtitle;
                }

                storyboardRef.current?.scrollTo({
                    left: storiesScrollLength[slideIndex],
                    behavior: "smooth",
                });

                setStoryIndex(slideIndex);
                lastSlideIndex = slideIndex;
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, [containerRef, getSubtitle]);

    useEffect(() => {
        if (!storyboardContainerRef.current) return;
        setRefForAOS(storyboardContainerRef.current);
    }, [storyboardContainerRef, setRefForAOS, containerRef]);

    return (
        // eslint-disable-next-line tailwindcss/no-arbitrary-value
        <section ref={containerRef} className="relative flex h-[8000px] flex-col items-center gap-20 bg-yellow-light pt-20" style={{ "--tw-bg-opacity": intersectionRatio } as React.CSSProperties}>
            <div className="relative z-10 flex w-full flex-col items-center justify-between gap-4 md:max-w-2xl md:flex-row lg:max-w-4xl xl:max-w-7xl">
                <img ref={setRefForAOS} src="/logo.svg" alt="Logo" className="h-10 animate-fade-right" />

                <LanguageChooser innerRef={setRefForAOS} className="animate-fade-left" />
            </div>

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

            <div ref={storyboardContainerRef} className="sticky top-0 z-10 min-h-screen w-full animate-fade-up pb-40">
                <div className="relative z-10 flex w-full translate-y-10 flex-col items-center gap-12 md:translate-y-12 xl:translate-y-24 xl:gap-20 3xl:translate-y-1/3">
                    <div ref={storyboardRef} className="hide-scrollbar relative flex w-full snap-x items-center gap-20 overflow-x-auto overflow-y-visible">
                        <div className="aspect-square h-full w-full max-w-md shrink-0" />
                        <div className="aspect-square h-full w-full max-w-md shrink-0" />

                        {[...Array(t.mainStorySubtitles.length)].map((_, i) => (
                            <div
                                key={i}
                                ref={(ref) => setStoryRef(ref, i)}
                                data-index={i}
                                className={clsx(
                                    "aspect-square max-w-sm shrink-0 select-none snap-center overflow-hidden rounded-xl transition-all duration-500 xl:max-w-md",
                                    storyIndex === i ? "scale-100" : "scale-90 opacity-40"
                                )}
                            >
                                <img src={`/success-story/${i + 1}.webp`} alt="Story 1" className="h-full w-full object-cover object-center" loading="lazy" draggable={false} />
                            </div>
                        ))}

                        <div className="aspect-square h-full w-full max-w-md shrink-0" />
                        <div className="aspect-square h-full w-full max-w-md shrink-0" />
                    </div>

                    <span ref={subtitleRef} id="story" className="max-w-md text-center font-mulish text-2xl font-medium text-black" />

                    <div className="absolute z-10 h-full w-full" />
                </div>

                <img
                    ref={setRefForAOS}
                    src="/patterns/2.svg"
                    alt=""
                    className="absolute bottom-0 left-0 w-full max-w-md animate-fade-right select-none 2xl:max-w-xl"
                    loading="lazy"
                    draggable={false}
                />

                <div className="absolute left-0 top-0 z-10 h-1 w-full">
                    <div
                        className={clsx("h-full bg-black duration-500", (storyPercentage < 10 || storyPercentage > 93) && "opacity-0")}
                        style={{
                            width: storyPercentage + "%",
                        }}
                    />
                </div>
            </div>

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
