import React, { useRef, useState } from "react";
import {
  Box,
  TextField,
  Grid,
  Button,
  Paper,
  Typography,
  Stack,
  Link,
} from "@mui/material";

//icon imports
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import RoomIcon from "@mui/icons-material/Room";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

//import for emailjs
//import emailjs from "emailjs-com";

const ContactForm = (props) => {
  const bg_color = props.bgCOLOR;
  const sec_color = props.secCOLOR;
  const h1_color = props.h1COLOR;
  const dark_color = props.darkCOLOR;
  const _BodyFontSize = props.BodyFontSize;

  const [fullName, setName] = useState("");
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [msg, setMsg] = useState();

  const form = useRef();

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

    setName("");
    setEmail("");
    setPhoneNumber("");
    setMsg("");
  };

  return (
    <div className="contactform-container">
      <Box
        sx={{
          height: "max-content",
          width: "100%",
          backgroundColor: sec_color,
        }}
      >
        <form onSubmit={sendEmail} ref={form}>
          <Grid
            container
            sx={{
              padding: { xs: "20px", md: "50px", lg: "100px"},
              paddingBottom: {xs: "50px"}
            }}
          >
            {/* Information about us */}
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                paddingRight: { md: "100px" },
                marginBottom: { xs: "50px" },
                transform: { md: "" },
              }}
            >
              <Paper
                elevation={6}
                sx={{
                  boxShadow: "-10px -10px #53C3A1",
                  backgroundColor: bg_color,
                  padding: "5%",
                  maxWidth: "90%",
                  maxHeight: "max-content",
                  zIndex: 2,
                }}
              >
                {/* Stack for company information */}
                <Stack direction="column" spacing={2}>
                  <Typography variant="h2" sx={{ fontSize: "28px" }}>
                    Pertpetual Staffing LLC
                  </Typography>
                  <img alt='philly-map' src="https://www.google.com/maps/vt/data=LeVBnlH780NHBi12r6mvQu1-LhJwGu-jXZxn27JnvAEQwsLLY2I_3649pYUIxkQiMwsf5Hk5WZW7lPxXMtU5OuiTeJQfw59Gjh19swNdo1W9b3gqQnHp2ScKLAdxavzGjbKk7_fQW04Ms9rKIGYR0j5A7HcNGDL3UhKGQ89qPsz5tJ5C8UWW-m21_qgEnYNZDXGrlZOQ8NLMu38_hLeKjJJz-Dq_CCUd1PW84QVT4-7cWQU" />
                  <Typography
                    variant="h2"
                    color="primary.dark"
                    textAlign="center"
                    sx={{ fontSize: "20px" }}
                  >
                    Proudly Serving the Philadelphia Area
                  </Typography>
                  <Stack direction="row" spacing={2}>
                    <RoomIcon />
                    <Stack direction="column">
                      <Typography>Headquarters</Typography>
                      <Typography>XXXX _____ st.</Typography>
                      <Typography>Pittsburgh, PA 15213</Typography>
                    </Stack>
                  </Stack>
                  <Stack direction="row" spacing={2}>
                    <AttachEmailIcon />
                    <Typography>info@perpetualstaffing.com</Typography>
                  </Stack>
                  <Stack direction="row" spacing={2}>
                    <LocalPhoneIcon />
                    <Typography>+1 (XXX)-XXX-XXXX</Typography>
                  </Stack>
                  <Stack direction="row" spacing={2}>
                    <LinkedInIcon />
                    <Typography>
                      <Link color={h1_color}>Connect with us on LinkedIn</Link>
                    </Typography>
                  </Stack>
                </Stack>
              </Paper>
            </Grid>

            {/* Suggestion form */}
            <Grid item xs={12} md={6}>
              <Paper
                elevation={6}
                sx={{
                  boxShadow: "-10px -10px #53C3A1",
                  backgroundColor: bg_color,
                  padding: "5%",
                  maxWidth: "90%",
                  maxHeight: "max-content",
                  zIndex: 2,
                }}
              >
                <Stack direction="column" spacing={3}>
                  <Typography
                    variant="h2"
                    sx={{
                      color: dark_color,
                      fontSize: "28px",
                      paddingBottom: "10px",
                    }}
                  >
                    How Can We Improve?
                  </Typography>

                  <Typography variant="h5" sx={{ fontSize: _BodyFontSize }}>
                    Perpetual Staffing believes that it's important to take into
                    account of workers' and clients' suggestions for
                    improvement. We are always looking to expand and improve our
                    processes, which is why we are eager to hear from you.
                    Please fill out the form below with your suggestions and
                    we'll have a representative contact you if requested.
                  </Typography>

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
                  <TextField
                    label="Suggestions"
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
                    sx={{ width: "25%", color: dark_color }}
                  >
                    <Typography
                      variant="h2"
                      sx={{ color: dark_color, fontSize: "18px" }}
                    >
                      Send
                    </Typography>
                  </Button>
                </Stack>
              </Paper>
            </Grid>
          </Grid>
        </form>
      </Box>
    </div>
  );
};

export default ContactForm;
