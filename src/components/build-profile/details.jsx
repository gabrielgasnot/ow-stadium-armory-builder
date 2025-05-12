import React, { useRef, useState } from "react";
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
import DetailsHeader from "./details-header";
import PerkMiniCard from "../common/perk-mini-card";
import html2canvas from "html2canvas";
import StatsPanel from "./stats-panel";
import BuildRoundPanel from "./build-round-panel";
import { useHero } from "../../contexts/hero-context";
import { useUI } from "../../contexts/ui-context";
import { useBuild } from "../../contexts/build-context";
import BuildExportCanvas from "../capture/build-export-canvas";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTranslation } from "react-i18next";

function Details() {
  const { t } = useTranslation("common");
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

  const [showExport, setShowExport] = useState(false);

  const theme = useTheme();
  const exportRef = useRef();
  const powerColumns = 4;
  const itemColumns = 3;
  const itemRows = 2;

  const handleCopy = async () => {
    setShowExport(true);
    await new Promise((resolve) => setTimeout(resolve, 200));

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
      } finally {
        setShowExport(false);
      }
    });
  };

  const getPerkMiniCard = (perks, perkType, index) => {
    return (
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h6">
          {perkType === "power" && `${t("round")} ${2 * index + 1}`}
          {perkType === "item" && `${t("item")} ${index + 1}`}
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
          <CardHeader title={t("power")} />
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
            title={t("items")}
            action={
              <Tooltip
                title={`${keepItems ? t("keepItemsOn") : t("keepItemsOff")}`}
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
                  <Typography variant="body2">{t("keepItems")}</Typography>
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

      {showExport && (
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
      )}
    </Box>
  );
}

export default Details;
