import React, { useRef, useState, useEffect } from "react";
import { Box, Paper } from "@mui/material";
import BuilderRoundNavigatorDefault from "./build-round-navigator-default";
import { useBuild } from "../../contexts/build-context.js";

function BuildRoundPanel() {
  const { currentRound, changeRound, rounds, maxRounds, allowedPowerCountByRound } = useBuild();
  const xsStickyRef = useRef();
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const scrollParent = document.querySelector("#build-main");
    const node = xsStickyRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setShowSticky(!entry.isIntersecting),
      {
        root: scrollParent,
        threshold: 0,
      }
    );

    if (xsStickyRef.current) {
      observer.observe(xsStickyRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getRoundNavigator = () => (
    <BuilderRoundNavigatorDefault
      rounds={rounds}
      maxRounds={maxRounds}
      currentRound={currentRound}
      changeRound={changeRound}
      powerByRound={allowedPowerCountByRound}
    />
  );

  return (
    <Paper
      sx={{
        flexShrink: 1,
        display: "flex",
        alignItems: "center",
        width: "100%",
        flexDirection: "column",
      }}
    >
      <Box ref={xsStickyRef} width="100%">
        {getRoundNavigator()}
      </Box>

      {showSticky && (
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            padding: 2,
            position: "fixed",
            top: 53, // adjusted to the app bar height
            left: 0,
            right: 0,
            zIndex: 1200,
            width: "100vw",
            backgroundColor: (theme) => theme.palette.background.paper,
            boxShadow: (theme) => `0px 4px 8px ${theme.palette.custom.orange}`,
          }}
        >
          {getRoundNavigator()}
        </Box>
      )}
    </Paper>
  );
}

export default BuildRoundPanel;
