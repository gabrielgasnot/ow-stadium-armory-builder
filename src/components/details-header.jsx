import React, { useContext } from "react";
import { Stack, Button, Typography, Box, Paper } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import AppContext from "../app-context.js";
import getPublicUrl from "../helpers/public-url";

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
          backgroundImage: `url(${getPublicUrl()}heroes/${currentHero.id}.png)`,
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
            src={`${getPublicUrl()}roles/${currentHero.role}.svg`}
            alt={currentHero.role}
            style={{
              width: 24,
              height: 24,
              marginRight: 8,
              display: "block",
              filter: "invert(1)",
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
            {currentHero.name}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "row" }, // Stack on mobile, row on desktop
            alignItems: { xs: "flex-start", md: "center" }, // Align left on mobile, center on desktop
          }}
        >
          <Typography component="span" sx={{ mr: 0.5 }}>
            Build cost:
          </Typography>
          <img
            src={`${getPublicUrl()}icons/credit.svg`}
            alt="credits"
            style={{ width: 24, height: 24, marginRight: 4 }}
          />
          <Typography component="span" sx={{ mr: 1 }}>
            {selectedItems.map((item) => item.price).reduce((a, b) => a + b, 0)}
          </Typography>
        </Box>

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
