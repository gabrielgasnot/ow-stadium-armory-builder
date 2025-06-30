import { Grid, Stack } from "@mui/material";
import { JSX } from "react";

interface RenderPowersProps {
  isDesktop: boolean;
  selectedPowers: string[];
  displayPerk: (perks: string[], type: string, index: number) => JSX.Element;
}

function RenderPowers({
  isDesktop,
  selectedPowers,
  displayPerk,
}: RenderPowersProps) {
  const maxPowers = 4;

  if (isDesktop) {
    return (
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        {[...Array(maxPowers)].map((_, index) => (
          <Grid
            size={3}
            key={index}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {displayPerk(selectedPowers, "power", index)}
          </Grid>
        ))}
      </Grid>
    );
  }

  return (
    <Stack
      spacing={2}
      sx={{
        flexDirection: "column",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        marginLeft: 1,
      }}
    >
      {[...Array(maxPowers)].map((_, index) =>
        index < selectedPowers.length ||
        (selectedPowers.length === 0 && index === 0)
          ? displayPerk(selectedPowers, "power", index)
          : null
      )}
    </Stack>
  );
}

export default RenderPowers;
