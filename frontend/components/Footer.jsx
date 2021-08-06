import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
    Avatar,
    Box,
    Button,
    Divider,
    IconButton,
    Grid,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
  } from "@material-ui/core";
  import Image from "next/image";

const useStyles = makeStyles((theme) => ({}));

function Footer() {
  const classes = useStyles();

  return (
    <footer>
      <Box>
          <Grid container>
              <Grid item xs={4} sm={4} md={12}></Grid>
              <Grid item xs={4} sm={4} md={12}></Grid>
              <Grid item xs={4} sm={4} md={12}></Grid>
          </Grid>
      </Box>
    </footer>
  );
}

export default Footer;
