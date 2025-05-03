import React from "react";
import { Box, Button, Typography } from "@mui/material";

function BuildRoundNavigatorXs({ currentRound, changeRound }) {
  return (
    <Box
      sx={{
        display: { xs: "flex", sm: "none" },
        justifyContent: "space-between",
        padding: 2,
        width: "100%",
        flexDirection: "row",
      }}
    >
      <Button
        variant="contained"
        color="primary"
        onClick={() => changeRound(currentRound - 1)}
        disabled={currentRound <= 1}
      >
        Previous Round
      </Button>
      <Typography variant="h6" sx={{ margin: "0 20px" }}>
        Round {currentRound}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => changeRound(currentRound + 1)}
        disabled={currentRound >= 7}
      >
        Next Round
      </Button>
    </Box>
  );
}

export default BuildRoundNavigatorXs;
