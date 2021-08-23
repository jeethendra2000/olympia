import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Hidden, Box, Link } from "@material-ui/core";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Sidebar from "./Sidebar";
import Image from 'next/image';

const useStyles = makeStyles((theme) => ({
  mon: {
    color: "red",
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "black",
  },
  title: {
    color: "black",
  },
  bgColor: {
    backgroundColor: "#A231C7",
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" style={{ backgroundColor: "#FFBF00" }}>
        <Toolbar>
          <Hidden mdUp>
            <Sidebar/>
          </Hidden>
          <Image src="/olympia.png" height={40} width={40} alt="olympia" />
          <Typography variant="h4" style={{ color: "black", flexGrow: "1", marginLeft:"5px" }}>
            Olympia
          </Typography>
          <Hidden smDown>
          <List component="nav" style={{ display: "flex", color: "black" }}>
            <ListItem button>
              <Link href="/" style={{ textDecoration: "none", color: "black" }}>
                <ListItemText primary="Home" />
              </Link>
            </ListItem>
            <ListItem button>
              <Link
                href="/liveUpdates"
                style={{ textDecoration: "none", color: "black" }}
              >
                <ListItemText primary="Live" />
              </Link>
            </ListItem>
            <ListItem button>
              <Link
                href="/indianAchievers"
                style={{ textDecoration: "none", color: "black" }}
              >
                <ListItemText primary="Achievers" />
              </Link>
            </ListItem>
            <ListItem button>
              <Link
                href="/ContactUs"
                style={{ textDecoration: "none", color: "black" }}
              >
                <ListItemText primary="Contact" />
              </Link>
            </ListItem>

            <ListItem button>
              <Link
                href="/about"
                style={{ textDecoration: "none", color: "black" }}
              >
                <ListItemText primary="About" />
              </Link>
            </ListItem>
          </List>
          </Hidden>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
