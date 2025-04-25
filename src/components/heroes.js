import React from "react";
import { Chip, Stack } from "@mui/material";
import { getHeroColor } from "../services/color";

function Heroes(props) {
  const { heroes, loadHero, currentHero } = props;
  const [selectedHero, setSelectedHero] = React.useState(currentHero);

  const selectHero = (hero) => {
    setSelectedHero(hero);
    loadHero(hero);
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
                bgcolor: getHeroColor(hero.role, selectedHero?.name === hero.name),
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
