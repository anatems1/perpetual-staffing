import React from "react";
import CareersHeroSection from "../components/Careers/CareersHeroSection";
import CareersWorkWUS from "../components/Careers/CareersWorkWUS";

const Careers = () => {
  const colorBG = "#f5f5f5";
  const colorSEC = "dull.main";
  const colorH1 = "secondary.main";
  const grad1 = "linear-gradient(#6998DF, #f5f5f5)";
  const grad2 = "linear-gradient(#2c2c2c, #f5f5f5)";
  const colorDARK = "#2c2c2c";
  //primary: #53C3A1
  //secondary: #6998DF

  return (
    <div>
      <CareersHeroSection
        bgCOLOR={colorBG}
        secCOLOR={colorSEC}
        h1COLOR={colorH1}
        darkCOLOR={colorDARK}
        grad1={grad1}
      />
      <CareersWorkWUS
        bgCOLOR={colorBG}
        secCOLOR={colorSEC}
        h1COLOR={colorH1}
        darkCOLOR={colorDARK}
        grad2={grad2}
      />
    </div>
  );
};

export default Careers;
