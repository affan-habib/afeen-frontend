import React from "react";
import { makeStyles } from "@mui/styles";
import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import { Download } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  hero: {
    height: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`,
    display: "flex",
    alignItems: "center",
  },
  icon: {
    marginRight: theme.spacing(1),
  },
  fullWidth: {
    width: "100%",
  },
  centerText: {
    display: "flex",
    alignItems: "center",
  },
}));

const Hero = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.hero}>
        <Container>
          <Grid container>
            <Grid item xs={12} md={8}>
              <Typography variant="h4" gutterBottom={2} component="h1">
                Welcome To My Portfolio
              </Typography>
              <Typography variant="h2" gutterBottom={2} component="h1">
                I am Affan Habib.
              </Typography>
              <Typography variant="body2" component="h1">
                I am a skilled software developer with expertise in functional
                programming, web and mobile app development, and the MERN stack.
                With a focus on functional programming, I create robust and
                scalable applications. I have a strong command of the MERN
                stack, delivering seamless web and mobile experiences. Let's
                connect and bring your ideas to life!
              </Typography>
              <Stack direction="row">
                <Stack direction="row" m={2} ml={0}>
                  <LocationOnIcon className={classes.icon} />
                  <Typography variant="h6" component="p">
                    Dhaka-1212, Bangladesh
                  </Typography>
                </Stack>
                <Stack direction="row" m={2}>
                  <EmailIcon className={classes.icon} />
                  <Typography variant="h6" component="p">
                    affan.habib44@gmail.com
                  </Typography>
                </Stack>
              </Stack>
              <Button
                variant="contained"
                color="primary"
                startIcon={<Download />}
              >
                Download CV
              </Button>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default Hero;
