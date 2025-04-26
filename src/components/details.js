import React from "react";
import {
  Grid,
  Chip,
  Stack,
  Card,
  CardHeader,
  CardContent,
} from "@mui/material";
import { amber } from "@mui/material/colors";
import { getPerkColor } from "../services/color";
import DetailsHeader from "./details-header";

function Details(props) {
  const { hero, powers, items, getJson, removeElement } = props;

  if (!hero) {
    return;
  }

  return (
    <Grid container spacing={2}>
      <Grid size={12}>
        <DetailsHeader hero={hero} items={items} />
      </Grid>
      <Grid size={12}>
        <Card>
          <CardHeader title="Powers" />
          <CardContent>
            <Stack spacing={1} useFlexGap sx={{ flexWrap: "wrap" }}>
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
      </Grid>
      <Grid size={12}>
        <Card>
          <CardHeader title="Items" />
          <CardContent>
            <Stack spacing={1} useFlexGap sx={{ flexWrap: "wrap" }}>
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
      </Grid>
    </Grid>
  );
}

export default Details;
