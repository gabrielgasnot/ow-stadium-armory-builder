import React from "react";
import { Box } from "@mui/material";
import StatBar from "./stat-bar";
import StatBarLife from "./stat-bar-life";
import { getBasicStatAttributes } from "../services/stats";

const StatsPanel = () => {
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <StatBarLife />
      {getBasicStatAttributes().map(([attributeType, { icon, name }]) => (
        <StatBar name={name} icon={icon} attributeType={attributeType} />
      ))}
    </Box>
  );
};

export default StatsPanel;
