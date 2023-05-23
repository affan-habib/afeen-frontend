import React from "react";
import { makeStyles } from "@mui/styles";
import { Grid, Paper, Typography } from "@mui/material";
import Technology from "./Technology";
import { skillsData } from "apis";
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
    transition: "background-color 0.5s ease",
    "&:hover": {
      color: "yellowGreen",
      cursor: "pointer",
    },
    height: 150,
    padding: theme.spacing(2),
    opacity: 1, // Set initial opacity to 1
  },

  icon: {
    fontSize: 48,
    marginBottom: theme.spacing(4),
  },
}));

const Skill = () => {
  const classes = useStyles();

  return (
    <>
      <Grid item md={12}>
        <Typography variant="h4">Skills</Typography>
      </Grid>
      <Grid item md={6} container spacing={2}>
        {skillsData.map((skill, index) => (
          <Grid item xs={4} sm={4} key={index}>
            <Paper className={classes.skill}>
              {skill.icon}
              <Typography variant="h6" align="center">
                {skill.title}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Technology />
    </>
  );
};

export default Skill;
