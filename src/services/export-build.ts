import { compressString } from "../helpers/compression.js";
import { Hero } from "../models/hero.js";
import { Perk } from "../models/perk.js";
import { Round } from "../models/round.js";

const exportBuild = (hero: Hero, rounds: Round[]) => {
  const heroId = hero.id;
  const roundsDatas = rounds.map((round) =>
    [
      ...round.powers.map((power: Perk) => power.id),
      ...round.items.map((item: Perk) => item.id),
    ].join("-")
  );
  const buildId = `${heroId}|${roundsDatas.join("|")}`;
  return compressString(buildId);
};

export default exportBuild;
