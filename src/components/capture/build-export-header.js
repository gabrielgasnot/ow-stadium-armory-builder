import React from "react";
import { Box, Typography } from "@mui/material";

function BuildExportHeader({ exportLink }) {
  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <Box>
        {/* <Box
          component="img"
          src={`${process.env.PUBLIC_URL}/icons/png/${icon}`}
          alt={attributeType}
          sx={{
            width: 20,
            height: 20,
            objectFit: "contain",
          }}
        /> */}
      </Box>
      <Typography variant="h4">Build ID: {exportLink}</Typography>
    </Box>
  );
}

export default BuildExportHeader;
