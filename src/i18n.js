import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import 'bootstrap/dist/js/bootstrap.js';
import './assets/css/flag-icon-css/css/flag-icons.css';


i18n
.use(initReactI18next)
.use(HttpApi)
.use(LanguageDetector)

.init({
    supportedLngs: ['tr', 'en'],
    fallbackLng:'tr',
    debug: false,
    // Options for language detector
    detection: {
      order: ['path', 'cookie', 'htmlTag'],
      caches: ['cookie'],
    },

})
export default i18n