import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import Wave from "react-wavify";

//import images
import IMG_jumping1 from "../../images/careers/jumping-people.png";
//import IMG_jumping2 from "../../images/careers/jumping-floor.png";

function CareersHeroSection(props) {
  const bg_color = props.bgCOLOR;
  // const sec_color = props.secCOLOR;
  const h1_color = props.h1COLOR;
  const dark_color = props.darkCOLOR;
  // const _grad1 = props.grad1;

  return (
    <div className="hero-container">
      <Box
        sx={{
          position: "relative",
          height: "80vh",
          width: "100%",
        }}
      >
        {/* JUMPING PEOPLE */}
        <Box sx={{ position: "absolute", bottom: {xs:"20vh", md:"10%", lg:"0%"}}}>
          <img src={IMG_jumping1} alt="jumping_people" />
        </Box>

        {/* JUMPING FLOOR */}
        <Box sx={{ position: "absolute", bottom: 0, width: "100%", height: "20vh" }}>
          <Wave
            fill="#2c2c2c"
            paused={false}
            options={{ height: 20, amplitude: 50, speed: 0.15, points: 6 }}
          />
        </Box>

        <Box sx={{backgroundColor: dark_color, position: "absolute", bottom: 0, width: "100%", height: "10vh"}}></Box>

        {/* HERO TEXT */}
        <Grid container sx={{ position: "absolute", top: 100, height: "auto" }}>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h2"
              sx={{ textAlign: { xs: "center", md: "right" } }}
            >
              Careers
            </Typography>
            <Typography sx={{ textAlign: { xs: "center", md: "right" } }}>
              with
            </Typography>
          </Grid>

          <Grid item xs={0} md={8}></Grid>

          <Grid item xs={12} md={12}>
            <Typography
              variant="h2"
              sx={{
                textAlign: "center",
                fontSize: { xs: 70, md: 90 },
                color: "primary.main",
              }}
            >
              Perpetual Staffing
            </Typography>
          </Grid>
        </Grid>

        {/* Text grid */}
        <Grid
          container
          sx={{
            position: "absolute",
            bottom: "5vh",
            height: "auto",
            zIndex: 4,
            paddingLeft: "5%",
          }}
        >
          <Grid item xs={10}>
            <Box sx={{ display: "flex" }}>
              <KeyboardDoubleArrowDownIcon
                sx={{
                  height: { md: 50, xs: 30 },
                  width: { md: 60, xs: 30 },
                  color: h1_color,
                }}
              />
              <Typography
                variant="h2"
                sx={{ fontSize: { xs: 25, md: 30, lg: 50 }, color: bg_color }}
              >
                Why work with us
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default CareersHeroSection;
