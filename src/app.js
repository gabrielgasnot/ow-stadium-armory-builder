import React, { useEffect, useState, useRef } from "react";
import "./app.css";
import {
  ArmoryHeader,
  ArmoryFooter,
  ArmoryMainContent,
  LoadingComponent,
} from "./components";
import { Box, ThemeProvider, CssBaseline } from "@mui/material";
import owTheme from "./theme";
import { HashRouter } from "react-router-dom";
import ShareBuildModal from "./components/services/share-build";
import AppProviders from "./contexts/app-context";
import { useBuild } from "./contexts/build-context";
import { useUI } from "./contexts/ui-context";
import useBuildNavigation from "./hooks/use-build-navigation";
import SnackbarNotification from "./hooks/snackbar-notification";

function App() {
  return (
    <HashRouter>
      <AppProviders>
        <AppContent />
      </AppProviders>
    </HashRouter>
  );
}

function AppContent() {
  const { encodedString, navigation } = useBuildNavigation();
  const [loading, setLoading] = useState(true);
  const hasNavigated = useRef(false);

  const { encodedBuildId, setEncodedBuildId, shareLink, setShareLink } =
    useBuild();

  const { snackBarMessage, setSnackBarMessage, snackBarCategory } = useUI();

  useEffect(() => {
    if (!hasNavigated.current && encodedString) {
      hasNavigated.current = true;
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
        <SnackbarNotification
          open={snackBarMessage}
          message={snackBarMessage}
          onClose={() => setSnackBarMessage("")}
          severity={snackBarCategory}
        />

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
