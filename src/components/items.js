import React from "react";
import { Stack } from "@mui/material";
import PerkCard from "./perk-card.js";

function Items(props) {
  const { items, grade, selectItem } = props;

  if (items && items.length > 0) {
    return (
      <Stack direction="row" spacing={2} useFlexGap sx={{ flexWrap: "wrap" }}>
        {items.map((item) => {
          item.grade = grade;
          return (
            <PerkCard
              perk={item}
              perkGrade={grade}
              selectPerk={selectItem}
              perkType="item"
            />
          );
        })}
      </Stack>
    );
  }
}

export default Items;
