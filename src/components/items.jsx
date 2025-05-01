import React from "react";
import { Stack } from "@mui/material";
import PerkCard from "./perk-card";

function Items({ items, grade, selectedIds, isDisabled }) {
  if (items && items.length > 0) {
    return (
      <Stack
        direction="row"
        spacing={2}
        useFlexGap
        sx={{
          flexWrap: "wrap",
          justifyContent: "flex-start",
        }}
      >
        {items.map((item) => {
          item.grade = grade;
          return (
            <PerkCard
              perk={item}
              perkType="item"
              isSelected={
                selectedIds.find((id) => id === item.id) !== undefined
              }
              isDisabled={
                isDisabled &&
                !selectedIds.find((id) => id === item.id) !== undefined
              }
            />
          );
        })}
      </Stack>
    );
  }
}

export default Items;
