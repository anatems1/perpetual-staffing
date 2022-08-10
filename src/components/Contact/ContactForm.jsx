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
              padding: { xs: "20px", md: "50px", lg: "100px" },
            }}
          >
            {/* Information about us */}
            <Grid item xs={12} md={6} sx={{ paddingRight: {md:"100px"},marginBottom: {xs: "50px"}, transform: {md:"translateY(20%)"} }}>
              <Paper
                elevation={6}
                sx={{
                  backgroundColor: bg_color,
                  padding: "5%",
                  maxWidth: "90%",
                  maxHeight: "max-content",
                  zIndex: 2,
                }}
              >
                {/* Stack for company information */}
                <Stack direction="column" spacing={2}>
                  <Typography variant="h2" sx={{ fontSize: "30px" }}>
                    Pertpetual Staffing LLC.
                  </Typography>
                  <Stack direction="row" spacing={2}>
                    <RoomIcon />
                    <Stack direction="column">
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
                <Stack direction="column" spacing={2}>
                  <Typography
                    variant="h2"
                    sx={{ color: dark_color, fontSize: "30px" }}
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
                    autocomplete="none"
                    name="name"
                    value={fullName}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <TextField
                    label="Email"
                    type="email"
                    fullWidth
                    autocomplete="none"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <TextField
                    label="Phone"
                    fullWidth
                    autocomplete="none"
                    name="phone"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                  <TextField
                    label="Suggestions"
                    fullWidth
                    multiline
                    rows={5}
                    autocomplete="none"
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
