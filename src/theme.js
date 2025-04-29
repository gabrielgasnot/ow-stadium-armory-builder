import { createTheme, alpha } from "@mui/material/styles";

const colors = {
  white: "#ffffff",
  offWhite: "#f0f4fc",
  orange: "#e77f2d",
  grey: "#43484c",
  greyBlue: "#405275",
  lightGrey: "#bec1cc",
  lightBlue: "#218ffe",
  black: "#000000",
  darkBlue: "#2e3442",
  darkerBlue: "#0f131a",
  greenOW: "#16a531",
  blueOW: "#05a0fa",
  purpleOW: "#c948ff",
};

const owTheme = createTheme({
  palette: {
    primary: { main: colors.greyBlue },
    secondary: { main: colors.offWhite },
    background: {
      default: colors.darkerBlue, // Page background
      paper: colors.darkBlue, // Card background
    },
    text: {
      primary: colors.white,
      secondary: colors.lightGrey,
    },
    custom: {
      orange: colors.orange,
      grades: {
        common: colors.greenOW,
        rare: colors.blueOW,
        epic: colors.purpleOW,
      }
    },
    action: {
      disabled: colors.lightGrey,
      disabledBackground: alpha(colors.grey, 0.2),
      hover: alpha(colors.lightBlue, 0.08),
    },
  },
  typography: {
    fontFamily: "'BigNoodleTitling', sans-serif",
    fontSize: 16,
    h1: {
      fontFamily: "'BigNoodleTitling', sans-serif",
      fontSize: "clamp(2rem, 5vw, 3rem)",
      fontWeight: 700,
      letterSpacing: ".1rem",
      lineHeight: 1.2,
    },
    h2: {
      fontFamily: "'BigNoodleTitling', sans-serif",
      fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
      fontWeight: 700,
      letterSpacing: ".1rem",
      lineHeight: 1.3,
    },
    body1: {
      fontSize: "clamp(1rem, 2vw, 1.25rem)",
      fontWeight: 400,
      letterSpacing: ".05rem",
      lineHeight: 1.6,
    },
    body2: {
      fontSize: "clamp(0.9rem, 1.8vw, 1.1rem)",
      fontWeight: 400,
      letterSpacing: ".05rem",
      lineHeight: 1.6,
    },
    button: {
      fontWeight: 500,
      textTransform: "none",
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: colors.darkerBlue,
          color: colors.white,
          userSelect: "none",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: alpha(theme.palette.background.paper, 0.9),
          borderRadius: theme.shape.borderRadius,
          boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.5)",
          transition: "box-shadow 0.3s ease, transform 0.3s ease",
          "&:hover": {
            boxShadow: "0px 6px 20px rgba(33, 150, 243, 0.5)",
            transform: "translateY(-2px)",
          },
          "&.no-hover:hover": {
            boxShadow: "none", // no hover for cards that have the 'no-hover' class
            transform: "none",
          },
          "&.Mui-disabled": {
            backgroundColor: theme.palette.action.disabledBackground,
            color: theme.palette.text.secondary,
            boxShadow: "none",
          },
        }),
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: colors.white,
          "&:hover": {
            backgroundColor: alpha(colors.lightBlue, 0.2),
          },
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          padding: "8px 16px 8px 16px",
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: "8px 16px 16px 16px",
          "&:last-child": {
            paddingBottom: "16px",
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: colors.lightBlue, // Default link color (same as your light blue background)
          textDecoration: "none", // Remove underline
          "&:hover": {
            color: colors.orange, // Hover state: Overwatch orange
          },
          "&:visited": {
            color: colors.orange, // Visited links: muted grey-blue
          },
          "&:active": {
            color: colors.orange, // Active links: same orange as hover
          },
        },
      },
    },
  },
});

export default owTheme;
