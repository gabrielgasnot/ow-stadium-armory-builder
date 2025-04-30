import React, { useContext } from "react";
import { Box } from "@mui/material";
import StatBar from "./stat-bar";
import AppContext from "../app-context";
import attributeTypes from "../db/attributeTypes.json";
import getCurrentSum from "../services/stats";

const StatsPanel = () => {
  const { selectedItems, hoverPerk } = useContext(AppContext);
  const lifeStats = ["AR", "HP", "SH"];

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      {Object.entries(attributeTypes)
        .filter(([attributeType, _]) => !lifeStats.includes(attributeType))
        .map(([attributeType, { icon, name }]) => (
          <Box key={name} display="flex" alignItems="center" gap={2}>
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
            <StatBar
              name={name}
              percentage={getCurrentSum(attributeType, selectedItems)}
              hoverImpact={getCurrentSum(attributeType, [hoverPerk])}
            />
          </Box>
        ))}
    </Box>
  );
};

export default StatsPanel;
