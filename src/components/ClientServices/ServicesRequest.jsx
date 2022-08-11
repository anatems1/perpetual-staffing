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
import TwoStackImages from "../Home/TwoStackImages";

//For form
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

//importing images
import IMG_business from "../../images/services/business.svg";
import IMG_blob from "../../images/services/grey-blob.svg";

//import for emailjs
//import emailjs from "emailjs-com";

const ServicesRequest = (props) => {
  const bg_color = props.bgCOLOR;
  const sec_color = props.secCOLOR;
  const h1_color = props.h1COLOR;
  const dark_color = props.darkCOLOR;
  const _grad1 = props.grad1;

  //for form stuff
  const form = useRef();

  const [careerType, setCareerType] = useState("education");
  const [position, setPositon] = useState("");
  const [desc, setDesc] = useState("");
  const [organizationName, setOrganizationName] = useState("");
  const [address, setAddress] = useState("");
  const [zip, setZIP] = useState("");
  const [fullName, setName] = useState("");
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState("")
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
    setPositon("");
    setDesc("");
    setOrganizationName("");
    setAddress("");
    setZIP("");
    setName("");
    setEmail("");
    setPhoneNumber("");
    setMsg("");
  };

  return (
    <div className="services-request-container">
      <Box sx={{ height: "20vh", width: "100%", background: _grad1 }} />
      <Grid container sx={{ backgroundColor: bg_color }}>
        <Grid item md={8} xs={12}>
          <Box sx={{ padding: "10%" }}>
            <Paper
              elevation={6}
              sx={{
                boxShadow: "-10px -10px #53C3A1",
                backgroundColor: sec_color,
                padding: "10%",
                maxWidth: "100%",
                maxHeight: "max-content",
                zIndex: 2,
              }}
            >
              <Typography
                variant="h2"
                sx={{ color: h1_color, fontSize: { xs: "20px", md: "40px" } }}
              >
                Reach Out!
              </Typography>
              <br />
              <Typography
                variant="h5"
                sx={{ fontSize: { xs: "18px", md: "18px", lg: "30px" } }}
              >
                Are you looking for an organization that provides well rounded
                and reliable workers? Contact us to receive assistance in
                finding individuals ready to take on a challenge! Please fill
                out the fields below and we will contact you shortly.
              </Typography>
            </Paper>
          </Box>
        </Grid>

        {/* Holds Image */}
        <Grid item md={4} xs={12} sx={{ marginBottom: { xs: "50px" } }}>
          <TwoStackImages
            topIMG={IMG_business}
            bottIMG={IMG_blob}
            xsHeight="200px"
            padALL="0%"
          />
        </Grid>
      </Grid>

      {/* FORM FOR CLIENT SERVICES */}
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
                  Select Service
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

                {/* Position Description*/}
                <Typography
                  variant="h2"
                  color={h1_color}
                  sx={{ fontSize: { xs: "20px", md: "40px" } }}
                >
                  Position/Description
                </Typography>
                <Divider />
                <Stack spacing={2}>
                  <TextField
                    label="Position"
                    autoComplete="none"
                    name="position"
                    value={position}
                    onChange={(e) => setPositon(e.target.value)}
                  />
                  <TextField
                    label="Job Description"
                    fullWidth
                    multiline
                    rows={5}
                    autoComplete="none"
                    name="msg"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                  />
                </Stack>

                {/* ORGANIZATION INFORMATION */}
                <Typography
                  variant="h2"
                  color={h1_color}
                  sx={{ fontSize: { xs: "20px", md: "40px" } }}
                >
                  Organization Information
                </Typography>
                <Divider />
                <Stack spacing={2}>
                  <TextField
                    label="Organization/Company Name"
                    autoComplete="none"
                    name="organizationName"
                    value={organizationName}
                    onChange={(e) => setOrganizationName(e.target.value)}
                  />
                  <TextField
                    label="Address"
                    autoComplete="address"
                    multiline
                    rows={3}
                    name="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  <TextField
                    label="ZIP or postal code"
                    autoComplete="postal-code"
                    name="zip"
                    value={zip}
                    onChange={(e) => setZIP(e.target.value)}
                  />
                </Stack>

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

                {/* DETAILS OF INQUIRY */}
                <Typography
                  variant="h2"
                  color={h1_color}
                  sx={{ fontSize: { xs: "20px", md: "40px" } }}
                >
                  Details of Inquiry
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
                    Send Inquiry
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

export default ServicesRequest;
