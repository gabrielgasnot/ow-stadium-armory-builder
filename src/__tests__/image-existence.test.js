import fs from "fs";
import path from "path";
import { getLocalizedItems, getLocalizedHeroes } from "../db/db";

describe("Image existence check", () => {
  const basicItems = getLocalizedItems();
  const heroes = getLocalizedHeroes();
  const items = [...basicItems.common, ...basicItems.rare, ...basicItems.epic];
  const hero_items_perks = heroes
    .map((hero) => [
      ...hero.powers.map((power) => power.id),
      ...hero.items.common.map((item) => item.id),
      ...hero.items.rare.map((item) => item.id),
      ...hero.items.epic.map((item) => item.id),
    ])
    .flat();
  const ids = [
    ...items.map((item) => item.id),
    ...hero_items_perks,
  ];
  const missingFiles = [];

  test.each(ids)('"%s.png" exists', (id) => {
    const filename = `${id}.png`;
    const filePath = path.resolve(__dirname, "../../public/perks", filename);
    if (!fs.existsSync(filePath)) {
      missingFiles.push(filename);
    }
    expect(fs.existsSync(filePath)).toBe(true);
  });

  afterAll(() => {
    if (missingFiles.length > 0) {
      console.error("Missing files: ", missingFiles.join(" | "));
    }
  });
});
