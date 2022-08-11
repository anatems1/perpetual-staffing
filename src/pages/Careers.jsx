import React from "react";
import CareersHeroSection from "../components/Careers/CareersHeroSection";
import CareersWorkWUS from "../components/Careers/CareersWorkWUS";
import CareersEducation from "../components/Careers/CareersEducation";
import CareerForm from "../components/Careers/CareersForm";

import Footer from "../components/Footer";

const Careers = () => {
  const colorBG = "#f5f5f5";
  const colorSEC = "dull.main";
  const colorH1 = "secondary.main";
  const grad1 = "linear-gradient(#6998DF, #f5f5f5)";
  const grad2 = "linear-gradient(#2c2c2c, #f5f5f5)";
  const colorDARK = "#2c2c2c";
  const BodyFontSize = { xs: "18px", md: "18px", lg: "30px" };
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
      <CareersEducation
        bgCOLOR={colorBG}
        secCOLOR={colorSEC}
        h1COLOR={colorH1}
        darkCOLOR={colorDARK}
        grad1={grad1}
        BodyFontSize={BodyFontSize}
      />
      <CareerForm
        bgCOLOR={colorBG}
        secCOLOR={colorSEC}
        h1COLOR={colorH1}
        darkCOLOR={colorDARK}
      />
      <Footer />
    </div>
  );
};

export default Careers;
