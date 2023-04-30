import { LanguageChooser } from "@/lib/i18n/i18n";

import { IconCurrencyDollar, IconPresentation } from "@tabler/icons-react";
import clsx from "clsx";
import { useCallback, useEffect, useRef, useState } from "react";

const subtitles = [
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

const getSubtitle = (index: number): string => {
    const subtitle = subtitles[index];
    if (subtitle !== undefined) return subtitle;
    return getSubtitle(index - 1);
};

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const storyboardContainerRef = useRef<HTMLDivElement>(null);
    const storyboardRef = useRef<HTMLDivElement>(null);
    const storiesRefs = useRef<HTMLDivElement[]>([]);
    const subtitleRef = useRef<HTMLSpanElement>(null);

    const [storyIndex, setStoryIndex] = useState(0);

    const setStoryRef = useCallback((element: HTMLDivElement | null, index: number) => {
        if (!element) return;
        storiesRefs.current[index] = element;
    }, []);

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

        const heroGapSize = Number(getComputedStyle(containerRef.current).gap.replace("px", ""));
        const heroHeightSize = containerRef.current.getBoundingClientRect().height ?? 0;

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
    }, []);

    return (
        <section ref={containerRef} className="relative flex flex-col items-center gap-20 bg-yellow-light pt-20" style={{ height: "8000px" }}>
            <div className="relative z-10 flex w-full flex-col items-center justify-between gap-4 md:max-w-2xl md:flex-row lg:max-w-4xl xl:max-w-7xl">
                <img src="/logo.svg" alt="Logo" className="h-10" />

                <LanguageChooser />
            </div>

            <div className="relative z-10 flex flex-col items-center gap-4 md:gap-10">
                <h1 className="text-center font-playfair-display text-5.5xl font-medium text-black md:text-8xl xl:text-9xl">
                    <span className="block md:pb-6">Making Things</span>

                    <span className="font-semibold">
                        <i>Simple</i> For You
                    </span>
                </h1>

                <p className="max-w-sm text-center font-mulish text-lg leading-normal md:max-w-2xl md:text-2xl lg:max-w-3xl">
                    <b>Let's grow your brand together</b>. We know handling business is hard, let us help you so you don't have to do everything yourself.
                </p>
            </div>

            <div className="relative z-10 flex flex-wrap justify-center gap-6 stroke-black text-center font-mulish text-xl font-semibold text-black md:gap-10">
                <a href="#story" className="hidden rounded-full bg-black px-7 py-3 font-bold text-yellow-light lg:block">
                    See The Story
                </a>

                <button className="flex items-center gap-4 rounded-full bg-blue-light px-7 py-3 font-bold">
                    <IconPresentation className="h-6 w-6" />
                    <span>View Our Company Deck</span>
                </button>

                <button className="flex items-center gap-4 rounded-full bg-pink px-7 py-3 font-bold">
                    <IconCurrencyDollar className="h-6 w-6" />
                    <span>View Our Pricing</span>
                </button>
            </div>

            <div ref={storyboardContainerRef} className="sticky top-1 z-10 min-h-screen w-full pb-40">
                <div className="relative z-10 flex w-full translate-y-10 flex-col items-center gap-12 md:translate-y-12 xl:translate-y-24 xl:gap-20 3xl:translate-y-1/3">
                    <div ref={storyboardRef} className="hide-scrollbar relative flex w-full snap-x items-center gap-20 overflow-x-auto overflow-y-visible">
                        <div className="aspect-square h-full w-full max-w-md shrink-0" />
                        <div className="aspect-square h-full w-full max-w-md shrink-0" />

                        {[...Array(subtitles.length)].map((_, i) => (
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

                    <span ref={subtitleRef} id="story" className="max-w-md text-center font-mulish text-2xl font-medium" />

                    <div className="absolute z-10 h-full w-full" />
                </div>

                <img src="/patterns/2.svg" alt="" className="absolute bottom-0 left-0 w-full max-w-md select-none 2xl:max-w-xl" loading="lazy" draggable={false} />
            </div>

            <img src="/patterns/1.svg" alt="" className="absolute right-0 top-0 w-full max-w-xs select-none md:max-w-sm lg:max-w-md 2xl:max-w-xl" loading="eager" draggable={false} />
        </section>
    );
}
