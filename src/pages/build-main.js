import { Box, Button } from "@mui/material";
import { Details, Perks } from "../components";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function BuildMain({
  currentHero,
  loadHero,
  selectedPowers,
  selectedItems,
  exportBuild,
  removePerkBuild,
  heroPowers,
  basicItems,
  heroItems,
  addPerkBuild,
}) {
  const selectedPowerIds = [
    ...selectedPowers.map((sp) => sp.id),
  ];
  const selectedItemsIds = [
    ...selectedItems.map((si) => si.id),
  ];
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", lg: "row" },
        height: "100%", // Viewport height
        overflowY: { xs: "auto", lg: "hidden" },
      }}
    >
      {/* Left / Detail panel */}
      <Box
        sx={{
          width: { xs: "100%", xl: "25%", xxl: "20%" },
          flexShrink: 0,
          overflow: "auto",
          bgcolor: "#f5f5f5",
          p: 2,
          boxSizing: "border-box",
        }}
      >
        <Box>
          <Button
            role={undefined}
            variant="text"
            tabIndex={-1}
            startIcon={<ArrowBackIcon />}
            onClick={() => loadHero(undefined)}
            sx={{
              fontWeight: 700,
              fontSize: "1em",
              textDecoration: "none",
            }}
          >
            Return to heroes
          </Button>
        </Box>
        <Details
          hero={currentHero}
          powers={selectedPowers}
          items={selectedItems}
          getJson={exportBuild}
          removeElement={removePerkBuild}
        />
      </Box>
      {/* Right / Perk Panel */}
      <Box
        sx={{
          flexGrow: 1,
          flexShrink: { xs: 0, md: 1 },
          overflow: "auto",
          p: 2,
          boxSizing: "border-box",
          minHeight: 0,
        }}
      >
        <Perks
          powers={heroPowers}
          generalItems={basicItems}
          items={heroItems}
          selectedPowers={selectedPowerIds}
          selectedItems={selectedItemsIds}
          selectPerk={addPerkBuild}
        />
      </Box>
    </Box>
  );
}

export default BuildMain;
