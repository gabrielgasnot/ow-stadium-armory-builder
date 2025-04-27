import React from "react";
import { Chip, Stack, Card, CardHeader, CardContent } from "@mui/material";
import { amber } from "@mui/material/colors";
import { getPerkColor } from "../services/color";
import DetailsHeader from "./details-header";

function Details(props) {
  const { hero, powers, items, getJson, removeElement } = props;

  if (!hero) {
    return;
  }

  return (
    <Stack spacing={2} sx={{ flexGrow: 1, minHeight: 0, width: "100%" }}>
      <DetailsHeader hero={hero} items={items} />

      <Card sx={{ height: "100%" }}>
        <CardHeader title="Powers" />
        <CardContent>
          <Stack
            spacing={1}
            useFlexGap
            sx={{ flexWrap: "wrap", width: "100%" }}
          >
            {powers.map((power) => (
              <Chip
                label={power.name}
                sx={{ backgroundColor: amber[100] }}
                onDelete={() => removeElement("power", power)}
              ></Chip>
            ))}
          </Stack>
        </CardContent>
      </Card>

      <Card>
        <CardHeader title="Items" />
        <CardContent>
          <Stack
            spacing={1}
            useFlexGap
            sx={{ flexWrap: "wrap", width: "100%" }}
          >
            {items.map((item) => (
              <Chip
                label={`${item.name} (${item.category})`}
                sx={{ backgroundColor: getPerkColor(item.grade) }}
                onDelete={() => removeElement("item", item)}
              ></Chip>
            ))}
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  );
}

export default Details;
