import React from "react";
import {
  Typography,
  AppBar,
  Container,
  Toolbar,
  Button,
  Box,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import BuildIcon from "@mui/icons-material/Build";
import GitHubIcon from "@mui/icons-material/GitHub";

function ArmoryHeader(props) {
  const { pages } = props;
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth={false}>
        <Toolbar disableGutters>
          <Box
            component="img"
            src={`${process.env.PUBLIC_URL}/logo-light.svg`}
            alt="Armory Builder Logo"
            sx={{
              height: 32,
              mr: 1,
              display: {
                xs: "none",
                md: "flex",
              },
            }}
          />

          <Typography
            variant="h6"
            noWrap
            component="a"
            href={`${window.location.origin}${
              window.location.pathname.split("#")[0]
            }`}
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            OW Stadium - Armory Builder
          </Typography>

          {pages && pages.length > 0 && (
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography sx={{ textAlign: "center" }}>{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          )}

          <Typography
            variant="h4"
            noWrap
            component="a"
            href={`${window.location.origin}${
              window.location.pathname.split("#")[0]
            }`}
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "BigNoodleTitling",
              fontWeight: 600,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Armory Builder
          </Typography>
          {pages && pages.length > 0 && (
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          )}
          <Box sx={{ flexGrow: 0, ml: "auto" }}>
            <IconButton
              component="a"
              href="https://github.com/gabrielgasnot/ow-stadium-armory-builder"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
            >
              <GitHubIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ArmoryHeader;
