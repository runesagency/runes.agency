"use client";

import { LanguageChooser, useLanguage } from "@/lib/i18n";

import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/navigation";

type PageProps = {
    params: Record<"type", string>;
};

const decksUrl = {
    intro: {
        en: "https://drive.google.com/file/d/1gikiHeuzX4JRPV5CtkQjD_8ptAOYhHC5/preview",
        id: "https://drive.google.com/file/d/1L9m4yCGi_Z6jdGXD5ONwh4MZb-awC1eK/preview",
    },
    pricing: {
        en: "https://drive.google.com/file/d/1Qn2JzcEKOvQn1iAVqOwfvO8aOccNtnnS/preview",
        id: "https://drive.google.com/file/d/1lWWNcE0xDdAPId7tBQIiWha1pLEUxIYH/preview",
    },
};

export default function CompanyDeck({ params }: PageProps) {
    const router = useRouter();
    const { code } = useLanguage();

    if (!(params.type in decksUrl)) {
        return router.push("/");
    }

    const fileUrls = decksUrl[params.type as keyof typeof decksUrl];

    return (
        <div className="relative flex h-screen w-full flex-col bg-black">
            <div className="relative z-10 mx-auto flex w-full max-w-2xl shrink-0 flex-row items-center justify-between gap-4 p-4 md:max-w-2xl lg:max-w-4xl xl:max-w-7xl">
                <Link href="/">
                    <img src="/logo-yellow.svg" alt="Logo" className="h-6" />
                </Link>

                <LanguageChooser className="!p-0" />
            </div>

            {Object.entries(fileUrls).map(([key, value], index) => (
                <iframe key={index} src={value} className={clsx("h-full", code !== key && "hidden")} />
            ))}
        </div>
    );
}
