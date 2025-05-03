import React, { useState, useRef, useEffect } from "react";
import { Box, Typography, Pagination } from "@mui/material";
import { useTheme } from "@mui/material/styles";

function BuilderRoundNavigatorDefault({ rounds, currentRound, changeRound }) {
  const theme = useTheme();
  const maxRounds = 7;
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [endPos, setEndPos] = useState({ x: 0, y: 0 });
  const paginationRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!paginationRef.current) return;

    const items = paginationRef.current.querySelectorAll("li");
    if (items.length < 2) return;

    const first = items[0].getBoundingClientRect();
    const target = items[rounds.length - 1].getBoundingClientRect(); // adjust index

    const container = paginationRef.current.getBoundingClientRect();

    setStartPos({
      x: first.left + first.width / 2 - container.left,
      y: first.top + first.height / 2 - container.top,
    });

    setEndPos({
      x: target.left + target.width / 2 - container.left,
      y: target.top + target.height / 2 - container.top,
    });
  }, [rounds.length]);

  return (
    <Box
      sx={{
        display: { xs: "none", sm: "flex" },
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Typography variant="h6" sx={{ margin: "0 15px" }}>
        Round
      </Typography>
      <Box sx={{ position: "relative", width: "100%" }} ref={containerRef}>
        {/* SVG line */}
        <svg
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            zIndex: 0, // ensure it's behind the pagination
          }}
        >
          <line
            x1={startPos.x}
            y1={startPos.y}
            x2={endPos.x}
            y2={endPos.y}
            stroke={theme.palette.custom.orange}
            strokeWidth={4}
          />
        </svg>

        {/* Pagination itself */}
        <Pagination
          ref={paginationRef}
          count={maxRounds}
          page={currentRound}
          onChange={(_, value) => changeRound(value)}
          hideNextButton={true}
          hidePrevButton={true}
          siblingCount={1}
          boundaryCount={1}
          sx={{
            width: "100%",
            "& ul": {
              justifyContent: "space-between",
              width: "100%",
              padding: 0,
            },
            "& ul > li:first-of-type .MuiPaginationItem-root": {
              borderColor: theme.palette.custom.orange,
            },
            "& ul > li:nth-of-type(odd) .MuiPaginationItem-root": {
              transform: "scale(1.2)",
            },
            "& .MuiPaginationItem-root": {
              borderRadius: "50%",
              minWidth: 36,
              height: 36,
              color: theme.palette.text.primary,
              backgroundColor: theme.palette.background.paper,
              border: `2px solid ${theme.palette.primary.main}`,
              transition: "all 0.2s ease-in-out",
              fontWeight: 700,
              "&.Mui-selected": {
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.text.primary,
                borderColor: theme.palette.custom.orange,
                "&:hover": {
                  backgroundColor: theme.palette.primary.main,
                },
              },
              "&:hover": {
                backgroundColor: theme.palette.custom.orange,
              },
            },
          }}
        />
      </Box>
    </Box>
  );
}

export default BuilderRoundNavigatorDefault;
