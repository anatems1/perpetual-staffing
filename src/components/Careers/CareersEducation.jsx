import React from "react";
import { Box, Grid, Paper, Typography, Avatar, Stack } from "@mui/material";
import { green, yellow, red, blue } from "@mui/material/colors";
//import icons
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import ParkIcon from "@mui/icons-material/Park";

import ElderlyIcon from "@mui/icons-material/Elderly";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";

//import images
import IMG_education from "../../images/careers/school.png";
import IMG_man from "../../images/careers/man.png";

function CareersEducation(props) {
  const bg_color = props.bgCOLOR;
  const sec_color = props.secCOLOR;
  const h1_color = props.h1COLOR;
  const dark_color = props.darkCOLOR;
  const _BodyFontSize = props.BodyFontSize;

  // const _grad1 = props.grad1;
  return (
    <div className="education-container">
      {/* EDUCATION SECTION */}
      <Grid
        item
        xs={12}
        md={4}
        sx={{
          display: { xs: "flex", md: "none" },
          height: "300px",
          width: "300px",
          margin: "auto",
        }}
      >
        <Box
          component="img"
          borderRadius="100%"
          sx={{ width: "100%", height: "100%" }}
          src={IMG_education}
        />
      </Grid>

      <Grid container sx={{ padding: { xs: "5% 0 30% 5%", md: "5% 0 5% 5%" } }}>
        <Grid item xs={12} md={8} sx={{ paddingRight: "5%" }}>
          {/* HEADER */}
          <Typography variant="h2" sx={{ color: h1_color }}>
            Education
          </Typography>
          <br />

          {/* QUESTION */}
          <Typography
            variant="h4"
            sx={{ color: dark_color, fontSize: { xs: "25px", md: "40px" } }}
          >
            Why be a teacher Assitant?
          </Typography>
          <br />

          {/* BOUNDING PAPER */}
          <Paper
            elevation={6}
            sx={{
              boxShadow: "-10px -10px #53C3A1",
              backgroundColor: sec_color,
              padding: "5%",
              maxWidth: "90%",
              maxHeight: "max-content",
              zIndex: 2,
            }}
          >
            <Stack direction="column" spacing={4}>
              {/* TROPHY */}
              <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
                <Avatar sx={{ bgcolor: yellow[800] }}>
                  <EmojiEventsIcon />
                </Avatar>
                <Typography variant="h5" sx={{ fontSize: _BodyFontSize }}>
                  Experience a unique and rewarding opportunity to positively
                  reshape a child's life
                </Typography>

                {/* MAP */}
              </Stack>
              <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
                <Avatar sx={{ bgcolor: red[500] }}>
                  <AccountTreeIcon />
                </Avatar>
                <Typography variant="h5" sx={{ fontSize: _BodyFontSize }}>
                  Effectively develop a multitude of skills in administration,
                  patience, and communication
                </Typography>
              </Stack>

              {/* TREE */}
              <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
                <Avatar sx={{ bgcolor: green[500] }}>
                  <ParkIcon />
                </Avatar>
                <Typography variant="h5" sx={{ fontSize: _BodyFontSize }}>
                  Grow your teaching qualifications for future roles
                </Typography>
              </Stack>
            </Stack>
          </Paper>
        </Grid>

        {/* DESKTOP IMAGE */}
        <Grid item xs={12} md={4} sx={{ display: { xs: "none", md: "flex" } }}>
          <Box
            component="img"
            sx={{ height: "100%", borderRadius: "40px 0px 0px 40px" }}
            src={IMG_education}
          />
        </Grid>
      </Grid>

      {/* RESIDENTIAL AIDE SECTION */}
      {/* MOBILE IMAGE */}
      <Grid
        item
        xs={12}
        md={4}
        sx={{
          display: { xs: "flex", md: "none" },
          height: "270px",
          width: "300px",
          margin: "auto",
        }}
      >
        <Box
          component="img"
          borderRadius="100%"
          sx={{ width: "100%", height: "100%" }}
          src={IMG_man}
        />
      </Grid>

      {/* DESKTOP IMAGE */}
      <Grid container sx={{ padding: "5% 5% 5% 0%" }}>
        <Grid item xs={12} md={4} sx={{ display: { xs: "none", md: "flex" } }}>
          <Box
            component="img"
            sx={{ height: "80%", borderRadius: "0px 40px 40px 0px" }}
            src={IMG_man}
          />
        </Grid>

        {/* HEADER */}
        <Grid item xs={12} md={8} sx={{ padding:{ xs: "5% 0 30% 5%", md: "5% 0 5% 5%" } }}>
          <Typography variant="h2" sx={{ color: h1_color }}>
            Residential Aide
          </Typography>
          <br />

          {/* QUESTION */}
          <Typography
            variant="h4"
            sx={{ color: dark_color, fontSize: { xs: "25px", md: "40px" } }}
          >
            Why be a Residential Aide?
          </Typography>
          <br />

          {/* BOUNDING PAPER */}
          <Paper
            elevation={6}
            sx={{
              boxShadow: "-10px -10px #53C3A1",
              backgroundColor: sec_color,
              padding: "5%",
              maxWidth: "90%",
              maxHeight: "max-content",
              zIndex: 2,
            }}
          >
            <Stack direction="column" spacing={4}>
              {/* ELDERLY */}
              <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
                <Avatar sx={{ bgcolor: blue[500] }}>
                  <ElderlyIcon />
                </Avatar>
                <Typography variant="h5" sx={{ fontSize: _BodyFontSize }}>
                  Engage in a fulfulling chance to assist an individual with
                  daily living activities
                </Typography>
              </Stack>

              {/* MEDICAL */}
              <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
                <Avatar sx={{ bgcolor: red[500] }}>
                  <MedicalInformationIcon />
                </Avatar>
                <Typography variant="h5" sx={{ fontSize: _BodyFontSize }}>
                  Refine your skills in the health industry
                </Typography>
              </Stack>

              {/* TREE */}
              <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
                <Avatar sx={{ bgcolor: green[500] }}>
                  <ParkIcon />
                </Avatar>
                <Typography variant="h5" sx={{ fontSize: _BodyFontSize }}>
                  Grow your healthcare worker quaifications
                </Typography>
              </Stack>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default CareersEducation;
