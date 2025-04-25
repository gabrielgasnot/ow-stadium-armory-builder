import React from "react";
import { Stack } from "@mui/material";
import Item from "./item.js";
import { getPerkColor } from "../services/color.js";

function Items(props) {
  const { items, grade, selectItem } = props;

  if (items && items.length > 0) {
    return (
      <Stack direction="row" spacing={2} useFlexGap sx={{ flexWrap: "wrap" }}>
        {items.map((item) => {
          item.grade = grade;
          return (
            <Item
              item={item}
              key={`item_${item.name}`}
              color={getPerkColor(grade)}
              selectItem={selectItem}
            />
          );
        })}
      </Stack>
    );
  }
}

export default Items;
