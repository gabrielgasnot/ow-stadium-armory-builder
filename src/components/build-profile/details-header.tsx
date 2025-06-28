import { Stack, Button, Typography, Box, Paper } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { useHero } from "../../contexts/hero-context";
import { useBuild } from "../../contexts/build-context";
import { Item } from "../../models/item";
import { useTranslation } from "react-i18next";

interface DetailsHeaderProps {
  copyBuild: () => void;
}

function DetailsHeader({ copyBuild }: DetailsHeaderProps) {
  const { t } = useTranslation("common");
  const { currentHero } = useHero();
  const { selectedItems, shareBuild, estimatedCredits } = useBuild();
  return (
    <Paper
      elevation={3}
      sx={{
        padding: 2,
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      {/* Left image section - hidden on xs */}
      <Box
        sx={{
          width: 100,
          height: 100,
          backgroundColor: "background.paper",
          borderRadius: 1,
          backgroundImage: `url(${import.meta.env.BASE_URL}heroes/${
            currentHero.id
          }.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          flexShrink: 0,
          display: { xs: "none", lg: "block" },
        }}
      />

      {/* Right details */}
      <Box
        sx={{
          ml: { xs: 0, sm: 2 },
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          pl: { xs: 0, sm: 1 },
        }}
      >
        {/* Name + Icon */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img
            src={`${import.meta.env.BASE_URL}roles/${currentHero.role}.svg`}
            alt={currentHero.role}
            style={{
              width: 24,
              height: 24,
              marginRight: 8,
              display: "block",
              filter: "invert(1)",
            }}
          />
          <Typography
            variant="h4"
            sx={{
              mr: 1,
              textDecoration: "none",
              letterSpacing: "0.1rem",
            }}
          >
            {currentHero.name}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "row" }, // Stack on mobile, row on desktop
            alignItems: { xs: "flex-start", md: "center" }, // Align left on mobile, center on desktop
          }}
        >
          <Typography component="span" sx={{ mr: 0.5 }}>
            {t("cost")}
          </Typography>
          <img
            src={`${import.meta.env.BASE_URL}icons/credit.svg`}
            alt="credits"
            style={{ width: 24, height: 24, marginRight: 4 }}
          />
          <Typography component="span" sx={{ mr: 1 }}>
            {selectedItems
              .map((item: Item) => item.price)
              .reduce((a: number, b: number) => a + b, 0)}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "row" },
            alignItems: { xs: "flex-start", md: "center" }, // Align left on mobile, center on desktop
          }}
          className="no-capture"
        >
          <Typography component="span" sx={{ mr: 0.5 }}>
            {t("gain")}
          </Typography>
          <img
            src={`${import.meta.env.BASE_URL}icons/credit.svg`}
            alt="credits"
            style={{ width: 24, height: 24, marginRight: 4 }}
          />
          <Typography component="span" sx={{ mr: 1 }}>
            {estimatedCredits}
          </Typography>
        </Box>

        {/* Share buttons */}
        <Box sx={{ mt: 1 }} className="no-capture">
          <Stack direction={{ xs: "column", lg: "row" }} spacing={1}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => shareBuild()}
              fullWidth
              startIcon={<ShareIcon />}
              title={t("shareBuild")}
            >
              {t("share")}
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={copyBuild} // your screen capture handler
              fullWidth
              startIcon={<CameraAltIcon />}
              title={t("captureBuild")}
            >
              {t("capture")}
            </Button>
          </Stack>
        </Box>
      </Box>
    </Paper>
  );
}

export default DetailsHeader;
