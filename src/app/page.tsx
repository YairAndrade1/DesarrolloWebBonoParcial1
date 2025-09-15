'use client'
import "./i18n";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center justify-center py-6">
        <h1 className="text-3xl font-bold text-center">
          {t("body.title")}
        </h1>
        <p className="text-lg text-center py-4">{t("body.description")}</p>
      </div>
      <div>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              {t("form.username")}
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder={t("form.username")}
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
              placeholder="Enter your phone number"
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
              placeholder="Enter your address"
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="
                bg-black
                text-white
                hover:bg-white
                hover:text-black
                hover:ring-2
                hover:ring-black
                font-bold
                py-2 px-4 
                rounded-2xl"
              type="button"
            >
              {t("form.submit")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
