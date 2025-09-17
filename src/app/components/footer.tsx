'use client'
import { useTranslation } from "react-i18next";
import LangToggle from "./langToggle";
import useUser from "../userContext";

export default function Footer() {
    const { t } = useTranslation();
    const { userData } = useUser();
    const { phone, address, year } = userData;
    return (
        <footer className="container m-auto grid grid-cols-2 justify-items-center bg-white text-center py-10">
            <div>
                <p>{t("footer.phone", { phone })}</p>
                <p>{t("footer.address", { address })}</p>
                <p>{t("footer.birthday", { year })}</p>
            </div>
            <div className="my-2 mx-auto"><LangToggle /></div>
        </footer>
    );
}