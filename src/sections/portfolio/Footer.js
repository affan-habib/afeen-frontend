import React from "react";
import { makeStyles } from "@mui/styles";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import { GitHub, LinkedIn, Twitter } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    boxShadow: "none",
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h4" className={classes.root}>
            Affan Habib
          </Typography>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="GitHub"
            sx={{ margin: "0 4px" }}
            component="a"
            href="https://github.com/affan-habib"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub />
          </IconButton>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="LinkedIn"
            sx={{ margin: "0 4px" }}
            component="a"
            href="https://linkedin.com/in/affanhabib"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn />
          </IconButton>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="Twitter"
            sx={{ margin: "0 4px" }}
            component="a"
            href="https://twitter.com/affan_Js_dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Footer;
