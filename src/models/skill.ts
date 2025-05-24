import { AttributeType } from "./types/attribute-type";

export default interface Skill {
  id: string;
  name: string;
  primary: string;
  secondary: string;
  affectedBy: AttributeType[];
}

export const assertIsSkill = (skill: any): skill is Skill => {
  if (
    typeof skill.id === "string" &&
    typeof skill.name === "string" &&
    typeof skill.primary === "string" &&
    typeof skill.secondary === "string" &&
    Array.isArray(skill.affectedBy)
  ) {
    return true;
  }
  return false;
};
