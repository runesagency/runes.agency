import { theme } from "tailwind.config";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import clsx from "clsx";
import { useCallback, useEffect, useRef, useState } from "react";

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
                    className="fill-blue-dark"
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

export default function Services() {
    const [isDragging, setIsDragging] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    const headerRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const blockRefs = useRef<HTMLButtonElement[]>([]);

    const blockIndex = useRef(0);
    const pos = useRef({
        top: 0,
        left: 0,
        x: 0,
        y: 0,
    });

    const setBlockRef = useCallback((element: HTMLButtonElement | null, index: number) => {
        if (!element) return;
        blockRefs.current[index] = element;
    }, []);

    const scrollBlockTo = useCallback((blockIndex: number) => {
        const container = containerRef.current;
        if (!container) return;

        const scrollPaddingLeft = Number(getComputedStyle(container).scrollPaddingLeft.replace("px", ""));
        const newScrollPos = blockRefs.current[blockIndex].offsetLeft - scrollPaddingLeft;

        container.scrollTo({
            top: 0,
            left: newScrollPos,
            behavior: "smooth",
        });
    }, []);

    const onMouseEnter = useCallback(() => {
        setIsHovering(true);
    }, []);

    const onMouseLeave = useCallback(() => {
        setIsHovering(false);
    }, []);

    const onMouseDown = useCallback((e: React.MouseEvent) => {
        setIsDragging(true);

        const container = containerRef.current;
        if (!container) return;

        pos.current = {
            // The current scroll
            left: container.scrollLeft,
            top: container.scrollTop,
            // Get the current mouse position
            x: e.clientX,
            y: e.clientY,
        };
    }, []);

    const onMouseUp = useCallback(() => {
        if (!isDragging) return;

        setIsDragging(false);

        const container = containerRef.current;
        if (!container) return;

        const closestBlockToLeft = blockRefs.current.reduce((prev, curr, i) => {
            if (!curr) return prev;

            const prevDistance = Math.abs(prev.offsetLeft - container.scrollLeft);
            const currDistance = Math.abs(curr.offsetLeft - container.scrollLeft);

            if (prevDistance < currDistance) return prev;

            blockIndex.current = i;
            return curr;
        });

        const closestBlockToLeftIndex = blockRefs.current.indexOf(closestBlockToLeft);

        scrollBlockTo(closestBlockToLeftIndex);
    }, [isDragging, scrollBlockTo]);

    const onMouseMove = useCallback(
        (e: React.MouseEvent) => {
            if (!isDragging) return;

            const container = containerRef.current;
            if (!container) return;

            // How far the mouse has been moved
            const dx = e.clientX - pos.current.x;
            const dy = e.clientY - pos.current.y;

            // Scroll the element
            container.scrollTo({
                top: pos.current.top - dy,
                left: pos.current.left - dx,
            });
        },
        [isDragging]
    );

    const scrollCheckTimeout = useRef<NodeJS.Timeout | undefined>(undefined);
    const onScroll = useCallback(() => {
        if (scrollCheckTimeout.current) clearTimeout(scrollCheckTimeout.current);

        scrollCheckTimeout.current = setTimeout(() => {
            onMouseUp();
        }, 100);
    }, [onMouseUp]);

    const pauseAutoScrollTimeout = useRef<NodeJS.Timeout | undefined>(undefined);
    const pauseAutoScrollAMoment = useCallback(() => {
        if (pauseAutoScrollTimeout.current) clearTimeout(pauseAutoScrollTimeout.current);

        pauseAutoScrollTimeout.current = setTimeout(() => {
            setIsDragging(false);
        }, 1000);

        setIsDragging(true);
    }, []);

    const onScrollLeftClick = useCallback(() => {
        blockIndex.current -= 1;
        if (blockIndex.current < 0) blockIndex.current = blockRefs.current.length - 1;

        scrollBlockTo(blockIndex.current);
        pauseAutoScrollAMoment();
    }, [pauseAutoScrollAMoment, scrollBlockTo]);

    const onScrollRightClick = useCallback(() => {
        blockIndex.current += 1;
        if (blockIndex.current > blockRefs.current.length - 1) blockIndex.current = 0;

        scrollBlockTo(blockIndex.current);
        pauseAutoScrollAMoment();
    }, [pauseAutoScrollAMoment, scrollBlockTo]);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const header = headerRef.current;
        if (!header) return;

        const setScrollPaddingLeft = () => {
            const headerToLeft = header.offsetLeft;
            container.style.scrollPaddingLeft = `${headerToLeft}px`;
        };

        const observer = new ResizeObserver(() => {
            setScrollPaddingLeft();
        });

        observer.observe(document.body);
        setScrollPaddingLeft();

        return () => {
            observer.disconnect();
        };
    }, []);

    useEffect(() => {
        scrollBlockTo(blockIndex.current);
    }, [scrollBlockTo]);

    useEffect(() => {
        const autoScrollInterval = setInterval(() => {
            if (isDragging || isHovering) return;

            scrollBlockTo(blockIndex.current);

            if (blockIndex.current === blockRefs.current.length - 1) blockIndex.current = 0;
            else blockIndex.current += 1;
        }, 4000);

        return () => {
            clearInterval(autoScrollInterval);
        };
    }, [containerRef, isDragging, isHovering, scrollBlockTo]);

    return (
        <section className="flex flex-col gap-20 py-32">
            <div ref={headerRef} className="mx-auto flex w-full max-w-screen-2xl items-center justify-between">
                <h2 className="font-playfair-display text-6.5xl font-medium text-black">
                    We Do <span className="font-semibold">A Lot</span> Of <span className="font-semibold italic">Things</span>
                </h2>

                <div className="flex gap-6">
                    <button className="flex h-14 w-14 items-center justify-center rounded-full bg-black" onClick={onScrollLeftClick}>
                        <IconArrowLeft width={20} className="stroke-white" />
                    </button>

                    <button className="flex h-14 w-14 items-center justify-center rounded-full bg-black" onClick={onScrollRightClick}>
                        <IconArrowRight width={20} className="stroke-white" />
                    </button>
                </div>
            </div>

            <div
                ref={containerRef}
                className={clsx("hide-scrollbar flex w-full select-none gap-10 overflow-auto", isDragging ? "cursor-grabbing" : "cursor-grab")}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                onMouseDown={onMouseDown}
                onMouseMove={onMouseMove}
                onMouseUp={onMouseUp}
                onScroll={onScroll}
            >
                <div className="aspect-square h-full w-full max-w-lg shrink-0" />

                {services.map(({ color, name, description, icon: Icon }, i) => (
                    <button
                        ref={(ref) => setBlockRef(ref, i)}
                        key={i}
                        className="flex aspect-square h-full w-full max-w-lg shrink-0 flex-col items-start justify-between p-10"
                        style={{ backgroundColor: color }}
                    >
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

                <div className="aspect-square h-full w-full max-w-lg shrink-0" />
            </div>
        </section>
    );
}
