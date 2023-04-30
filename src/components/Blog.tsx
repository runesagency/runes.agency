import { useDragScroll } from "@/lib/hooks/use-drag-scroll";
import { useLatest } from "@/lib/hooks/use-latest";

import clsx from "clsx";
import useSWR from "swr";

const usePosts = () => {
    type Data = {
        posts: {
            title: string;
            feature_image: string | null;
            url: string;
        }[];
    };

    const fetcher = (url: string) => fetch(url).then((res) => res.json());
    const response = useSWR<Data>("/blogs", fetcher);

    return response;
};

export default function Blog() {
    const { isDragging, setBlockRef, headerRef, containerProps, containerRef } = useDragScroll<HTMLAnchorElement | HTMLDivElement>();
    const isActuallyDragging = useLatest(isDragging);

    const fetcher = (url: string) => fetch(url).then((res) => res.json());
    const { data, error, isLoading } = usePosts();

    const dataFillerCount = data && data.posts.length < 5 ? 5 - data.posts.length : 0;

    const onLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
    };

    const onLinkPress = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();

        const href = e.currentTarget.getAttribute("href");
        const target = e.currentTarget.getAttribute("target");

        setTimeout(() => {
            if (!isActuallyDragging.current && href) {
                window.open(href, target || "_self");
            }
        }, 100);
    };

    return (
        <section className="flex flex-col gap-10 py-20">
            <div ref={headerRef} className="mx-auto flex w-full max-w-screen-2xl items-center justify-between">
                <h2 className="font-playfair-display text-4.5xl font-semibold text-black">Blogs & Insights</h2>

                <a href="https://blog.runes.agency" target="_blank" className="rounded-full bg-black px-7 py-3 font-mulish font-bold text-white" rel="noreferrer">
                    See More
                </a>
            </div>

            <div ref={containerRef} className={clsx("hide-scrollbar flex w-full select-none gap-7 overflow-auto", isDragging ? "cursor-grabbing" : "cursor-grab")} {...containerProps}>
                <div className="h-full w-full max-w-lg shrink-0" />

                {!isLoading &&
                    data &&
                    data.posts.map(({ feature_image, title, url }, i) => (
                        <a
                            key={i}
                            ref={setBlockRef}
                            href={url}
                            target="_blank"
                            className="flex w-full max-w-lg shrink-0 flex-col gap-5"
                            draggable={false}
                            onClick={onLinkClick}
                            onMouseDown={onLinkPress}
                            rel="noreferrer"
                        >
                            <div className="h-80 w-full overflow-hidden rounded-xl bg-gray">
                                {feature_image && <img src={feature_image} alt="Cover" className="h-full w-full object-cover object-center" loading="lazy" draggable={false} />}
                            </div>

                            <p className="font-mulish text-2xl font-medium text-black">{title}</p>
                        </a>
                    ))}

                {dataFillerCount > 0 &&
                    [...Array(dataFillerCount)].map((_, i) => (
                        <div key={i} ref={setBlockRef} className="flex w-full max-w-lg shrink-0 flex-col gap-5" draggable={false} rel="noreferrer">
                            <div className="h-80 w-full overflow-hidden rounded-xl bg-gray" />
                        </div>
                    ))}

                <div className="h-full w-full max-w-lg shrink-0" />
            </div>
        </section>
    );
}
