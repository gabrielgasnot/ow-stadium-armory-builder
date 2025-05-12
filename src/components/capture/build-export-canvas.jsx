import {
  Box,
  Typography,
  Stack,
  Card,
  CardHeader,
  CardContent,
  Grid,
  Divider,
} from "@mui/material";
import PerkMiniCard from "../common/perk-mini-card";
import StatsSummary from "./stats-summary";
import BuildExportHeader from "./build-export-header";
import buildShareLink from "../../services/build-share-link";
import exportBuild from "../../services/export-build";
import { useTranslation } from "react-i18next";

function BuildExportCanvas({ hero, allRounds }) {
  const { t } = useTranslation("common");
  const powerColumns = 4;
  const itemColumns = 3;
  const itemRows = 2;

  const shareLink = buildShareLink(exportBuild(hero, allRounds));

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
          setHoverPerk={() => null}
          unselectPerk={() => null}
        />
      </Box>
    );
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          margin: 2,
          padding: 2,
          display: "flex",
          flexDirection: "row",
        }}
      >
        <BuildExportHeader
          shareLink={shareLink}
          hero={hero}
          selectedItems={allRounds[6].items}
        />
      </Box>
      <Divider sx={{ color: "white" }} />
      <Box
        sx={{
          padding: 2,
          display: "flex",
          flexDirection: "row",
        }}
      >
        {/* Do not print rounds without items. */}
        {allRounds
          .filter((round) => round.items.length > 0)
          .map((round, idx) => (
            <Box key={idx} sx={{ margin: 2, width: 350 }}>
              <Typography variant="h5">
                {t("round")} {round.roundId}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                }}
              >
                <Typography variant="body2">{t("roundCost")}</Typography>
                <img
                  src={`${import.meta.env.BASE_URL}icons/png/credit.png`}
                  alt="credits"
                  style={{ width: 24, height: 24, marginRight: 4 }}
                />
                <Typography variant="body2">
                  {round.items
                    .map((item) => item.price)
                    .reduce((a, b) => a + b, 0)}
                </Typography>
              </Box>
              <Stack
                spacing={1}
                sx={{
                  flexGrow: 1,
                  minHeight: 0,
                  paddingBottom: 3,
                }}
              >
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
                          {getPerkMiniCard(round.powers, "power", index)}
                        </Grid>
                      ))}
                    </Grid>
                  </CardContent>
                </Card>

                <Card className="no-hover">
                  <CardHeader title={t("items")} />
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
                              round.items,
                              "item",
                              rowIndex * itemColumns + index
                            )}
                          </Grid>
                        ))
                      )}
                    </Grid>
                  </CardContent>
                </Card>

                <Card className="no-hover">
                  <CardHeader title="Stats" />
                  <CardContent>
                    <Grid
                      container
                      spacing={1}
                      sx={{
                        textAlign: "center",
                      }}
                    >
                      <StatsSummary items={round.items} />
                    </Grid>
                  </CardContent>
                </Card>
              </Stack>
            </Box>
          ))}
      </Box>
    </Box>
  );
}

export default BuildExportCanvas;
