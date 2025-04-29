import { Box, Paper, Link } from "@mui/material";

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
        textAlign: "center",
        borderRadius: 0,
      }}
    >
      This site is fan made, with lot of{" "}
      <Box component="span" sx={{ fontSize: "1.2em" }}>
        💖
      </Box>{" "}
      to Overwatch and all the kind & lovely people of{" "}
      <Link
        target="_blank"
        rel="noreferrer"
        href="https://www.twitch.tv/gf_iguel"
        sx={{ color: "inherit", textDecoration: "none" }} // Inherit text color and remove underline
      >
        PositivityLand
      </Link>
      !
    </Paper>
  );
}

export default ArmoryFooter;
