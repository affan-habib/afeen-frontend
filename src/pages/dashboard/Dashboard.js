import {
  BusinessCenterOutlined,
  CategoryRounded,
  CheckBoxRounded,
  EngineeringOutlined,
  ManageAccountsRounded,
  Money,
  PeopleAltOutlined,
  PersonAddRounded,
  SupervisedUserCircleRounded,
  TrendingDownRounded,
} from "@mui/icons-material";
import { Paper, Typography, Stack, Divider } from "@mui/material";
import DashboardCard from "components/DashboardCard";
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
      <DashboardCard
        title="Active Jobs"
        count={25}
        icon={<EngineeringOutlined sx={{ fontSize: 50 }} />}
      />
      <DashboardCard
        title="Applicants"
        count={25}
        icon={<PersonAddRounded sx={{ fontSize: 50 }} />}
      />
      <DashboardCard
        title="Employers"
        count={45}
        icon={<SupervisedUserCircleRounded sx={{ fontSize: 50 }} />}
      />
    </Stack>
  );
};

export default Dashboard;
