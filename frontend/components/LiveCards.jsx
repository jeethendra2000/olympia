import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid, Box } from "@material-ui/core";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  customBox1: {
    display: "-webkit-box",
    boxOrient: "vertical",
    lineClamp: 3,
    wordBreak: "break-all",
    overflow: "hidden",
  },
  customBox: {
    display: "-webkit-box",
    boxOrient: "vertical",
    lineClamp: 2,
    wordBreak: "break-all",
    overflow: "hidden",
  },
});

function LiveCards({ title, description, url, name, imageUrl }) {
  const classes = useStyles();
  return (
    <div>
      <Link href={String(url)}>
        <a>
          <Card elevation={5} className={classes.root}>
            <CardActionArea>
              <Grid container>
                <Grid item xs={4} sm={12} md={12}>
                  <CardMedia
                    className={styles.liveCard}
                    image={imageUrl}
                    // title="Contemplative Reptile"
                  ></CardMedia>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <CardContent>
                    <Box
                      fontSize="h5.fontSize"
                      component="div"
                      classes={{ root: classes.customBox }}
                    >
                      <Typography variant="h6">{title}</Typography>
                    </Box>

                    <Box
                      fontSize="h5.fontSize"
                      component="div"
                      classes={{ root: classes.customBox }}
                    >
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {description}
                      </Typography>
                    </Box>
                  </CardContent>
                </Grid>
              </Grid>
            </CardActionArea>
            <CardActions>
              <Typography variant="subtitle1">-{name}</Typography>
            </CardActions>
          </Card>
        </a>
      </Link>
    </div>
  );
}

export default LiveCards;
