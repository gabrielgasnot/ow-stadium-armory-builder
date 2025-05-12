import React, { useMemo } from "react";
import { Box } from "@mui/material";
import StatBarSummary from "./stat-bar-summary";
import StatBarLifeSummary from "./stat-bar-life-summary";
import { useStats } from "../../contexts/stats-context";
import useBasicStatValues from "../../hooks/use-basic-stat-value";

const StatsSummary = ({ items }) => {
  const { getBasicStatAttributes, calculateStats } = useStats();

  const itemsAttributeSum = useMemo(
    () => calculateStats(items),
    [items, calculateStats]
  );

  const getItemsAttributeSum = (type) =>
    itemsAttributeSum.find((a) => a.type === type)?.value ?? 0;

  const { baseValues } = useBasicStatValues(
    getBasicStatAttributes,
    getItemsAttributeSum,
    getBasicStatAttributes
  );

  return (
    <Box display="flex" flexDirection="column" gap={1} width="100%">
      <StatBarLifeSummary items={items} />
      {getBasicStatAttributes().map(
        ([attributeType, { icon }]) =>
          baseValues[attributeType] > 0 && (
            <StatBarSummary
              key={attributeType}
              icon={icon.replace("svg", "png")}
              attributeType={attributeType}
              value={baseValues[attributeType]}
            />
          )
      )}
    </Box>
  );
};

export default StatsSummary;
