import {
  BusinessCenterOutlined,
  Money,
  PeopleAltOutlined,
  SdCardAlertOutlined,
} from "@mui/icons-material";
import { Paper, Box, Typography, Stack, Button } from "@mui/material";
import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { callApi, selectApi } from "store/reducers/apiSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const {
    items = {
      data: [],
    },
  } = useSelector(selectApi);

  useEffect(
    () =>
      dispatch(
        callApi({
          operationId: `core/location/districts`,
          output: "items",
        })
      ),
    []
  );

  return (
    <Stack spacing={2} direction="row" alignItems="center">
      <Paper
        square
        sx={{
          width: 200,
          height: 150,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          color: "primary.light",
          "&:hover": {
            color: "primary.main",
          },
        }}
      >
        <BusinessCenterOutlined sx={{ fontSize: 50, mb: 1 }} />
        <Typography sx={{ fontWeight: 500, fontSize: "18px" }}>Create Package</Typography>
      </Paper>
      <Paper
        square
        sx={{
          width: 200,
          height: 150,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          color: "primary.light",
          "&:hover": {
            color: "primary.main",
          },
        }}
      >
        <Money sx={{ fontSize: 50, mb: 1 }} />
        <Typography sx={{ fontWeight: 500, fontSize: "18px" }}>Sales History</Typography>
      </Paper>
      <Paper
        square
        sx={{
          width: 200,
          height: 150,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          color: "primary.light",
          "&:hover": {
            color: "primary.main",
          },
        }}
      >
        <PeopleAltOutlined sx={{ fontSize: 50, mb: 1 }} />
        <Typography sx={{ fontWeight: 500, fontSize: "18px" }}>Add User</Typography>
      </Paper>
      <Paper
        square
        sx={{
          width: 200,
          height: 150,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          color: "primary.light",
          "&:hover": {
            color: "primary.main",
          },
        }}
      >
        <BusinessCenterOutlined sx={{ fontSize: 50, mb: 1 }} />
        <Typography sx={{ fontWeight: 500, fontSize: "18px" }}>Create Package</Typography>
      </Paper>
    </Stack>
  );
};

export default Dashboard;
