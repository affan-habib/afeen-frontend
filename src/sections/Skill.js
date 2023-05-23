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
    transition: "background-color 0.3s ease",
    "&:hover": {
      color: "orange",
      fontWeight: "bold",
    },
    height: 150,
    padding: theme.spacing(2),
    opacity: 1, // Set initial opacity to 1
  },
  skillFade: {
    opacity: 0.5, // Set opacity to 0.5 when not hovered
  },
  icon: {
    fontSize: 48,
    marginBottom: theme.spacing(4),
  },
  technology: {
    background: "card",
    padding: "5px",
    borderRadius: 4,
    backgroundColor: theme.palette.background.card,
  },
  span: {
    color: "white",
    background: "gray",
    padding: 5,
    marginRight: 5,
    borderRadius: 2,
    flexDirection: "row",
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
          <Grid item xs={12} md={4} key={index}>
            <Paper className={classes.skill}>
              {skill.icon}
              <Typography variant="h6" align="center">
                {skill.title}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Grid item md={12}>
        <Typography variant="h4" gutterBottom>
          Technology
        </Typography>
        <Technology />
      </Grid>
    </>
  );
};

export default Skill;
