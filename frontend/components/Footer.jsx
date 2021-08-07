import React from "react";
import styles from "../styles/Home.module.css";
import {
  Box,
  Divider,
  Container,
  Grid,
  Hidden,
  Link,
  Typography,
} from "@material-ui/core";

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer style={{ backgroundColor: "#FFBF00", paddingTop:"30px", marginTop:"50px"}}>
      <Container>
        <Box>
          <Grid container spacing={8} justifyContent="center">
            <Grid item xs={12} sm={12} md={4}>
              <Typography variant="h4" color="textPrimary" gutterBottom>
                Olympia
              </Typography>
              <Typography variant="subtitle2" color="textPrimary">
                <q>
                  Olympia is a platform which provide information about Indian
                  players who achieved a medal at olympics
                </q>
              </Typography>
            </Grid>
            <Grid item xs={6} sm={6} md={4}>
              <Typography variant="h6">Quick Links</Typography>
              <Typography
                variant="subtitle1"
                component={Link}
                href="/liveUpdates"
                style={{ color: "black", textDecoration: "none" }}
              >
                Live updates
              </Typography>
              <br />
              <Typography
                variant="subtitle1"
                component={Link}
                href="/indianAchievers"
                style={{ color: "black", textDecoration: "none" }}
              >
                Achievers
              </Typography>
              <br />
              <Typography
                variant="subtitle1"
                component={Link}
                href="/contactUs"
                style={{ color: "black", textDecoration: "none" }}
              >
                Contact Us
              </Typography>
              <br />
              <Typography
                variant="subtitle1"
                component={Link}
                href="/about"
                style={{ color: "black", textDecoration: "none" }}
              >
                About Us
              </Typography>
            </Grid>
            <Grid item xs={6} sm={6} md={4}>
              <Typography variant="h6">Follow Us</Typography>
              <Typography
                variant="subtitle1"
                component={Link}
                href="https://facebook.com"
                style={{ color: "black", textDecoration: "none" }}
              >
                Facebook
              </Typography>
              <br />
              <Typography
                variant="subtitle1"
                component={Link}
                href="https://instagram.com"
                style={{ color: "black", textDecoration: "none" }}
              >
                Instagram
              </Typography>
              <br />
              <Typography
                variant="subtitle1"
                component={Link}
                href="https://twitter.com"
                style={{ color: "black", textDecoration: "none" }}
              >
                Twitter
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Divider />
      <Container>
        <div className={styles.cpFooter}>
          <Typography variant="subtitle1">
            Copyright &copy; {currentYear} Olympia. 
            <Hidden smUp>
              <br />
            </Hidden>
            All Rights Reserved
          </Typography>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
