import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { useDb } from "./db-context";
import { useTranslation } from "react-i18next";

const HeroContext = createContext();

export const HeroProvider = ({ children }) => {
  const { heroes, basicItems } = useDb();
  const { i18n } = useTranslation();

  const [currentHero, setCurrentHero] = useState(undefined);
  const [heroPowers, setHeroPowers] = useState([]);
  const [heroItems, setHeroItems] = useState([]);
  const [availableItems, setAvailableItems] = useState({
    common: [],
    rare: [],
    epic: [],
  });

  const refreshHeroData = useCallback(
    (hero) => {
      if (!hero) {
        setHeroPowers([]);
        setHeroItems([]);
        setAvailableItems({
          common: [...basicItems.common],
          rare: [...basicItems.rare],
          epic: [...basicItems.epic],
        });
        return;
      }

      const localizedHero = heroes.find((h) => h.id === hero.id);
      if (!localizedHero) return;

      const powers = localizedHero.powers?.filter((p) => !p.disabled) ?? [];
      const items = localizedHero.items ?? [];

      setHeroPowers(powers);
      setHeroItems(items);
      setAvailableItems({
        common: [...basicItems.common, ...(items.common ?? [])],
        rare: [...basicItems.rare, ...(items.rare ?? [])],
        epic: [...basicItems.epic, ...(items.epic ?? [])],
      });
    },
    [basicItems, heroes]
  );

  const loadHero = (selectedHero) => {
    setCurrentHero(selectedHero);
    refreshHeroData(selectedHero);
  };

  const importHero = (heroId) => {
    const hero = heroes.find((h) => h.id === heroId);
    setCurrentHero(hero);
    refreshHeroData(hero);
    return hero;
  };

  // Update datas when language change.
  useEffect(() => {
    if (currentHero) {
      refreshHeroData(currentHero);
    }
  }, [i18n.language, heroes, basicItems, currentHero, refreshHeroData]);

  return (
    <HeroContext.Provider
      value={{
        currentHero,
        setCurrentHero,
        heroPowers,
        setHeroPowers,
        heroItems,
        setHeroItems,
        loadHero,
        availableItems,
        importHero,
      }}
    >
      {children}
    </HeroContext.Provider>
  );
};

export const useHero = () => useContext(HeroContext);
