import React, { useContext } from "react";
import { Stack, Button, Typography, Box, Paper } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import types from "../db/attributeTypes.json";
import AppContext from "../app-context.js";

function DetailsHeader({ copyBuild }) {
  const { currentHero, selectedItems, shareBuild } = useContext(AppContext);
  return (
    <Paper
      elevation={3}
      sx={{
        padding: 2,
        display: "flex",
        alignItems: "center",
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
          backgroundImage: `url(${process.env.PUBLIC_URL}/heroes/${currentHero.id}.png)`,
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
            src={`${process.env.PUBLIC_URL}/roles/${currentHero.role}.svg`}
            alt={currentHero.role}
            style={{ width: 24, height: 24, marginRight: 8, display: "block" }}
          />
          <Typography
            variant="h4"
            sx={{
              mr: 1,
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            {currentHero.name}
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
            mr: 1,
            fontSize: { xs: "0.875rem", sm: "1rem", md: "1.25rem" }, // Adjust font size based on screen
            lineHeight: { xs: 1.5, sm: 1.6, md: 1.8 }, // Line height for readability
          }}
        >
          Build cost:{" "}
          <span>
            <img
              src={`${process.env.PUBLIC_URL}/icons/credit.svg`}
              alt="credits"
              color="red"
              style={{ width: 20, height: 20, marginRight: 4 }}
            />
            {selectedItems.map((item) => item.price).reduce((a, b) => a + b, 0)}{" "} credits
          </span>
        </Typography>

        {/* Share button */}
        <Box sx={{ mt: 1 }} className="no-capture">
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => shareBuild()}
              fullWidth
              startIcon={<ShareIcon />}
              title="Share this build"
            >
              Share
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={copyBuild} // your screen capture handler
              fullWidth
              startIcon={<CameraAltIcon />}
              title="Capture this build"
            >
              Capture
            </Button>
          </Stack>
        </Box>
      </Box>
    </Paper>
  );
}

export default DetailsHeader;
