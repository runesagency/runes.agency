import { useLanguage } from "@/lib/i18n";

export default function Portfolio() {
    const { t } = useLanguage();

    return (
        <section className="hidden flex-col items-center bg-green py-20 lg:flex">
            <div className="flex flex-col items-center gap-10 text-black">
                <h2 className="font-playfair-display text-6.5xl font-semibold">{t.portfolioTitle}</h2>

                <div className="flex gap-10 font-mulish text-xl text-black">
                    <button className="rounded-full border-2 border-black bg-black px-6 py-3 text-white">Graphic Design</button>
                    <button className="rounded-full border-2 border-black px-6 py-3">UI/UX Design</button>
                    <button className="rounded-full border-2 border-black px-6 py-3">Chat Bot</button>
                    <button className="rounded-full border-2 border-black px-6 py-3">Web Development</button>
                    <button className="rounded-full border-2 border-black px-6 py-3">Social Media Management</button>
                </div>
            </div>
        </section>
    );
}
