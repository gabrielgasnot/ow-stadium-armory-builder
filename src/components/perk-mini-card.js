import React, { useContext } from "react";
import { Box, CardMedia } from "@mui/material";
import AppContext from "../app-context.js";
import { useTheme } from "@mui/material/styles";

function PerkMiniCard({ perk, perkType, unselectPerk }) {
  const theme = useTheme();
  const isPower = perkType === "power";
  const { handleShowPerkSummary, handleHidePerkSummary } =
    useContext(AppContext);

  return (
    <Box
      sx={{
        width: 64,
        height: 64,
        border: perk ? "none" : `2px solid ${theme.palette.text.secondary}`,
        borderRadius: isPower ? 2 : "50%", // Circle for "item", square for "power"
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        boxShadow: perk
        ? `0 0 10px 2px ${theme.palette.custom.orange}`
        : "none",
        animation: !perk ? "pulse 10s ease-in-out infinite" : "none",
        transition: "box-shadow 0.3s ease, border 0.3s ease",
        "@keyframes pulse": {
          "0%": {
            opacity: 0.4,
          },
          "50%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0.4,
          },
        },
      }}
      onClick={perk ? () => unselectPerk(perk) : () => null}
      onMouseEnter={(e) => handleShowPerkSummary(e, perk)}
      onMouseLeave={handleHidePerkSummary}
    >
      {perk && (
        <CardMedia
          component="img"
          image={`${process.env.PUBLIC_URL}/perks/${perk.id}.png`}
          alt={perk.name}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover", // Cover the space properly
          }}
        />
      )}
    </Box>
  );
}

export default PerkMiniCard;
