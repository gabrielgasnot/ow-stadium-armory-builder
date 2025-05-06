import React from "react";
import { Box, Tooltip, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const StatBar = ({
  name,
  icon,
  attributeType,
  value,
  hoverImpact,
  setHoverAttributes,
}) => {
  const theme = useTheme();
  const cappedPercentage = Math.min(value, 100);

  // If hoverImpact is positive, calculate the green bar (increase)
  const cappedPositiveImpact =
    hoverImpact > 0 ? Math.min(hoverImpact, 100 - cappedPercentage) : 0;

  // If hoverImpact is negative, calculate the red bar (decrease)
  const cappedNegativeImpact =
    hoverImpact < 0 ? Math.max(hoverImpact, -cappedPercentage) : 0;

  const finalValue = Math.min(
    Math.max(cappedPercentage + cappedPositiveImpact + cappedNegativeImpact, 0),
    100
  );

  const boxEvents = {
    onMouseEnter: () => setHoverAttributes([attributeType]),
    onMouseLeave: () => setHoverAttributes([]),
  };

  return (
    <Box key={attributeType} display="flex" alignItems="center" gap={2}>
      {/* Image on the left */}
      <Box
        component="img"
        src={`${process.env.PUBLIC_URL}/icons/${icon}`}
        alt={attributeType}
        sx={{
          width: 20,
          height: 20,
          objectFit: "contain",
        }}
      />
      <Tooltip
        title={`${name}: ${finalValue} %`}
        enterTouchDelay={0}
        leaveTouchDelay={1000}
      >
        <Box
          {...boxEvents}
          sx={{
            width: "100%",
            height: 20,
            backgroundColor: theme.palette.background.default,
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

          {/* Green hover impact overlay */}
          {cappedPositiveImpact > 0 && (
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: `${cappedPercentage}%`,
                height: "100%",
                width: `${cappedPositiveImpact}%`,
                backgroundColor: "green",
                opacity: 0.8,
                transition: "width 0.3s ease, left 0.3s ease",
              }}
            />
          )}

          {cappedNegativeImpact < 0 && (
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: `${cappedPercentage + cappedNegativeImpact}%`,
                height: "100%",
                width: `${-cappedNegativeImpact}%`,
                backgroundColor: "red",
                opacity: 0.8,
                transition: "width 0.3s ease, left 0.3s ease",
              }}
            />
          )}
        </Box>
      </Tooltip>
      <Typography
        sx={{
          width: 35,
          height: 20,
          textAlign: "right",
          color:
            cappedPositiveImpact > 0
              ? theme.palette.custom.green
              : cappedNegativeImpact < 0
              ? "red"
              : "inherit",
        }}
      >
        {finalValue}
      </Typography>
    </Box>
  );
};

export default StatBar;
