import * as React from "react";
import "./Home.css";
import HomeHeroSection from "../components/Home/HomeHeroSection";
import HomeMission from "../components/Home/HomeMission";
import HomeGoals from "../components/Home/HomeGoals";

//importing images
//import IMG_blueblob from "../images/home/blue-blob.svg";
//import IMG_tealblob from "../images/home/teal-blob.svg";
//import IMG_minilogo from "../images/minilogo.png";

const Home = () => {
  return (
    <div className="home-container">
      <HomeHeroSection />
      <HomeMission />
      <HomeGoals />
    </div>
  );
};

export default Home;
