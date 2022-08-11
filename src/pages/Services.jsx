import React from "react";
import ServicesHero from "../components/ClientServices/ServicesHero";
import ServicesRequest from "../components/ClientServices/ServicesRequest";
import Footer from "../components/Footer";

const Services = () => {
  const colorBG = "#f5f5f5";
  const colorSEC = "dull.main";
  const colorH1 = "secondary.main";
  const grad1 = "linear-gradient(#53C3A1, #f5f5f5)";
  //   const grad2 = "linear-gradient(#2c2c2c, #f5f5f5)";
  const colorDARK = "#2c2c2c";
  //   const BodyFontSize = { xs: "18px", md: "18px", lg: "30px" };
  //primary: #53C3A1
  //secondary: #6998DF

  return (
    <div>
      <ServicesHero
        bgCOLOR={colorBG}
        secCOLOR={colorSEC}
        h1COLOR={colorH1}
        darkCOLOR={colorDARK}
        grad1={grad1}
      />
      <ServicesRequest
        bgCOLOR={colorBG}
        secCOLOR={colorSEC}
        h1COLOR={colorH1}
        darkCOLOR={colorDARK}
        grad1={grad1}
      />
      <Footer />
    </div>
  );
};

export default Services;
