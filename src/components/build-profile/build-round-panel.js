import React, { useRef, useState, useEffect } from "react";
import { Box, Paper } from "@mui/material";
import BuilderRoundNavigatorXs from "./build-round-navigator-xs";
import BuilderRoundNavigatorDefault from "./build-round-navigator-default";
import { useBuild } from "../../contexts/build-context.js";

function BuildRoundPanel() {
  const { currentRound, changeRound, rounds } = useBuild();
  const xsStickyRef = useRef();
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const scrollParent = document.querySelector("#build-main"); // or useRef
    const node = xsStickyRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setShowSticky(!entry.isIntersecting),
      {
        root: scrollParent, // default is null (i.e. viewport)
        threshold: 0,
      }
    );

    if (xsStickyRef.current) {
      observer.observe(xsStickyRef.current);
    }

    return () => observer.disconnect();
  }, []);

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
      <Box
        ref={xsStickyRef}
        width="100%"
        sx={{ display: { xs: "flex", sm: "none" } }}
      >
        <BuilderRoundNavigatorXs
          currentRound={currentRound}
          changeRound={changeRound}
        />
      </Box>

      {showSticky && (
        <Box
          sx={{
            position: "fixed",
            display: { xs: "flex", sm: "none" },
            top: 53, // adjust for your app bar height
            left: 0,
            right: 0,
            zIndex: 1200,
            backgroundColor: (theme) => theme.palette.background.paper,
            boxShadow: (theme) => `0px 4px 8px ${theme.palette.custom.orange}`,
          }}
        >
          <BuilderRoundNavigatorXs
            currentRound={currentRound}
            changeRound={changeRound}
          />
        </Box>
      )}

      <BuilderRoundNavigatorDefault
        rounds={rounds}
        currentRound={currentRound}
        changeRound={changeRound}
      />
    </Paper>
  );
}

export default BuildRoundPanel;
