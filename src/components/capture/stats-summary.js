import React from "react";
import { Box } from "@mui/material";
import StatBarSummary from "./stat-bar-summary";
import StatBarLifeSummary from "./stat-bar-life-summary";
import { useStats } from "../../contexts/stats-context";
import useBasicStatValues from "../../hooks/use-basic-stat-value";

const StatsSummary = () => {
  const { getBasicStatAttributes, getSelectedItemsAttributeSum } = useStats();
  const { baseValues } = useBasicStatValues(
    getBasicStatAttributes,
    getSelectedItemsAttributeSum,
    getBasicStatAttributes
  );

  return (
    <Box display="flex" flexDirection="column" gap={1} width="100%">
      <StatBarLifeSummary />
      {getBasicStatAttributes().map(
        ([attributeType, { icon }]) =>
          baseValues[attributeType] > 0 && (
            <StatBarSummary
              key={attributeType}
              icon={icon.replace("svg", "png")}
              attributeType={attributeType}
              value={baseValues[attributeType] ?? 0}
            />
          )
      )}
    </Box>
  );
};

export default StatsSummary;
