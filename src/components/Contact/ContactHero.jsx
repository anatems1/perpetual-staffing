import React from "react";
import { Grid, Typography, Box } from "@mui/material";

function ContactHero(props) {
  // const bg_color = props.bgCOLOR;
  // const h1_color = props.h1COLOR;
  //const dark_color = props.darkCOLOR;
  // const _BodyFontSize = props.BodyFontSize;
  const sec_color = props.secCOLOR;

  return (
    <div className="contact-hero-container">
      {/* HERO TEXT */}
      <Box
        sx={{
          position: "relative",
          height: { xs: "400px", md: "300px" },
          width: "100%",
          backgroundColor: sec_color,
        }}
      >
        <Grid container sx={{ position: "absolute", top: 100, height: "auto" }}>
          <Grid item xs={12} md={5} lg={4}>
            <Typography
              variant="h2"
              sx={{ textAlign: { xs: "center", md: "right" } }}
            >
              Contact Us
            </Typography>
            <Typography sx={{ textAlign: { xs: "center", md: "right" } }}>
              at
            </Typography>
          </Grid>

          <Grid item xs={0} md={8}></Grid>

          <Grid item xs={12} md={12}>
            <Typography
              variant="h2"
              sx={{
                textAlign: "center",
                fontSize: { xs: 70, md: 90 },
                color: "primary.dark",
              }}
            >
              Perpetual Staffing
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default ContactHero;
