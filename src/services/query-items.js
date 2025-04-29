import { basicItems } from "../db/db";

const getAllItemsByHero = (hero) => {
  return [
    ...hero?.items.common,
    ...hero?.items.rare,
    ...hero?.items.epic,
    ...basicItems.common,
    ...basicItems.rare,
    ...basicItems.epic,
  ];
};

export default getAllItemsByHero;
