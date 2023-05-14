import React from "react";
import { makeStyles } from "@mui/styles";
import {
  AppBar,
  Box,
  Container,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";

const useStyles = makeStyles((theme) => ({
  hero: {
    height: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`,
    display: "flex",
    alignItems: "center",
    backgroundColor: "#effafa",
  },
}));

const Hero = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.hero}>
        <Container>
          <Grid container>
            <Grid item xs={12} md={6}>
              <Typography variant="h2" gutterBottom={2} component="h1">
                I am
              </Typography>
              <Typography variant="h3" gutterBottom={2} component="h1">
                Javascript developer
              </Typography>
              <Typography variant="body1" component="h1">
                Harness the power of cutting-edge technologies and a versatile
                skill set to create exceptional web applications that drive
                success. Specializing in React, Redux, and JavaScript
                development, with expertise in Node.js, Express, and MongoDB, I
                bring a holistic approach to web development. With a background
                in graphic design, I excel at crafting visually captivating
                layouts that seamlessly blend form and function. Embrace
                innovation and elevate your online presence with my dynamic and
                user-centric solutions.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default Hero;
