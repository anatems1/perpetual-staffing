import React from "react";
import { Box } from "@mui/material";

function CareersWorkWUS(props) {
  //const bg_color = props.bgCOLOR;
  // const sec_color = props.secCOLOR;
  // const h1_color = props.h1COLOR;
  // const dark_color = props.darkCOLOR;
  // const _grad1 = props.grad1;
  const _grad2 = props.grad2;

  return (
    <div className="careers-workWUS">
      <Box
        sx={{
          height: "20vh",
          width: "100vw",
          background: _grad2
        }}
      ></Box>
    </div>
  );
}

export default CareersWorkWUS;
