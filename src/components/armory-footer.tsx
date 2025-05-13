import { Box, Paper, Link, useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useTheme } from "@mui/material/styles";

function ArmoryFooter() {
  const theme = useTheme();
  const { t, i18n } = useTranslation("footer");
  const needSpace = i18n.language === "en";

  return (
    <Paper
      elevation={3}
      style={{
        position: `${
          useMediaQuery(theme.breakpoints.up("md")) ? "fixed" : "relative"
        }`,
        bottom: 0,
        left: 0,
        right: 0,
        padding: 8,
        textAlign: "center",
        borderRadius: 0,
      }}
    >
      {t("left")}
      {needSpace ? " " : ""}
      <Box component="span" sx={{ fontSize: "1.2em" }}>
        💖
      </Box>{" "}
      {t("right")}{" "}
      <Link
        target="_blank"
        rel="noreferrer"
        href="https://www.twitch.tv/gf_iguel"
        sx={{ color: "inherit", textDecoration: "none" }}
      >
        PositivitiLand
      </Link>
      !
    </Paper>
  );
}

export default ArmoryFooter;
