import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import 'bootstrap/dist/js/bootstrap.js';


i18n
.use(initReactI18next)
.use(Backend)
.use(LanguageDetector)
.init({
    supportedLngs: ['TR', 'EN'],
    fallbackLng:'TR',
    debug: false,
    // Options for language detector
    detection: {
      order: ['path', 'cookie', 'htmlTag'],
      caches: ['cookie'],
    },

})
export default i18n