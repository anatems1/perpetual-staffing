import { Typography } from "@mui/material";
import React from "react";
import "./HomeMission.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
//import { useRef, useLayoutEffect, useState } from "react";

//importing images
import IMG_office from "../../images/home/office.png";
import IMG_blob from "../../images/home/teal-blob.svg";

function HomeMission() {
//   const targetRef = useRef();
//   const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

//   useLayoutEffect(() => {
//     if (targetRef.current) {
//       setDimensions({
//         width: targetRef.current.offsetWidth + 25,
//         height: targetRef.current.offsetHeight,
//       });
//     }
//   }, []);

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
          <Box
            sx={{
              height: { xs: "200px", md: "400px" },
              paddingTop: "10vh",
              position: "relative",
            }}
          >
            <img
              src={IMG_office}
              alt="office"
              id="office"
              className="img-container-child"
            />
            <img
              src={IMG_blob}
              alt="blob"
              id="blob"
              className="img-container-child"
            />
          </Box>
        </Grid>

        {/* Holds Mission Statement */}
        <Grid item md={8} xs={12}>
          <Box
            sx={{
              backgroundColor: "neutral",
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
