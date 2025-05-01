import React, { useContext, useEffect, useCallback, useState, useRef } from "react";
import "./app.css";
import {
  ArmoryHeader,
  ArmoryFooter,
  ArmoryMainContent,
  LoadingComponent,
} from "./components";
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
import { useNavigate } from "react-router-dom";

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
  const [loading, setLoading] = useState(true);
  const hasNavigated = useRef(false);

  const {
    currentHero,
    setCurrentHero,
    setHeroPowers,
    setHeroItems,
    selectedPowers,
    setSelectedPowers,
    selectedItems,
    setSelectedItems,
    encodedBuildId,
    shareLink,
    setShareLink,
    snackBarMessage,
    setSnackBarMessage,
    snackBarCategory,
    showMessage,
    heroes,
    setEncodedBuildId,
  } = useContext(AppContext);

  const location = useLocation();
  const navigate = useNavigate();
  const rawPath = location.pathname;
  const encodedString = rawPath.startsWith("/") ? rawPath.slice(1) : rawPath;

  const navigation = useCallback(
    (buildId) => {
      if (buildId) {
        const result = importBuild(buildId);

        if (result) {
          const heroId = parseInt(result.heroId);
          // Check if the heroId is different from the currentHero
          if (heroId !== currentHero) {
            const hero = heroes.find((h) => h.id === parseInt(heroId));
            if (!hero) {
              showMessage("Failed to import: hero not found");
              return;
            } else {
              // Only update state if it has changed
              setCurrentHero(hero);
              setHeroItems(hero.items);
              setHeroPowers(hero.powers);

              // Check if selectedPerks match the items and powers that need to be updated
              const selectedItemsMatch =
                selectedItems.length > 0 &&
                selectedItems.every((item) =>
                  result.selectedPerks.includes(item.id)
                );
              const selectedPowersMatch =
                selectedPowers.length > 0 &&
                selectedPowers.every((power) =>
                  result.selectedPerks.includes(power.id)
                );

              // Only update selectedItems and selectedPowers if needed
              if (!selectedItemsMatch) {
                const itemDb = getAllItemsByHero(hero);
                const orderedSelectedItems = result.selectedPerks
                  .map((id) => itemDb.find((item) => item.id === id))
                  .filter((item) => item !== undefined);

                setSelectedItems(orderedSelectedItems);
              }

              if (!selectedPowersMatch) {
                const orderedSelectedPowers = result.selectedPerks
                  .map((id) => hero.powers.find((power) => power.id === id))
                  .filter((power) => power !== undefined);
                setSelectedPowers(orderedSelectedPowers);
              }
            }
          }

          if (location.pathname !== "/") {
            navigate("/");
          }
        }
      }
      setLoading(false);
    },
    [
      currentHero,
      navigate,
      heroes,
      showMessage,
      setCurrentHero,
      setHeroItems,
      setHeroPowers,
      selectedItems,
      selectedPowers,
      setSelectedItems,
      setSelectedPowers,
      location.pathname,
    ]
  );

  useEffect(() => {
    if (!hasNavigated.current && encodedString) {
      hasNavigated.current = true;
      console.debug("Navigating to buildId:", encodedString);
      navigation(encodedString);
    } else if (!encodedString) {
      setLoading(false);
    }
  }, [encodedString, navigation]);


  if (loading) {
    return (
      <ThemeProvider theme={owTheme}>
        <CssBaseline />
        <LoadingComponent />
      </ThemeProvider>
    );
  }

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
          encodedBuildId={encodedBuildId}
          generatedLink={shareLink}
          close={() => {
            setShareLink("");
            setEncodedBuildId("");
          }}
        />

        {/* Header (app bar) */}
        <ArmoryHeader pages={[]} />

        {/* Main Content Area */}
        <ArmoryMainContent importBuild={navigation} />

        {/* Footer */}
        <ArmoryFooter />
        <div
          id="focus-dummy"
          tabIndex={-1}
          style={{
            position: "absolute",
            width: 0,
            height: 0,
            overflow: "hidden",
            opacity: 0,
            pointerEvents: "none",
          }}
        />
      </Box>
    </ThemeProvider>
  );
}

export default App;
