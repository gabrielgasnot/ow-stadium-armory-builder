import { Box } from "@mui/material";
import BuildStarter from "../pages/build-starter";
import BuildMain from "../pages/build-main";
import { useHero } from "../contexts/hero-context";

interface ArmoryMainContentProps {
  importBuild: (buildData: string) => void;
}

function ArmoryMainContent({ importBuild }: ArmoryMainContentProps) {
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
        paddingBottom: { xs: "90px", sm: "40px" },
      }}
    >
      {!currentHero && (
        <BuildStarter currentHero={currentHero} importBuild={importBuild} />
      )}
      {currentHero && <BuildMain />}
    </Box>
  );
}

export default ArmoryMainContent;
