import { Box, Typography } from "@mui/material";
import { Heroes } from "../components";

function BuildStarter() {
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
      <Heroes />
    </Box>
  );
}

export default BuildStarter;
