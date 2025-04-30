import attributeTypes from "../db/attributeTypes.json";

const lifeStats = ["AR", "HP", "SH"];

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

function getLifeStatSum(selectedItems) {
  if (!selectedItems || selectedItems.length === 0) {
    return 0;
  }

  const flatBonusArray = sumUpStats(selectedItems).filter(
    (attribute) => lifeStats.includes(attribute.type) && attribute.unit === ""
  );

  const percentBonusArray = sumUpStats(selectedItems).filter(
    (attribute) => lifeStats.includes(attribute.type) && attribute.unit === "%"
  );

  
}

const getBasicStatAttributes = () => {
  return Object.entries(attributeTypes).filter(
    ([attributeType, _]) => !lifeStats.includes(attributeType)
  );
};

const getLifeStatAttributes = () => {
  return Object.entries(attributeTypes).filter(([attributeType, _]) =>
    lifeStats.includes(attributeType)
  );
};

const sumUpStats = (selectedItems) => {
  if (!selectedItems || selectedItems.length === 0) {
    return [];
  }

  return selectedItems
    .filter((item) => Boolean(item))
    .flatMap((item) => item.attributes) // extract all attributes into one array
    .reduce((acc, { type, value, unit }) => {
      if (!acc[type]) {
        acc[type] = { type, value, unit };
      } else {
        acc[type].value += value;
      }
      return acc;
    }, []);
};

export { getBasicAttributeSum, getBasicStatAttributes };
