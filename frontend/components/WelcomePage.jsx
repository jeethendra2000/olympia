import React from "react";
import styles from "../styles/Home.module.css";
import { Box, Button, Grid, Typography } from "@material-ui/core";
import Image from "next/image";

function WelcomePage() {
  return (
    <div style={{ paddingTop: "45px", paddingBottom: "35px" }}>
      <Box>
        <Grid
          container
          alignItems="center"
          spacing={2}
          className={styles.welcomeImage}
        >
          <Grid item xs={12} sm={12} md={6}>
            <Image src="/olympics.png" height={800} width={800} alt="olympia"/>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Typography variant="h2" color="textPrimary">
              Welcome to Olympia
            </Typography>
            <Typography variant="h6" color="textSecondary" gutterBottom>
              <q>
                Olympia is a platform which provide information about Indian
                players who achieved a medal at olympics
              </q>
            </Typography>
            <Button
              variant="contained"
              style={{
                textTransform: "capitalize",
                backgroundColor: "#f17187",
                color: "white",
                marginTop: "50px",
              }}
            >
              Getting started
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default WelcomePage;
