import React, { createContext, useContext, useMemo } from "react";
import {
  getLocalizedHeroes,
  getLocalizedItems,
  getLocalizedAttributeTypes,
} from "../db/db"; // Importer les données statiques
import { useTranslation } from "react-i18next";

const DbContext = createContext();

export const DbProvider = ({ children }) => {
  const { i18n } = useTranslation();

  const heroes = useMemo(() => {
    return getLocalizedHeroes();
  }, [i18n.language]);

  const basicItems = useMemo(() => {
    return getLocalizedItems();
  }, [i18n.language]);

  const attributeTypes = useMemo(() => {
    return getLocalizedAttributeTypes();
  }, [i18n.language]);

  const roles = useMemo(() => {
    return Array.from(new Set(heroes.map((hero) => hero.role)));
  }, [heroes]);

  return (
    <DbContext.Provider value={{ heroes, basicItems, attributeTypes, roles }}>
      {children}
    </DbContext.Provider>
  );
};

export const useDb = () => useContext(DbContext);
