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
    <Grid item xs={12} md={12} pr={4}>
      <Typography variant="h5" gutterBottom component="h1">
        Welcome To My Portfolio
      </Typography>
      <Typography variant="h4" component="h1" gutterBottom={2}>
        I'm Affan Habib.
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
        Experienced JavaScript, React, and Redux Front-End Developer with a
        passion for creating impactful user experiences. With a solid foundation
        in admin dashboard customization, API integration, and UI design, I
        bring over four years of professional expertise to the table. From
        collaborating with cross-functional teams to leading a group of
        developers, I excel in fostering effective teamwork. My experience
        includes working on diverse projects, such as the Ministry of Education
        application and a comprehensive hospital information management system.
        I specialize in performance optimization techniques, utilizing tools
        like React's virtual DOM and Redux Saga for seamless user interactions.
        With a strong understanding of testing methodologies and responsive web
        design, I consistently deliver high-quality code. Committed to staying
        up-to-date with the latest technologies and best practices, I thrive on
        overcoming challenges and constantly improving my skills. Let's create
        exceptional digital experiences together.
      </Typography>
      <Button variant="outlined" color="primary" startIcon={<Download />}>
        Download CV
      </Button>
    </Grid>
  );
};

export default Welcome;
