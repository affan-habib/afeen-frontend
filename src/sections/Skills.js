import React from "react";
import { makeStyles } from "@mui/styles";
import { Container, Grid, Typography } from "@mui/material";
import JavaScriptIcon from "@mui/icons-material/Code";
import HTMLIcon from "@mui/icons-material/Code";
import CSSIcon from "@mui/icons-material/Code";
import ReactIcon from "@mui/icons-material/Code";
import SvelteIcon from "@mui/icons-material/Code";
import ReduxIcon from "@mui/icons-material/Code";

const useStyles = makeStyles((theme) => ({
  skills: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: `calc(100vh - ${0}px)`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  skill: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.paper,
    transition: "background-color 0.3s ease",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
    height: 150,
  },
  icon: {
    fontSize: 48,
    marginBottom: theme.spacing(2),
  },
}));

const SkillsSection = () => {
  const classes = useStyles();

  return (
    <Container className={classes.skills}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <div className={classes.skill}>
            <JavaScriptIcon className={classes.icon} />
            <Typography variant="h6">JavaScript</Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={3}>
          <div className={classes.skill}>
            <HTMLIcon className={classes.icon} />
            <Typography variant="h6">HTML</Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={3}>
          <div className={classes.skill}>
            <CSSIcon className={classes.icon} />
            <Typography variant="h6">CSS</Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={3}>
          <div className={classes.skill}>
            <ReactIcon className={classes.icon} />
            <Typography variant="h6">React</Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={3}>
          <div className={classes.skill}>
            <SvelteIcon className={classes.icon} />
            <Typography variant="h6">Svelte</Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={3}>
          <div className={classes.skill}>
            <ReduxIcon className={classes.icon} />
            <Typography variant="h6">Redux</Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={3}>
          <div className={classes.skill}>
            <ReduxIcon className={classes.icon} />
            <Typography variant="h6">Node Js</Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={3}>
          <div className={classes.skill}>
            <ReduxIcon className={classes.icon} />
            <Typography variant="h6">MongoDB</Typography>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SkillsSection;
