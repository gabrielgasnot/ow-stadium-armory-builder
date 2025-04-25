import React from "react";
import {
  Typography,
  Grid,
  Chip,
  Stack,
  Card,
  CardHeader,
  CardContent,
  Button,
} from "@mui/material";
import { amber } from "@mui/material/colors";
import { getPerkColor } from "../services/color";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

function Details(props) {
  const { hero, powers, items, getJson, removeElement } = props;

  if (!hero) {
    return;
  }

  return (
    <Grid container spacing={2}>
      <Grid size={12}>
        <Stack spacing={1} useFlexGap sx={{ flexWrap: "wrap" }}>
          <Typography variant="h5" component="h2" gutterBottom align="center">
            {hero.name} ({hero.role})
          </Typography>
          <Typography variant="h6" component="h2" gutterBottom align="center">
            Build cost:{" "}
            {items.map((item) => item.price).reduce((a, b) => a + b, 0)} credits
          </Typography>
          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudDownloadIcon />}
            onClick={() => getJson()}
          >
            Download this build
          </Button>
        </Stack>
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
                  onDelete={() => removeElement('power', power)}
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
                  onDelete={() => removeElement('item', item)}
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
