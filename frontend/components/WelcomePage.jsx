import React from "react";
import {
  Box,
  Button,
  Grid,
  Typography,
} from "@material-ui/core";
import Image from "next/image";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    flexDirection: "row-reverse",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "row",
    },
  },
}));
function WelcomePage() {
  const classes = useStyles();
  return (
    <div style={{ paddingTop: "45px", paddingBottom: "35px" }}>
      <Box>
        <Grid
          container
          alignItems="center"
          spacing={2}
          className={classes.gridContainer}
        >
          <Grid item xs={12} sm={12} md={6}>
            <Image src="/olympics(2).png" height={800} width={800} />
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
