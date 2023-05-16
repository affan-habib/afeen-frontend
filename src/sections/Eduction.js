import React from "react";
import { makeStyles } from "@mui/styles";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@mui/material";
import { SchoolOutlined, BookOutlined } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  education: {
    height: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`,
    display: "flex",
    alignItems: "center",
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
  },
  icon: {
    marginRight: theme.spacing(1),
  },
}));

const Education = () => {
  const classes = useStyles();

  return (
    <div className={classes.education}>
      <Grid container spacing={2} m={2}>
        <Grid item md={12}>
          <Typography variant="h3">Academic</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardHeader
              title="Bachelor's Degree"
              subheader="University of ABC"
              titleTypographyProps={{ variant: "h6" }}
              subheaderTypographyProps={{ variant: "subtitle1" }}
              action={<>Duration: 4 years</>}
            />
            <CardContent>
              <li>list one</li>
              <CardActions>
                <div className={classes.technology}>
                  <SchoolOutlined className={classes.icon} />
                  <BookOutlined className={classes.icon} />
                </div>
              </CardActions>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardHeader
              title="Master's Degree"
              subheader="University of XYZ"
              titleTypographyProps={{ variant: "h6" }}
              subheaderTypographyProps={{ variant: "subtitle1" }}
              action={<>Duration: 2 years</>}
            />
            <CardContent>
              <li>list one</li>
              <CardActions>
                <div className={classes.technology}>
                  <SchoolOutlined className={classes.icon} />
                  <BookOutlined className={classes.icon} />
                </div>
              </CardActions>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardHeader
              title="PhD in Computer Science"
              subheader="University of DEF"
              titleTypographyProps={{ variant: "h6" }}
              subheaderTypographyProps={{ variant: "subtitle1" }}
              action={<>Duration: 4 years</>}
            />
            <CardContent>
              <li>list one</li>
              <CardActions>
                <div className={classes.technology}>
                  <SchoolOutlined className={classes.icon} />
                  <BookOutlined className={classes.icon} />
                </div>
              </CardActions>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};
export default Education;
