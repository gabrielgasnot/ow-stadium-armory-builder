import React, { useContext } from "react";
import { Box, Tooltip, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AppContext from "../app-context";

import { getBasicAttributeSum } from "../services/stats";

const StatBar = ({ name, icon, attributeType }) => {
  const theme = useTheme();
  const { selectedItems, hoverPerk } = useContext(AppContext);
  const percentage = getBasicAttributeSum(attributeType, selectedItems);
  const hoverImpact = getBasicAttributeSum(attributeType, [hoverPerk]);
  const cappedPercentage = Math.min(percentage, 100);
  const cappedImpact = Math.max(
    Math.min(hoverImpact, 100 - cappedPercentage),
    0
  ); // avoid overflow

  return (
    <Box key={attributeType} display="flex" alignItems="center" gap={2}>
      {/* Image on the left */}
      <Box
        sx={{
          width: 24,
          height: 24,
          backgroundImage: `url(${process.env.PUBLIC_URL}/icons/${icon})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      />
      <Tooltip title={`${name}: ${cappedPercentage} %`} enterTouchDelay={0} leaveTouchDelay={1000}>
        <Box
          sx={{
            width: "100%",
            height: 24,
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
      {cappedImpact > 0 && (
        <Typography sx={{ color: theme.palette.custom.green }}>
          {percentage + cappedImpact}
        </Typography>
      )}
      {cappedImpact === 0 && <Typography>{percentage}</Typography>}
    </Box>
  );
};

export default StatBar;
