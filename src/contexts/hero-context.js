import { createContext, useContext, useState } from "react";
import { useDb } from "./db-context";

const HeroContext = createContext();

export const HeroProvider = ({ children }) => {
  const { heroes, basicItems } = useDb();
  const [currentHero, setCurrentHero] = useState(undefined);
  const [heroPowers, setHeroPowers] = useState([]);
  const [heroItems, setHeroItems] = useState([]);
  const [availableItems, setAvailableItems] = useState({
    common: [],
    rare: [],
    epic: [],
  });

  const loadHero = (selectedHero) => {
    setCurrentHero(selectedHero);
    if (selectedHero) {
      const hero = heroes.find((h) => h.id === selectedHero.id);
      if (hero) {
        const heroPowers = hero.powers.filter((power) => !power.disabled) ?? [];
        const heroItems = hero.items ?? [];

        setHeroPowers(heroPowers);
        setHeroItems(heroItems);

        setAvailableItems({
          common: [...basicItems.common, ...heroItems.common],
          rare: [...basicItems.rare, ...heroItems.rare],
          epic: [...basicItems.epic, ...heroItems.epic],
        });
      }
    } else {
      setHeroPowers([]);
      setHeroItems([]);
      setAvailableItems({
        common: [...basicItems.common],
        rare: [...basicItems.rare],
        epic: [...basicItems.epic],
      });
    }
  };

  const importHero = (heroId) => {
    const hero = heroes.find((h) => h.id === heroId);

    if (hero) {
      setCurrentHero(hero);
      setHeroItems(hero.items);
      setHeroPowers(hero.powers);

      setAvailableItems({
        common: [...basicItems.common, ...hero.items.common],
        rare: [...basicItems.rare, ...hero.items.rare],
        epic: [...basicItems.epic, ...hero.items.epic],
      });
      return hero;
    }

    return undefined;
  };

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
