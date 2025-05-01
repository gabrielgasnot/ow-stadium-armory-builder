import React from "react";
import types from "../db/attributeTypes.json";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import getPublicUrl from "../helpers/public-url";

function PerkAttributes({ attributes }) {
  const theme = useTheme();
  return (
    attributes &&
    attributes.map((attribute, index) => (
      <Box key={index} style={{ display: "flex", alignItems: "center" }}>
        {attribute.type === "description" ? (
          <Typography color={theme.palette.text.secondary} variant="body2">
            {attribute.value}
          </Typography>
        ) : (
          <>
            <img
              src={`${getPublicUrl()}icons/${
                types[attribute.type]?.icon ?? "default.svg"
              }`}
              alt={attribute.type}
              style={{ width: 20, height: 20, marginRight: 8 }}
            />
            <Typography color={theme.palette.text.secondary} variant="body2">
              {attribute.value}
              {attribute.unit ?? ""}{" "}
              {typeof types[attribute.type] === "undefined"
                ? `${attribute?.type}`
                : `${types[attribute.type]?.name}`}
            </Typography>
          </>
        )}
      </Box>
    ))
  );
}

export default PerkAttributes;
