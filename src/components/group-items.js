import React from "react";
import { Grid } from "@mui/material";
import Items from "./items";

function GroupItems(props) {
  const { basicItems, items, category, selectItem, getColor, selectedIds } = props;

  const commonItems = [
    ...basicItems?.common.filter((item) => item.category === category),
    ...items?.common.filter((item) => item.category === category),
  ];

  const rareItems = [
    ...basicItems?.rare.filter((item) => item.category === category),
    ...items?.rare.filter((item) => item.category === category),
  ];

  const epicItems = [
    ...basicItems?.epic.filter((item) => item.category === category),
    ...items?.epic.filter((item) => item.category === category),
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
        <Grid item key={grade} size={{ xs: 12, xl:4 }}>
          <Items
            items={getItemsByGrade(grade)}
            grade={grade}
            selectItem={selectItem}
            selectedIds={selectedIds}
            getColor={getColor}
            isDisabled={selectedIds.length >= 6}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default GroupItems;
