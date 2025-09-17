'use client'
import Form from "./components/form";
import "./i18n";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center justify-center py-6">
        <h1 className="text-3xl font-bold">{t("body.title")}</h1>
        <p className="text-lg text-center py-4">{t("body.description")}</p>
      </div>
      <Form />
    </div>
  );
}
