import React from "react";
import { Stack } from "@mui/material";
import PerkCard from "../common/perk-card.js";
import { useHero } from "../../contexts/hero-context.js";
import { useBuild } from "../../contexts/build-context.js";

function Powers() {
  const { heroPowers } = useHero();
  const { selectedPowers } = useBuild();
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
