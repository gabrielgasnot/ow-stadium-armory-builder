import React, { useContext } from "react";
import { Stack } from "@mui/material";
import PerkCard from "./perk-card";
import AppContext from "../app-context.js";

function Powers() {
  const { heroPowers, selectedPowers } = useContext(AppContext);
  const selectedIds = [...selectedPowers.map((sp) => sp.id)];
  if (heroPowers && heroPowers.length > 0) {
    return (
      <Stack direction="row" spacing={2} useFlexGap sx={{ flexWrap: "wrap" }}>
        {heroPowers.map((power) => (
          <PerkCard
            perk={power}
            perkType="power"
            isSelected={selectedIds.find((id) => id === power.id) !== undefined}
            isDisabled={
              selectedIds.find((id) => id === power.id) === undefined &&
              selectedIds.length >= 4
            }
          />
        ))}
      </Stack>
    );
  }
}

export default Powers;
