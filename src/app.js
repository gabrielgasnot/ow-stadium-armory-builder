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
  const [shareLink, setShareLink] = useState("");
  const [snackBarMessage, setSnackBarMessage] = useState("");
  const [snackBarCategory, setSnackBarCategory] = useState("");

  const location = useLocation();
  const rawPath = location.pathname;
  const encodedString = rawPath.startsWith("/") ? rawPath.slice(1) : rawPath;

  const loadHero = (selectedHero) => {
    setSelectedPowers([]);
    setSelectedItems([]);
    setSnackBarMessage("");
    setCurrentHero(selectedHero);

    if (selectedHero) {
      const hero = heroes.find((h) => h.id === selectedHero.id);

      if (hero) {
        setHeroPowers(hero.powers ?? []);
        setHeroItems(hero.items ?? []);
      }
    }
  };

  const showMessage = (message, category = "error") => {
    setSnackBarCategory(category);
    setSnackBarMessage(message);
  };

  const addPower = (power) => {
    if (selectedPowers.find((selectedPower) => selectedPower.id === power.id)) {
      return;
    }

    if (selectedPowers.length >= 4) {
      showMessage("You can only have 4 powers");
      return;
    }

    setSelectedPowers([...selectedPowers, power]);
  };

  const addItem = (item) => {
    if (selectedItems.find((selectedItem) => selectedItem.id === item.id)) {
      return;
    }

    if (selectedItems.length >= 6) {
      showMessage("You can only have 6 items");
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
              showMessage("Failed to import: hero not found");
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
    let baseUrl = window.location.origin + window.location.pathname;
    if (!baseUrl.endsWith("/")) {
      baseUrl += "/";
    }
    const newShareLink = `${baseUrl}#/${encodedBuild}`;
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
          open={snackBarMessage}
          autoHideDuration={6000}
          onClose={() => setSnackBarMessage("")}
        >
          <Alert
            onClose={() => setSnackBarMessage("")}
            severity={snackBarCategory}
            variant="filled"
            sx={{ width: "100%" }}
          >
            {snackBarMessage}
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
          showMessage={showMessage}
        />

        {/* Footer */}
        <ArmoryFooter />
      </Box>
    </ThemeProvider>
  );
}

export default App;
