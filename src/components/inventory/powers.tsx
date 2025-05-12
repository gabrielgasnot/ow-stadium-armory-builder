import { Box } from "@mui/material";
import PerkCard from "../common/perk-card";
import { useHero } from "../../contexts/hero-context";
import { useBuild } from "../../contexts/build-context";
import { Perk } from "../../models/perk";

function Powers() {
  const { heroPowers } = useHero();
  const { selectedPowers } = useBuild();
  const selectedIds = [...selectedPowers.map((sp: Perk) => sp.id)];
  if (heroPowers && heroPowers.length > 0) {
    return (
      <Box
        sx={{
          display: "grid",
          "@media (min-width:0px)": {
            gridTemplateColumns: "1fr",
          },
          "@media (min-width:750px)": {
            gridTemplateColumns: "repeat(2, 1fr)",
          },
          "@media (min-width:900px)": {
            gridTemplateColumns: "1fr",
          },
          "@media (min-width:1200px)": {
            gridTemplateColumns: "repeat(2, 1fr)",
          },
          "@media (min-width:1540px)": {
            gridTemplateColumns: "repeat(3, 1fr)",
          },
          "@media (min-width:1920px)": {
            gridTemplateColumns: "repeat(4, 1fr)",
          },
          alignItems: "start",
          gap: 1.5,
          padding: 2,
          width: "100%",
          overflowY: { xs: "hidden", lg: "auto" },
          minHeight: "auto",
        }}
      >
        {heroPowers.map((power: Perk) => (
          <PerkCard
            key={power.id}
            perk={power}
            perkType="power"
            isSelected={selectedIds.find((id) => id === power.id) !== undefined}
            isDisabled={
              selectedIds.find((id) => id === power.id) === undefined &&
              selectedIds.length >= 4
            }
          />
        ))}
      </Box>
    );
  }
}

export default Powers;
