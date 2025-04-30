import React, { useContext } from "react";
import { Box, Tooltip, Typography } from "@mui/material";
import { getLifeStatSum } from "../services/stats";
import AppContext from "../app-context";
import { useTheme } from "@mui/material/styles";

const StatBar = () => {
  const theme = useTheme();
  const { currentHero, selectedItems } = useContext(AppContext);
  const lifeStats = getLifeStatSum(currentHero, selectedItems);

  const total = lifeStats.reduce((acc, stat) => acc + stat.value, 0);
  const [HP, AR, SH] = lifeStats;
  const lifePercentage = (HP.value / total) * 100;
  const armorPercentage = (AR.value / total) * 100;
  const shieldPercentage = (SH.value / total) * 100;
  // const cappedImpact = Math.max(Math.min(hoverImpact, 100 - total), 0);

  return (
    <Box key={"lifeStats"} display="flex" alignItems="center" gap={2}>
      {/* Image on the left */}
      <Box
        sx={{
          width: 24,
          height: 24,
          backgroundImage: `url(${process.env.PUBLIC_URL}/icons/HP.svg)`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      />
      <Tooltip
        title={`${lifeStats
          .map((stat) => `${stat.type}: ${stat.value}`)
          .join(", ")}`}
      >
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
          {/* White for Life*/}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              height: "100%",
              width: `${lifePercentage}%`,
              backgroundColor: theme.palette.secondary.main,
              transition: "width 0.3s ease",
            }}
          />

          {/* Orange for Armor */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: `${lifePercentage}%`,
              height: "100%",
              width: `${armorPercentage}%`,
              backgroundColor: theme.palette.custom.orange,
              transition: "width 0.3s ease",
            }}
          />

          {/* Blue for Shields */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: `${lifePercentage + armorPercentage}%`,
              height: "100%",
              width: `${shieldPercentage}%`,
              backgroundColor: theme.palette.custom.blue,
              transition: "width 0.3s ease",
            }}
          />
        </Box>
      </Tooltip>
      <Typography>{total}</Typography>
    </Box>
  );
};

export default StatBar;
