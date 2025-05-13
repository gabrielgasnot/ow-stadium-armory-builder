import { Item } from "./item";
import { Power } from "./power";

export interface Round {
  id: number;
  items: Item[];
  powers: Power[];
}
