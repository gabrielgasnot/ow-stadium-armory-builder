import React from "react";
import { Grid } from "@mui/material";
import Items from "./items.js";
import { useBuild } from "../../contexts/build-context.js";
import { useHero } from "../../contexts/hero-context.js";

function GroupItems({ category }) {
  const { availableItems } = useHero();
  const { selectedItems } = useBuild();
  const selectedIds = [...selectedItems.map((si) => si.id)];

  const getItemsByGrade = (grade) => {
    if(!availableItems[grade]) {
      return [];
    }
    return availableItems[grade].filter((item) => item.category === category && !item.disabled);
  };

  return (
    <Grid
      container
      spacing={2}
      sx={{ flexGrow: 1, minHeight: 0, width: "100%", height: "100%" }}
    >
      {["common", "rare", "epic"].map((grade) => (
        <Grid item key={grade} size={{ xs: 12, xl: 4 }}>
          <Items
            items={getItemsByGrade(grade)}
            grade={grade}
            selectedIds={selectedIds}
            isDisabled={selectedIds.length >= 6}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default GroupItems;
