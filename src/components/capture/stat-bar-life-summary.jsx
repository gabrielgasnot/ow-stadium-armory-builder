import React, { useMemo } from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useHero } from "../../contexts/hero-context";
import { useStats } from "../../contexts/stats-context";

const StatBarLifeSummary = ({ items }) => {
  const theme = useTheme();
  const { getLifeStats } = useStats();
  const { currentHero } = useHero();

  const lifeStats = useMemo(
    () => getLifeStats(currentHero, items),
    [currentHero, getLifeStats, items]
  );

  const calculate = (stats) => {
    const total = stats.reduce((acc, stat) => acc + stat.value, 0);
    const [HP, AR, SH] = stats;
    return { total, HP, AR, SH };
  };

  const stats = useMemo(() => calculate(lifeStats), [lifeStats]);

  const values = ["HP", "AR", "SH"];

  // Base percents
  const basePercents = {};
  values.forEach((key) => {
    basePercents[key] = (stats[key].value / stats.total) * 100;
  });

  const getColor = (key) => {
    switch (key) {
      case "HP":
        return theme.palette.secondary.main;
      case "AR":
        return theme.palette.custom.orange;
      case "SH":
        return theme.palette.custom.blue;
      default:
        return theme.palette.secondary.main;
    }
  };

  const getLeft = (key) => {
    switch (key) {
      case "HP":
        return 0;
      case "AR":
        return basePercents.HP;
      case "SH":
        return basePercents.HP + basePercents.AR;
      default:
        return 0;
    }
  };

  return (
    <Box key={"lifeStats"} display="flex" alignItems="center" gap={2}>
      {/* Image on the left */}
      <Box
        component="img"
        src={`${import.meta.env.BASE_URL}icons/png/HP.png`}
        alt="HP/AR/SH"
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
        {values.map((key) => (
          <React.Fragment key={key}>
            {/* Base stat bar */}
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: `${getLeft(key)}%`,
                width: `${basePercents[key]}%`,
                height: "100%",
                backgroundColor: getColor(key),
                transition: "width 0.3s ease",
              }}
            />
          </React.Fragment>
        ))}
      </Box>
      {/* Total value */}
      <Typography
        sx={{
          width: 35,
          height: 20,
          textAlign: "right",
        }}
      >
        {stats.total}
      </Typography>
    </Box>
  );
};

export default StatBarLifeSummary;
