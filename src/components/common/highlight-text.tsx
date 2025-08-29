import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

function HighlightText({ text, color }: { text: string; color?: string }) {
  const theme = useTheme();
  const highlightColor = color || theme.palette.custom.orange;
  const parts = text?.split(
    /(\[.*?\]|<e>.*?<\/e>|<ap>.*?<\/ap>|<wp>.*?<\/wp>)/g
  );

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
          } else if (part.startsWith("<ap>") && part.endsWith("</ap>")) {
            // Highlight <ap> tags but remove the tags themselves
            const innerText = part.slice(4, -5);
            return (
              <span
                key={index}
                style={{
                  color: theme.palette.custom.ap,
                  fontWeight: "bold",
                  display: "inline-flex",
                  alignItems: "baseline",
                  gap: "4px",
                }}
              >
                <img
                  src={`${import.meta.env.BASE_URL}icons/AP.svg`}
                  alt="AP"
                  style={{ width: "16px", height: "16px" }}
                />
                {innerText}
              </span>
            );
          } else if (part.startsWith("<wp>") && part.endsWith("</wp>")) {
            // Highlight <wp> tags but remove the tags themselves
            const innerText = part.slice(4, -5);
            return (
              <span
                key={index}
                style={{
                  color: theme.palette.custom.wp,
                  fontWeight: "bold",
                  display: "inline-flex",
                  alignItems: "baseline",
                  gap: "4px",
                }}
              >
                <img
                  src={`${import.meta.env.BASE_URL}icons/WP.svg`}
                  alt="WP"
                  style={{ width: "16px", height: "16px" }}
                />
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
