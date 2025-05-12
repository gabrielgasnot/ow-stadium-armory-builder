import { Items } from "./items";
import { Power } from "./power";
import { Role } from "./types/role";

export interface Hero {
  id: number;
  name: string;
  role: Role;
  hp: number;
  armor: number;
  shields: number;
  powers: Power[];
  items: Items;
}
