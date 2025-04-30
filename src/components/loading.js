import React from "react";
import { CircularProgress, Box } from "@mui/material";

function LoadingComponent() {
  return (
    <Box
      sx={(theme) => ({
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: `radial-gradient(circle, ${theme.palette.background.default} 0%, ${theme.palette.background.paper} 100%)`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      })}
    >
      <Box
        sx={{
          width: "50vw",
          height: "50vw",
          maxWidth: 600,
          maxHeight: 600,
          position: "relative",
        }}
      >
        <CircularProgress
          size="100%"
          thickness={6}
          sx={{
            color: "primary.main",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/loader.jpeg`}
            alt="Please wait..."
            style={{
              width: "60%",
              height: "60%",
              objectFit: "contain",
              borderRadius: "50%",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default LoadingComponent;
