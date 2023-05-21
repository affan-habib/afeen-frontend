import React from "react";
import { makeStyles } from "@mui/styles";
import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import { Download } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  hero: {
    height: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`,
    display: "flex",
    alignItems: "center",
  },
  icon: {
    marginRight: theme.spacing(1),
    fontSize: 16,
    color: "#009688",
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
              <Typography variant="h4" gutterBottom component="h1">
                Welcome To My Portfolio
              </Typography>
              <Typography variant="h2" component="h1" gutterBottom={2}>
                I am Affan Habib.
              </Typography>
              <Stack direction="column" spacing={1}>
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
              <Typography variant="h5" component="h1" my={2}>
                <span style={{ fontWeight: "bold" }}>Expertise In</span> : Web
                Application Development , UI/UX design
              </Typography>
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
