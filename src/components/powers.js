import React from "react";
import { Stack } from "@mui/material";
import PerkCard from "./perk-card";

function Powers(props) {
  const { powers, selectPower } = props;

  if (powers && powers.length > 0) {
    return (
      <Stack direction="row" spacing={2} useFlexGap sx={{ flexWrap: "wrap" }}>
        {powers.map((power) => (
          <PerkCard perk={power} perkType="power" selectPerk={selectPower}/>
        ))}
      </Stack>
    );
  } else {
    return "Select a hero.";
  }
}

export default Powers;
