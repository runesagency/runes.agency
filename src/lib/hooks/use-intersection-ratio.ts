import { useEffect, useRef, useState } from "react";

export const useIntersectionRatio = (pinpoint: "top" | "bottom") => {
    const elementRef = useRef<HTMLDivElement | null>(null);
    const [intersectionRatio, setIntersectionRatio] = useState(1);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        const { top, height } = element.getBoundingClientRect();
        const addConstant = pinpoint === "top" ? 200 : height;

        let start = top + window.scrollY - window.innerHeight + addConstant;
        let end = top + window.scrollY + addConstant;

        const onScroll = () => {
            const ratio = (window.scrollY - start) / (end - start);
            let percentage = Math.max(0, Math.min(1, ratio));
            if (pinpoint === "bottom") percentage = 1 - percentage;
            setIntersectionRatio(percentage);
        };

        const observer = new ResizeObserver(() => {
            const { top } = element.getBoundingClientRect();
            start = top + window.scrollY - window.innerHeight + addConstant;
            end = top + window.scrollY + addConstant;
        });

        observer.observe(document.body);

        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, [pinpoint]);

    return {
        elementRef,
        intersectionRatio,
    };
};
