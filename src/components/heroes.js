import React from "react";
import { Card, CardMedia, CardContent, Stack } from "@mui/material";

function Heroes(props) {
  const { heroes, loadHero, currentHero } = props;

  const selectHero = (hero) => {
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
            <Card
              key={`hero_${hero.name}`}
              onClick={() => selectHero(hero)}
              sx={{ width: 125, cursor: "pointer" }}
            >
              <CardMedia
                sx={{ height: 125 }}
                image={`${process.env.PUBLIC_URL}/heroes/${hero.name}.png`}
                title={hero.name}
              />
              <CardContent>{hero.name}</CardContent>
            </Card>
          ))}
      </Stack>
    );
  } else {
    return "Loading heroes...";
  }
}

export default Heroes;
