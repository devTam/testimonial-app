import { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { ReactComponent as Logo } from "../images/vasiti-logo-black.svg";

const pages = ["ABOUT US", "STORIES", "CONTACT", "LOG IN"];
const tabs = [
  "MARKETPLACE",
  "WHOLESALE CENTER",
  "SELLER CENTER",
  "SERVICES",
  "INTERNSHIPS",
  "EVENTS",
];

function Header() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  //   const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  //   const handleOpenUserMenu = (event) => {
  //     setAnchorElUser(event.currentTarget);
  //   };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  //   const handleCloseUserMenu = () => {
  //     setAnchorElUser(null);
  //   };
  return (
    <>
      <AppBar elevation={2} position="static" sx={{ backgroundColor: "#fff", color: "#000" }}>
        <Container maxWidth="md">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { md: "flex" } }}
            >
              <Logo />
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                sx={{ ml: "auto" }}
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
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">SIGN UP</Typography>
                </MenuItem>
              </Menu>
            </Box>
            {/* <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <Logo />
          </Typography> */}
            <Box sx={{ display: { xs: "none", md: "flex" }, ml: "auto" }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, display: "block", color: "#000" }}
                >
                  {page}
                </Button>
              ))}
              <Button
                variant="contained"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, display: "block", backgroundColor: "#FF5C00" }}
              >
                SIGN UP
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <AppBar elevation={2} position="static" sx={{ backgroundColor: "#fff", color: "#000" }}>
        <Container maxWidth="md">
          <Box sx={{ display: { xs: "none", md: "flex", justifyContent: 'center' }}}>
            {tabs.map((tab) => (
              <Button
                key={tab}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, display: "block", color: "#000" }}
              >
                {tab}
              </Button>
            ))}
          </Box>
        </Container>
      </AppBar>
    </>
  );
}

export default Header;
