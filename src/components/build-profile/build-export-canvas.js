import {
  Box,
  Typography,
  Stack,
  Card,
  CardHeader,
  CardContent,
  Grid,
} from "@mui/material";
import DetailsHeader from "./details-header.js";
import PerkMiniCard from "../common/perk-mini-card.js";

function BuildExportCanvas({ allRounds }) {
  const powerColumns = 4;
  const itemColumns = 3;
  const itemRows = 2;
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
          setHoverPerk={() => null}
          unselectPerk={() => null}
        />
      </Box>
    );
  };

  return (
    <>
      <Box
        sx={{
          width: "20%",
          padding: 2,
        }}
      >
        <DetailsHeader copyBuild={() => null} />
      </Box>
      <Box
        sx={{
          width: "100%",
          padding: 2,
          display: "flex",
          flexDirection: "row",
        }}
      >
        {allRounds.map((round, idx) => (
          <Box key={idx} sx={{ margin: 2 }}>
            <Typography variant="h5">Round {round.roundId}</Typography>
            <Stack
              spacing={1}
              sx={{
                flexGrow: 1,
                minHeight: 0,
                width: "100%",
                paddingBottom: 3,
              }}
            >
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
                        size={{ xs: 6, sm: 4, md: 6, xl: 3 }}
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
                <CardHeader title="Items" />
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
                          size={{ xs: 6, sm: 4, md: 6, lg: 4 }}
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
            </Stack>
          </Box>
        ))}
      </Box>
    </>
  );
}

export default BuildExportCanvas;
