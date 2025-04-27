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
  },
  typography: {
    fontFamily: "'BigNoodleTitling', sans-serif", // Add your custom font here
    h1: {
      fontFamily: "'BigNoodleTitling', sans-serif", // Apply it to specific elements like h1
    },
    h2: {
      fontFamily: "'BigNoodleTitling', sans-serif",
    },
    // Add other typography settings as needed
  },
  components: {
    MuiCssBaseline: {
        styleOverrides: {
          body: {
            userSelect: "none", // Disable text selection globally across the app
          },
        },
      },
  },
});

export default owTheme;
