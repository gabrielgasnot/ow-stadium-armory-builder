import React, { useState } from "react";
import "./app.css";
import { Details, Perks, ArmoryHeader } from "./components";
import BuildStarter from "./pages/build-starter";
import { Button, Box, Grid, Alert, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { basicItems, heroes } from "./db/db";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArmoryFooter from "./components/footer";

function App() {
  const [currentHero, setCurrentHero] = useState(undefined);
  const [heroPowers, setHeroPowers] = useState([]);
  const [heroItems, setHeroItems] = useState([]);
  const [selectedPowers, setSelectedPowers] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const loadHero = (selectedHero) => {
    setSelectedPowers([]);
    setSelectedItems([]);
    setErrorMessage("");
    setCurrentHero(selectedHero);

    if (selectedHero) {
      const hero = heroes.find((h) => h.id === selectedHero.id);

      if (hero) {
        setHeroPowers(hero.powers ?? []);
        setHeroItems(hero.items ?? []);
      }
    }
  };

  const addPower = (power) => {
    if (
      selectedPowers.find((selectedPower) => selectedPower.name === power.name)
    ) {
      return;
    }

    if (selectedPowers.length >= 4) {
      setErrorMessage("You can only have 4 powers");
      return;
    }

    setSelectedPowers([...selectedPowers, power]);
  };

  const addItem = (item) => {
    if (selectedItems.find((selectedItem) => selectedItem.name === item.name)) {
      return;
    }

    if (selectedItems.length >= 6) {
      setErrorMessage("You can only have 6 items");
      return;
    }

    setSelectedItems([...selectedItems, item]);
  };

  const removePerkBuild = (perkType, perk) => {
    if (perkType === "power") {
      setSelectedPowers(
        selectedPowers.filter((power) => power.name !== perk.name)
      );
    }
    if (perkType === "item") {
      setSelectedItems(selectedItems.filter((item) => item.name !== perk.name));
    }
  };

  const addPerkBuild = (perkType, perk) => {
    if (perkType === "power") {
      addPower(perk);
    }
    if (perkType === "item") {
      addItem(perk);
    }
  };

  const exportBuild = () => {
    const build = {
      hero: {
        id: currentHero.id,
        name: currentHero.name,
        role: currentHero.role,
      },
      powers: selectedPowers,
      items: selectedItems,
    };
    const json = JSON.stringify(build, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${currentHero.name}_build.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const importBuild = (build) => {
    if (build && build.hero && build.powers && build.items) {
      const hero = heroes.find((h) => h.id === build.hero.id);
      if (!hero) {
        setErrorMessage("Failed to import: hero not found");
        return;
      }

      // Reset
      loadHero(hero);
      setSelectedPowers(build.powers);
      setSelectedItems(build.items);
    }
  };

  return (
    <Grid container spacing={2} style={{ height: "90vh" }}>
      {errorMessage && (
        <Alert
          variant="outlined"
          severity="error"
          action={
            <IconButton aria-label="close" onClick={() => setErrorMessage("")}>
              <CloseIcon />
            </IconButton>
          }
          onClose={() => setErrorMessage("")}
        >
          {errorMessage}
        </Alert>
      )}
      <Grid size={12}>
        <ArmoryHeader pages={[]} />
      </Grid>
      {!currentHero && (
        <Grid size={12} textAlign={"center"}>
          <BuildStarter
            heroes={heroes}
            loadHero={loadHero}
            currentHero={currentHero?.name}
            importBuild={importBuild}
          />
        </Grid>
      )}
      {currentHero && (
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            height: "100vh",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              minWidth: { xs: "100vw", lg: "20vw" },
              flexShrink: 0,
              bgcolor: "#f5f5f5",
              p: 2,
              boxSizing: "border-box",
              overflow: "auto",
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
                  fontFamily: "BigNoodleTitling",
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
          <Box
            sx={{
              flexGrow: 1,
              p: 2,
              overflow: "auto",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 2,
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
        </Box>
      )}
      <ArmoryFooter />
    </Grid>
  );
}

export default App;
