import { Box } from "@mui/material";
import PerkCard from "../common/perk-card";
import { GradedItem } from "../../models/graded-item";
import { Hero } from "../../models/hero";

interface ItemsProps {
  currentHero: Hero;
  items: GradedItem[];
  grade: string;
  selectedIds: string[];
  isDisabled: boolean;
}

function Items({
  currentHero,
  items,
  grade,
  selectedIds,
  isDisabled,
}: ItemsProps) {
  if (items && items.length > 0) {
    return (
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          alignItems: "start",
          gap: 1.5,
          padding: 2,
          width: "100%",
          overflowY: { xs: "hidden", lg: "auto" },
          minHeight: "auto",
        }}
      >
        {items.map((item: GradedItem) => {
          item.grade = grade;
          return (
            <PerkCard
              key={item.id}
              perk={item}
              perkType="item"
              skills={currentHero.skills}
              isSelected={
                selectedIds.find((id: string) => id === item.id) !== undefined
              }
              isDisabled={
                isDisabled &&
                !selectedIds.find((id: string) => id === item.id) !== undefined
              }
            />
          );
        })}
      </Box>
    );
  }
}

export default Items;
