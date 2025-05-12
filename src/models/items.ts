import { Items } from "../components";
import { Item } from "./item";
import { ItemType } from "./types/item-type";

export type Items = {
  [key in ItemType]: Item[];
};
