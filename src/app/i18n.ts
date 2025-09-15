import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
const resources = {
    en: { translation: { 
        "body.title": "Welcome to my Bonus",
        "body.description": "This bonus shows a form component that uses different React Hooks; State and Context Hooks that alterate header and page visualizacion.",
        "form.username": "User Name",
        "form.phone": "Phone Number",
        "form.address": "Address",
        "form.submit": "Submit"
    } },
    es: { translation: {
        "body.title": "Bienvenido a mi Bonus",
        "body.description": "Este bonus muestra un componente de formulario que utiliza diferentes React Hooks; State y Context Hooks que alteran la visualización del encabezado y la página.",
        "form.username": "Nombre de Usuario",
        "form.phone": "Número de Teléfono",
        "form.address": "Dirección",
        "form.submit": "Enviar"
    }}
}

if(!i18n.isInitialized){
    i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init( {
        resources,
        fallbackLng: "es",
        supportedLngs: ["en", "es"],
        nonExplicitSupportedLngs: true,
        detection: {
            order: ["querystring", "cookie","localStorage","navigator"],
            caches: ["cookie"]
        },
        interpolation: {
            escapeValue: false},
        debug: true }
    );
}


export default i18n;