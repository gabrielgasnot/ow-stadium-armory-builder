import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  CardMedia,
} from "@mui/material";

function Item(props) {
  const { item, color, selectItem } = props;

  return (
    <Card
      readonly
      key={`item_${item.name}`}
      sx={{ width: 250, backgroundColor: color, cursor: "pointer" }}
      onClick={() => selectItem("item", item)}
    >
      <CardMedia
        sx={{ height: 125 }}
        image={`${process.env.PUBLIC_URL}/perks/${item.name.replace(
          "'",
          "_"
        )}.png`}
        title={item.name}
      />
      <CardHeader title={item.name} />
      <CardContent>{item.description}</CardContent>
      <CardActions>Cost: {item.price}</CardActions>
    </Card>
  );
}

export default Item;
