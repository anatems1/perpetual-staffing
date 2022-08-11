import React, { useState, useRef } from "react";
import {
  Box,
  Typography,
  Paper,
  Grid,
  Button,
  Divider,
  Stack,
  TextField,
} from "@mui/material";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

//For form
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

//import for emailjs
//import emailjs from "emailjs-com";

const CareerForm = (props) => {
  const bg_color = props.bgCOLOR;
  const sec_color = props.secCOLOR;
  const h1_color = props.h1COLOR;
  const dark_color = props.darkCOLOR;
  // const _grad1 = props.grad1;

  //for form stuff
  const form = useRef();

  const [careerType, setCareerType] = useState("education");
  const [fullName, setName] = useState("");
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [msg, setMsg] = useState();

  //sendEmail
  const sendEmail = (e) => {
    e.preventDefault();

    // emailjs
    //   .sendForm(
    //     "service_g5w4xw4",
    //     "template_b1ugqyj",
    //     form.current,
    //     "1zMuudcNjDesGZBEl"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );

    setCareerType("education");
    setName("");
    setEmail("");
    setPhoneNumber("");
    setMsg("");
  };

  return (
    <div className="career-form-conatiner">
      <Box sx={{ display: "flex", paddingLeft:"5%", paddingBottom: "5%" }}>
        <KeyboardDoubleArrowDownIcon
          sx={{
            height: { md: 50, xs: 30 },
            width: { md: 60, xs: 30 },
            color: dark_color,
          }}
        />
        <Typography variant="h2" sx={{ fontSize: { xs: 25, md: 30, lg: 50 }, color: dark_color }}> Apply Below</Typography>
      </Box>
      {/* FORM FOR CAREERS */}
      <Paper
        sx={{
          padding: "5%",
          backgroundColor: sec_color,
          maxWidth: "100%",
          maxHeight: "max-content",
          zIndex: 2,
        }}
      >
        <Grid container>
          <Grid item xs={0} lg={2} />
          <Grid
            item
            xs={12}
            lg={8}
            sx={{ backgroundColor: bg_color, padding: "5%" }}
          >
            <form onSubmit={sendEmail} ref={form}>
              <Stack direction="column" spacing={2}>
                {/* SELECT SERVICE */}
                <Typography
                  variant="h2"
                  color={h1_color}
                  sx={{ fontSize: { xs: "20px", md: "40px" } }}
                >
                  Select Career
                </Typography>
                <Divider />
                <Box>
                  <FormControl>
                    <RadioGroup
                      aria-labelledby="demo-controlled-radio-buttons-group"
                      name="controlled-radio-buttons-group"
                      value={careerType}
                      onChange={(e) => setCareerType(e.target.value)}
                    >
                      <FormControlLabel
                        value="education"
                        control={<Radio />}
                        label="Education"
                      />
                      <FormControlLabel
                        value="residential-aide"
                        control={<Radio />}
                        label="Residential Aide"
                      />
                    </RadioGroup>
                  </FormControl>
                </Box>

                {/* CONTACT INFORMATION */}
                <Typography
                  variant="h2"
                  color={h1_color}
                  sx={{ fontSize: { xs: "20px", md: "40px" } }}
                >
                  Contact Information
                </Typography>
                <Divider />
                <TextField
                  label="Full Name"
                  fullWidth
                  autoComplete="name"
                  name="name"
                  value={fullName}
                  onChange={(e) => setName(e.target.value)}
                />
                <TextField
                  label="Email"
                  type="email"
                  fullWidth
                  autoComplete="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  label="Phone"
                  fullWidth
                  autoComplete="tel"
                  name="phone"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />

                {/* DETAILS OF APPLICATION */}
                <Typography
                  variant="h2"
                  color={h1_color}
                  sx={{ fontSize: { xs: "20px", md: "40px" } }}
                >
                  Details of Application
                </Typography>
                <Divider />
                <TextField
                  label="Additional Information"
                  fullWidth
                  multiline
                  rows={5}
                  autoComplete="none"
                  name="msg"
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                />

                <Button
                  variant="contained"
                  type="submit"
                  sx={{ width: {xs:"100%", xl:"25%"}, color: dark_color }}
                >
                  <Typography
                    variant="h2"
                    sx={{ color: dark_color, fontSize: "18px" }}
                  >
                    Send Application
                  </Typography>
                </Button>
              </Stack>
            </form>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default CareerForm;
