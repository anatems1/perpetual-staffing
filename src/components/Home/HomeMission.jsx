import { Typography } from "@mui/material";
import React from "react";
import "./HomeMission.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TwoStackImages from "../TwoStackImages";

//importing images
import IMG_office from "../../images/home/office.png";
import IMG_blob from "../../images/home/blue-blob.svg";

function HomeMission() {

  return (
    <div className="mission-container">
      <Grid
        container
        sx={{
          backgroundColor: "#f5f5f5",
          zIndex: -4,
        }}
      >
        {/* Holds image */}
        <Grid item md={4} xs={12}>
          <TwoStackImages
            topIMG={IMG_office}
            bottIMG={IMG_blob}
            xsSize="300px"
            mdSize="400px"
            mgTOP = "75px"
          />
        </Grid>

        {/* Holds Mission Statement */}
        <Grid item md={8} xs={12}>
          <Box
            sx={{
              padding: "10%",
              marginTop: { xs: "5vh", md: "0" },
            }}
          >
            <Paper
              elevation={6}
              sx={{
                backgroundColor: "dull.main",
                padding: "5%",
                maxWidth: "90%",
                maxHeight: "max-content",
                zIndex: 2,
              }}
            >
              <Typography variant="h4">Our Mission</Typography>
              <br />
              <Typography variant="h5">
                Perpetual Staffing is devoted to ensuring workers and clients
                encounter a positive and memorable experience. Our mission is to
                construct a foundation of quality individuals, that have the
                opportunity to work through an organization that values their
                efforts and needs. With a carefully selected and esteemed
                workforce, Perpetual Staffing is confident in its ability to
                administer finer staffing services while significantly reducing
                attrition.
              </Typography>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default HomeMission;
