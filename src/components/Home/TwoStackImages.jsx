import React from "react";
import Box from "@mui/material/Box";
import "./TwoStackImages.css";

function TwoStackImages(props) {
  const top_img = props.topIMG;
  const bott_img = props.bottIMG;
  const xs_height = props.xsHeight;
  const pad_all = props.padALL;

  return (
    <Box
      sx={{
        position: "relative",
        height: { xs: xs_height, md: "90%" },
        marginLeft: {xs: 0, md: pad_all},
        marginTop: {xs: pad_all, md: 0},
        width: "100%",
      }}
    >
      <Box
        className="img-container"
        id="topIMG"
        sx={{ position: "absolute", bottom: 0 }}
      >
        <img src={top_img} alt="twoStack_top" />
      </Box>
      <Box
        className="img-container"
        id="bottIMG"
        sx={{ position: "absolute", bottom: 0 }}
      >
        <img src={bott_img} alt="towStack_bott" />
      </Box>
    </Box>
  );
}

export default TwoStackImages;
