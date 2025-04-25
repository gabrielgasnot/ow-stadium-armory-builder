import React from "react";
import { Grid } from "@mui/material";
import Items from "./items";

function GroupItems(props) {
  const { basicItems, items, category, selectItem, getColor } = props;

  const normalItems = [
    ...basicItems?.normal.filter((item) => item.category === category),
    ...items?.normal.filter((item) => item.category === category),
  ];

  const rareItems = [
    ...basicItems?.rare.filter((item) => item.category === category),
    ...items?.rare.filter((item) => item.category === category),
  ];

  const epicItems = [
    ...basicItems?.epic.filter((item) => item.category === category),
    ...items?.epic.filter((item) => item.category === category),
  ];

  return (
    <Grid container size={12} spacing={2}>
      <Grid size={4}>
        <Items
          items={normalItems}
          grade="normal"
          selectItem={selectItem}
          getColor={getColor}
        />
      </Grid>
      <Grid size={4}>
        <Items
          items={rareItems}
          grade="rare"
          selectItem={selectItem}
          getColor={getColor}
        />
      </Grid>
      <Grid size={4}>
        <Items
          items={epicItems}
          grade="epic"
          selectItem={selectItem}
          getColor={getColor}
        />
      </Grid>
    </Grid>
  );
}

export default GroupItems;
