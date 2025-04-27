import { Box, CardMedia } from "@mui/material";

function PerkMiniCard({ perk, perkType, unselectPerk }) {
  const isPower = perkType === "power";

  return (
    <Box
      sx={{
        width: 96,
        height: 96,
        borderRadius: isPower ? 2 : "50%", // Circle for "item", square for "power"
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
      }}
      onClick={unselectPerk}
    >
      <CardMedia
        component="img"
        image={`${process.env.PUBLIC_URL}/perks/${perk.name.replace(
          "'",
          "_"
        )}.png`}
        title={perk.name}
        alt={perk.name}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover", // Cover the space properly
        }}
      />
    </Box>
  );
}

export default PerkMiniCard;
