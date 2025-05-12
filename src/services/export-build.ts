import { compressString } from "../helpers/compression.js";
import { Hero } from "../models/hero.js";
import { Round } from "../models/round.js";

const exportBuild = (hero: Hero, rounds: Round[]) => {
  const heroId = hero.id;
  const roundsDatas = rounds.map((round) =>
    [...round.powers, ...round.items].join("-")
  );

  const buildId = `${heroId}|${roundsDatas.join("|")}`;

  return compressString(buildId);
};

export default exportBuild;
