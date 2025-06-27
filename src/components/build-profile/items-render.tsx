import { Grid, Stack } from "@mui/material";
import { JSX } from "react";

interface RenderItemsProps {
  isDesktop: boolean;
  selectedItems: string[];
  displayPerk: (perks: string[], type: string, index: number) => JSX.Element;
}

function RenderItems({
  isDesktop,
  selectedItems,
  displayPerk,
}: RenderItemsProps) {
  const maxItems = 6;
  const itemColumns = 3;
  const itemRows = 2;

  if (isDesktop) {
    return (
      <Grid
        container
        spacing={1}
        sx={{
          textAlign: "center",
        }}
      >
        {[...Array(itemRows)].map((_, rowIndex) =>
          [...Array(itemColumns)].map((_, index) => (
            <Grid
              spacing={2}
              size={4}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              key={index}
            >
              {displayPerk(
                selectedItems,
                "item",
                rowIndex * itemColumns + index
              )}
            </Grid>
          ))
        )}
      </Grid>
    );
  }

  return (
    <Stack
      spacing={2}
      sx={{
        flexDirection: "column",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        marginLeft: 1,
      }}
    >
      {[...Array(maxItems)].map((_, index) =>
        index < selectedItems.length ||
        (selectedItems.length === 0 && index === 0)
          ? displayPerk(selectedItems, "item", index)
          : null
      )}
    </Stack>
  );
}

export default RenderItems;
