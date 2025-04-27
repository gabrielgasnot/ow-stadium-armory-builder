import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Avatar,
  CardActions,
} from "@mui/material";
import { getPerkColor } from "../services/color";

function PerkCard({ perk, perkType, perkGrade, selectPerk }) {
  return (
    <Card
      sx={{
        width: { xs: '100%', sm: 400 },
        mx: "auto",
        transition: "box-shadow 0.3s ease",
        "&:hover": {
          boxShadow: "0 4px 20px rgba(20, 96, 158, 0.69)",
        },
        cursor: "pointer",
      }}
      onClick={() => selectPerk(perkType, perk)}
    >
      {/* Header: Image + Name */}
      <CardHeader
        avatar={
          <Avatar
            src={`${process.env.PUBLIC_URL}/perks/${perk.id}.png`}
            alt={perk.name}
            sx={{
              width: 96,
              height: 96,
              border: getPerkColor(perkGrade),
              backgroundColor: "white",
            }}
          />
        }
        title={
          <Typography
            variant="h4"
            component="div"
            fontFamily="BigNoodleTitling"
            fontWeight="500"
            letterSpacing=".1rem"
            color="inherit"
            textDecoration="none"
            textOverflow={"ellipsis"}
          >
            {perk.name}
          </Typography>
        }
        sx={{ alignItems: "center" }}
      />

      {/* Content: Description */}
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {perk.description}
        </Typography>
      </CardContent>

      {/* Actions: Price */}
      {perk.price && (
        <CardActions sx={{ justifyContent: "flex-end" }}>
          <Typography variant="subtitle1" fontWeight="500">
            {perk.price} credits
          </Typography>
        </CardActions>
      )}
    </Card>
  );
}

export default PerkCard;
