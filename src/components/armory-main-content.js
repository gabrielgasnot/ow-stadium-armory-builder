import React from "react";
import { Box } from "@mui/material";
import BuildStarter from "../pages/build-starter";
import BuildMain from "../pages/build-main";

function ArmoryMainContent({
  currentHero,
  heroes,
  loadHero,
  selectedPowers,
  selectedItems,
  removePerkBuild,
  heroPowers,
  heroItems,
  basicItems,
  addPerkBuild,
}) {
  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        flexDirection: { xs: "column", sm: "row" },
        overflow: "hidden",
        height: "100%",
        width: "100%",
        paddingBottom: { xs: "80px", sm: "50px" },
      }}
    >
      {!currentHero && (
        <BuildStarter
          heroes={heroes}
          loadHero={loadHero}
          currentHero={currentHero?.name}
        />
      )}
      {currentHero && (
        <BuildMain
          currentHero={currentHero}
          loadHero={loadHero}
          selectedPowers={selectedPowers}
          selectedItems={selectedItems}
          removePerkBuild={removePerkBuild}
          heroPowers={heroPowers}
          basicItems={basicItems}
          heroItems={heroItems}
          addPerkBuild={addPerkBuild}
        />
      )}
    </Box>
  );
}

export default ArmoryMainContent;
