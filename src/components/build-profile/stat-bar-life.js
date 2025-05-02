import React, { useMemo } from "react";
import { Box, Tooltip, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useHero } from "../../contexts/hero-context";
import { useStats } from "../../contexts/stats-context";

const StatBar = () => {
  const theme = useTheme();
  const { getLifeStatSum } = useStats();
  const { currentHero } = useHero();

  const calculate = (stats) => {
    const total = stats.reduce((acc, stat) => acc + stat.value, 0);
    const [HP, AR, SH] = stats;
    return {
      total: total,
      stats: { HP, AR, SH },
      HP: (HP.value / total) * 100,
      AR: (AR.value / total) * 100,
      SH: (SH.value / total) * 100,
    };
  };

  const lifeStats = useMemo(
    () => getLifeStatSum(currentHero),
    [currentHero, getLifeStatSum]
  );

  const { total, stats, HP, AR, SH } = useMemo(
    () => calculate(lifeStats),
    [lifeStats]
  );

  const tempStats = useMemo(
    () => getLifeStatSum(currentHero, true),
    [currentHero, getLifeStatSum]
  );

  const tempValues = useMemo(() => calculate(tempStats), [tempStats]);

  const diffTotal = tempValues.total - total;
  const diffHP = tempValues.HP - HP;
  const diffAR = tempValues.AR - AR;
  const diffSH = tempValues.SH - SH;

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
          {/* White for Life*/}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              height: "100%",
              width: `${HP}%`,
              backgroundColor: theme.palette.secondary.main,
              transition: "width 0.3s ease",
            }}
          />

          {/* Red for Life Hover Impact (negative impact) */}
          {diffHP < 0 && (
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: `${HP + diffHP}%`,
                height: "100%",
                width: `${Math.abs(diffHP)}%`,
                backgroundColor: "red",
                opacity: 0.8,
                transition: "width 0.3s ease, left 0.3s ease",
              }}
            />
          )}

          {/* Green for Life Hover Impact (positive impact) */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: `${HP}%`,
              height: "100%",
              width: `${diffHP}%`,
              backgroundColor: theme.palette.custom.green,
              transition: "width 0.3s ease",
            }}
          />

          {/* Orange for Armor */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: `${HP + diffHP}%`,
              height: "100%",
              width: `${AR}%`,
              backgroundColor: theme.palette.custom.orange,
              transition: "width 0.3s ease",
            }}
          />

          {/* Red for Armor Hover Impact (negative impact) */}
          {diffAR < 0 && (
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: `${HP + Math.abs(diffHP) + AR}%`,
                height: "100%",
                width: `${Math.abs(diffAR)}%`,
                backgroundColor: "red",
                opacity: 0.8,
                transition: "width 0.3s ease, left 0.3s ease",
              }}
            />
          )}

          {/* Green for Armor Hover Impact (positive impact) */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: `${HP + diffHP + AR}%`,
              height: "100%",
              width: `${diffAR}%`,
              backgroundColor: theme.palette.custom.green,
              transition: "width 0.3s ease",
            }}
          />

          {/* Blue for Shields */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: `${HP + diffHP + AR + diffAR}%`,
              height: "100%",
              width: `${SH}%`,
              backgroundColor: theme.palette.custom.blue,
              transition: "width 0.3s ease",
            }}
          />

          {/* Red for Shields Hover Impact (negative impact) */}
          {diffSH < 0 && (
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: `${HP + Math.abs(diffHP) + AR + Math.abs(diffAR) + SH}%`,
                height: "100%",
                width: `${Math.abs(diffSH)}%`,
                backgroundColor: "red",
                opacity: 0.8,
                transition: "width 0.3s ease, left 0.3s ease",
              }}
            />
          )}

          {/* Green for Shields Hover Impact (positive impact) */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: `${HP + diffHP + AR + diffAR + SH}%`,
              height: "100%",
              width: `${diffSH}%`,
              backgroundColor: theme.palette.custom.green,
              transition: "width 0.3s ease",
            }}
          />
        </Box>
      </Tooltip>
      {diffTotal !== 0 && (
        <Typography
          sx={{
            width: 30,
            textAlign: "right",
            color: diffTotal > 0 ? theme.palette.custom.green : "red",
          }}
        >
          {total + diffTotal}
        </Typography>
      )}
      {diffTotal === 0 && (
        <Typography
          sx={{
            width: 30,
            textAlign: "right",
          }}
        >
          {total}
        </Typography>
      )}
    </Box>
  );
};

export default StatBar;
