import React from "react";
import { makeStyles } from "@mui/styles";
import { Card, CardHeader, Grid, Typography } from "@mui/material";
import { experienceData } from "apis";
const useStyles = makeStyles((theme) => {
  return {
    card: {
      maxWidth: 400,
    },
    icon: {
      marginRight: theme.spacing(1),
    },
  };
});

const Experience = () => {
  const classes = useStyles();

  return (
    <>
      <Grid item xs={12} sm={12}>
        <Typography variant="h4">Experience</Typography>
      </Grid>
      {experienceData.map((experience, index) => (
        <Grid item xs={12} sm={12} key={index}>
          <Card className={classes.card}>
            <CardHeader
              title={experience.title}
              subheader={experience.company}
              titleTypographyProps={{ variant: "h6" }}
              subheaderTypographyProps={{ variant: "subtitle1" }}
              action={<>{experience.duration}</>}
            />
          </Card>
        </Grid>
      ))}
    </>
  );
};

export default Experience;
