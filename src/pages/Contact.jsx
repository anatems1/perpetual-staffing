import React from "react";
import Footer from "../components/Footer";
import ContactForm from "../components/Contact/ContactForm";
import ContactHero from "../components/Contact/ContactHero";

const Contact = () => {
  const colorBG = "#f5f5f5";
  const colorSEC = "dull.main";
  const colorH1 = "secondary.main";
  const grad1 = "linear-gradient(#6998DF, #f5f5f5)";
  //const grad2 = "linear-gradient(#2c2c2c, #f5f5f5)";
  const colorDARK = "#2c2c2c";
  const BodyFontSize = { xs: "18px", md: "18px", lg: "18px" };
  //primary: #53C3A1
  //secondary: #6998DF

  return (
    <div>
      <ContactHero
        bgCOLOR={colorBG}
        secCOLOR={colorSEC}
        h1COLOR={colorH1}
        darkCOLOR={colorDARK}
        grad1={grad1}
      />
      <ContactForm
        bgCOLOR={colorBG}
        secCOLOR={colorSEC}
        h1COLOR={colorH1}
        darkCOLOR={colorDARK}
        grad1={grad1}
        BodyFontSize ={BodyFontSize}
      />
      <Footer />
    </div>
  );
};

export default Contact;
