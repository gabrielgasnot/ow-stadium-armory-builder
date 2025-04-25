import React from "react";
import { Card, CardHeader, CardContent, Stack } from "@mui/material";
import { amber } from "@mui/material/colors";

function Powers(props) {
  const { powers, selectPower } = props;

  if (powers && powers.length > 0) {
    return (
      <Stack direction="row" spacing={2} useFlexGap sx={{ flexWrap: "wrap" }}>
        {powers.map((power) => (
          <Card
            key={`power_${power.name}`}
            sx={{ width: 345, backgroundColor: amber[100], cursor: "pointer" }}
            onClick={() => selectPower("power", power)}
          >
            <CardHeader title={power.name} />
            <CardContent>{power.description}</CardContent>
          </Card>
        ))}
      </Stack>
    );
  } else {
    return "Select a hero.";
  }
}

export default Powers;
