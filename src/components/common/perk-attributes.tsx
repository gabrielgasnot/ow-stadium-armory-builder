import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useDb } from "../../contexts/db-context";
import {
  assertIsDescriptionAttribute,
  assertIsStatAttribute,
  Attribute,
} from "../../models/attribute";
import Skills from "../../models/skills";

function PerkAttributes({
  attributes,
  skills,
}: {
  attributes: Attribute[];
  skills: Skills;
}) {
  const theme = useTheme();
  const { attributeTypes } = useDb();
  return (
    attributes &&
    attributes.map((attribute, index) => (
      <Box key={index} style={{ display: "flex", alignItems: "center" }}>
        {assertIsDescriptionAttribute(attribute) ? (
          <Typography
            color={theme.palette.text.secondary}
            variant="body2"
            marginTop="0.3rem"
          >
            {attribute.value}
          </Typography>
        ) : assertIsStatAttribute(attribute) ? (
          <>
            <img
              src={`${import.meta.env.BASE_URL}icons/${
                attributeTypes[attribute.type]?.icon ?? "default.svg"
              }`}
              alt={attribute.type}
              style={{ width: 20, height: 20, marginRight: 8 }}
            />
            <Typography
              color={theme.palette.text.secondary}
              fontWeight={550}
              variant="body2"
            >
              {attribute.value}
              {attribute.unit ?? ""}{" "}
              {typeof attributeTypes[attribute.type] === "undefined"
                ? `${attribute?.type}`
                : `${attributeTypes[attribute.type]?.name}`}
            </Typography>
          </>
        ) : (
          <></>
        )}
      </Box>
    ))
  );
}

export default PerkAttributes;
