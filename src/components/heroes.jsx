import React, { useContext } from "react";
import { Card, CardMedia, CardContent, Stack } from "@mui/material";
import AppContext from "../app-context.js";
import getPublicUrl from "../helpers/public-url";

function Heroes() {
  const { heroes, loadHero, currentHero } = useContext(AppContext);

  const selectHero = (hero) => {
    loadHero(hero);
  };

  if (heroes && heroes.length > 0) {
    return (
      <Stack
        direction="row"
        spacing={2}
        useFlexGap
        sx={{
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {heroes.map((hero) => (
          <Card
            key={`hero_${hero.id}`}
            onClick={() => selectHero(hero)}
            sx={{
              width: 125,
              cursor: "pointer",
              transition: "box-shadow 0.3s ease",
              "&:hover": {
                boxShadow: "0 4px 20px rgba(25, 64, 97, 0.81)",
              },
            }}
            data-active={hero.id === currentHero ? "" : undefined}
          >
            <CardMedia
              sx={{ height: 125 }}
              image={`${getPublicUrl()}heroes/${hero.id}.png`}
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
