import React, { useContext, useTransition } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Avatar,
  CardActions,
} from "@mui/material";
import { getPerkColor } from "../services/color";
import AppContext from "../app-context.js";
import HighlightText from "./highlight-text";
import PerkAttributes from "./perk-attributes";
import { useTheme } from "@mui/material/styles";
import getPublicUrl from "../helpers/public-url";

function PerkCard({ perk, perkType, isSelected, isDisabled }) {
  const theme = useTheme();
  const [_, startTransition] = useTransition();
  const { perkGrade, setHoverPerk, addPerkBuild, removePerkBuild } =
    useContext(AppContext);
  const isPower = perkType === "power";

  return (
    <Card
      sx={{
        width: { xs: "100%", sm: 400 },
        mx: "auto",
        border: "2px solid",
        backgroundColor:
          !isSelected && isDisabled
            ? theme.palette.action.disabledBackground
            : theme.palette.background.paper,
        borderColor: isSelected ? "#f99e1a" : "transparent",
        boxShadow: isSelected ? "0 0 10px 5px rgba(249, 158, 26, 0.7)" : "none",
        transition: "border-color 0.3s ease",
        "&:hover": {
          boxShadow: "0 4px 20px rgba(20, 96, 158, 0.69)",
        },
        cursor: isDisabled ? "not-allowed" : "pointer",
      }}
      onMouseEnter={() =>
        startTransition(() => {
          if (!isSelected && !isDisabled && !isPower) {
            setHoverPerk(perk);
          }
        })
      }
      onMouseLeave={() => setHoverPerk(null)}
      onClick={() =>
        startTransition(() => {
          if (!isSelected && !isDisabled) {
            addPerkBuild(perkType, perk);
          }
          if (isSelected) {
            // If the perk is already selected, remove it from the build
            removePerkBuild(perkType, perk);
          }
        })
      }
    >
      {/* Header: Image + Name */}
      <CardHeader
        avatar={
          <Avatar
            src={`${getPublicUrl()}perks/${perk.id}.png`}
            alt={perk.name}
            sx={{
              width: 70,
              height: 70,
              border: getPerkColor(perkGrade),
              backgroundColor: "white",
            }}
            variant={perkType === "power" ? "rounded" : "circle"}
          />
        }
        title={
          <Typography
            variant="h5"
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
        <Typography variant="body2" color="text.secondary" component="div">
          <HighlightText text={perk.description} />
          <PerkAttributes attributes={perk.attributes} />
        </Typography>
      </CardContent>

      {/* Actions: Price */}
      {perk.price && (
        <CardActions sx={{ justifyContent: "flex-end", marginRight: 2 }}>
          <img
            src={`${getPublicUrl()}icons/credit.svg`}
            alt="credits"
            style={{ width: 24, height: 24 }}
          />
          <Typography variant="subtitle1">{perk.price}</Typography>
        </CardActions>
      )}
    </Card>
  );
}

export default PerkCard;
