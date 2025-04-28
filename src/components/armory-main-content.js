import React, { useContext } from "react";
import { Box } from "@mui/material";
import BuildStarter from "../pages/build-starter";
import BuildMain from "../pages/build-main";
import AppContext from "../app-context.js";

function ArmoryMainContent() {
  const { currentHero } = useContext(AppContext);
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
      {!currentHero && <BuildStarter />}
      {currentHero && <BuildMain />}
    </Box>
  );
}

export default ArmoryMainContent;
