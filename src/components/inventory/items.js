import React from "react";
import { Box } from "@mui/material";
import PerkCard from "../common/perk-card.js";

function Items({ items, grade, selectedIds, isDisabled }) {
  if (items && items.length > 0) {
    return (
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          alignItems: "start",
          gap: 1.5,
          width: "100%",
          overflowY: { xs: "hidden", lg: "auto" },
          minHeight: "auto",
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
      </Box>
    );
  }
}

export default Items;
