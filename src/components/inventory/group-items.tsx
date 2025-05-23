import { Grid, Typography } from "@mui/material";
import Items from "./items";
import { useBuild } from "../../contexts/build-context";
import { useHero } from "../../contexts/hero-context";
import { Item } from "../../models/item";
import { useTranslation } from "react-i18next";

function GroupItems({ category }: { category: string }) {
  const { t } = useTranslation("common");
  const { availableItems, heroSkills } = useHero();
  const { selectedItems } = useBuild();
  const selectedIds = [...selectedItems.map((si: Item) => si.id)];

  const getItemsByGrade = (grade: string) => {
    if (!availableItems[grade]) {
      return [];
    }
    return availableItems[grade].filter(
      (item: Item) => item.category === category && !item.disabled
    );
  };

  return (
    <Grid
      container
      spacing={1}
      sx={{ flexGrow: 1, minHeight: 0, width: "100%" }}
    >
      {["common", "rare", "epic"].map((grade, index) => (
        <Grid
          key={grade}
          size={{
            xs: 12,
            xl: 4,
          }}
          sx={(theme) => ({
            [theme.breakpoints.up("xl")]: {
              borderRight:
                index < 2
                  ? `1px solid ${theme.palette.background.paper}`
                  : "none",
            },
          })}
        >
          <Typography variant="h6" sx={{ textTransform: "capitalize" }}>
            {t(grade)}
          </Typography>
          <Items
            items={getItemsByGrade(grade)}
            grade={grade}
            selectedIds={selectedIds}
            isDisabled={selectedIds.length >= 6}
            heroSkills={heroSkills}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default GroupItems;
