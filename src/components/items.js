import React from "react";
import { Stack } from "@mui/material";
import Item from "./item.js";

function Items(props) {
  const { items, grade, selectItem, getColor } = props;

  if (items && items.length > 0) {
    return (
      <Stack direction="row" spacing={2} useFlexGap sx={{ flexWrap: "wrap" }}>
        {items.map((item) => {
          item.grade = grade;
          return (
            <Item
              item={item}
              key={`item_${item.name}`}
              color={getColor(grade)}
              selectItem={selectItem}
            />
          );
        })}
      </Stack>
    );
  }
}

export default Items;
