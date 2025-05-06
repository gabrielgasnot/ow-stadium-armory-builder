import React, { createContext, useContext, useMemo } from "react";
import { heroes, basicItems, attributeTypes } from "../db/db"; // Importer les données statiques

const DbContext = createContext();

export const DbProvider = ({ children }) => {
  const roles = useMemo(() => {
    return Array.from(new Set(heroes.map((hero) => hero.role)));
  }, []);

  return (
    <DbContext.Provider value={{ heroes, basicItems, attributeTypes, roles }}>
      {children}
    </DbContext.Provider>
  );
};

export const useDb = () => useContext(DbContext);
