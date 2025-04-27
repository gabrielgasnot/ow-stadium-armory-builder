import fs from "fs";
import path from "path";
import { basicItems, heroes } from "./db/db";

describe("Image existence check", () => {
  const items = [...basicItems.normal, ...basicItems.rare, ...basicItems.epic];
  const hero_items_perks = heroes
    .map((hero) => [
      ...hero.powers.map((power) => power.id),
      ...hero.items.normal.map((item) => item.id),
      ...hero.items.rare.map((item) => item.id),
      ...hero.items.epic.map((item) => item.id),
    ])
    .flat();
  const ids = [
    ...items,
    ...hero_items_perks,
  ];
  const missingFiles = [];

  test.each(ids)('"%s.png" exists', (id) => {
    const filename = `${id}.png`;
    const filePath = path.resolve(__dirname, "../public/perks", filename);
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
