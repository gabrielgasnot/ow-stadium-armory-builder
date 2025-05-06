import { compressString } from "../helpers/compression.js";

const exportBuild = (hero, rounds) => {
  const heroId = hero.id;
  const roundsIds = rounds.map((round) =>
    [
      ...round.powers.map((power) => power.id),
      ...round.items.map((item) => item.id),
    ].join("-")
  );

  const buildId = `${heroId}|${roundsIds.join("|")}`;
  
  return compressString(buildId);
};

export default exportBuild;
