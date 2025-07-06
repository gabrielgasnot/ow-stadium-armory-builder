import { getLocalizedItems } from "../db/db";
import { GradedItem } from "../models/graded-item";
import { Hero } from "../models/hero";
import { Item } from "../models/item";
import { AttributeType } from "../models/types/attribute-type";
import { ItemCategory } from "../models/types/item-category";

const parseItem = (item: any, grade: string): GradedItem => {
  return {
    ...item,
    category: item.category as ItemCategory,
    grade: grade,
    attributes: item.attributes.map((attr: any) => ({
      ...attr,
      type: attr.type as AttributeType,
    })),
  };
};

const getAllItems = (): Item[] => {
  const basicItems = getLocalizedItems();

  return [
    ...basicItems.common.map((item) => parseItem(item, "common")),
    ...basicItems.rare.map((item) => parseItem(item, "rare")),
    ...basicItems.epic.map((item) => parseItem(item, "epic")),
  ];
};

const getAllItemsByHero = (hero: Hero) => {
  return [
    ...hero?.items.common.map((item) => parseItem(item, "common")),
    ...hero?.items.rare.map((item) => parseItem(item, "rare")),
    ...hero?.items.epic.map((item) => parseItem(item, "epic")),
    ...getAllItems(),
  ].filter((item: Item) => !item.disabled);
};

export { getAllItems, getAllItemsByHero };
