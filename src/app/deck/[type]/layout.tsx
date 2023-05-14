import type { Metadata } from "next";

import { redirect } from "next/navigation";

const deckTitles = {
    intro: "Runes | Intro Deck",
    pricing: "Runes | Pricing Deck",
} as const;

type Props = {
    params: {
        type: keyof typeof deckTitles;
    };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    return {
        title: deckTitles[params.type],
    };
}

export default function CompanyDeckLayout({ children, params }: { children: React.ReactNode } & Props) {
    if (!(params.type in deckTitles)) {
        return redirect("/");
    }

    return children;
}
