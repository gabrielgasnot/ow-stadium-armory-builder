import { amber, green, blue, purple, red, grey } from "@mui/material/colors";

const getPerkColor = (grade: string): string => {
  switch (grade) {
    case "common":
      return green[500];
    case "rare":
      return blue[500];
    case "epic":
      return purple[500];
    default:
      return amber[500];
  }
};

const getHeroColor = (role: string, selected: boolean): string => {
  switch (role) {
    case "Tank":
      return blue[selected ? 700 : 300];
    case "Damage":
      return red[selected ? 700 : 300];
    case "Support":
      return green[selected ? 700 : 300];
    default:
      return grey[500];
  }
};

export { getPerkColor, getHeroColor };
