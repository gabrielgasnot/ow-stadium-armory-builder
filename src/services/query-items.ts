import { getLocalizedItems } from "../db/db";
import { Hero } from "../models/hero";
import { Item } from "../models/item";
import { AttributeType } from "../models/types/attribute-type";
import { ItemCategory } from "../models/types/item-category";

const parseItem = (item: any): Item => {
  return {
    ...item,
    category: item.category as ItemCategory,
    attributes: item.attributes.map((attr: any) => ({
      ...attr,
      type: attr.type as AttributeType,
    })),
  };
};

const getAllItems = (): Item[] => {
  const basicItems = getLocalizedItems();
  
  return [
    ...basicItems.common.map((item) => parseItem(item)),
    ...basicItems.rare.map((item) => parseItem(item)),
    ...basicItems.epic.map((item) => parseItem(item)),
  ];
};

const getAllItemsByHero = (hero: Hero) => {
  return [
    ...hero?.items.common.map((item) => parseItem(item)),
    ...hero?.items.rare.map((item) => parseItem(item)),
    ...hero?.items.epic.map((item) => parseItem(item)),
    ...getAllItems(),
  ].filter((item: Item) => !item.disabled);
};

export { getAllItems, getAllItemsByHero };
