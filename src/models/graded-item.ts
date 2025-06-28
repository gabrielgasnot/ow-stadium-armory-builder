import { Item } from "./item";
import { Perk } from "./perk";

interface GradedItem extends Item {
  grade: string;
}

const assertIsGradedItem = (perk: Perk): perk is GradedItem => {
  if ("grade" in perk) {
    return true;
  }
  return false;
};

export { assertIsGradedItem };
export type { GradedItem };
