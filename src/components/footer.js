import { Paper } from "@mui/material";

function ArmoryFooter() {
  return (
    <Paper
      elevation={3}
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        padding: 16,
        backgroundColor: "#fafafa",
        textAlign: "center"
      }}
    >
      This site is fan made, with lot of love to Overwatch and all the kind &
      lovely people of{" "}
      <a target="_blank" href="https://www.twitch.tv/gf_iguel">PositivityLand</a>!
    </Paper>
  );
}

export default ArmoryFooter;
