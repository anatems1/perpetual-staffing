import * as React from "react";
import "../App.css";
import "./HomeHeroSection.css";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

//importing images
import IMG_school1 from "../images/home/school1.jpg";

//import videos
import VID_school from "../images/home/school.mp4";

let Headliner = "We are the key to an everlasting career".toUpperCase();

function HomeHeroSection() {
  return (
    <div className="hero-container">
      <div className="hero-video">
        <video src={VID_school} autoPlay loop muted alt="school video" />
      </div>

      <div className="hero-grid">
        {/* FOR DESKTOP! */}
        <Box
          sx={{
            margin: 10,
            display: { xs: "none", md: "flex" },
          }}
          className="hero-grid-box"
          elevation={2}
        >
          <Grid container spacing={4}>
            <Grid item md={7}>
              item1
              <Box
                sx={{
                  backgroundColor: "primary.light",
                  padding: 2,
                  textAlign: "center",
                }}
              >
                <Typography variant="h3">{Headliner}</Typography>
              </Box>
            </Grid>

            <Grid item md={5} >item2</Grid>
            <Grid item md={1}>item3</Grid>

            <Grid item md={8}>
              item4
              <img src={IMG_school1} alt="school1" id="school1" />
            </Grid>

            <Grid item md={3}>item5</Grid>

            <Grid item md={1}>item6</Grid>
            <Grid item md={6}>
              item7
              <Box sx={{display: "flex"}}>
                <KeyboardDoubleArrowDownIcon color="text.primary" sx={{height: 50, width: 60}}/>
                <Typography variant="h3">
                  OUR MISSION
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
}

export default HomeHeroSection;
