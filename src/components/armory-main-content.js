import React from "react";
import { Box } from "@mui/material";
import BuildStarter from "../pages/build-starter";
import BuildMain from "../pages/build-main";
import { useHero } from "../contexts/hero-context.js";

function ArmoryMainContent({ importBuild }) {
  const { currentHero } = useHero();
  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        flexDirection: { xs: "column", sm: "row" },
        overflow: "hidden",
        height: "100%",
        width: "100%",
        paddingBottom: { xs: "70px", sm: "40px" },
      }}
    >
      {!currentHero && <BuildStarter currentHero={currentHero} importBuild={importBuild} />}
      {currentHero && <BuildMain />}
    </Box>
  );
}

export default ArmoryMainContent;
