import { IconChevronDown, IconCurrencyDollar, IconPresentation } from "@tabler/icons-react";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
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
    );
}
