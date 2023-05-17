import React from "react";
import { makeStyles } from "@mui/styles";
import { Grid, Paper, Typography } from "@mui/material";
import { DesignServices, MobileFriendly, Web } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  hero: {
    height: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`,
    display: "flex",
    alignItems: "center",
  },
  skill: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    border: 1,
    borderColor: "divider",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.paper,
    transition: "background-color 0.3s ease",
    "&:hover": {
      backgroundColor: "lightcoral",
    },
    height: 150,
    padding: theme.spacing(2),
  },
  icon: {
    fontSize: 48,
    marginBottom: theme.spacing(4),
  },
}));

const SkillsSection = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.hero}>
        <Grid container spacing={2} alignItems="center" padding={2}>
          <Grid item md={12}>
            <Typography variant="h3">Skills</Typography>
          </Grid>
          <Grid item md={6} container spacing={2}>
            <Grid item xs={12} md={4}>
              <Paper className={classes.skill}>
                <MobileFriendly className={classes.icon} />
                <Typography variant="h6" align="center">
                  Mobile APP Developent
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper className={classes.skill}>
                <Web className={classes.icon} />
                <Typography variant="h6" align="center">
                  Website Developent
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper className={classes.skill}>
                <DesignServices className={classes.icon} />
                <Typography variant="h6" align="center">
                  User Interface Design
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default SkillsSection;
