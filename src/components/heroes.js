import React from "react";
import { Card, CardMedia, CardContent, Stack, Typography } from "@mui/material";
import { useBuild } from "../contexts/build-context.js";
import { useDb } from "../contexts/db-context.js";

function Heroes({ currentHero }) {
  const { heroes } = useDb();
  const { initBuild } = useBuild();

  const selectHero = (hero) => {
    initBuild(hero);
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
              image={`${process.env.PUBLIC_URL}/heroes/${hero.id}.png`}
              title={hero.name}
            />
            <CardContent
              sx={{ alignItems: "center", justifyContent: "center" }}
            >
              <Typography variant="h6">{hero.name}</Typography>
            </CardContent>
          </Card>
        ))}
      </Stack>
    );
  } else {
    return "Loading heroes...";
  }
}

export default Heroes;
