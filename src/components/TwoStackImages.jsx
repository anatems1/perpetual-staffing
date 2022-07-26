import React from "react";
import Box from "@mui/material/Box";
import "./TwoStackImages.css";

function TwoStackImages(props) {
  const top_img = props.topIMG;
  const bott_img = props.bottIMG;
  const xs_size = props.xsSize;
  const md_size = props.mdSize;
  const mg_top = props.mgTOP;

  return (
    <Box
      sx={{
        height: {xs: xs_size, md: md_size},
        marginTop: mg_top,
        position: "relative"
      }}
    >
      <img src={top_img} alt="twoStack_top" className="img-container" id="topIMG"/>
      <img src={bott_img} alt="towStack_bott" className="img-container" id="bottIMG"/>
    </Box>
  );
}

export default TwoStackImages;
