import React from "react";
import Link from "next/link";
import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
  Typography,
} from "@material-ui/core";

import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import PhoneIcon from '@material-ui/icons/Phone';
import InfoIcon from '@material-ui/icons/Info';
import WifiTetheringIcon from '@material-ui/icons/WifiTethering';
import {FaMedal} from 'react-icons/fa';

const useStyles = makeStyles((theme) => ({
  list: {
    width: 220,
  },
  fullList: {
    width: "auto",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "black",
  },
  logoIcon: { display: "flex" },
  logoTitle: {
    paddingTop: "10px",
    paddingLeft: "5px",
  },
  menu: {
    color: "#101010",
    marginLeft: "12px",
  },
}));

function Sidebar() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <div>
      <IconButton
        edge="start"
        className={classes.menuButton}
        aria-label="menu"
        onClick={() => {
          setOpen(true);
        }}
      >
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        anchor="left"
        open={open}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
      >
        <div className={classes.list}>
          {/* brand logo */}

          <Link href="/">
            <a>
              <Box
                className={classes.logoIcon}
                p={1}
                onClick={() => {
                  setOpen(false);
                }}
              >
                <Typography variant="h5" className={classes.logoTitle}>
                  Olympia
                </Typography>
              </Box>
            </a>
          </Link>
          <Divider />

          {/* menu items */}
          <List>
            <Link href="/">
              <a>
                <ListItem
                  button
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <ListItemIcon>
                    <HomeIcon className={classes.menu} />
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItem>
              </a>
            </Link>
            <Link href="/liveUpdates">
              <a>
                <ListItem
                  button
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <ListItemIcon>
                    <WifiTetheringIcon className={classes.menu} />
                  </ListItemIcon>
                  <ListItemText primary="Live-Updates" />
                </ListItem>
              </a>
            </Link>
            <Link href="/indianAchievers">
              <a>
                <ListItem
                  button
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <ListItemIcon>
                    <FaMedal className={classes.menu} />
                  </ListItemIcon>
                  <ListItemText primary="Achievers" />
                </ListItem>
              </a>
            </Link>
            <Link href="/ContactUs">
              <a>
                <ListItem
                  button
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <ListItemIcon>
                    <PhoneIcon className={classes.menu} />
                  </ListItemIcon>
                  <ListItemText primary="Contact" />
                </ListItem>
              </a>
            </Link>
            <Link href="/about">
              <a>
                <ListItem
                  button
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <ListItemIcon>
                    <InfoIcon className={classes.menu} />
                  </ListItemIcon>
                  <ListItemText primary="About" />
                </ListItem>
              </a>
            </Link>

          </List>
        </div>
      </SwipeableDrawer>
    </div>
  );
}
export default Sidebar;
