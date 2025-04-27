import React, { useState, useEffect, useCallback } from "react";
import "./app.css";
import { ArmoryHeader, ArmoryFooter, ArmoryMainContent } from "./components";
import {
  Box,
  Alert,
  Snackbar,
  ThemeProvider,
  CssBaseline,
} from "@mui/material";
import { basicItems, heroes } from "./db/db";
import owTheme from "./theme";
import { HashRouter, useLocation } from "react-router-dom";
import exportBuild from "./services/export-build";
import ShareBuildModal from "./components/share-build";
import importBuild from "./services/import-build";
import getAllItemsByHero from "./services/query-items";

function App() {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
}

function AppContent() {
  const [currentHero, setCurrentHero] = useState(undefined);
  const [heroPowers, setHeroPowers] = useState([]);
  const [heroItems, setHeroItems] = useState([]);
  const [selectedPowers, setSelectedPowers] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [shareLink, setShareLink] = useState("");

  const location = useLocation();
  const rawPath = location.pathname;
  const encodedString = rawPath.startsWith("/") ? rawPath.slice(1) : rawPath;

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
    if (selectedPowers.find((selectedPower) => selectedPower.id === power.id)) {
      return;
    }

    if (selectedPowers.length >= 4) {
      setErrorMessage("You can only have 4 powers");
      return;
    }

    setSelectedPowers([...selectedPowers, power]);
  };

  const addItem = (item) => {
    if (selectedItems.find((selectedItem) => selectedItem.id === item.id)) {
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
      setSelectedPowers(selectedPowers.filter((power) => power.id !== perk.id));
    }
    if (perkType === "item") {
      setSelectedItems(selectedItems.filter((item) => item.id !== perk.id));
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

  const navigation = useCallback(
    (buildId) => {
      if (buildId) {
        const result = importBuild(buildId);

        if (result) {
          const heroId = parseInt(result.heroId);
          if (heroId !== currentHero) {
            const hero = heroes.find((h) => h.id === parseInt(heroId));
            if (!hero) {
              setErrorMessage("Failed to import: hero not found");
              return;
            } else {
              console.log("Navigation data: ", result);
              setCurrentHero(hero);
              setHeroItems(hero.items);
              setHeroPowers(hero.powers);

              if (result.selectedPerks.length > 0) {
                const itemDb = getAllItemsByHero(hero);
                setSelectedItems(
                  itemDb.filter((item) =>
                    result.selectedPerks.includes(item.id)
                  )
                );
                setSelectedPowers(
                  hero.powers.filter((power) =>
                    result.selectedPerks.includes(power.id)
                  )
                );
              }
            }
          }
        }
      } 
    },
    [currentHero]
  );

  const shareBuild = () => {
    const encodedBuild = exportBuild(
      currentHero,
      selectedPowers,
      selectedItems
    );
    const newShareLink = `${window.location.origin}/#/${encodedBuild}`;
    setShareLink(newShareLink);
  };

  useEffect(() => {
    navigation(encodedString);
  }, [encodedString, navigation]);

  return (
    <ThemeProvider theme={owTheme}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          width: "100vw",
          overflowY: "auto",
        }}
      >
        <Snackbar
          open={errorMessage}
          autoHideDuration={6000}
          onClose={() => setErrorMessage("")}
        >
          <Alert
            onClose={() => setErrorMessage("")}
            severity="error"
            variant="filled"
            sx={{ width: "100%" }}
          >
            {errorMessage}
          </Alert>
        </Snackbar>

        <ShareBuildModal
          generatedLink={shareLink}
          close={() => setShareLink("")}
        />

        {/* Header (app bar) */}
        <ArmoryHeader pages={[]} />

        {/* Main Content Area */}
        <ArmoryMainContent
          currentHero={currentHero}
          heroes={heroes}
          loadHero={loadHero}
          removePerkBuild={removePerkBuild}
          addPerkBuild={addPerkBuild}
          selectedItems={selectedItems}
          selectedPowers={selectedPowers}
          heroPowers={heroPowers}
          heroItems={heroItems}
          basicItems={basicItems}
          shareBuild={shareBuild}
        />

        {/* Footer */}
        <ArmoryFooter />
      </Box>
    </ThemeProvider>
  );
}

export default App;
