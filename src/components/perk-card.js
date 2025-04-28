import React, { useContext } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Avatar,
  CardActions,
} from "@mui/material";
import { getPerkColor } from "../services/color";
import types from "../db/attributeTypes.json";
import AppContext from "../app-context.js";

function PerkCard({ perk, perkType, isSelected, isDisabled }) {
  const { perkGrade, addPerkBuild } = useContext(AppContext);

  return (
    <Card
      sx={{
        width: { xs: "100%", sm: 400 },
        mx: "auto",
        border: "2px solid",
        backgroundColor: !isSelected && isDisabled ? "#CCC" : "white",
        borderColor: isSelected ? "#f99e1a" : "transparent",
        boxShadow: isSelected ? "0 0 10px 5px rgba(249, 158, 26, 0.7)" : "none",
        transition: "border-color 0.3s ease",
        "&:hover": {
          boxShadow: "0 4px 20px rgba(20, 96, 158, 0.69)",
        },
        cursor: isDisabled ? "not-allowed" : "pointer",
      }}
      onClick={() => (isDisabled ? false : addPerkBuild(perkType, perk))}
    >
      {/* Header: Image + Name */}
      <CardHeader
        avatar={
          <Avatar
            src={`${process.env.PUBLIC_URL}/perks/${perk.id}.png`}
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
        <Typography variant="body2" color="text.secondary">
          {perk.description ?? ''}
          {perk.attributes && perk.attributes.map((attribute, index) => (
              <span key={index} color="text.secondary" style={{display:"block"}}>
                  {attribute.type === "description" ? (
                      attribute.value
                  ) : (
                      <>
                          <img
                              src={`${process.env.PUBLIC_URL}/icons/${types[attribute.type]?.icon ?? "ability.png"}`}
                              alt={attribute.type}
                              style={{ width: 20, height: 20, marginRight: 4 }}
                          />
                          ${attribute.value} ${attribute.unit ?? ""}
                          {typeof types[attribute.type] === "undefined" ? (
                            `${attribute?.type}`
                          ) : (
                            `${types[attribute.type]?.name}`
                          )}
                      </>
                  )}
              </span>
          ))}
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
