import translations from "@/lib/i18n/translations";

import clsx from "clsx";
import { createContext, useCallback, useContext, useEffect, useState } from "react";

const defaultLanguage = Object.keys(translations)[0] as keyof typeof translations;

type LanguageContextType = {
    languageCode: keyof typeof translations;
    setLanguageCode: (language: keyof typeof translations) => void;
};

const LanguageContext = createContext<LanguageContextType>({
    languageCode: defaultLanguage,
    setLanguageCode: () => false,
});

type LanguageProviderProps = {
    children: React.ReactNode;
};

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
    const [languageCode, setLanguageCode] = useState<keyof typeof translations>(defaultLanguage);

    useEffect(() => {
        const language = localStorage.getItem("language") as keyof typeof translations;

        if (language && Object.keys(translations).includes(language)) {
            setLanguageCode(language);
        }
    }, []);

    return <LanguageContext.Provider value={{ languageCode, setLanguageCode }}>{children}</LanguageContext.Provider>;
};

type LanguageChooserProps = {
    className?: string;
    innerRef?: React.Ref<HTMLDivElement>;
};

export const LanguageChooser = ({ className, innerRef }: LanguageChooserProps) => {
    const { languageCode, setLanguageCode } = useContext(LanguageContext);
    const { flag } = translations[languageCode];

    const onLanguageChange = useCallback(
        (event: React.ChangeEvent<HTMLSelectElement>) => {
            const value = event.target.value;

            if (!Object.keys(translations).includes(value)) return;

            setLanguageCode(value as keyof typeof translations);
            localStorage.setItem("language", value);
        },
        [setLanguageCode]
    );

    return (
        <div ref={innerRef} className={clsx("flex items-center justify-center gap-3 rounded-xl bg-black px-4 py-2", className)}>
            {flag}

            <select onChange={onLanguageChange} value={languageCode} className="cursor-pointer bg-transparent font-mulish text-base text-white outline-none duration-200 hover:opacity-75 md:text-lg">
                {Object.entries(translations).map(([key, { name }]) => (
                    <option key={key} value={key} className="text-black">
                        {name}&nbsp;
                    </option>
                ))}
            </select>
        </div>
    );
};

export const useLanguage = () => {
    const { languageCode } = useContext(LanguageContext);
    const data = translations[languageCode];

    return {
        ...data,
        t: data.translations, // alias for translations
        code: languageCode,
    };
};
