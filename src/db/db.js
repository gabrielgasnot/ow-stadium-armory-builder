import basicItems from "./basicItems.json";
import heroes from "./heroes.json";

const attributeTypes = {
  WP: "Weapon Power",
  AP: "Ability Power",
  HP: "Health",
  AR: "Armor",
  SH: "Shield",
  MS: "Move Speed",
  CD: "Critical Damage",
  CR: "Cooldown Reduction",
  AS: "Attack Speed",
  MA: "Max Ammo",
  WPLS: "Weapon Lifesteal",
  ALS: "Ability Lifesteal",
  MD: "Melee Damage",
};

const heroesOrder = [
  // Tank
  19, // D.Va
  24, // Orisa
  34, // Junker Queen
  5, // Reinhardt
  13, // Zarya

  // DPS
  29, // Ashe
  14, // Cassidy
  2, // Reaper
  21, // Genji
  20, // Mei
  15, // Soldier 76

  // Support
  22, // Ana
  6, // Mercy
  41, // Juno
  35, // Kiriko
  16, // Lucio
  26, // Moira
];

// Sort basic items
Object.values(basicItems).forEach((items) =>
  items.sort((a, b) => (a.position ?? Infinity) - (b.position ?? Infinity))
);

// Sort heroes capacities
heroes.forEach((hero) => {
  // Sort powers
  hero.powers.sort(
    (a, b) => (a.position ?? Infinity) - (b.position ?? Infinity)
  );

  // Sort items (normal, rare, epic)
  Object.values(hero.items).forEach((arr) =>
    arr.sort((a, b) => (a.position ?? Infinity) - (b.position ?? Infinity))
  );
});

export { basicItems, heroes, heroesOrder, attributeTypes };
