import React from "react";
import { Box, Button, Popper } from "@mui/material";
import { Details, Perks, PerkSummary } from "../components";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link as RouterLink } from "react-router-dom";
import { useContext } from "react";
import AppContext from "../app-context.js";

function BuildMain() {
  const {
    loadHero,
    perkSummaryOpen,
    perkPopupAnchorEl,
    summaryPerk,
    placement,
  } = useContext(AppContext);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", lg: "row" },
        height: "100%", // Viewport height
        overflowY: { xs: "auto", lg: "hidden" },
      }}
    >
      {/* Left / Detail panel */}
      <Box
        sx={{
          width: { xs: "100%", xl: "25%", xxl: "20%" },
          flexShrink: 0,
          overflow: "auto",
          paddingTop: 0,
          paddingBottom: 0,
          paddingLeft: 2,
          paddingRight: 2,
          boxSizing: "border-box",
        }}
      >
        <Box>
          <Button
            role={undefined}
            variant="text"
            tabIndex={-1}
            startIcon={<ArrowBackIcon />}
            component={RouterLink}
            to="/"
            onClick={() => loadHero(undefined)}
            sx={{
              fontWeight: 700,
              fontSize: "1em",
              textDecoration: "none",
              color: "common.white", // <-- ADD THIS
              "&:hover": {
                color: "primary.light", // Optional: lighter blue on hover for nice effect
              },
            }}
          >
            Return to heroes
          </Button>
        </Box>
        <Details />
      </Box>
      {/* Right / Perk Panel */}
      <Box
        sx={{
          flexGrow: 1,
          flexShrink: { xs: 0, md: 1 },
          overflow: "auto",
          paddingTop: 1,
          paddingBottom: 3,
          paddingLeft: 0,
          paddingRight: 0,
          boxSizing: "border-box",
          minHeight: 0,
        }}
      >
        <Perks />
      </Box>
      {/* Popper for perk summary */}
      <Popper
        open={perkSummaryOpen}
        anchorEl={perkPopupAnchorEl}
        placement={placement}
        modifiers={[{ name: "offset", options: { offset: [8, 8] } }]}
      >
        {summaryPerk && (
          <Box sx={{ zIndex: 1300, pointerEvents: "none" }}>
            <PerkSummary perk={summaryPerk} />
          </Box>
        )}
      </Popper>
    </Box>
  );
}

export default BuildMain;
