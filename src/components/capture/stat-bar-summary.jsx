import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const StatBarSummary = ({ icon, attributeType, value }) => {
  const theme = useTheme();
  const cappedPercentage = Math.min(value, 100);
  const finalValue = Math.min(Math.max(cappedPercentage, 0), 100);

  return (
    <Box
      key={attributeType}
      display="flex"
      alignItems="center"
      gap={2}
      width="100%"
    >
      {/* Image on the left */}
      <Box
        component="img"
        src={`${import.meta.env.BASE_URL}icons/png/${icon}`}
        alt={attributeType}
        sx={{
          width: 20,
          height: 20,
          objectFit: "contain",
        }}
      />
      <Box
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
      </Box>
      <Typography
        sx={{
          width: 35,
          height: 20,
          textAlign: "right",
        }}
      >
        {finalValue}
      </Typography>
    </Box>
  );
};

export default StatBarSummary;
