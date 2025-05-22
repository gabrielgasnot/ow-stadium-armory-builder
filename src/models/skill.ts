export default interface Skill {
  id: string;
  name: string;
  primary: string;
  secondary: string;
  notboosted?: boolean;
}

export const assertIsSkill = (skill: any): skill is Skill => {
  if (
    typeof skill.id === "string" &&
    typeof skill.name === "string" &&
    typeof skill.primary === "string" &&
    typeof skill.secondary === "string"
  ) {
    return true;
  }
  return false;
};
