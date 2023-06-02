import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { styled } from "@mui/material/styles";
import LinearProgress from "@mui/material/LinearProgress";
import { Box } from "@mui/material";

// ==============================|| Loader ||============================== //

const LoaderWrapper = styled("div")(({ theme }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 2001,
  width: "100%",
  "& > * + *": {
    marginTop: theme.spacing(2),
  },
}));

const Loader = () => (
  <LoaderWrapper>
    <LinearProgress color="primary" />
  </LoaderWrapper>
);

// ==============================|| MINIMAL LAYOUT ||============================== //

const CommonLayout = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Box sx={{ m: 2 }}>
          <Outlet />
        </Box>
      </Suspense>
    </>
  );
};

export default CommonLayout;
