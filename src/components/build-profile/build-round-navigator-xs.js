import React from "react";
import { Box, Button, Typography } from "@mui/material";

function BuildRoundNavigatorXs({ maxRounds, currentRound, changeRound }) {
  return (
    <Box
      sx={{
        display: { xs: "flex", sm: "none" },
        justifyContent: "space-between",
        padding: 2,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyItems: "center",
        gap: 2
      }}
    >
      <Button
        variant="contained"
        color="primary"
        onClick={() => changeRound(currentRound - 1)}
        disabled={currentRound <= 1}
        fullWidth
      >
        Previous Round
      </Button>
      <Typography variant="h4" sx={{ width: "100%", textAlign: "center" }}>
        Round {currentRound}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => changeRound(currentRound + 1)}
        disabled={currentRound >= maxRounds}
        fullWidth
      >
        Next Round
      </Button>
    </Box>
  );
}

export default BuildRoundNavigatorXs;
