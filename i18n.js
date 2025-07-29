import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: false,
    interpolation: { escapeValue: false },
    supportedLngs: ["en","he","ar","ja","zh","ko","de","nl","fr","pl","ro","ru","tr"],
    backend: {
      loadPath: "/locales/{{lng}}/common.json" // ✅ כאן מוסיפים את הנתיב
    }
  });

export default i18n;
