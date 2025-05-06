import React from "react";
import { Box, Paper, Typography, Divider } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import HighlightText from "./highlight-text.js"; // Assuming you have a HighlightText component
import PerkAttributes from "../common/perk-attributes.js";

export default function PerkSummary({ perk }) {
  const theme = useTheme();
  if (!perk) return null;

  return (
    <Paper
      elevation={4}
      sx={{
        userSelect: "none",
        backgroundColor: theme.palette.background.paper,
        border: `2px solid ${theme.palette.custom.orange}`,
        boxShadow: "0 0 10px 2px rgba(231, 127, 45, 0.4)",
        padding: 2,
        borderRadius: 2,
        width: "100%", 
        minWidth: "250px",
        maxWidth: "350px", 
        overflowWrap: "break-word", 
        wordBreak: "break-word", 
        textOverflow: "ellipsis",
        margin: "auto",
        // For responsiveness
        "@media (max-width: 600px)": {
          maxWidth: "90%", // On smaller screens, take up 90% of the screen width
          padding: 1, // Reduce padding on smaller screens
        }
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
        <Typography variant="h6" noWrap>
          {perk.name}
        </Typography>
      </Box>
      <Divider sx={{ my: 1 }} />
      <HighlightText text={perk.description} />
      <PerkAttributes attributes={perk.attributes} />

      {(perk.price || perk.category) && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 2,
          }}
        >
          {perk.category && (
            <Typography
              variant="subtitle1"
              sx={{
                color: "text.secondary",
              }}
            >
              {perk.category}
            </Typography>
          )}
          {perk.price && (
            <Typography
              variant="subtitle1"
              sx={{
                alignItems: "center",
              }}
            >
              <img
                src={`${process.env.PUBLIC_URL}/icons/credit.svg`}
                alt="credits"
                style={{
                  width: 18,
                  height: 18,
                  marginRight: 2,
                }}
              />
              {perk.price}
            </Typography>
          )}
        </Box>
      )}
    </Paper>
  );
}
