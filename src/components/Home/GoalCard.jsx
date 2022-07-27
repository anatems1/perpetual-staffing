import React from "react";
import { Box, Paper } from "@mui/material";
import { Typography } from "@mui/material";

function GoalCard(props) {
  const _goalIMG = props.goalIMG;
  const _goalTXT = props.goalTXT;

  return (
    <div>
      <Paper
        sx={{
          padding: { xs: "5% 10% 5% 10%", md: "5%" },
          height: {xs: "300px", md: "350px"},
          border: "1px solid #2c2c2c",
          borderRadius: "10px",
          backgroundColor: "rgba(255, 255, 255, 0.4)"
        }}
      >
        <Box sx={{ height: "150px", marginBottom: "20px" }}>
          <img src={_goalIMG} alt="goals-card-img" />
        </Box>
        <Typography sx={{ textAlign: "center", fontSize: {xs: "15px", md:"16px", lg:"25px"} }}>{_goalTXT}</Typography>
      </Paper>
    </div>
  );
}

export default GoalCard;
