import { Box, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import { assertIsItem, Item } from "../../models/item";
import { assertIsPower, Power } from "../../models/power";
import { assertIsGradedItem, GradedItem } from "../../models/graded-item";
import { useTranslation } from "react-i18next";

export default function PerkPrintable({
  perk,
}: {
  perk: Item | Power | GradedItem;
}) {
  if (!perk) return null;
  const theme = useTheme();
  const { t } = useTranslation("common");
  const [imgSrc, setImgSrc] = useState<string>(
    `${import.meta.env.BASE_URL}perks/${perk.id}.png`
  );

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        gap: 2,
      }}
    >
      <Box
        sx={{
          width: 64,
          height: 64,
          borderRadius: assertIsPower(perk) ? 2 : "50%", // Circle for "item", square for "power"
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={imgSrc}
          alt={perk.name}
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
          onError={() =>
            setImgSrc(`${import.meta.env.BASE_URL}perks/default.png`)
          }
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            mr: 1,
            fontWeight: 600,
            textDecoration: "none",
            color: `${
              assertIsGradedItem(perk)
                ? theme.palette.custom.grades[
                    perk.grade as keyof typeof theme.palette.custom.grades
                  ]
                : "text.primary"
            }`,
          }}
        >
          {perk.name}
        </Typography>
        {assertIsItem(perk) && (
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
    </Box>
  );
}
