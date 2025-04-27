import React from "react";
import { Box, Grid, Stack, Card, CardHeader, CardContent } from "@mui/material";
import DetailsHeader from "./details-header";
import PerkMiniCard from "./perk-mini-card";

function Details({ hero, powers, items, removeElement, shareBuild }) {
  const powerColumns = 4;
  const itemColumns = 3;
  const itemRows = 2;

  const getPerkMiniCard = (perks, perkType, index) => {
    return (
      <Box sx={{ textAlign: "center" }}>
        {perkType === "power" && `Round ${2 * index + 1}`}
        <PerkMiniCard
          perk={perks[index]}
          perkType={perkType}
          unselectPerk={() => removeElement(perkType, perks[index])}
        />
      </Box>
    );
  };

  if (!hero) {
    return;
  }

  return (
    <Stack spacing={2} sx={{ flexGrow: 1, minHeight: 0, width: "100%" }}>
      <DetailsHeader hero={hero} items={items} shareBuild={shareBuild} />

      <Card sx={{ height: "100%" }}>
        <CardHeader title="Powers" />
        <CardContent>
          <Grid
            container
            spacing={2}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {[...Array(powerColumns)].map((_, index) => (
              <Grid
                item
                size={{ xs: 6, sm: 4, md: 6, xl: 3 }}
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {getPerkMiniCard(powers, "power", index)}
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>

      <Card>
        <CardHeader title="Items" />
        <CardContent>
          <Grid
            container
            spacing={2}
            sx={{
              textAlign: "center",
            }}
          >
            {[...Array(itemRows)].map((_, rowIndex) =>
              [...Array(itemColumns)].map((_, index) => (
                <Grid
                  item
                  spacing={2}
                  size={{ xs: 6, sm: 4, md: 6, lg: 4 }}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  key={index}
                >
                  {getPerkMiniCard(
                    items,
                    "item",
                    rowIndex * itemColumns + index
                  )}
                </Grid>
              ))
            )}
          </Grid>
        </CardContent>
      </Card>
    </Stack>
  );
}

export default Details;
