import React, { useContext } from "react";
import { Box } from "@mui/material";
import StatBar from "./stat-bar";
import AppContext from "../app-context";
import { getBasicAttributeSum, getBasicStatAttributes } from "../services/stats";

const StatsPanel = () => {
  const { selectedItems, hoverPerk } = useContext(AppContext);

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      {getBasicStatAttributes().map(([attributeType, { icon, name }]) => (
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
            percentage={getBasicAttributeSum(attributeType, selectedItems)}
            hoverImpact={getBasicAttributeSum(attributeType, [hoverPerk])}
          />
        </Box>
      ))}
    </Box>
  );
};

export default StatsPanel;
