'use client'
import { useTranslation } from "react-i18next";
import useUser from "../userContext";
export default function navBar() {
    const { t } = useTranslation();
    const { userData } = useUser();
    const { name } = userData;
    return (
        <nav className="w-full flex-row flex justify-between items-center p-4 border-b border-gray-300">
            <div className="flex flex-row justify-center ml-5">
                <img src="/Uniandes.png" alt="Logo" className="h-12" />
            </div>
            <h1 className="text-2xl font-medium text-center">
                {name === "" ? "" : t("navbar.greeting", { name })}
            </h1>
        </nav>
    );
}