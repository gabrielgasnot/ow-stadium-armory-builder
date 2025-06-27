import React, { useState, useTransition, useEffect } from "react";
import { Box, CardMedia, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useUI } from "../../contexts/ui-context";
import { assertIsItem } from "../../models/item";
import { assertIsGradedItem } from "../../models/graded-item";
import { useTranslation } from "react-i18next";
import DeleteIcon from "@mui/icons-material/Delete";

function PerkMiniCard({
  perk,
  perkType,
  setHoverPerk,
  unselectPerk,
  isDesktop,
}) {
  const theme = useTheme();
  const { t } = useTranslation("common");
  const [, startTransition] = useTransition();
  const isPower = perkType === "power";

  const [isTouch, setIsTouch] = useState(false);
  const [imgSrc, setImgSrc] = useState(
    `${import.meta.env.BASE_URL}perks/default.png`
  );
  const { handleShowPerkSummary, handleHidePerkSummary } = useUI();
  const handleTouchStart = (e) => {
    const wasTouched = isTouch;
    setIsTouch(false);
    handleHidePerkSummary();

    if (!wasTouched) {
      setIsTouch(true);
      handleShowPerkSummary(e, perk);
      setTimeout(() => {
        setIsTouch(false);
        handleHidePerkSummary();
      }, 5000);
    }
  };

  const handleMouseEnter = (e) => {
    if (perk) {
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

  const removePerkBuild = () => {
    if (!perk) {
      return;
    }

    unselectPerk(perk);
    handleHidePerkSummary();
    setHoverPerk(null);
  };

  const perkHandlers = perk
    ? {
        onClick: () => {
          if (isDesktop) {
            startTransition(() => removePerkBuild());
          }
        },
        onMouseEnter: (e) => startTransition(() => handleMouseEnter(e)),
        onMouseLeave: () => startTransition(() => handleMouseLeave()),
        onTouchStart: (e) => startTransition(() => handleTouchStart(e)),
      }
    : {};

  useEffect(() => {
    const img = new Image();

    if (perk?.id) {
      img.onload = () =>
        setImgSrc(`${import.meta.env.BASE_URL}perks/${perk.id}.png`);
      img.onerror = () =>
        setImgSrc(`${import.meta.env.BASE_URL}perks/default.png`);
      img.src = `${import.meta.env.BASE_URL}perks/${perk.id}.png`;
    }

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [perk?.id]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: 2,
          flexDirection: "row",
        }}
        {...perkHandlers}
      >
        <Box
          sx={{
            width: 48,
            height: 48,
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
        >
          {perk && (
            <CardMedia
              component="img"
              image={imgSrc}
              alt={perk.name}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover", // Cover the space properly
              }}
            />
          )}
        </Box>
        {!isDesktop && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              flexDirection: "column",
              flexGrow: 1,
            }}
          >
            {perk && (
              <Typography
                variant="h6"
                sx={{
                  mr: 1,
                  fontWeight: 600,
                  textDecoration: "none",
                  color: `${
                    assertIsGradedItem(perk)
                      ? theme.palette.custom.grades[perk.grade]
                      : "text.primary"
                  }`,
                }}
              >
                {perk.name}
              </Typography>
            )}
            {perk && assertIsItem(perk) && (
              <Typography
                variant="body2"
                sx={{
                  color: "text.secondary",
                }}
              >
                {t(perk.category.toLowerCase())}
              </Typography>
            )}
          </Box>
        )}
      </Box>
      {!isDesktop && perk && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            width: 100,
          }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={() => removePerkBuild()}
            fullWidth
            startIcon={<DeleteIcon />}
            title={t("delete")}
          >
            {t("delete")}
          </Button>
        </Box>
      )}
    </Box>
  );
}

export default PerkMiniCard;
