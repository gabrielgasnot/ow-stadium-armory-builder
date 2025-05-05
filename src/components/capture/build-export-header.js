import React from "react";
import { Box, Typography, Paper, Divider, alpha } from "@mui/material";
import { QRCodeSVG } from "qrcode.react";

function BuildExportHeader({ hero, shareLink }) {
  return (
    <Paper
      elevation={3}
      sx={{
        paddingLeft: 2,
        paddingRight: 2,
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        gap: 2,
        width: "600px",
      }}
    >
      {/* Left Part */}
      <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            gap: 2,
          }}
        >
          <Box
            component="img"
            src={`${process.env.PUBLIC_URL}/logo-light.png`}
            alt="Overwatch Builds"
            sx={{
              width: 83,
              height: 64,
              objectFit: "contain",
            }}
          />
          <Typography
            variant="h4"
            sx={{ textAlign: "center", alignContent: "baseline" }}
          >
            Overwatchbuilds.com
          </Typography>
        </Box>
        <Divider
          variant="middle"
          sx={(theme) => ({
            backgroundColor: alpha(theme.palette.custom.orange, 0.1),
            height: "1px",
            boxShadow: "0px 2px 4px rgba(249, 158, 26, 0.7)",
            borderRadius: "1px",
            mt: 2,
            mb: 2,
          })}
        />
        {/* Content */}
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            gap: 2,
          }}
        >
          {/* Left image section - hidden on xs */}
          <Box
            sx={{
              width: 100,
              height: 100,
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
              justifyContent: "flex-start",
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
            <Box sx={{ display: "flex", alignItems: "center" }}>
              Build created{" "}
              {`${new Date().getFullYear()}-${String(
                new Date().getMonth() + 1
              ).padStart(2, "0")}-${String(new Date().getDate()).padStart(
                2,
                "0"
              )}`}
            </Box>
          </Box>
        </Box>
      </Box>
      {/* Right Part */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: 3,
          gap: 2,
        }}
      >
        <Typography variant="h6" sx={{ width: "100%", textAlign: "center" }}>
          Scan to access the build
        </Typography>
        <QRCodeSVG value={shareLink} marginSize={1} />
      </Box>
    </Paper>
  );
}

export default BuildExportHeader;
