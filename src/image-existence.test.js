import fs from "fs";
import path from "path";
import { basicItems, heroes } from "./db/db";

describe("Image existence check", () => {
  const items = [...basicItems.normal, ...basicItems.rare, ...basicItems.epic];
  const hero_items_perks = heroes
    .map((hero) => [
      ...hero.powers.map((power) => power.name),
      ...hero.items.normal.map((item) => item.name),
      ...hero.items.rare.map((item) => item.name),
      ...hero.items.epic.map((item) => item.name),
    ])
    .flat();
  const names = [
    ...items.map((item) => item.name.replace("'", "_")),
    ...hero_items_perks.map((name) => name.replace("'", "_")),
  ];
  const missingFiles = [];

  test.each(names)('"%s.png" exists', (name) => {
    const normalized = name.replace(/’/g, "'"); // normalize curly apostrophes if needed
    const filename = `${normalized}.png`;
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
