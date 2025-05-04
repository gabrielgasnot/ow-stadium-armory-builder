import { decompressString } from "../helpers/compression.js";

const isValidBase64 = (str) => {
  const base64Regex = /^[A-Za-z0-9+/=]+$/;
  return base64Regex.test(str);
};

const parseDecodedString = (build) => {
  const data = build.split("|");

  if (data.length === 0) {
    return undefined;
  }

  // Get the heroId (first element)
  const heroId = data.shift();
  const roundsIds = [...data.map((row) => row.split("-"))];

  return {
    heroId: heroId,
    roundsPerks: roundsIds,
  };
};

const importBuild = (encodedBuild) => {
  if (isValidBase64(encodedBuild)) {
    const decodedString = decompressString(encodedBuild);
    if (decodedString) {
      return parseDecodedString(decodedString);
    }
  }
  return undefined;
};

export default importBuild;
