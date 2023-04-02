import { Link, useNavigate } from "react-router-dom";

// material-ui
import { Grid, Stack, Typography } from "@mui/material";

// project import
import AuthWrapper from "sections/auth/AuthWrapper";
import AuthLogin from "sections/auth/auth-forms/AuthLogin";
import { useSelector } from "react-redux";
import { selectApi } from "store/reducers/apiSlice";
import { useEffect } from "react";
import Cookies from "js-cookie";

// ================================|| LOGIN ||================================ //

const Login = () => {
  const isLoggedIn = Cookies.get("access_token") ? true : false;
  // console.log(isLoggedIn, "ssss")

  const {
    loading,
    authData = {
      data: {},
    },
  } = useSelector(selectApi);


  const navigate = useNavigate();
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/dashboard");
    }
    if (!isLoggedIn && authData.data.access_token !== undefined) {
      Cookies.set("access_token", authData.data.access_token);
      navigate("/dashboard");
    }
  }, [authData?.data.access_token, isLoggedIn]);

  return (
    <AuthWrapper>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="baseline"
            sx={{ mb: { xs: -0.5, sm: 0.5 } }}
          >
            <Typography variant="h3">Login</Typography>
            <Typography
              component={Link}
              to={isLoggedIn ? "/auth/register" : "/register"}
              variant="body1"
              sx={{ textDecoration: "none" }}
              color="primary"
            >
              Don&apos;t have an account?
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <AuthLogin />
        </Grid>
      </Grid>
    </AuthWrapper>
  );
};

export default Login;
