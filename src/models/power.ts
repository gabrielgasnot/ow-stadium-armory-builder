import { Attribute } from "./attribute";
import { Perk } from "./perk";

interface Power extends Perk {
  description: string;
  attributes?: Attribute[];
}

const assertIsPower = (perk: Perk): perk is Power => {
  if ("description" in perk) {
    return true;
  }
  return false;
};

export { assertIsPower };
export type { Power };
