import React from "react";
import { makeStyles } from "@mui/styles";
import {
  Typography,
  Card,
  CardContent,
  CardHeader,
  CardActions,
  IconButton,
  Grid,
  Container,
} from "@mui/material";
import { HowToReg, MusicNoteOutlined, RecentActors } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  root: {
    // margin: theme.spacing(2),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    marginRight: theme.spacing(1),
  },
  technology: {
    display: "flex",
    alignItems: "center",
    marginTop: theme.spacing(1),
  },
}));

const ExperienceComponent = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <Typography align="center" variant="h4" mb={4}>
            Experience
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardHeader
              title="Software Developer"
              subheader="ABC Company"
              titleTypographyProps={{ variant: "h6" }}
              subheaderTypographyProps={{ variant: "subtitle1" }}
              action={<>Duration: 2 years</>}
            />
            <CardContent>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                consectetur cursus quam, eget finibus ligula consectetur a. Ut
                fringilla hendrerit consectetur. Integer malesuada risus eget
                leo accumsan placerat.
              </Typography>
              <CardActions>
                <div className={classes.technology}>
                  <RecentActors className={classes.icon} />
                  <MusicNoteOutlined className={classes.icon} />
                  <HowToReg className={classes.icon} />
                </div>
              </CardActions>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardHeader
              title="Software Developer"
              subheader="ABC Company"
              titleTypographyProps={{ variant: "h6" }}
              subheaderTypographyProps={{ variant: "subtitle1" }}
              action={<>Duration: 2 years</>}
            />
            <CardContent>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                consectetur cursus quam, eget finibus ligula consectetur a. Ut
                fringilla hendrerit consectetur. Integer malesuada risus eget
                leo accumsan placerat.
              </Typography>
              <CardActions>
                <div className={classes.technology}>
                  <RecentActors className={classes.icon} />
                  <MusicNoteOutlined className={classes.icon} />
                  <HowToReg className={classes.icon} />
                </div>
              </CardActions>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardHeader
              title="Software Developer"
              subheader="ABC Company"
              titleTypographyProps={{ variant: "h6" }}
              subheaderTypographyProps={{ variant: "subtitle1" }}
              action={<>Duration: 2 years</>}
            />
            <CardContent>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                consectetur cursus quam, eget finibus ligula consectetur a. Ut
                fringilla hendrerit consectetur. Integer malesuada risus eget
                leo accumsan placerat.
              </Typography>
              <CardActions>
                <div className={classes.technology}>
                  <RecentActors className={classes.icon} />
                  <MusicNoteOutlined className={classes.icon} />
                  <HowToReg className={classes.icon} />
                </div>
              </CardActions>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ExperienceComponent;
