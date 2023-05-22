import React from "react";
import { makeStyles } from "@mui/styles";
import { Card, CardHeader, Grid, Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 400,
    marginBottom: theme.spacing(2),
  },
  icon: {
    marginRight: theme.spacing(1),
  },
  spacing: {
    marginTop: theme.spacing(2),
  },
}));

const educationData = [
  {
    degree: "Bachelor's Degree",
    institution: "Dhaka University",
    subject: "Accounting",
    year: "2015",
  },
  {
    degree: "Higher Secondary",
    institution: "Cantonment Public School and College",
    subject: "N/A",
    year: "2010",
  },
  {
    degree: "Secondary School Certificate",
    institution: "ZBSM High School",
    subject: "N/A",
    year: "2008",
  },
];

const Education = () => {
  const classes = useStyles();

  return (
    <Grid item md={12}>
      <Typography variant="h3" gutterBottom>
        Academic
      </Typography>
      {educationData.map((item, index) => (
        <Card className={classes.card} key={index}>
          <CardHeader
            title={item.degree}
            subheader={item.institution}
            titleTypographyProps={{ variant: "h6" }}
            subheaderTypographyProps={{ variant: "subtitle1" }}
            action={<>{item.year}</>}
          />
        </Card>
      ))}
    </Grid>
  );
};

export default Education;
