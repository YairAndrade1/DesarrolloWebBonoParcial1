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
        "form.submit": "Submit",
        "form.usernamePlaceholder": "Enter your user name",
        "form.phonePlaceholder": "Enter your phone number",
        "form.addressPlaceholder": "Enter your address",
        "form.year": "Birthday",
        "form.yearPlaceholder": "Enter your birthday",
        "form.title": "Enter your information",
        "navbar.greeting": "Helloooo {{name}}!",
        "footer.language": "English",
        "footer.theme": "Light",
        "footer.langToggle": "Language",
        "language.english": "English",  
        "language.spanish": "Spanish",
        "footer.birthday": "My birthday is {{year}}",
        "footer.phone": "My phone number is {{phone}}",
        "footer.address": "My address is {{address}}"
    } },
    es: { translation: {
        "body.title": "Bienvenido a mi Bonus",
        "body.description": "Este bonus muestra un componente de formulario que utiliza diferentes React Hooks; State y Context Hooks que alteran la visualización del encabezado y la página.",
        "form.username": "Nombre de Usuario",
        "form.phone": "Número de Teléfono",
        "form.address": "Dirección",
        "form.submit": "Enviar",
        "form.usernamePlaceholder": "Ingrese su nombre de usuario",
        "form.phonePlaceholder": "Ingrese su número de teléfono",
        "form.addressPlaceholder": "Ingrese su dirección",
        "form.year": "Cumpleaños",
        "form.yearPlaceholder": "Ingrese su cumpleaños",
        "form.title": "Ingrese su información",
        "navbar.greeting": "Holaaaa {{name}}!",
        "footer.language": "Español",
        "footer.theme": "Claro",
        "footer.langToggle": "Idioma",
        "language.english": "Inglés",
        "language.spanish": "Español",
        "footer.birthday": "Mi fecha de nacimiento es {{year}}",
        "footer.phone": "Mi número de teléfono es {{phone}}",
        "footer.address": "Mi dirección es {{address}}"
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
            order: ["querystring", "cookie"],
            caches: ["cookie"]
        },
        interpolation: {
            escapeValue: false},
        debug: true }
    );
}


export default i18n;