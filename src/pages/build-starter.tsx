import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Divider,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ContentCopy from "@mui/icons-material/ContentCopy";
import { ArmoryFooter, Heroes, ImportBuildModal } from "../components";
import { useTranslation } from "react-i18next";

interface BuildStarterProps {
  currentHero: number;
  importBuild: (id: string) => void;
}

function BuildStarter({ currentHero, importBuild }: BuildStarterProps) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const [importOpen, setImportOpen] = useState(false);
  const { t } = useTranslation("common");

  return (
    <Box
      sx={{
        width: "100%",
        textAlign: "center",
        overflowY: "auto",
        paddingBottom: { xs: 0, md: "10px" },
      }}
    >
      <Typography variant="h5" component="h2" gutterBottom>
        {t("selectHero")}
      </Typography>
      <Heroes currentHero={currentHero} />

      <Divider
        flexItem
        orientation="horizontal"
        variant="middle"
        sx={{
          justifyContent: "center",
          "&::before, &::after": {
            borderColor: "#ffffff",
            width: "25em",
          },
        }}
      >
        <Typography variant="h5" component="h2" gutterBottom>
          {t("or")}
        </Typography>
      </Divider>

      <Button
        variant="outlined"
        startIcon={<ContentCopy />}
        onClick={() => setImportOpen(true)}
        sx={{
          userSelect: "none",
          fontWeight: 700,
          mt: 1,
          mb: { xs: 1, md: 0 },
          px: 4, // more horizontal padding
          py: 1.5, // more vertical padding
          fontSize: "1.1rem",
          color: (theme) => theme.palette.common.white,
          borderColor: (theme) => theme.palette.common.white,
          transition:
            "background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease",
          "&:hover": {
            userSelect: "none",
            backgroundColor: (theme) => theme.palette.primary.main,
            color: (theme) => theme.palette.common.white,
            borderColor: (theme) => theme.palette.primary.main,
          },
        }}
      >
        {t("importBuild")}
      </Button>

      {!isDesktop && <ArmoryFooter />}

      <ImportBuildModal
        open={importOpen}
        onClose={() => setImportOpen(false)}
        onImport={(id: string) => {
          importBuild(id);
        }}
      />
    </Box>
  );
}

export default BuildStarter;
