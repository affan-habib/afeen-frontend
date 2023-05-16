import React from "react";
import { makeStyles } from "@mui/styles";
import {
  AppBar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import { HowToReg, MusicNoteOutlined, RecentActors } from "@mui/icons-material";
const useStyles = makeStyles((theme) => ({
  Experience: {
    height: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`,
    display: "flex",
    alignItems: "center",
  },
}));

const Experience = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper variant="square" sx={{ p: 4 }} className={classes.Experience}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <Typography variant="h4">
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam consectetur cursus quam, eget finibus ligula
                  consectetur a. Ut fringilla hendrerit consectetur. Integer
                  malesuada risus eget leo accumsan placerat.
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam consectetur cursus quam, eget finibus ligula
                  consectetur a. Ut fringilla hendrerit consectetur. Integer
                  malesuada risus eget leo accumsan placerat.
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam consectetur cursus quam, eget finibus ligula
                  consectetur a. Ut fringilla hendrerit consectetur. Integer
                  malesuada risus eget leo accumsan placerat.
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
      </Paper>
    </div>
  );
};

export default Experience;
