import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

function HighlightText({ text }: { text: string }) {
  const theme = useTheme();
  const parts = text?.split(/(\[.*?\])/g); // Split on [brackets], keeping them

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
          } else {
            return part;
          }
        })}
      </Typography>
    )
  );
}

export default HighlightText;
