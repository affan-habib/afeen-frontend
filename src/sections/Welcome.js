import React from "react";
import { makeStyles } from "@mui/styles";
import { Button, Grid, Stack, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import { Download } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(1),
    fontSize: 16,
  },
  fullWidth: {
    width: "100%",
  },
  centerText: {
    display: "flex",
    alignItems: "center",
  },
}));

const Welcome = () => {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={8}>
      <Typography variant="h5" gutterBottom component="h1">
        Welcome To My Portfolio
      </Typography>
      <Typography variant="h4" component="h1" gutterBottom={2}>
        I am Affan Habib.
      </Typography>
      <Stack
        direction="row"
        spacing={3}
        sx={{ borderBottom: 1, paddingBottom: 2 }}
      >
        <Stack direction="row" alignItems="center">
          <LocationOnIcon className={classes.icon} />
          <Typography variant="subtitle1" component="p">
            Dhaka-1212, Bangladesh
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center">
          <EmailIcon className={classes.icon} />
          <Typography variant="subtitle1" component="p">
            affan.habib44@gmail.com
          </Typography>
        </Stack>
      </Stack>
      <Typography variant="subtitle1" component="h1" my={2}>
        Seeking for a Javascript developer role in a dynamic and innovative
        company where I can leverage my expertise in JavaScript , React, Node js
        and MongoDB to develop cutting-edge full stack web applications
      </Typography>
      <Button variant="contained" color="primary" startIcon={<Download />}>
        Download CV
      </Button>
    </Grid>
  );
};

export default Welcome;
