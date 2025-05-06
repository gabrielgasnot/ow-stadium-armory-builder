import React, { useState, useRef, useEffect } from "react";
import { Box, Typography, Pagination, PaginationItem } from "@mui/material";
import { useTheme } from "@mui/material/styles";

function BuilderRoundNavigatorDefault({
  rounds,
  maxRounds,
  currentRound,
  changeRound,
  powerByRound,
}) {
  const theme = useTheme();
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [endPos, setEndPos] = useState({ x: 0, y: 0 });
  const paginationRef = useRef(null);
  const containerRef = useRef(null);
  useEffect(() => {
    if (!paginationRef.current) return;

    const items = paginationRef.current.querySelectorAll("li");
    if (items.length < 2) return;

    const first = items[0].getBoundingClientRect();
    const target = items[currentRound - 1].getBoundingClientRect();

    const container = paginationRef.current.getBoundingClientRect();

    setStartPos({
      x: first.left + first.width / 2 - container.left,
      y: first.top + first.height / 2 - container.top,
    });

    setEndPos({
      x: target.left + target.width / 2 - container.left,
      y: target.top + target.height / 2 - container.top,
    });
  }, [currentRound]);

  const roundFilled = (roundId) => {
    const round = rounds[roundId - 1];
    if (!round) {
      return false;
    }
    return (
      powerByRound[roundId] === round.powers.length && round.items.length > 0
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
        minHeight: { xs: "80px", md: "0px" },
      }}
    >
      <Typography
        variant="h6"
        sx={{ margin: { xs: "0 0 8px 0", md: "0 15px" } }}
      >
        Round
      </Typography>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          padding: { xs: "0px 8px 0px 8px", md: "inherit" },
        }}
        ref={containerRef}
      >
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
          }}
          renderItem={(item) => {
            const isFilled = roundFilled(item.page);
            return (
              <PaginationItem
                {...item}
                sx={{
                  borderRadius: "50%",
                  minWidth: 36,
                  height: 36,
                  transform: item.page % 2 === 1 ? "scale(1.2)" : undefined,
                  color: theme.palette.text.primary,
                  backgroundColor: theme.palette.background.default,
                  border: `2px solid`,
                  borderColor: isFilled
                    ? theme.palette.custom.orange
                    : theme.palette.primary.main,
                  fontWeight: 700,
                  transition: "all 0.2s ease-in-out",
                  "&.Mui-selected": {
                    backgroundColor: theme.palette.primary.main,
                    boxShadow: "0 0 3px 3px rgba(5, 160, 250, 0.5)",
                    color: theme.palette.text.primary,
                    "&:hover": {
                      backgroundColor: theme.palette.primary.main,
                    },
                  },
                  "&:hover": {
                    backgroundColor: theme.palette.custom.orange,
                  },
                }}
              />
            );
          }}
        />
      </Box>
    </Box>
  );
}

export default BuilderRoundNavigatorDefault;
