import { createContext, useContext, useMemo } from "react";
import { useDb } from "./db-context";
import { useBuild } from "./build-context";
import { useHero } from "./hero-context";

// Types de stats
const convertStatTypes = ["CHA", "CHS"];
const basicLifeStatTypes = ["AR", "HP", "SH"];
const lifeStatTypes = [...basicLifeStatTypes, ...convertStatTypes];

const conversionTable = {
  CHA: { input: "HP", output: "AR" },
  CHS: { input: "HP", output: "SH" },
};

// Crée le contexte
const StatsContext = createContext();

export const useStats = () => useContext(StatsContext);

// Provider
export function StatsProvider({ children }) {
  const { attributeTypes } = useDb();
  const { currentHero } = useHero();
  const { selectedItems, hoverPerk } = useBuild();

  const calculateStats = (items) => {
    const attributes = items
      .filter(Boolean)
      .flatMap((item) => item.attributes)
      .filter((attr) => attr?.type);

    const grouped = {};
    for (const attr of attributes) {
      if (!grouped[attr.type]) grouped[attr.type] = [];
      const existing = grouped[attr.type].find((row) => row.unit === attr.unit);
      if (existing) {
        existing.value += attr.value;
      } else {
        grouped[attr.type].push({ ...attr });
      }
    }

    return Object.values(grouped).flat();
  };

  const summedUpStatsSelectedItems = useMemo(() => {
    if (!selectedItems?.length) return [];
    return calculateStats(selectedItems);
  }, [selectedItems]);

  const summedUpStatsHoverPerk = useMemo(() => {
    if (!hoverPerk) return [];
    return calculateStats([hoverPerk]); // Pass hoverPerk as an array
  }, [hoverPerk]);

  const lifeStats = useMemo(() => {
    const base = [
      { type: "HP", value: currentHero?.hp ?? 0 },
      { type: "AR", value: currentHero?.armor ?? 0 },
      { type: "SH", value: currentHero?.shields ?? 0 },
    ];

    const summedUpStats = summedUpStatsSelectedItems;

    if (!summedUpStats.length) return base;

    const flat = summedUpStats.filter(
      (attr) => basicLifeStatTypes.includes(attr.type) && attr.unit === ""
    );

    const convert = summedUpStats.filter(
      (attr) => convertStatTypes.includes(attr.type) && attr.unit === ""
    );

    const percent = summedUpStats.filter(
      (attr) => basicLifeStatTypes.includes(attr.type) && attr.unit === "%"
    );

    // Flat bonuses
    for (const stat of base) {
      const bonus = flat.find((a) => a.type === stat.type);
      if (bonus) stat.value += bonus.value ?? 0;
    }

    // Conversion (CHA, CHS)
    for (const bonus of convert) {
      const { input, output } = conversionTable[bonus.type];
      const inStat = base.find((s) => s.type === input);
      const outStat = base.find((s) => s.type === output);
      inStat.value -= bonus.value ?? 0;
      outStat.value += bonus.value ?? 0;
    }

    // Percent bonuses
    for (const stat of base) {
      const pct = percent.find((a) => a.type === stat.type);
      if (pct) stat.value += Math.ceil((stat.value * pct.value) / 100);
    }

    return base;
  }, [summedUpStatsSelectedItems, currentHero]);

  const getSelectedItemsAttributeSum = (type) => {
    return summedUpStatsSelectedItems.find((a) => a.type === type)?.value ?? 0;
  };

  const getHoverPerkAttributeSum = (type) => {
    if (!hoverPerk) return 0;
    const hoverValue =
      summedUpStatsHoverPerk.find((a) => a.type === type)?.value ?? 0;

    if (selectedItems?.find((item) => item.id === hoverPerk.id)) {
      return hoverValue * -1;
    }

    return hoverValue;
  };

  const getBasicStatAttributes = () =>
    Object.entries(attributeTypes).filter(
      ([type]) => !lifeStatTypes.includes(type)
    );

  const getLifeStatSum = (currentHero, withHoverPerk = false) => {
    const hp = { type: "HP", value: currentHero?.hp ?? 0 };
    const ar = { type: "AR", value: currentHero?.armor ?? 0 };
    const sh = { type: "SH", value: currentHero?.shields ?? 0 };
    const lifeStats = [hp, ar, sh];

    if (!hoverPerk && !selectedItems && selectedItems.length === 0) {
      return lifeStats;
    }

    const summedUpStats = summedUpStatsSelectedItems.map((stat) => ({
      ...stat,
    }));
    if (withHoverPerk && hoverPerk) {
      const hoverPerkSelected = selectedItems.find(
        (item) => item.id === hoverPerk.id
      );
      // If the hoverPerk is not already selected, we need to add its stats
      const hoverStats = summedUpStatsHoverPerk.map((stat) => ({ ...stat }));
      hoverStats.forEach((stat) => {
        if (hoverPerkSelected) {
          stat.value = -stat.value;
        }
        const summedUpStat = summedUpStats.find(
          (s) => s.type === stat.type && s.unit === stat.unit
        );

        if (summedUpStat) {
          summedUpStat.value += stat.value;
        } else {
          summedUpStats.push(stat);
        }
      });
    }

    const flatBonusArray = summedUpStats.filter(
      (attribute) =>
        basicLifeStatTypes.includes(attribute.type) && attribute.unit === ""
    );

    const convertBonusArray = summedUpStats.filter(
      (attribute) =>
        convertStatTypes.includes(attribute.type) && attribute.unit === ""
    );

    const percentBonusArray = summedUpStats.filter(
      (attribute) =>
        basicLifeStatTypes.includes(attribute.type) && attribute.unit === "%"
    );

    // Appliquer les bonus fixes
    for (const lifeStat of lifeStats) {
      const flatBonus = flatBonusArray.find(
        (attribute) => attribute.type === lifeStat.type
      );
      if (flatBonus) {
        lifeStat.value += flatBonus.value ?? 0;
      }
    }

    // Convertir HP en AR et SH
    if (convertBonusArray && convertBonusArray.length > 0) {
      for (const convertBonus of convertBonusArray) {
        const { input, output } = conversionTable[convertBonus.type];
        const lifeStatInput = lifeStats.find((stat) => stat.type === input);
        const lifeStatOutput = lifeStats.find((stat) => stat.type === output);
        lifeStatInput.value -= convertBonus.value ?? 0;
        lifeStatOutput.value += convertBonus.value ?? 0;
      }
    }

    // Appliquer les bonus en pourcentage
    if (!percentBonusArray && percentBonusArray.length > 0) {
      for (const lifeStat of lifeStats) {
        const percentBonus = percentBonusArray.find(
          (attribute) => attribute.type === lifeStat.type
        );
        if (percentBonus) {
          lifeStat.value += Math.ceil(
            (lifeStat.value * percentBonus.value) / 100
          );
        }
      }
    }

    return lifeStats;
  };

  const getLifeStats = (currentHero, items) => {
    const hp = { type: "HP", value: currentHero?.hp ?? 0 };
    const ar = { type: "AR", value: currentHero?.armor ?? 0 };
    const sh = { type: "SH", value: currentHero?.shields ?? 0 };
    const lifeStats = [hp, ar, sh];

    if (!hoverPerk && !items && items.length === 0) {
      return lifeStats;
    }

    const summedUpStats = calculateStats(items).map((stat) => ({
      ...stat,
    }));

    const flatBonusArray = summedUpStats.filter(
      (attribute) =>
        basicLifeStatTypes.includes(attribute.type) && attribute.unit === ""
    );

    const convertBonusArray = summedUpStats.filter(
      (attribute) =>
        convertStatTypes.includes(attribute.type) && attribute.unit === ""
    );

    const percentBonusArray = summedUpStats.filter(
      (attribute) =>
        basicLifeStatTypes.includes(attribute.type) && attribute.unit === "%"
    );

    // Appliquer les bonus fixes
    for (const lifeStat of lifeStats) {
      const flatBonus = flatBonusArray.find(
        (attribute) => attribute.type === lifeStat.type
      );
      if (flatBonus) {
        lifeStat.value += flatBonus.value ?? 0;
      }
    }

    // Convertir HP en AR et SH
    if (convertBonusArray && convertBonusArray.length > 0) {
      for (const convertBonus of convertBonusArray) {
        const { input, output } = conversionTable[convertBonus.type];
        const lifeStatInput = lifeStats.find((stat) => stat.type === input);
        const lifeStatOutput = lifeStats.find((stat) => stat.type === output);
        lifeStatInput.value -= convertBonus.value ?? 0;
        lifeStatOutput.value += convertBonus.value ?? 0;
      }
    }

    // Appliquer les bonus en pourcentage
    if (!percentBonusArray && percentBonusArray.length > 0) {
      for (const lifeStat of lifeStats) {
        const percentBonus = percentBonusArray.find(
          (attribute) => attribute.type === lifeStat.type
        );
        if (percentBonus) {
          lifeStat.value += Math.ceil(
            (lifeStat.value * percentBonus.value) / 100
          );
        }
      }
    }

    return lifeStats;
  };

  return (
    <StatsContext.Provider
      value={{
        lifeStats,
        getSelectedItemsAttributeSum,
        getHoverPerkAttributeSum,
        getBasicStatAttributes,
        getLifeStatSum,
        calculateStats,
        getLifeStats,
      }}
    >
      {children}
    </StatsContext.Provider>
  );
}
