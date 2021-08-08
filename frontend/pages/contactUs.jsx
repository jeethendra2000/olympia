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

function contactUs() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) =>{
      e.preventDefault();
      
  }

  return (
    <div style={{ marginTop: "50px" }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} sm={12} md={5}>
          <Typography variant="h2" style={{ marginBottom: "20px" }}>
            Contact Us
          </Typography>
          <Typography variant="h6" style={{ marginBottom: "40px" }}>
            Feels like contacting us?
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

export default contactUs;
