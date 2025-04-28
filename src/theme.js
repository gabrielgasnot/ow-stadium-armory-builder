import { createTheme } from "@mui/material/styles";

const colors = {
  white: "#ffffff",
  offWhite: "#f0f4fc",
  orange: "#f99e1a",
  grey: "#43484c",
  greyBlue: "#405275",
  lightGrey: "#bec1cc",
  lightBlue: "#218ffe",
  black: "#000000",
};

const owTheme = createTheme({
  palette: {
    primary: { main: colors.greyBlue },
    secondary: { main: colors.offWhite },
    background: {
      default: colors.lightBlue,
      paper: colors.offWhite,
    },
    text: {
      primary: colors.black, // Set the default text color here
      secondary: colors.grey, // You can also customize secondary text color
    },
    custom: {
      orange: colors.orange,
    }
  },
  typography: {
    fontFamily: "'BigNoodleTitling', sans-serif", // Add your custom font here
    fontSize: 16, // Base font size
    h1: {
      fontFamily: "'BigNoodleTitling', sans-serif", // Apply it to specific elements like h1
      fontSize: "clamp(2rem, 5vw, 3rem)", // Scales between 2rem and 3rem based on screen size
      fontWeight: 700,
      letterSpacing: ".1rem", // Adjust letter spacing for readability
      lineHeight: 1.2, // Adjust line height for better legibility
    },
    h2: {
      fontFamily: "'BigNoodleTitling', sans-serif",
      fontSize: "clamp(1.8rem, 4vw, 2.5rem)", // Scales between 1.8rem and 2.5rem
      fontWeight: 700,
      letterSpacing: ".1rem",
      lineHeight: 1.3,
    },
    body1: {
      fontSize: "clamp(1rem, 2vw, 1.25rem)", // Scales between 1rem and 1.25rem
      fontWeight: 400,
      letterSpacing: ".05rem", // Slight letter spacing
      lineHeight: 1.6, // Adequate line height for readability
    },
    body2: {
      fontSize: "clamp(0.9rem, 1.8vw, 1.1rem)",
      fontWeight: 400,
      letterSpacing: ".05rem",
      lineHeight: 1.6,
    },
    button: {
      fontWeight: 500,
      textTransform: "none", // To prevent button text from being uppercased by default
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          userSelect: "none", // Disable text selection globally across the app
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          padding: "16px 16px 8px 16px", // Set your desired padding value
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: "8px 16px 16px 16px", // Set your desired padding value
          "&:last-child": {
            paddingBottom: "16px", // Set your desired padding value
          },
        },
      },
    },
  },
});

export default owTheme;