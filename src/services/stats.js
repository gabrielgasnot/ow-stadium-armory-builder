import attributeTypes from "../db/attributeTypes.json";

const convertStatTypes = ["CHA", "CHS"];
const basicLifeStatTypes = ["AR", "HP", "SH"];
const lifeStatTypes = [...basicLifeStatTypes, ...convertStatTypes];
const conversionTable = {
  CHA: { input: "HP", output: "AR" },
  CHS: { input: "HP", output: "SH" },
};

function getBasicAttributeSum(attributeType, selectedItems) {
  if (!selectedItems || selectedItems.length === 0) {
    return 0;
  }
  if (!attributeType) {
    return 0;
  }

  const summedUpStats = sumUpStats(selectedItems);

  const attributeValue = summedUpStats.find(
    (attribute) => attribute.type === attributeType
  );

  const foundValue = attributeValue?.value ?? 0;
  return foundValue;
}

function getLifeStatSum(currentHero, selectedItems) {
  const hp = { type: "HP", value: currentHero?.hp ?? 0 };
  const ar = { type: "AR", value: currentHero?.armor ?? 0 };
  const sh = { type: "SH", value: currentHero?.shields ?? 0 };
  const lifeStats = [hp, ar, sh];

  if (!selectedItems || selectedItems.length === 0) {
    return lifeStats;
  }

  const summedUpStats = sumUpStats(selectedItems);

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

  // Apply flat bonuses
  for (const lifeStat of lifeStats) {
    const flatBonus = flatBonusArray.find(
      (attribute) => attribute.type === lifeStat.type
    );
    if (flatBonus) {
      lifeStat.value += flatBonus.value ?? 0;
    }
  }

  // Convert HP to AR and SH
  if (convertBonusArray && convertBonusArray.length > 0) {
    for (const convertBonus of convertBonusArray) {
      const { input, output } = conversionTable[convertBonus.type];
      const lifeStatInput = lifeStats.find((stat) => stat.type === input);
      const lifeStatOutput = lifeStats.find((stat) => stat.type === output);
      lifeStatInput.value -= convertBonus.value ?? 0;
      lifeStatOutput.value += convertBonus.value ?? 0;
    }
  }

  // Apply percentage bonuses
  if (!percentBonusArray || percentBonusArray.length > 0) {
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
}

const getBasicStatAttributes = () => {
  return Object.entries(attributeTypes).filter(
    ([attributeType, _]) => !lifeStatTypes.includes(attributeType)
  );
};

const sumUpStats = (selectedItems) => {
  if (!selectedItems || selectedItems.length === 0) {
    return [];
  }

  const attributes = selectedItems
    .filter((item) => Boolean(item))
    .flatMap((item) => item.attributes)
    .filter((attribute) => Boolean(attribute) && Boolean(attribute.type));

  const result = {};
  for (const attribute of attributes) {
    if (!result[attribute.type]) {
      result[attribute.type] = [];
    }
    const unitRow = result[attribute.type].find(
      (row) => row.unit === attribute.unit
    );
    if (!unitRow) {
      result[attribute.type].push({ ...attribute });
    } else {
      unitRow.value += attribute.value;
    }
  }

  return Object.values(result).flat();
};

export { getBasicAttributeSum, getBasicStatAttributes, getLifeStatSum };
