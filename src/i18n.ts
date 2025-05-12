import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import STORAGE_KEYS from "./constants/storage-keys";

import enCommon from "./locales/en/common";
import enFooter from "./locales/en/footer";
import enAttributes from "./locales/en/attributes";
import enHeroes from "./locales/en/heroes";
import enItemDescriptions from "./locales/en/item-descriptions";
import enItems from "./locales/en/items";
import enPowers from "./locales/en/powers";

import frCommon from "./locales/fr/common";
import frFooter from "./locales/fr/footer";
import frAttributes from "./locales/fr/attributes";
import frHeroes from "./locales/fr/heroes";
import frItemDescriptions from "./locales/fr/item-descriptions";
import frItems from "./locales/fr/items";
import frPowers from "./locales/fr/powers";

const savedLang = localStorage.getItem(STORAGE_KEYS.LANGUAGE);
const defaultLang = savedLang || navigator.language.split("-")[0] || "en";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      common: enCommon,
      footer: enFooter,
      attributes: enAttributes,
      heroes: enHeroes,
      itemDescriptions: enItemDescriptions,
      items: enItems,
      powers: enPowers,
    },
    fr: {
      common: frCommon,
      footer: frFooter,
      attributes: frAttributes,
      heroes: frHeroes,
      itemDescriptions: frItemDescriptions,
      items: frItems,
      powers: frPowers
    },
  },
  lng: defaultLang,
  fallbackLng: "en",
  ns: [
    "common",
    "footer",
    "attributes",
    "heroes",
    "itemDescriptions",
    "items",
    "powers",
  ],
  defaultNS: "common",
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

i18n.on("languageChanged", (lng) => {
  localStorage.setItem(STORAGE_KEYS.LANGUAGE, lng);
});

export default i18n;
