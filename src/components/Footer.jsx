import React from "react";
import { Grid, Stack, Typography, Divider, Link } from "@mui/material";

//icon imports
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import RoomIcon from "@mui/icons-material/Room";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

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
          padding: "1%",
        }}
      >
        {/* Logo and sloagan */}
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

        <Grid item xs={12} md={4} sx={{ padding: "4%" }}>
          <Stack direction="column" spacing={2}>
            <Stack direction="row" spacing={2}>
              <RoomIcon color="secondary"/>
              <Stack direction="column">
                <Typography color="white">Headquarters</Typography>
                <Typography color="white">239 4th Ave</Typography>
                <Typography color="white">Suite 1401 #2416</Typography>
                <Typography color="white">Pittsburgh, PA 15222</Typography>
              </Stack>
            </Stack>
            <Stack direction="row" spacing={2}>
              <AttachEmailIcon color="secondary"/>
              <Typography color="white">info@perpetualstaffing.com</Typography>
            </Stack>
            <Stack direction="row" spacing={2}>
              <LocalPhoneIcon color="secondary"/>
              <Typography color="white">+1 (XXX)-XXX-XXXX</Typography>
            </Stack>
            <Stack direction="row" spacing={2}>
              <LinkedInIcon color="secondary"/>
              <Typography>
                <Link>Connect with us on LinkedIn</Link>
              </Typography>
            </Stack>
          </Stack>
        </Grid>

        <Grid item xs={12} md={12}>
          <Divider color="white" />
          <Typography color="white">2022 Perpetual Staffing LLC | All Rights Reserved</Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
