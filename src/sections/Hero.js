import React from "react";
import { makeStyles } from "@mui/styles";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";

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
        <Box m={2}>
          <Typography variant="h3" component="h1">
            Javascript Developer
          </Typography>
          <Typography variant="body" component="h1">
            Hero Component
          </Typography>
          <Typography variant="h3" component="h1">
            Hero Component
          </Typography>
        </Box>
      </div>
    </div>
  );
};

export default Hero;
