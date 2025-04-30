import attributeTypes from "../db/attributeTypes.json";

const lifeStatTypes = ["AR", "HP", "SH", "CHA", "CHS"];

function getBasicAttributeSum(attributeType, selectedItems) {
  if (!selectedItems || selectedItems.length === 0) {
    return 0;
  }
  if (!attributeType) {
    return 0;
  }

  const attributeValue = sumUpStats(selectedItems)[attributeType];

  return attributeValue?.value ?? 0;
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
      lifeStatTypes.includes(attribute.type) && attribute.unit === ""
  );

  const percentBonusArray = summedUpStats.filter(
    (attribute) =>
      lifeStatTypes.includes(attribute.type) && attribute.unit === "%"
  );

  for (const lifeStat of lifeStats) {
    const flatBonus = flatBonusArray.find(
      (attribute) => attribute.type === lifeStat.type
    );
    if (flatBonus) {
      lifeStat.value += flatBonus.value ?? 0;
    }
  }

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

  const sum = selectedItems
    .filter((item) => Boolean(item))
    .flatMap((item) => item.attributes) // extract all attributes into one array
    .reduce((acc, { type, value, unit }) => {
      if (!acc[type]) {
        acc[type] = { type, value, unit };
      } else {
        acc[type].value += value;
      }
      return acc;
    }, {});

  return Object.values(sum);
};

export { getBasicAttributeSum, getBasicStatAttributes, getLifeStatSum };
