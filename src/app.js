import React, { useContext, useEffect, useCallback } from "react";
import "./app.css";
import { ArmoryHeader, ArmoryFooter, ArmoryMainContent } from "./components";
import {
  Box,
  Alert,
  Snackbar,
  ThemeProvider,
  CssBaseline,
} from "@mui/material";
import owTheme from "./theme";
import { HashRouter, useLocation } from "react-router-dom";
import ShareBuildModal from "./components/share-build";
import importBuild from "./services/import-build";
import getAllItemsByHero from "./services/query-items";
import AppContext from "./app-context";
import AppContextProvider from "./app-context-provider";

function App() {
  return (
    <HashRouter>
      <AppContextProvider>
        <AppContent />
      </AppContextProvider>
    </HashRouter>
  );
}

function AppContent() {
  const {
    currentHero,
    setCurrentHero,
    setHeroPowers,
    setHeroItems,
    setSelectedPowers,
    setSelectedItems,
    shareLink,
    setShareLink,
    snackBarMessage,
    setSnackBarMessage,
    snackBarCategory,
    showMessage,
    heroes,
  } = useContext(AppContext);

  const location = useLocation();
  const rawPath = location.pathname;
  const encodedString = rawPath.startsWith("/") ? rawPath.slice(1) : rawPath;

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
        <ArmoryMainContent />

        {/* Footer */}
        <ArmoryFooter />
      </Box>
    </ThemeProvider>
  );
}

export default App;
