import React from "react";
import { Chip, Stack } from "@mui/material";
import { red, green, blue, grey } from "@mui/material/colors";

function Heroes(props) {
  const [selectedHero, setSelectedHero] = React.useState("");
  const { heroes, loadHero } = props;

  const selectHero = (hero) => {
    setSelectedHero(hero.name);
    loadHero(hero);
  };

  const getColor = (role, selected) => {
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

  if (heroes && heroes.length > 0) {
    return (
      <Stack
        direction="row"
        spacing={1}
        useFlexGap
        sx={{
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {heroes
          .sort((h1, h2) => (h1.role < h2.role ? 1 : -1))
          .map((hero) => (
            <Chip
              key={`hero_${hero.name}`}
              label={hero.name}
              readonly
              variant="outlined"
              onClick={() => selectHero(hero)}
              sx={{
                bgcolor: getColor(hero.role, selectedHero === hero.name),
              }}
            />
          ))}
      </Stack>
    );
  } else {
    return "Loading heroes...";
  }
}

export default Heroes;
