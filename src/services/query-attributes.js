import { attributeTypes } from "../db/db";

const getAttributeName = (attributeType) => {
  return attributeTypes[attributeType]?.name || attributeType;
};

export default getAttributeName;