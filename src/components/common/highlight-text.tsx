import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

function HighlightText({
  text,
  color,
}: {
  text: string;
  color?: string;
}) {
  const theme = useTheme();
  const highlightColor = color || theme.palette.custom.orange;
  const parts = text?.split(/(\[.*?\]|<e>.*?<\/e>)/g); // Split on [brackets] or <e>...</e>, keeping them
  const apParts = text?.split(/(<ap>.*?<\/ap>)/g); // Split <ap>...</ap>, keeping them
  const wpParts = text?.split(/(<wp>.*?<\/wp>)/g); // Split <wp>...</wp>, keeping them
  
  return (
    parts &&
    parts.length > 0 && (
      <Typography variant="body1">
        {parts?.map((part, index) => {
          if (part.startsWith("[") && part.endsWith("]")) {
            return (
              <span
                key={index}
                style={{
                  color: theme.palette.custom.orange,
                  fontWeight: "bold",
                }}
              >
                {part}
              </span>
            );
          } else if (part.startsWith("<e>") && part.endsWith("</e>")) {
            // Highlight <e> tags but remove the tags themselves
            const innerText = part.slice(3, -4); // Remove <e> and </e>
            return (
              <span
                key={index}
                style={{
                  color: highlightColor,
                  fontWeight: "bold",
                }}
              >
                {innerText}
              </span>
            );
          } else {
            return part;
          }
        })}
      </Typography>
    )
  );
}

export default HighlightText;
