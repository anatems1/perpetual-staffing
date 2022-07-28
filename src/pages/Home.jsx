import * as React from "react";
import "./Home.css";
import HomeHeroSection from "../components/Home/HomeHeroSection";
import HomeMission from "../components/Home/HomeMission";
import HomeGoals from "../components/Home/HomeGoals";
import HomeAboutUs from "../components/Home/HomeAboutUs";
import Footer from "../components/Footer";

//importing images
//import IMG_blueblob from "../images/home/blue-blob.svg";
//import IMG_tealblob from "../images/home/teal-blob.svg";
//import IMG_minilogo from "../images/minilogo.png";

const Home = () => {
  const colorBG = "#f5f5f5";
  const colorSEC = "dull.main";
  const colorH1 = "secondary.main";
  const grad1 = "linear-gradient(#6998DF, #f5f5f5)";

  // const paperBG = "";
  // const blueLINE = "";
  // const redLINE = "";

  return (
    <div className="home-container">
      <HomeHeroSection bgCOLOR={colorBG} secCOLOR={colorSEC} h1COLOR={colorH1}/>
      <HomeMission bgCOLOR={colorBG} secCOLOR={colorSEC} h1COLOR={colorH1}/>
      <HomeGoals bgCOLOR={colorBG} secCOLOR={colorSEC} h1COLOR={colorH1} grad1={grad1}/>
      <HomeAboutUs bgCOLOR={colorBG} secCOLOR={colorSEC} h1COLOR={colorH1}/>
      <Footer/>
    </div>
  );
};

export default Home;
