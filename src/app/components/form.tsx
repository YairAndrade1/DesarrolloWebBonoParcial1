'use client'
import { useTranslation } from "react-i18next";
import useUser from "../userContext";
import { useState } from "react";

export default function Form() {
    const { t } = useTranslation();
    const { userData, setUserData } = useUser();

    const [draft, setDraft] = useState({
        phone: userData.phone,
        address: userData.address,
        year: userData.year,
    })

    const onChangeDraft = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setDraft({ ...draft, [id]: value });
    };

    const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserData({ name: e.target.value });
    };

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setUserData(draft);
    };

    return (
        <form onSubmit={onSubmit} className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center">{t("form.title")}</h2>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                    {t("form.username")}
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    placeholder={t("form.usernamePlaceholder")}
                    onChange={onChangeName}
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                    {t("form.phone")}
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="phone"
                    type="tel"
                    placeholder={t("form.phonePlaceholder")}
                    onChange={onChangeDraft}
                />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
                    {t("form.address")}
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="address"
                    type="text"
                    placeholder={t("form.addressPlaceholder")}
                    onChange={onChangeDraft}
                />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="year">
                    {t("form.year")}
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="year"
                    type="date"
                    placeholder={t("form.yearPlaceholder")}
                    onChange={onChangeDraft}
                />
            </div>
            <div className="flex items-center justify-center">
                <button
                    className="py-2 px-4 rounded-2xl border border-black bg-white text-black hover:bg-black hover:text-white transition-colors duration-200 "
                    type="button"
                    onClick={onSubmit}
                >
                    {t("form.submit")}
                </button>
            </div>
        </form>
    );
}
