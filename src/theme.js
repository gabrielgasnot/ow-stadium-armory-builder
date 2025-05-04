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
      },
      blue: colors.blueOW,
      green: colors.greenOW,
    },
    action: {
      disabled: colors.lightGrey,
      disabledBackground: alpha(colors.grey, 0.2),
      hover: alpha(colors.lightBlue, 0.08),
    },
  },
  typography: {
    fontFamily: "'BigNoodleTitling', sans-serif",
    fontSize: 14, // base size slightly smaller
    h1: {
      fontSize: "clamp(1.8rem, 3vw, 2.2rem)",
      lineHeight: 1.1,
    },
    h2: {
      fontSize: "clamp(1.5rem, 2.5vw, 1.8rem)",
      lineHeight: 1.2,
    },
    h6: {
      fontSize: "clamp(1.05rem, 1vw, 1.2rem)",
      lineHeight: 1.2,
      fontWeight: 400,
      letterSpacing: "0.05em",
    },
    body1: {
      fontFamily: "'Titillium Web', sans-serif",
      fontSize: "clamp(1rem, 1.4vw, 1.1rem)",
      lineHeight: 1.4,
    },
    body2: {
      fontFamily: "'Titillium Web', sans-serif",
      fontSize: "clamp(0.95rem, 1.2vw, 1rem)",
      lineHeight: 1.4,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "html, body, #root": {
          userSelect: "none",
        },
        "*, *::before, *::after": {
          userSelect: "none",
        },
        button: {
          userSelect: "none",
        },
        svg: {
          userSelect: "none", // Some icons can still behave weirdly
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
          userSelect: "none",
          color: colors.white,
          padding: "0.1rem",
          fontSize: "clamp(1.05rem, 1vw, 1.2rem)",
          letterSpacing: "0.05em",
          "&:hover": {
            userSelect: "none",
            backgroundColor: alpha(colors.lightBlue, 0.2),
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          userSelect: "none",
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          padding: "8px 16px 0px 16px",
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: "0px 8px 8px 8px",
          "&:last-child": {
            paddingBottom: "16px",
            paddingTop: "8px",
          },
        },
      },
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          padding: "4px 8px 8px 8px",
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
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontFamily: "'Titillium Web', sans-serif",
          fontSize: "clamp(0.9rem, 1vw, 1rem)",
          lineHeight: 1.2,
          fontWeight: 400,
          letterSpacing: "0.1em",
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: alpha(theme.palette.background.paper, 0.9),
          borderRadius: theme.shape.borderRadius,
          boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.5)",
          marginBottom: theme.spacing(1),
          overflow: "hidden",
          transition: "box-shadow 0.3s ease, transform 0.3s ease",
          "&:before": {
            display: "none", // remove the default divider line
          },
          "&.Mui-expanded": {
            marginTop: "8px",
          },
        }),
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.text.primary,
          padding: "0 16px",
          minHeight: "48px",
          "&.Mui-expanded": {
            minHeight: "48px",
          },
        }),
        content: {
          margin: "8px 0px 8px 0px",
          "&.Mui-expanded": {
            margin: "8px 0px 8px 0px",
          },
        },
        expandIconWrapper: ({ theme }) => ({
          color: theme.palette.text.primary,
        }),
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: "0px 16px 16px",
        },
      },
    },
  },
});

export default owTheme;
