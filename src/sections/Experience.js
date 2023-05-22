import React from "react";
import { makeStyles } from "@mui/styles";
import { Card, CardHeader, Grid, Typography } from "@mui/material";

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

const experienceData = [
  {
    title: "Software Engineer",
    company: "Gononet Online Solutions Ltd.",
    description: [
      "Ut fringilla hendrerit consectetur. Integer malesuada risus eget leo accumsan placerat.",
    ],
    duration: "0.3 years",
  },
  {
    title: "Software Developer",
    company: "Ethics Advance Technology Ltd.",
    description: [
      "Ut fringilla hendrerit consectetur. Integer malesuada risus eget leo accumsan placerat.",
    ],
    duration: "2 Years",
  },
  {
    title: "UI/Graphic Designer",
    company: "Fiverr.com",
    description: [
      "Ut fringilla hendrerit consectetur. Integer malesuada risus eget leo accumsan placerat.",
    ],
    duration: "3 Years",
  },
];

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
