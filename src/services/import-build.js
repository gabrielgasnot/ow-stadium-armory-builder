const isValidBase64 = (str) => {
  const base64Regex = /^[A-Za-z0-9+/=]+$/;
  return base64Regex.test(str);
};

const parseDecodedString = (build) => {
  const data = build.split("-");

  if (data.length === 0) {
    return undefined;
  }

  // Get the heroId (first element)
  const heroId = data.shift();
  const perks = [...data];

  return {
    heroId: heroId,
    selectedPerks: perks
  }
};

const importBuild = (encodedBuild) => {
  if (isValidBase64(encodedBuild)) {
    const decodedString = atob(encodedBuild);
    return parseDecodedString(decodedString);
  } else {
    return undefined;
  }
};

export default importBuild;
