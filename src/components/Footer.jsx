import React from "react";
import { Grid } from "@mui/material";

function Footer() {
  return (
    <div className="footer-container">
      <Grid
        container
        sx={{
          backgroundColor: "darkFooter.main",
          boxShadow: "0px -2px 5px black",
        }}
      >
        <Grid item xs={12} md={4}>
          <h1>Test</h1>
        </Grid>
        <Grid item xs={12} md={4}></Grid>
        <Grid item xs={12} md={4}></Grid>
      </Grid>
    </div>
  );
}

export default Footer;
