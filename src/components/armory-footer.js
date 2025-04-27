import { Box, Paper } from "@mui/material";

function ArmoryFooter() {
  return (
    <Paper
      elevation={3}
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        padding: 8,
        backgroundColor: "#fafafa",
        textAlign: "center",
      }}
    >
      This site is fan made, with lot of <Box component="span" sx={{ fontSize: '1.2em' }}>💖</Box> to Overwatch and all the kind &
      lovely people of{" "}
      <a target="_blank" rel="noreferrer" href="https://www.twitch.tv/gf_iguel">
        PositivityLand
      </a>
      !
    </Paper>
  );
}

export default ArmoryFooter;
