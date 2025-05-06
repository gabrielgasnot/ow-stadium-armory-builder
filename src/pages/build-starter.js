import React, { useState } from "react";
import { Box, Typography, Button, Divider } from "@mui/material";
import ContentCopy from "@mui/icons-material/ContentCopy";
import { Heroes, ImportBuildModal } from "../components";

function BuildStarter({ currentHero, importBuild }) {
  const [importOpen, setImportOpen] = useState(false);

  return (
    <Box
      sx={{
        width: "100%",
        textAlign: "center",
        overflowY: "auto",
        paddingBottom: "10px",
      }}
    >
      <Typography variant="h5" component="h2" gutterBottom>
        Select a hero to start your build
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
          Or
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
        Import a Build
      </Button>

      <ImportBuildModal
        open={importOpen}
        onClose={() => setImportOpen(false)}
        onImport={(id) => {
          importBuild(id);
        }}
      />
    </Box>
  );
}

export default BuildStarter;
