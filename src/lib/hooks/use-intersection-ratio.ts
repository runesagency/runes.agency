import { useEffect, useRef, useState } from "react";

export const useIntersectionRatio = (pinpoint: "top" | "bottom") => {
    const elementRef = useRef<HTMLDivElement | null>(null);
    const [intersectionRatio, setIntersectionRatio] = useState(pinpoint === "top" ? 0 : 1);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        const { top, height } = element.getBoundingClientRect();
        const addConstant = pinpoint === "top" ? 200 : height;

        let start = top + window.scrollY - window.innerHeight + addConstant;
        let end = top + window.scrollY + addConstant;

        const onScroll = () => {
            const ratio = (window.scrollY - start) / (end - start);
            const percentage = Math.max(0, Math.min(1, ratio));
            setIntersectionRatio(pinpoint === "top" ? percentage : 1 - percentage);
        };

        window.addEventListener("scroll", onScroll);

        const observer = new ResizeObserver(() => {
            const { top, height } = element.getBoundingClientRect();
            const addConstant = pinpoint === "top" ? 200 : height;

            start = top + window.scrollY - window.innerHeight + addConstant;
            end = top + window.scrollY + addConstant;

            onScroll();
        });

        observer.observe(document.body);

        return () => {
            window.removeEventListener("scroll", onScroll);
            observer.disconnect();
        };
    }, [pinpoint]);

    return {
        elementRef,
        intersectionRatio,
    };
};
