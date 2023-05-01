import { useDragScroll } from "@/lib/hooks/use-drag-scroll";
import { useLatest } from "@/lib/hooks/use-latest";
import { useLanguage } from "@/lib/i18n";

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
    const { t } = useLanguage();
    const { isDragging, setBlockRef, headerRef, containerProps, containerRef } = useDragScroll<HTMLAnchorElement | HTMLDivElement>();
    const isActuallyDragging = useLatest(isDragging);

    const { data, isLoading } = usePosts();

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
            <div ref={headerRef} className="mx-auto flex w-full max-w-sm flex-col items-center justify-between gap-4 md:max-w-2xl md:flex-row lg:max-w-4xl 2xl:max-w-screen-xl 3xl:max-w-screen-2xl">
                <h2 className="font-playfair-display text-4.5xl font-semibold text-black">{t.blogTitle}</h2>

                <a href="https://blog.runes.agency" target="_blank" className="rounded-full bg-black px-7 py-3 font-mulish font-bold text-white duration-200 hover:scale-105" rel="noreferrer">
                    {t.blogButton}
                </a>
            </div>

            <div ref={containerRef} className={clsx("hide-scrollbar group flex w-full select-none gap-7 overflow-auto", isDragging ? "cursor-grabbing" : "cursor-grab")} {...containerProps}>
                <div className="h-full w-full max-w-sm shrink-0 md:max-w-lg" />

                {!isLoading &&
                    data &&
                    data.posts.map(({ feature_image, title, url }, i) => (
                        <a
                            key={i}
                            ref={setBlockRef}
                            href={url}
                            target="_blank"
                            className="flex w-full max-w-sm shrink-0 flex-col gap-5 duration-200 hover:!opacity-100 group-hover:opacity-50 md:max-w-lg"
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

                <div className="h-full w-full max-w-sm shrink-0 md:max-w-lg" />
            </div>
        </section>
    );
}
