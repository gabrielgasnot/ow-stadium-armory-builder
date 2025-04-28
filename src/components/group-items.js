import React, { useContext } from "react";
import { Grid } from "@mui/material";
import Items from "./items";
import AppContext from "../app-context.js";

function GroupItems({ category }) {
  const { basicItems, heroItems, selectedItems } = useContext(AppContext);
  const selectedIds = [...selectedItems.map((si) => si.id)];

  const commonItems = [
    ...basicItems?.common.filter((item) => item.category === category),
    ...heroItems?.common.filter((item) => item.category === category),
  ];

  const rareItems = [
    ...basicItems?.rare.filter((item) => item.category === category),
    ...heroItems?.rare.filter((item) => item.category === category),
  ];

  const epicItems = [
    ...basicItems?.epic.filter((item) => item.category === category),
    ...heroItems?.epic.filter((item) => item.category === category),
  ];

  const getItemsByGrade = (grade) => {
    switch (grade) {
      case "common":
        return commonItems;
      case "rare":
        return rareItems;
      case "epic":
        return epicItems;
      default:
        return [];
    }
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
