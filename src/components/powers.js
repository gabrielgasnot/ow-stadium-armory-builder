import React from "react";
import { Stack } from "@mui/material";
import PerkCard from "./perk-card";

function Powers({ powers, selectPower, selectedIds }) {
  if (powers && powers.length > 0) {
    return (
      <Stack direction="row" spacing={2} useFlexGap sx={{ flexWrap: "wrap" }}>
        {powers.map((power) => (
          <PerkCard perk={power} perkType="power" selectPerk={selectPower} isSelected={selectedIds.find(id => id === power.id) !== undefined} />
        ))}
      </Stack>
    );
  }
}

export default Powers;
