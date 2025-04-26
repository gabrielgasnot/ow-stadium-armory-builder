import React, { useState } from "react";
import "./app.css";
import { Details, Perks, ArmoryHeader } from "./components";
import BuildStarter from "./pages/build-starter";
import { Grid, Alert, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { basicItems, heroes } from "./db/db";
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
    <Grid container spacing={2} style={{ height: '100vh', bottom: '80px' }}>
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
      <Grid size={12} textAlign={"center"}>
        <BuildStarter
          heroes={heroes}
          loadHero={loadHero}
          currentHero={currentHero?.name}
          importBuild={importBuild}
        />
      </Grid>
      {currentHero && (
        <Grid container size={12} spacing={2}>
          <Grid item xs={12} sm={4}>
            <Details
              hero={currentHero}
              powers={selectedPowers}
              items={selectedItems}
              getJson={exportBuild}
              removeElement={removePerkBuild}
            />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Perks
              powers={heroPowers}
              generalItems={basicItems}
              items={heroItems}
              selectPerk={addPerkBuild}
            />
          </Grid>
        </Grid>
      )}
      <ArmoryFooter />
    </Grid>
  );
}

export default App;
