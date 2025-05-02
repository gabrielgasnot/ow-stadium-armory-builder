import React, { createContext, useContext } from "react";
import { heroes, basicItems, attributeTypes } from "../db/db"; // Importer les données statiques


const DbContext = createContext();

export const DbProvider = ({ children }) => {
  return (
    <DbContext.Provider value={{ heroes, basicItems,attributeTypes }}>
      {children}
    </DbContext.Provider>
  );
};

export const useDb = () => useContext(DbContext);