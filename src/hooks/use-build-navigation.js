import { useCallback } from "react";
import { useHero } from "../contexts/hero-context";
import { useBuild } from "../contexts/build-context";
import { useUI } from "../contexts/ui-context";
import { useLocation, useNavigate } from "react-router-dom";
import importBuild from "../services/import-build";
import getAllItemsByHero from "../services/query-items";

const useBuildNavigation = () => {
  const { currentHero, setCurrentHero, setHeroPowers, setHeroItems } =
    useHero();
  const { selectedItems, setSelectedItems, selectedPowers, setSelectedPowers } =
    useBuild();
  const { heroes } = useHero();
  const { showMessage } = useUI();

  const location = useLocation();
  const navigate = useNavigate();
  const rawPath = location.pathname;
  const encodedString = rawPath.startsWith("/") ? rawPath.slice(1) : rawPath;

  const navigation = useCallback(
    (buildId) => {
      if (buildId) {
        const result = importBuild(buildId);

        if (result) {
          const heroId = parseInt(result.heroId);
          if (heroId !== currentHero) {
            const hero = heroes.find((h) => h.id === heroId);
            if (!hero) {
              showMessage("Failed to import: hero not found");
              return;
            } else {
              setCurrentHero(hero);
              setHeroItems(hero.items);
              setHeroPowers(hero.powers);

              const selectedItemsMatch = selectedItems.every((item) =>
                result.selectedPerks.includes(item.id)
              );
              const selectedPowersMatch = selectedPowers.every((power) =>
                result.selectedPerks.includes(power.id)
              );

              if (!selectedItemsMatch) {
                const itemDb = getAllItemsByHero(hero);
                const orderedSelectedItems = result.selectedPerks
                  .map((id) => itemDb.find((item) => item.id === id))
                  .filter((item) => item !== undefined);
                setSelectedItems(orderedSelectedItems);
              }

              if (!selectedPowersMatch) {
                const orderedSelectedPowers = result.selectedPerks
                  .map((id) => hero.powers.find((power) => power.id === id))
                  .filter((power) => power !== undefined);
                setSelectedPowers(orderedSelectedPowers);
              }
            }
          }

          if (location.pathname !== "/") {
            navigate("/");
          }
        }
      }
    },
    [
      currentHero,
      navigate,
      heroes,
      showMessage,
      setCurrentHero,
      setHeroItems,
      setHeroPowers,
      selectedItems,
      selectedPowers,
      setSelectedItems,
      setSelectedPowers,
      location.pathname,
    ]
  );

  return { encodedString, navigation };
};

export default useBuildNavigation;
