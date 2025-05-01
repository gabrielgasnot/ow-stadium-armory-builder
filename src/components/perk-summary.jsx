import React from "react";
import { Box, Paper, Typography, Divider } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import HighlightText from "./highlight-text"; // Assuming you have a HighlightText component
import PerkAttributes from "./perk-attributes";
import getPublicUrl from "../helpers/public-url";

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
        width: "100%", // Make it flexible
        maxWidth: "350px", // Limit width to keep it compact
        overflowWrap: "break-word", // Ensure long words break and wrap
        wordBreak: "break-word", // Word breaking
        textOverflow: "ellipsis", // Ellipsis for overflowing text (optional)
        margin: "auto",
        // For responsiveness
        "@media (max-width: 600px)": {
          maxWidth: "90%", // On smaller screens, take up 90% of the screen width
          padding: 1, // Reduce padding on smaller screens
        },
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
        <Typography variant="h6" fontWeight="bold" noWrap>
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
              variant="caption"
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
                src={`${getPublicUrl()}icons/credit.svg`}
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
