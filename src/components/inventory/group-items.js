import React from "react";
import { Grid, Typography } from "@mui/material";
import Items from "./items.js";
import { useBuild } from "../../contexts/build-context.js";
import { useHero } from "../../contexts/hero-context.js";

function GroupItems({ category }) {
  const { availableItems } = useHero();
  const { selectedItems } = useBuild();
  const selectedIds = [...selectedItems.map((si) => si.id)];

  const getItemsByGrade = (grade) => {
    if (!availableItems[grade]) {
      return [];
    }
    return availableItems[grade].filter(
      (item) => item.category === category && !item.disabled
    );
  };

  return (
    <Grid
      container
      spacing={1}
      sx={{ flexGrow: 1, minHeight: 0, width: "100%" }}
    >
      {["common", "rare", "epic"].map((grade, index) => (
        <Grid
          key={grade}
          size={{
            xs: 12,
            xl: 4,
          }}
          sx={(theme) => ({
            [theme.breakpoints.up("xl")]: {
              borderRight:
                index < 2 ? `1px solid ${theme.palette.background.paper}` : "none",
            },
          })}
        >
          <Typography variant="h6" sx={{ textTransform: "capitalize" }}>
            {grade}
          </Typography>
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
