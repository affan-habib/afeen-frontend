import React from "react";
import { makeStyles } from "@mui/styles";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    boxShadow: "none",
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            Affan Habib
          </Typography>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="Facebook"
            sx={{ margin: "0 4px" }}
          >
            <Facebook />
          </IconButton>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="linkedin"
            sx={{ margin: "0 4px" }}
          >
            <LinkedIn />
          </IconButton>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="Instagram"
            sx={{ margin: "0 4px" }}
          >
            <Instagram />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
