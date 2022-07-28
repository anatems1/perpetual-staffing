import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import React from "react";
import { Box } from "@mui/material";
import GoalCard from "./GoalCard";
import Wave from "react-wavify";

//import images
import IMG_health from "../../images/home/health.svg";
import IMG_school from "../../images/home/school.svg";
import IMG_group from "../../images/home/group.svg";

function HomeGoals(props) {
  const bg_color = props.bgCOLOR;
  // const sec_color = props.secCOLOR;
  // const h1_color = props.h1COLOR;
  const _grad1 = props.grad1;

  //text for cards
  const health_txt =
    " Supporting nursing homes and other health institutions by providing qualified and friendly Residential Aides.";
  const school_txt =
    "Assist regional schools to maintain and develop their teaching environments with experienced and passionate Teacher Assistants.";
  const group_txt =
    "Establish an environment where workers feel valued and cared for.";

  return (
    <div className="goals-container">
      <Box sx={{backgroundColor: bg_color, display: "flex"}}>
        <Wave
          fill="#6998DF"
          paused={false}
          options={{ height: 20, amplitude: 50, speed: 0.15, points: 6 }}
        />
      </Box>
      <Grid container sx={{ background: _grad1, zIndex: -4, paddingTop: "5%" }}>
        <Grid item xs={12} md={12}>
          <Typography variant="h2" sx={{ textAlign: "left", color: "white", paddingLeft: "5%" }}>
            Company Goals
          </Typography>
        </Grid>

        <Grid item xs={12} md={4} sx={{ padding: "5%" }}>
          <GoalCard goalIMG={IMG_school} goalTXT={school_txt} />
        </Grid>

        <Grid item xs={12} md={4} sx={{ padding: "5%" }}>
          <GoalCard goalIMG={IMG_group} goalTXT={group_txt} />
        </Grid>

        <Grid item xs={12} md={4} sx={{ padding: "5%" }}>
          <GoalCard goalIMG={IMG_health} goalTXT={health_txt} />
        </Grid>
      </Grid>
    </div>
  );
}

export default HomeGoals;
