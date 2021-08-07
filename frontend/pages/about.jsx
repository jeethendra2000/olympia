import { Typography, Grid } from "@material-ui/core";
import React from "react";
import AboutCard from "../components/AboutCard";

function about() {
  return (
    <div style={{ marginTop: "50px" }}>
      <Typography
        variant="h3"
        style={{ textAlign: "center", marginBottom: "40px" }}
      >
        Our Team
      </Typography>
      <Grid container spacing={6} style={{ marginBottom: "10px" }}>
        <Grid item xs={12} sm={6} md={3}>
          <AboutCard
            image="hhttp://127.0.0.1:8000/media/athleteImages/jeethendra.jpg"
            fullname="Jeethendra S R"
            work="Founder & Developer"
            bio="I am a passionate programmer, interested in problem solving and to work on upcomming technologies"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <AboutCard
            image="https://picsum.photos/200"
            fullname="Monika B A"
            work="Founder & Developer"
            bio="I am an active learner, student at Government Engineeering College, Hassan"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <AboutCard
            image="https://picsum.photos/200"
            fullname="Ambika"
            work="Developer"
            bio="I am an active learner, student at Government Engineeering College, Hassan"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <AboutCard
            image="https://picsum.photos/200"
            fullname="Chandana M V"
            work="Developer"
            bio="I am an active learner, student at Government Engineeering College, Hassan"
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default about;
