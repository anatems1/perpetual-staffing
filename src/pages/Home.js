import * as React from "react";
import "./Home.css";
import HomeHeroSection from "../components/HomeHeroSection";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";


//importing images
import IMG_blueblob from "../images/home/blue-blob.svg";
import IMG_tealblob from "../images/home/teal-blob.svg";

const Home = () => {
  return (
    <div className="home-container">
      <Container sx={{ display: { xs: "none", md: "flex" } }}>
        <img src={IMG_blueblob} alt="blob-blue" id="blob-blue" />
        <img src={IMG_tealblob} alt="blob-teal" id="blob-teal" />
      </Container>

      <HomeHeroSection />
      <Box
        className="home-mission"
        sx={{ backgroundColor: "#FFFFFF", width: "100%", margin: 0 }}
      >
        <h1>Test</h1>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </Box>
    </div>
  );
};

export default Home;
