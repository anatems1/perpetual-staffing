import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";

// image from mainlogo!!
import minilogo from "../images/minilogo.png";
import mainlogo from "../images/mainlogo.png";
//import logo1 from "../images/logo1.png";
import "./ResponsiveAppBar.css";

const pages = ["Careers", "Services", "Contact"];
const drawerWidth = 240;

const ResponsiveAppBar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  //MORE DRAWER SETTINGS
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box sx={{ padding: "10px", height: "50px" }}>
        <Typography noWrap component="a" href="/" sx={{}}>
          <img src={mainlogo} alt="mainlogo" className="mainlogo" />
        </Typography>
      </Box>

      <Divider sx={{ mb: "20px" }} />

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {pages.map((page) => (
          <Link to={page} className="drawer-page-links">
            {page}
          </Link>
        ))}
      </Box>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div>
      <AppBar
        color="transparent"
        className="AppBar"
        component="nav"
        sx={{
          backgroundColor: "rgba(255,255,255, 0.4)",
          backdropFilter: "blur(20px)",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* MENU BUTTON */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>

            {/* HOME BUTTON */}
            <Tooltip title="Home">
              <Typography
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                }}
              >
                <img src={minilogo} alt="minLogo" className="minilogo" />
              </Typography>
            </Tooltip>

            {/* md LINKS */}
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Link to={page} className="appbar-page-links">
                  {page}
                </Link>
              ))}
            </Box>

            {/* APPLY BUTTON */}
            <Box
              sx={{ flexGrow: 1, display: "flex", justifyContent: "flex-end" }}
            >
              <Button variant="contained" sx={{ color: "white" }}>
                Apply Now
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* DRAWER SETTINGS */}
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "rgba(255,255,255, 0.7)",
              backdropFilter: "blur(20px)",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </div>
  );
};

export default ResponsiveAppBar;
