import * as React from "react";
import "../../App.css";
import "./HomeHeroSection.css";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

//importing images
import IMG_minilogo from "../../images/mainlogo.png";

//import videos
import VID_school from "../../images/home/school.mp4";

let Headliner = "We are your solution to an everlasting career";

function HomeHeroSection(props) {
  const bg_color = props.bgCOLOR;
  // const sec_color = props.secCOLOR;
  const h1_color = props.h1COLOR;
  return (
    <Box className="hero-container" sx={{ height: "100vh"}}>
      <video src={VID_school} autoPlay loop muted alt="school video" />
      <Box
        className="hero-grid"
        sx={{
          marginTop: "25vh",
          marginLeft: "5%",
          marginRight: "5%",
          minHeight: "60vh",
          minWidth: "90%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >

        {/* MINI LOGO */}
        <Box sx={{height: "200px"}}>
        <img src={IMG_minilogo} alt="ps_logo1" />
        </Box>

        {/* SLOGAN */}
        <Box
          sx={{
            backgroundColor: "primary.light",
            padding: 2,
            textAlign: "center",
          }}
        >
          <Typography variant="h2" sx={{ fontSize: { xs: 25, md: 30, lg:50 }, color:"black" }}>
            {Headliner}
          </Typography>
        </Box>

        {/* OUR MISSION TAG */}
        <Box sx={{ display: "flex" }}>
          <KeyboardDoubleArrowDownIcon
            sx={{ height: {md: 50, xs:30}, width: {md:60, xs:30}, color: h1_color }}
          />
          <Typography variant="h2" sx={{ fontSize: { xs: 25, md: 30, lg:50 }, color: bg_color }}>Perpetual Staffing</Typography>
        </Box>

      </Box>
    </Box>
  );
}

export default HomeHeroSection;
