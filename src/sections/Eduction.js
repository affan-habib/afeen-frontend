import React from "react";
import { makeStyles } from "@mui/styles";
import { Card, CardHeader, Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  education: {
    height: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`,
    display: "flex",
    alignItems: "center",
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
  },
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
    <div className={classes.education}>
      <div>
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
      </div>
    </div>
  );
};

export default Education;
