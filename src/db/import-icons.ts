// Script to import icon files exported from OW2 to public folder.
import fs from "fs";
import path from "path";
import sharp from "sharp";
import powers from "../locales/en/powers";
import items from "../locales/en/items";

// 🔧 absolute path to where your files currently are
const args = process.argv.slice(2);
if (args.length === 0) {
  console.error(
    "❌ Please provide a folder path, e.g. npm run import-icons -- /path/to/folder"
  );
  process.exit(1);
}

const SOURCE_DIR = args[0];
const DEST_DIR = path.join(SOURCE_DIR, "../found");

let movedFiles = 0;
let notFound = 0;

// make sure "found" exists
if (!fs.existsSync(DEST_DIR)) {
  fs.mkdirSync(DEST_DIR, { recursive: true });
}

const dictionary: Record<string, { name: string }> = {
  ...powers,
  ...items,
};
const perks: { id: string; name: string }[] = Object.entries(dictionary)
  .filter(([_, data]) => !!data.name) // skip if name missing
  .map(([id, data]) => ({
    id,
    name: data.name,
  }));
const names = Object.values(perks).map((p) => p.name);
console.log(names);

// iterate over files in SOURCE_DIR
const files: string[] = fs.readdirSync(SOURCE_DIR);

for (const file of files) {
  const ext = path.extname(file); // ".tif"
  const noExt = path.basename(file, ext); // "B.O.B. Jr..DC1"
  const lastDot = noExt.lastIndexOf("."); // find the last index of '.'
  const basename = lastDot >= 0 ? noExt.substring(0, lastDot) : noExt;

  // check if this file corresponds to a name in perks.
  const perk = perks.find(
    (p) => p.name.toLowerCase() === basename.toLowerCase()
  );

  if (perk) {
    const newFile = `${perk.id}.png`;
    const oldPath = path.join(SOURCE_DIR, file);
    const newPath = path.join(DEST_DIR, newFile);

    // Check if newPath already exists
    if (fs.existsSync(newPath)) {
      console.warn(`⚠️ File already exists, skipping: ${newFile} (${perk.name})`);
      continue;
    }

    await sharp(oldPath).png().toFile(newPath);
    fs.unlinkSync(oldPath);
    movedFiles++;
  } else {
    notFound++;
  }
}

console.warn(`⚠️ ${notFound} files not found`);
console.log(`✅ Moved ${movedFiles} file(s) to ${DEST_DIR}`);

// Note:
// - Beast's hunger = Singijeon's Pulse Plating
// - Headhunter = Head Honcho

// Simple check on Linux
// cd to the public/perks directory
// then run:
// for f in *; do if ! [ -e "<directory>/icons-png/found/$f" ]; then echo "❌ $f is missing"; fi; done