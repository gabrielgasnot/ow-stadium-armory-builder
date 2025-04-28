import React from "react";
import { Stack, Button, Typography, Box, Paper } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

function DetailsHeader({ hero, items, shareBuild, copyBuild}) {
  return (
    <Paper
      elevation={3}
      sx={{
        padding: 2,
        display: "flex",
        alignItems: "stretch",
        flexDirection: "row",
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
          display: { xs: "none", xl: "block" },
        }}
      />

      {/* Right details */}
      <Box
        sx={{
          ml: { xs: 0, sm: 2 },
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          pl: { xs: 0, sm: 1 },
        }}
      >
        {/* Name + Icon */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img
            src={`${process.env.PUBLIC_URL}/roles/${hero.role}.svg`}
            alt={hero.role}
            style={{ width: 24, height: 24, marginRight: 8, display: "block" }}
          />
          <Typography
            variant="h4"
            sx={{
              mr: 2,
              fontFamily: "BigNoodleTitling",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            {hero.name}
          </Typography>
        </Box>

        <Typography
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" }, // Stack on mobile, row on desktop
            alignItems: { xs: "flex-start", md: "center" }, // Align left on mobile, center on desktop
            fontWeight: 400,
            letterSpacing: ".2rem",
            color: "text.secondary",
            textDecoration: "none",
            mt: 1,
            mr: 2,
            fontSize: { xs: "0.875rem", sm: "1rem", md: "1.25rem" }, // Adjust font size based on screen
            lineHeight: { xs: 1.5, sm: 1.6, md: 1.8 }, // Line height for readability
          }}
        >
          Build cost:{" "}
          {items.map((item) => item.price).reduce((a, b) => a + b, 0)} credits
        </Typography>

        {/* Share button */}
          <Box sx={{ mt: 2 }} className="no-capture">
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => shareBuild()}
                fullWidth
                startIcon={<ShareIcon />}
              >
                Share Build
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={copyBuild} // your screen capture handler
                fullWidth
                startIcon={<CameraAltIcon />}
              >
                Capture Build
              </Button>
            </Stack>
          </Box>
      </Box>
    </Paper>
  );
}

export default DetailsHeader;
