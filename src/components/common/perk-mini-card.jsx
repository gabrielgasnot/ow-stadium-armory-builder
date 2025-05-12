import React, { useState, useTransition } from "react";
import { Box, CardMedia } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useUI } from "../../contexts/ui-context";

function PerkMiniCard({ perk, perkType, setHoverPerk, unselectPerk }) {
  const theme = useTheme();
  const [, startTransition] = useTransition();
  const isPower = perkType === "power";

  const [isTouch, setIsTouch] = useState(false);
  const { handleShowPerkSummary, handleHidePerkSummary } = useUI();
  const handleTouchStart = () => {
    setIsTouch(true);
  };

  const handleMouseEnter = (e) => {
    if (!isTouch && perk) {
      handleShowPerkSummary(e, perk);
      if (!isPower) {
        setHoverPerk(perk);
      }
    }
  };

  const handleMouseLeave = () => {
    setHoverPerk(null);
    handleHidePerkSummary();
  };

  const handleMouseClick = () => {
    if (!perk) {
      return;
    }

    unselectPerk(perk);
    handleHidePerkSummary();
    setHoverPerk(null);
  };

  const perkHandlers = perk
    ? {
        onClick: () => startTransition(() => handleMouseClick()),
        onMouseEnter: (e) => startTransition(() => handleMouseEnter(e)),
        onMouseLeave: () => startTransition(() => handleMouseLeave()),
        onTouchStart: () => startTransition(() => handleTouchStart()),
      }
    : {};

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
          ? `0 0 10px 2px ${theme.palette.custom.grades[perk.grade]}`
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
      {...perkHandlers}
    >
      {perk && (
        <CardMedia
          component="img"
          image={`${import.meta.env.BASE_URL}perks/${perk.id}.png`}
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
