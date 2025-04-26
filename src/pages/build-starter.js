import { Grid, Typography } from "@mui/material";
import { Heroes, LoadBuild } from "../components";

function BuildStarter(props) {
  const { heroes, loadHero, currentHero, importBuild } = props;

  return (
    <Grid size={12} textAlign={"center"}>
      <Typography variant="h5" component="h2" gutterBottom>
        Select a hero to start your build
      </Typography>
      <Heroes
        heroes={heroes}
        loadHero={loadHero}
        currentHero={currentHero?.name}
      ></Heroes>
      <Typography variant="h6" component="h2" gutterBottom>
        or click below to load a build that you've already created
      </Typography>
      <LoadBuild importBuild={importBuild} />
    </Grid>
  );
}

export default BuildStarter;
