import React from "react";
import { Grid, Stack, Typography, Divider } from "@mui/material";

//importing images
import IMG_mainlogo from "../images/mainlogo-white.png";
let Headliner = "We are your solution to an everlasting career";

function Footer() {
  return (
    <div className="footer-container">
      <Grid
        container
        sx={{
          backgroundColor: "darkFooter.main",
          boxShadow: "0px -2px 5px black",
          padding: "1%"
        }}
      >
        <Grid item xs={12} md={4} sx={{ padding: "4%" }}>
          <Stack spacing={2}>
            <img src={IMG_mainlogo} alt="footer-logo" />
            <Typography
              variant="h2"
              color="white"
              textAlign="center"
              sx={{ fontSize: "30px" }}
            >
              {Headliner}
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} md={12}>
          <Divider color="white"/>
          <Typography color="white">2022 Perpetual Staffing LLC</Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
