import { Typography } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TwoStackImages from "./TwoStackImages";

//importing images
import IMG_office from "../../images/home/office.svg";
import IMG_blob from "../../images/home/blue-blob.svg";

function HomeMission(props) {
  const bg_color = props.bgCOLOR;
  const sec_color = props.secCOLOR;
  const h1_color = props.h1COLOR;
  //const _grad1 = props.grad1;

  return (
    <div className="mission-container">
      <Grid
        container
        sx={{
          backgroundColor: bg_color,
          zIndex: -4,
        }}
      >
        {/* Holds image */}
        <Grid item md={4} xs={12}>
          <TwoStackImages
            topIMG={IMG_office}
            bottIMG={IMG_blob}
            xsHeight="200px"
            padALL="10%"
          />
        </Grid>

        {/* Holds Mission Statement */}
        <Grid item md={8} xs={12}>
          <Box
            sx={{
              padding: "10%",
            }}
          >
            <Typography variant="h2" sx={{ color: h1_color }}>
              Our Mission
            </Typography>
            <br/>
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

              <Typography variant="h5" sx={{fontSize: {xs: "18px", md:"18px", lg: "30px"}}}>
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
