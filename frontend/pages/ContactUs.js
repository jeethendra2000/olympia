import React, { useState } from "react";

import {
  Box,
  Card,
  CardContent,
  Button,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";

function ContactUs() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [fullNameError, setFullNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFullNameError(false);
    setEmailError(false);
    setMessageError(false);

    if (fullName == "") {
      setFullNameError(true);
    }
    if (email == "") {
      setEmailError(true);
    }
    if (message == "") {
      setMessageError(true);
    }

    if (fullName && email && message) {
      const response = await fetch(
        "https://olympia.pythonanywhere.com/contactUs/",
        {
          method: "POST",
          body: JSON.stringify({ fullName, email, message }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      alert("Submitted Successfully!");
      setFullName("");
      setEmail("");
      setMessage("");
    } else {
      alert("Check your credentials!");
    }
  };

  return (
    <div style={{ marginTop: "50px" }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} sm={12} md={5}>
          <Typography variant="h2" style={{ marginBottom: "20px" }}>
            Contact Us
          </Typography>
          <Typography variant="h6" style={{ marginBottom: "40px" }}>
            Feels like contacting us ?
            <br />
            Submit your queries here and we will get back to you as soon as
            possible.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={2}></Grid>
        <Grid item xs={12} sm={12} md={5}>
          <Card elevation={8} style={{ borderRadius: "35px" }}>
            <CardContent>
              <Grid
                justify="center"
                alignItems="center"
                direction="column"
                container
                spacing={3}
              >
                <Grid item>
                  <Typography variant="h5" style={{ marginBottom: "20px" }}>
                    Send us a message
                  </Typography>
                </Grid>
                <Grid item>
                  <form
                    noValidate
                    autoComplete="off"
                    style={{ textAlign: "center" }}
                    onSubmit={handleSubmit}
                  >
                    <TextField
                      onChange={(e) => setFullName(e.target.value)}
                      value={fullName}
                      error={fullNameError}
                      style={{
                        margin: "10px",
                        paddingRight: "20px",
                      }}
                      color="secondary"
                      label="Full Name"
                      variant="outlined"
                      fullWidth
                      required
                    />
                    <TextField
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      error={emailError}
                      style={{
                        margin: "10px",
                        paddingRight: "20px",
                      }}
                      color="secondary"
                      label="Email"
                      variant="outlined"
                      fullWidth
                      required
                    />
                    <TextField
                      onChange={(e) => setMessage(e.target.value)}
                      value={message}
                      error={messageError}
                      style={{
                        margin: "10px",
                        paddingRight: "20px",
                      }}
                      color="secondary"
                      label="Message"
                      variant="outlined"
                      multiline
                      rows={5}
                      fullWidth
                    />
                    <Button
                      variant="contained"
                      type="submit"
                      style={{
                        borderRadius: "20px",
                        marginTop: "20px",
                        marginBottom: "20px",
                        textTransform: "capitalize",
                        backgroundColor: "#f17187",
                        color: "white",
                      }}
                    >
                      Submit
                    </Button>
                  </form>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default ContactUs;
