import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import { green, yellow, red, blue } from "@mui/material/colors";

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
          width: "100%",
          background: _grad2,
        }}
      ></Box>
      <Box sx={{ padding: {xs:"5% 5% 30% 5%", md:"5% 5% 5% 5%" }}}>
        <Stack direction="column" spacing={5}>
          <Typography variant="h3" sx={{fontSize: { xs: "40px", md: "50px" }}}>
            We'll pay for <b style={{color: "black"}}>clearances</b>
          </Typography>
          <Typography variant="h3" sx={{fontSize: { xs: "40px", md: "50px" }}}>
            Weekly <b style={{color: green[500]}}>compensation</b>
          </Typography>
          <Typography variant="h3" sx={{fontSize: { xs: "40px", md: "50px" }}}>
            Work at one set <b style={{color: blue[500]}}>location</b>
          </Typography>
          <Typography variant="h3" sx={{fontSize: { xs: "40px", md: "50px" }}}>
            Work for an organization that <b style={{color: red[500]}}>values</b> and <b style={{color: red[500]}}>understands</b> your needs
          </Typography>
          <Typography variant="h3" sx={{fontSize: { xs: "40px", md: "50px" }}}>
            <b style={{color: yellow[800]}}>Experience</b> services from a reliant workforce
          </Typography>
        </Stack>
      </Box>
    </div>
  );
}

export default CareersWorkWUS;
