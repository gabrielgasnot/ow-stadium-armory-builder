import React from "react";
import { Box } from "@mui/material";
import StatBar from "./stat-bar";
import StatBarLife from "./stat-bar-life";
import { useStats } from "../../contexts/stats-context";
import useBasicStatValues from "../../hooks/use-basic-stat-value";
import { useUI } from "../../contexts/ui-context";

const StatsPanel = () => {
  const {
    getBasicStatAttributes,
    getSelectedItemsAttributeSum,
    getHoverPerkAttributeSum,
  } = useStats();
  const { baseValues, hoverValues } = useBasicStatValues(
    getBasicStatAttributes,
    getSelectedItemsAttributeSum,
    getHoverPerkAttributeSum
  );
  const { updateHoverAttributes } = useUI();
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <StatBarLife setHoverAttributes={updateHoverAttributes} />
      {getBasicStatAttributes().map(([attributeType, { icon, name }]) => (
        <StatBar
          key={attributeType}
          name={name}
          icon={icon}
          attributeType={attributeType}
          value={baseValues[attributeType] ?? 0}
          hoverImpact={hoverValues[attributeType] ?? 0}
          setHoverAttributes={updateHoverAttributes}
        />
      ))}
    </Box>
  );
};

export default StatsPanel;
