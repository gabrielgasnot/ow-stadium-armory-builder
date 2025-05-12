import { Attribute } from "./attribute";
import { Perk } from "./perk";
import { ItemCategory } from "./types/item-category";

interface Item extends Perk {
  price: number;
  category: ItemCategory;
  attributes: Attribute[];
}

const assertIsItem = (perk: Perk): perk is Item => {
  if ("price" in perk) {
    return true;
  }
  return false;
};

export { assertIsItem };
export type { Item };
