import { Box, Button, Popper, useMediaQuery, useTheme } from "@mui/material";
import { ArmoryFooter, Details, Perks, PerkSummary } from "../components";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link as RouterLink } from "react-router-dom";
import { useHero } from "../contexts/hero-context";
import { useUI } from "../contexts/ui-context";
import { useTranslation } from "react-i18next";

function BuildMain() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const { t } = useTranslation("common");
  const { loadHero } = useHero();
  const { perkSummaryOpen, perkPopupAnchorEl, summaryPerk, placement } =
    useUI();

  return (
    <Box
      id="build-main"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        height: "100%",
        width: "100%",
        overflowY: { xs: "auto", md: "hidden" },
        overflowX: "hidden",
      }}
    >
      {/* Left / Detail panel */}
      <Box
        sx={{
          minWidth: { xs: "375px", sm: "440px" },
          maxWidth: { xs: "100%", lg: "600px" },
          width: { xs: "100%", md: "40%", xl: "20%" },
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
              color: (theme) => theme.palette.common.white,
              "&:hover": {
                backgroundColor: (theme) => theme.palette.primary.main,
                color: (theme) => theme.palette.common.white,
              },
            }}
          >
            {t("backToHeroes")}
          </Button>
        </Box>
        <Details />
      </Box>
      {/* Right / Perk Panel */}
      <Box
        sx={{
          flexGrow: 1,
          flexShrink: 0,
          overflow: "auto",
          paddingTop: 1,
          paddingBottom: { xs: 0, md: 3 },
          paddingLeft: 0,
          paddingRight: 0,
          boxSizing: "border-box",
          minHeight: 0,
          width: { xs: "100%", md: "50%", xl: "70%" },
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

      {!isDesktop && <ArmoryFooter />}
    </Box>
  );
}

export default BuildMain;
