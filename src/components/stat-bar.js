import React from "react";
import { Box, Tooltip } from "@mui/material";

const StatBar = ({ name, percentage = 0, hoverImpact = 0 }) => {
  const cappedPercentage = Math.min(percentage, 100);
  const cappedImpact = Math.max(
    Math.min(hoverImpact, 100 - cappedPercentage),
    0
  ); // avoid overflow

  return (
    <Tooltip title={`${name}: ${cappedPercentage} %`}>
      <Box
        sx={{
          width: "100%",
          height: 24,
          backgroundColor: "black",
          borderRadius: 1,
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* White filled part */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: `${cappedPercentage}%`,
            backgroundColor: "white",
            transition: "width 0.3s ease",
          }}
        />

        {/* Orange hover impact overlay */}
        {hoverImpact > 0 && (
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: `${cappedPercentage}%`,
              height: "100%",
              width: `${cappedImpact}%`,
              backgroundColor: "green",
              opacity: 0.8,
              transition: "width 0.3s ease, left 0.3s ease",
            }}
          />
        )}
      </Box>
    </Tooltip>
  );
};

export default StatBar;
