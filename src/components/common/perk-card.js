import React, { useTransition } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Avatar,
  CardActions,
} from "@mui/material";
import { getPerkColor } from "../../services/color";
import HighlightText from "./highlight-text.js";
import PerkAttributes from "./perk-attributes.js";
import { useTheme } from "@mui/material/styles";
import { useBuild } from "../../contexts/build-context.js";
import { useHoverAttributes } from "../../hooks/use-hover-attributes";

function PerkCard({ perk, perkType, isSelected, isDisabled }) {
  const theme = useTheme();
  const [, startTransition] = useTransition();
  const { checkHoverAttributes, hasHoverAttributes } = useHoverAttributes();
  const { perkGrade, setHoverPerk, addPerkBuild, removePerkBuild } = useBuild();
  const matchesAttribute = checkHoverAttributes(perk.attributes);

  const isPower = perkType === "power";

  return (
    <Card
      sx={{
        width: "100%",
        minWidth: "300px",
        mx: "auto",
        border: "2px solid",
        backgroundColor:
          (!isSelected && isDisabled) ||
          (!isPower && hasHoverAttributes && !matchesAttribute)
            ? theme.palette.action.disabledBackground
            : theme.palette.background.paper,
        borderColor: (theme) =>
          isSelected
            ? theme.palette.custom.orange
            : hasHoverAttributes && matchesAttribute
            ? theme.palette.custom.blue
            : "transparent",
        boxShadow: isSelected ? "0 0 10px 5px rgba(249, 158, 26, 0.7)" : "none",
        transition: "border-color 0.3s ease",
        "&:hover": {
          boxShadow: "0 4px 20px rgba(20, 96, 158, 0.69)",
        },
        cursor: isDisabled ? "not-allowed" : "pointer",
      }}
      onMouseEnter={() =>
        startTransition(() => {
          if (!isDisabled && !isPower) {
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
            src={`${process.env.PUBLIC_URL}/perks/${perk.id}.png`}
            alt={perk.name}
            sx={{
              width: 64,
              height: 64,
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
        <CardActions
          sx={{
            justifyContent: "flex-end",
            alignContent: "flex-end",
            marginRight: 2,
          }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/icons/credit.svg`}
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
