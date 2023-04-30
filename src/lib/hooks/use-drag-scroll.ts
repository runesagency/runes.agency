import { useCallback, useEffect, useRef, useState } from "react";

export const useDragScroll = <T extends HTMLElement = HTMLButtonElement>() => {
    const [isDragging, setIsDragging] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    const headerRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const blockRefs = useRef<T[]>([]);

    const blockIndex = useRef(0);
    const pos = useRef({
        top: 0,
        left: 0,
        x: 0,
        y: 0,
    });

    const setBlockRef = useCallback((element: T | null) => {
        if (!element) return;
        const index = blockRefs.current.length;
        blockRefs.current[index] = element;
    }, []);

    const scrollBlockTo = useCallback((blockIndex: number) => {
        const container = containerRef.current;
        if (!container) return;

        const block = blockRefs.current[blockIndex];
        if (!block) return;

        const scrollPaddingLeft = Number(getComputedStyle(container).scrollPaddingLeft.replace("px", ""));
        const newScrollPos = block.offsetLeft - scrollPaddingLeft;

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

    const onTouchStart = useCallback(() => {
        // don't touch, it's just work this way
        setIsHovering(true);
    }, []);

    const onTouchEnd = useCallback(() => {
        // don't touch, it's just work this way
        setIsHovering(false);
        setIsDragging(true);
        onMouseUp();
    }, [onMouseUp]);

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

    return {
        isDragging,
        isHovering,
        headerRef,
        containerRef,
        setBlockRef,
        containerProps: {
            onMouseEnter,
            onMouseLeave,
            onMouseDown,
            onMouseUp,
            onMouseMove,
            onScroll,
            onTouchStart,
            onTouchEnd,
        },
        onScrollLeftClick,
        onScrollRightClick,
    };
};
