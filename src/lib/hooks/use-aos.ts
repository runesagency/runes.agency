import { useEffect, useRef } from "react";

export const useAOS = () => {
    const refs = useRef<(HTMLElement | SVGSVGElement)[]>([]);

    const setRefForAOS = (el: HTMLElement | SVGSVGElement | null) => {
        if (el && !refs.current.includes(el)) {
            refs.current.push(el);
        }
    };

    useEffect(() => {
        const elements = refs.current;
        const attrName = {
            animationName: "data-aos-animation-name",
            hasAnimated: "data-aos-has-animated",
        };

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const target = entry.target as HTMLElement | SVGSVGElement;
                    let animationName = target.getAttribute(attrName.animationName);
                    let hasAnimated = target.getAttribute(attrName.hasAnimated) === "true";

                    if (!animationName) {
                        animationName = getComputedStyle(target).animationName;
                        target.setAttribute(attrName.animationName, animationName);
                    }

                    if (!hasAnimated) {
                        target.setAttribute(attrName.hasAnimated, "false");
                    }

                    if (entry.isIntersecting) {
                        target.style.animationName = animationName;
                        target.style.opacity = "";
                        target.setAttribute(attrName.hasAnimated, "true");
                    } else if (!hasAnimated) {
                        target.style.animationName = "none";
                        target.style.opacity = "0";
                    }
                });
            },
            {
                rootMargin: "-100px",
            }
        );

        elements.forEach((ref) => {
            observer.observe(ref);
        });

        return () => {
            elements.forEach((ref) => {
                observer.unobserve(ref);
            });
        };
    }, [refs.current.length]);

    return { setRefForAOS };
};
