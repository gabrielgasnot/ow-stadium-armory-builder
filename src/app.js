import React, { useState } from "react";
import "./app.css";
import { Heroes, Details, Perks, LoadBuild } from "./components";
import { Box, Grid, Typography, Alert, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { basicItems, heroes } from "./db/db";

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

    const hero = heroes.find((h) => h.name === selectedHero.name);

    if (hero) {
      setHeroPowers(hero.powers ?? []);
      setHeroItems(hero.items ?? []);
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

  const updatePerkBuild = (perkType, newPerk) => {
    if (perkType === "power") {
      addPower(newPerk);
    }
    if (perkType === "item") {
      addItem(newPerk);
    }
  };

  const exportBuild = () => {
    const build = {
      hero: {
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
      const hero = heroes.find((h) => h.name === build.hero.name);
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
    <Box className="App">
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
      <Grid container spacing={2}>
        <Grid size={12}>
          <Typography variant="h4" component="h1" gutterBottom align="center">
            OW Stadium - Armory Builder
          </Typography>
        </Grid>
        <Grid size={12} textAlign={"center"}>
          <Typography variant="h5" component="h2" gutterBottom>
            Select a hero to start building your build
          </Typography>
          <Heroes
            heroes={heroes}
            loadHero={loadHero}
            currentHero={currentHero?.name}
          ></Heroes>
          <Typography variant="h6" component="h2" gutterBottom>
            or click below to load a build that you've already created
          </Typography>
          <LoadBuild importBuild={importBuild} />
        </Grid>
        {currentHero && (
          <Grid container size={12} spacing={2}>
            <Grid size={3}>
              <Details
                hero={currentHero}
                powers={selectedPowers}
                items={selectedItems}
                getJson={exportBuild}
              />
            </Grid>
            <Grid size={9}>
              <Perks
                powers={heroPowers}
                generalItems={basicItems}
                items={heroItems}
                selectPerk={updatePerkBuild}
              />
            </Grid>
          </Grid>
        )}
      </Grid>
    </Box>
  );
}

export default App;
