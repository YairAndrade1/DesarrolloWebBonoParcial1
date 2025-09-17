'use client'
import i18n from "../i18n";
import { useTranslation } from "react-i18next";

export default function LangToggle() {
    const { t } = useTranslation();
    const isSpanish = i18n.language === "es";

    const handleToggle = () => {
        i18n.changeLanguage(isSpanish ? "en" : "es");
    };

    return (
        <button
            onClick={handleToggle}
            className="flex items-center gap-2 px-4 py-2 border border-black bg-white text-black hover:bg-black hover:text-white transition-colors duration-200 rounded"
        >
            <span className="text-sm font-medium">
                {isSpanish ? "🇪🇸 Español" : "🇺🇸 English"}
            </span>
        </button>
    );
}


