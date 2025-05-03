import React, { useMemo, useTransition } from "react";
import { Box, Tooltip, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useHero } from "../../contexts/hero-context";
import { useStats } from "../../contexts/stats-context";

const StatBar = ({ setHoverAttributes }) => {
  const theme = useTheme();
  const [, startTransition] = useTransition();
  const { getLifeStatSum } = useStats();
  const { currentHero } = useHero();

  const lifeStats = useMemo(
    () => getLifeStatSum(currentHero),
    [currentHero, getLifeStatSum]
  );
  const tempStats = useMemo(
    () => getLifeStatSum(currentHero, true),
    [currentHero, getLifeStatSum]
  );

  const calculate = (stats) => {
    const total = stats.reduce((acc, stat) => acc + stat.value, 0);
    const [HP, AR, SH] = stats;
    return { total, HP, AR, SH };
  };

  const stats = useMemo(() => calculate(lifeStats), [lifeStats]);
  const hoverStats = useMemo(() => calculate(tempStats), [tempStats]);

  const totalDelta = hoverStats.total - stats.total;

  const values = ["HP", "AR", "SH"];

  // Base percents
  const basePercents = {};
  values.forEach((key) => {
    basePercents[key] = (stats[key].value / stats.total) * 100;
  });

  const hoverPercents = {};
  values.forEach((key) => {
    hoverPercents[key] = (hoverStats[key].value / hoverStats.total) * 100;
  });

  const displayStats = totalDelta > 0 ? hoverPercents : basePercents;

  const statChangeValue = {};
  let totalChangeValue = 0;
  let actualChangeSum = 0;
  values.forEach((key) => {
    statChangeValue[key] = hoverStats[key].value - stats[key].value;
    totalChangeValue += Math.abs(statChangeValue[key]);
    actualChangeSum += statChangeValue[key];
  });

  // Convert case
  if (actualChangeSum !== totalChangeValue) {
    let sourceKey = "";
    let targetKey = "";
    values.forEach((key) => {
      if (statChangeValue[key] < 0) {
        sourceKey = key;
      }
      if (statChangeValue[key] > 0) {
        targetKey = key;
      }
    });
    if (sourceKey && targetKey) {
      statChangeValue[targetKey] += statChangeValue[sourceKey];
      statChangeValue[sourceKey] = 0;
    }
  }

  const statChangeRatio = {};
  values.forEach((key) => {
    statChangeRatio[key] =
      Math.abs(statChangeValue[key]) / Math.abs(totalChangeValue);
  });

  // Delta percents distributed proportionally
  const deltaPercents = {};
  values.forEach((key) => {
    const deltaPercent = Math.abs(basePercents[key] - hoverPercents[key]);

    if (deltaPercent === 0) {
      deltaPercents[key] = 0;
    } else {
      deltaPercents[key] = deltaPercent * statChangeRatio[key];
    }
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
        return displayStats.HP;
      case "SH":
        return displayStats.HP + displayStats.AR;
      default:
        return 0;
    }
  };

  const getDeltaLeft = (key) => {
    switch (key) {
      case "HP":
        return displayStats.HP;
      case "AR":
        return displayStats.HP + displayStats.AR;
      case "SH":
        return displayStats.HP + displayStats.AR + displayStats.SH;
      default:
        return displayStats.HP;
    }
  };

  const boxEvents = {
    onMouseEnter: (e) =>
      startTransition(() => {
        setHoverAttributes([...values]);
      }),
    onMouseLeave: () => startTransition(() => setHoverAttributes([])),
  };

  return (
    <Box
      key={"lifeStats"}
      display="flex"
      alignItems="center"
      gap={2}
      {...boxEvents}
    >
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
        title={`Life: ${stats.HP.value} / Armor: ${stats.AR.value} / Shields: ${stats.SH.value}`}
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
          {values.map((key) => (
            <React.Fragment key={key}>
              {/* Base stat bar */}
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: `${getLeft(key)}%`,
                  width: `${displayStats[key]}%`,
                  height: "100%",
                  backgroundColor: getColor(key),
                  transition: "width 0.3s ease",
                }}
              />

              {/* Positive delta (green bar) */}
              {statChangeValue[key] > 0 && (
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: `${getDeltaLeft(key) - deltaPercents[key]}%`,
                    width: `${deltaPercents[key]}%`,
                    height: "100%",
                    backgroundColor: theme.palette.custom.green,
                    opacity: 0.8,
                    transition: "width 0.3s ease",
                  }}
                />
              )}

              {/* Negative delta (red bar) */}
              {statChangeValue[key] < 0 && (
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: `${getDeltaLeft(key) - deltaPercents[key]}%`,
                    width: `${deltaPercents[key]}%`,
                    height: "100%",
                    backgroundColor: "red",
                    opacity: 0.8,
                    transition: "width 0.3s ease, left 0.3s ease",
                  }}
                />
              )}
            </React.Fragment>
          ))}
        </Box>
      </Tooltip>
      {/* Total value */}
      <Typography
        sx={{
          width: 30,
          textAlign: "right",
          color:
            totalDelta > 0
              ? theme.palette.custom.green
              : totalDelta < 0
              ? "red"
              : "inherit",
        }}
      >
        {stats.total + totalDelta}
      </Typography>
    </Box>
  );
};

export default StatBar;
