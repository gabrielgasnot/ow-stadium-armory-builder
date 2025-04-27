import { basicItems } from "../db/db";

const getAllItemsByHero = (hero) => {
    return [...hero?.items.normal, ...hero?.items.rare, ...hero?.items.epic, ...basicItems.normal, ...basicItems.rare, ...basicItems.epic];
}

export default getAllItemsByHero;