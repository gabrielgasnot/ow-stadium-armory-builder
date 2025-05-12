import { decompressString } from "../helpers/compression.js";

const isValidBase64 = (str: string) => {
  const base64Regex = /^[A-Za-z0-9+/=]+$/;
  return base64Regex.test(str);
};

const callFirstParseDecoder = (build: string) => {
  const data = build.split("-");

  if (data.length === 0) {
    return undefined;
  }

  // Get the heroId (first element)
  const heroId = data.shift();
  const perks = [...data];

  return {
    version: 1,
    heroId: heroId,
    selectedPerks: perks,
  };
};

const parseDecodedString = (build: string) => {
  let data = build.split("|");

  if (data.length === 0) {
    return undefined;
  }

  if (data.length === 1) {
    return callFirstParseDecoder(build);
  }

  // Get the heroId (first element)
  const heroId = data.shift();
  const roundsIds = [...data.map((row) => row.split("-"))];

  return {
    version: 2,
    heroId: heroId,
    roundsPerks: roundsIds,
  };
};

const importBuild = (encodedBuild: string) => {
  if (isValidBase64(encodedBuild)) {
    const decodedString = decompressString(encodedBuild);
    if (decodedString) {
      return parseDecodedString(decodedString);
    }
  }
  return undefined;
};

export default importBuild;
