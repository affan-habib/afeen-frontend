import React from "react";
import { makeStyles } from "@mui/styles";
import { Container, Grid, Stack, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

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
            <Grid item xs={12} md={12}>
              <Typography variant="h2" gutterBottom={2} component="h1">
                Affan Habib
              </Typography>
              <Typography variant="body1" gutterBottom={2} component="h1">
                Javascript developer
              </Typography>
              <Typography variant="body2" component="h1">
                I am a skilled software developer with expertise in functional
                programming, web and mobile app development, and the MERN stack.
                With a focus on functional programming, I create robust and
                scalable applications. I have a strong command of the MERN
                stack, delivering seamless web and mobile experiences. Let's
                connect and bring your ideas to life!
              </Typography>
              <Stack direction="row" m={2}>
                <PhoneIcon className={classes.icon} />
                <Typography variant="h6" component="p">
                  +8801711111111
                </Typography>
              </Stack>

              <Stack direction="row" m={2}>
                <LocationOnIcon className={classes.icon} />
                <Typography variant="h6" component="p">
                  Your Location
                </Typography>
              </Stack>
              <Stack direction="row" m={2}>
                <EmailIcon className={classes.icon} />
                <Typography variant="h6" component="p">
                  your-email@example.com
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default Hero;
