import React from "react";
import { makeStyles } from "@mui/styles";
import { Card, CardHeader, Grid, Typography } from "@mui/material";
import { educationData } from "apis";

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
