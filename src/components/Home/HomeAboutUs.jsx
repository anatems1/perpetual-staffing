import React from "react";
import { Grid, Box, Paper, Typography } from "@mui/material";

function HomeAboutUs(props) {
  const bg_color = props.bgCOLOR;
  const sec_color = props.secCOLOR;
  const h1_color = props.h1COLOR;

  return (
    <div className="about-container">
      <Grid container sx={{backgroundColor: bg_color}}>
        <Grid item xs={12} md={12}>
          <Box
            sx={{
              padding: {xs:"10%", md:"5%"}
            }}
          >
            <Typography variant="h2" sx={{ color: h1_color }}>
              About Us
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
              <Typography variant="h" sx={{fontSize: {xs: "18px", md:"18px", lg:"30px"}}}>
                Perpetual Staffing is a regional educational and residential
                aide staffing organization, comitted to assisting schools and
                health facilities with experienced and eager workers. We
                differentiate ourselves from other staffing companies by
                regularly valuing and acknowledging workers' needs. Without
                people, there is no organization.
              </Typography>
            </Paper>
          </Box>
        </Grid>

      </Grid>
    </div>
  );
}

export default HomeAboutUs;
