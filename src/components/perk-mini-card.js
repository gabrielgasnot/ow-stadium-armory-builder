import React from "react";
import { Box, CardMedia } from "@mui/material";

function PerkMiniCard({ perk, perkType, unselectPerk }) {
  const isPower = perkType === "power";

  return (
    <Box
      sx={{
        width: 64,
        height: 64,
        borderRadius: isPower ? 2 : "50%", // Circle for "item", square for "power"
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
      }}
      onClick={perk ? () => unselectPerk(perk) : () => null}
    >
      {perk && (
        <CardMedia
          component="img"
          image={`${process.env.PUBLIC_URL}/perks/${perk.id}.png`}
          title={perk.name}
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
