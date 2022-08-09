import React, { useState } from "react";
import { Box, TextField, Grid, Button } from "@mui/material";

const defaultValues = {
  name: "",
  email: "",
  phone: "",
  msg: "",
};

const ContactForm = () => {
  const [formValues, setFormValues] = useState(defaultValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
  };

  return (
    <div className="contactform-container">
      <Box sx={{ height: "100vh", width: "100%" }}>
        <form onSubmit={handleSubmit}>
          <Grid container>
            <Grid item sx={{ marginTop: "100px", padding: "30px" }}>
              <TextField
                label="Full Name"
                fullWidth
                autocomplete="none"
                value={formValues.name}
                onChange={handleInputChange}
              />
              <TextField
                label="Email"
                fullWidth
                autocomplete="none"
                value={formValues.email}
                onChange={handleInputChange}
              />
              <TextField
                label="Phone"
                fullWidth
                autocomplete="none"
                value={formValues.phone}
                onChange={handleInputChange}
              />
              <TextField
                label="Message"
                fullWidth
                multiline
                rows={5}
                autocomplete="none"
                value={formValues.msg}
                onChange={handleInputChange}
              />
              <Button type="submit">Submit</Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </div>
  );
};

export default ContactForm;
