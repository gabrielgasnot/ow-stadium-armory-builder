import { getLocalizedAttributeTypes } from "../db/db";

const attributeTypes = getLocalizedAttributeTypes();

const getAttributeName = (attributeType: keyof typeof attributeTypes) => {
  return attributeTypes[attributeType]?.name || attributeType;
};

export default getAttributeName;
