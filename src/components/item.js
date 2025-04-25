import React from "react";
import { Card, CardHeader, CardContent, CardActions } from "@mui/material";

function Item(props) {
  const { item, color, selectItem } = props;

  return (
    <Card
      readonly
      key={`item_${item.name}`}
      sx={{ width: 250, backgroundColor: color, cursor: "pointer" }}
      onClick={() => selectItem("item", item)}
    >
      <CardHeader title={item.name} />
      <CardContent>{item.description}</CardContent>
      <CardActions>Cost: {item.price}</CardActions>
    </Card>
  );
}

export default Item;
