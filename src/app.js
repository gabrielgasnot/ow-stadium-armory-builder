import React, { useState } from "react";
import "./app.css";
import { Heroes, Details, Perks } from "./components";
import { Box, Grid, Typography, Alert, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { basicItems, heroes } from "./db/db";
import { amber, green, blue, purple } from "@mui/material/colors";

function App() {
  const [currentHero, setCurrentHero] = useState(undefined);
  const [heroPowers, setHeroPowers] = useState([]);
  const [heroItems, setHeroItems] = useState([]);
  const [selectedPowers, setSelectedPowers] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const getPerkColor = (grade) => {
    switch (grade) {
      case "normal":
        return green[500];
      case "rare":
        return blue[500];
      case "epic":
        return purple[500];
      default:
        return amber[500];
    }
  };

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
    if (selectedPowers.length >= 4) {
      setErrorMessage("You can only have 4 powers");
      return;
    }
    setSelectedPowers([...selectedPowers, power]);
  };

  const addItem = (item) => {
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

  const exportJson = () => {
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
        <Grid size={12}>
          <Heroes heroes={heroes} loadHero={loadHero}></Heroes>
        </Grid>
        {currentHero && (
          <Grid container size={12} spacing={2}>
            <Grid size={3}>
              <Details
                hero={currentHero}
                powers={selectedPowers}
                items={selectedItems}
                getColor={getPerkColor}
                getJson={exportJson}
              />
            </Grid>
            <Grid size={9}>
              <Perks
                powers={heroPowers}
                generalItems={basicItems}
                items={heroItems}
                selectPerk={updatePerkBuild}
                getPerkColor={getPerkColor}
              />
            </Grid>
          </Grid>
        )}
      </Grid>
    </Box>
  );
}

export default App;
