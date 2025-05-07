import React from "react";
import { Box, Typography, Paper } from "@mui/material";

function BuildExportHeader({ hero }) {
  const dt = new Date();
  const year = dt.getFullYear();
  const month = (dt.getMonth() + 1).toString().padStart(2, "0");
  const day = dt.getDate().toString().padStart(2, "0");

  return (
    <Paper
      elevation={3}
      sx={{
        paddingLeft: 2,
        paddingRight: 2,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: "550px",
        p: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          flexDirection: "row",
          gap: 2,
        }}
      >
        <Box
          sx={{
            width: 125,
            height: 125,
            backgroundColor: "background.paper",
            borderRadius: 1,
            backgroundImage: `url(${process.env.PUBLIC_URL}/heroes/${hero.id}.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            flexShrink: 0,
            display: { xs: "none", lg: "block" },
          }}
        />

        {/* Right details */}
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {/* Name + Icon */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src={`${process.env.PUBLIC_URL}/roles/png/${hero.role}.png`}
              alt={hero.role}
              style={{
                width: 24,
                height: 24,
                marginRight: 8,
                display: "block",
              }}
            />
            <Typography
              variant="h4"
              sx={{
                mr: 1,
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              {hero.name}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "baseline",
              flexDirection: "column",
            }}
          >
            Build created on
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                src={`${process.env.PUBLIC_URL}/logo-light.png`}
                alt="Overwatch Builds"
                sx={{
                  width: 32,
                  height: 24,
                  objectFit: "contain",
                }}
              />
              <Typography variant="h4" sx={{ textAlign: "left", ml: 1 }}>
                Overwatchbuilds.com
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
            }}
          >
            <Typography variant="caption">
              {year}-{month}-{day}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
}

export default BuildExportHeader;
