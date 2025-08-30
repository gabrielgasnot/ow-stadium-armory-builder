import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useDb } from "../../contexts/db-context";
import {
  assertIsDescriptionAttribute,
  assertIsStatAttribute,
  Attribute,
} from "../../models/attribute";
import Skill from "../../models/skill";
import HighlightText from "./highlight-text";

function PerkAttributes({
  attributes,
  skills,
}: {
  attributes: Attribute[];
  skills?: Skill[];
}) {
  const theme = useTheme();
  const { attributeTypes } = useDb();
  return (
    attributes &&
    attributes.map((attribute, index) => (
      <Box key={index} style={{ display: "flex", alignItems: "center" }}>
        {assertIsDescriptionAttribute(attribute) ? (
          <HighlightText
            text={attribute.value}
            color={theme.palette.text.primary}
          />
        ) : assertIsStatAttribute(attribute) ? (
          <>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                flexDirection: "row",
              }}
            >
              <img
                src={`${import.meta.env.BASE_URL}icons/${
                  attributeTypes[attribute.type]?.icon ?? "default.svg"
                }`}
                alt={attribute.type}
                style={{ width: 20, height: 20, marginRight: 8 }}
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
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
                {Array.isArray(skills) &&
                  skills.filter((skill) =>
                    skill.affectedBy.includes(attribute.type)
                  ).length > 0 && (
                    <Typography
                      color={theme.palette.text.secondary}
                      fontWeight={550}
                      variant="caption"
                    >
                      (
                      {skills
                        .filter((skill) =>
                          skill.affectedBy.includes(attribute.type)
                        )
                        .map((skill) => skill.name)
                        .join(", ")}
                      )
                    </Typography>
                  )}
              </Box>
            </Box>
          </>
        ) : (
          <></>
        )}
      </Box>
    ))
  );
}

export default PerkAttributes;
