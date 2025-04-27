import { Box, Button } from "@mui/material";
import { Details, Perks } from "../components";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function BuildMain(props) {
  const {
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
  } = props;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "column", lg: "row" },
        overflowY: "auto",
        height: "100%",
      }}
    >
      {/* Left / Detail panel */}
      <Box
        sx={{
          flexShrink: 0,
          bgcolor: "#f5f5f5",
          p: 2,
          boxSizing: "border-box",
          overflow: "hidden",
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
          p: 2,
          height: { xs: "auto", lg: "100%" },
          overflowY: { xs: "visible", lg: "auto" },
          overflowX: "hidden",
        }}
      >
        <Perks
          powers={heroPowers}
          generalItems={basicItems}
          items={heroItems}
          selectPerk={addPerkBuild}
        />
      </Box>
    </Box>
  );
}

export default BuildMain;
