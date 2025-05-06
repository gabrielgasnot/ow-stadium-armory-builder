import React, { useRef } from "react";
import {
  Box,
  Grid,
  Stack,
  Card,
  CardHeader,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Switch,
  Tooltip,
  useTheme,
} from "@mui/material";
import DetailsHeader from "./details-header.js";
import PerkMiniCard from "../common/perk-mini-card.js";
import html2canvas from "html2canvas";
import StatsPanel from "./stats-panel.js";
import BuildRoundPanel from "./build-round-panel.js";
import { useHero } from "../../contexts/hero-context.js";
import { useUI } from "../../contexts/ui-context.js";
import { useBuild } from "../../contexts/build-context.js";
import BuildExportCanvas from "../capture/build-export-canvas.js";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Details() {
  const { currentHero } = useHero();
  const { showMessage } = useUI();
  const {
    selectedItems,
    selectedPowers,
    removePerkBuild,
    setHoverPerk,
    keepItems,
    updateKeepItems,
    rounds,
  } = useBuild();

  const theme = useTheme();
  const exportRef = useRef();
  const powerColumns = 4;
  const itemColumns = 3;
  const itemRows = 2;

  const handleCopy = async () => {
    const element = exportRef.current;

    const canvas = await html2canvas(element, {
      onclone: (clonedDoc) => {
        const clonedNode = clonedDoc.body.querySelector("[data-export-target]");
        if (clonedNode) {
          clonedNode.style.display = "block";
        }
      },
      scale: 1.25, // higher resolution screenshot
      allowTaint: false,
      imageTimeout: 10000,
      useCORS: true,
    });

    canvas.toBlob(async (blob) => {
      try {
        await navigator.clipboard.write([
          new ClipboardItem({ "image/png": blob }),
        ]);
        showMessage("Build copied to clipboard!", "success");
      } catch (err) {
        showMessage(`Failed to copy: ${err}, downloading instead.`, "error");

        // Fallback: Download as PNG
        const link = document.createElement("a");
        link.download = "image.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
      }
    });
  };

  const getPerkMiniCard = (perks, perkType, index) => {
    return (
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h6">
          {perkType === "power" && `Round ${2 * index + 1}`}
          {perkType === "item" && `Item ${index + 1}`}
        </Typography>
        <PerkMiniCard
          perk={perks[index]}
          perkType={perkType}
          setHoverPerk={setHoverPerk}
          unselectPerk={() => removePerkBuild(perkType, perks[index])}
        />
      </Box>
    );
  };

  if (!currentHero) {
    return;
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Stack
        spacing={1}
        sx={{ flexGrow: 1, minHeight: 0, width: "100%", paddingBottom: 3 }}
      >
        <DetailsHeader copyBuild={handleCopy} />
        <BuildRoundPanel />
        <Card className="no-hover" sx={{ height: "100%" }}>
          <CardHeader title="Powers" />
          <CardContent>
            <Grid
              container
              spacing={2}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {[...Array(powerColumns)].map((_, index) => (
                <Grid
                  item
                  size={3}
                  key={index}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {getPerkMiniCard(selectedPowers, "power", index)}
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>

        <Card className="no-hover">
          <CardHeader
            title="Items"
            action={
              <Tooltip
                title={`${
                  keepItems
                    ? "Items will be copied on all coming rounds with no items (or with same items)."
                    : "Items will only be applied to this round."
                }`}
                enterTouchDelay={0}
                leaveTouchDelay={1000}
              >
                <Stack
                  flexDirection={"row"}
                  spacing={1}
                  sx={{
                    alignItems: "center",
                    "& > *": {
                      marginTop: "0 !important", // force reset any rogue margin
                    },
                  }}
                >
                  <Typography variant="body2">
                    Keep items between round
                  </Typography>
                  <Switch
                    size="small"
                    checked={keepItems}
                    onChange={(e) => updateKeepItems(e.target.checked)}
                  />
                </Stack>
              </Tooltip>
            }
          />
          <CardContent>
            <Grid
              container
              spacing={1}
              sx={{
                textAlign: "center",
              }}
            >
              {[...Array(itemRows)].map((_, rowIndex) =>
                [...Array(itemColumns)].map((_, index) => (
                  <Grid
                    item
                    spacing={2}
                    size={4}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    key={index}
                  >
                    {getPerkMiniCard(
                      selectedItems,
                      "item",
                      rowIndex * itemColumns + index
                    )}
                  </Grid>
                ))
              )}
            </Grid>
          </CardContent>
        </Card>

        <Accordion
          defaultExpanded
          sx={{
            flexGrow: 1,
            minHeight: 0, // very important when you want internal scroll!
            display: "flex",
            flexDirection: "column",
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h5">Stats</Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              flexGrow: 1,
              overflow: { xs: "visible", xl: "auto" },
            }}
          >
            <StatsPanel />
          </AccordionDetails>
        </Accordion>
      </Stack>

      <div
        ref={exportRef}
        data-export-target
        style={{
          display: "none",
          height: "auto",
          width: "2700px",
          backgroundColor: theme.palette.background.default,
        }}
      >
        <BuildExportCanvas hero={currentHero} allRounds={rounds} />
      </div>
    </Box>
  );
}

export default Details;
