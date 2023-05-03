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
import { Stack } from "@mui/material";
import DashboardCard from "components/DashboardCard";
import { UrlBuilder } from "helpers/UrlBuilder";
import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { callApi, selectApi } from "store/reducers/apiSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { dashboard = {} } = useSelector(selectApi);

  useEffect(
    () =>
      dispatch(
        callApi({
          operationId: UrlBuilder.jobServiceApi(`jobs/admin/dashboard`),
          output: "dashboard",
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
      <DashboardCard
        title="Job Types"
        count={15}
        icon={<ManageAccountsRounded sx={{ fontSize: 50 }} />}
      />
      <DashboardCard
        title="Categories"
        count={5}
        icon={<CategoryRounded sx={{ fontSize: 50 }} />}
      />
      <DashboardCard
        title="Expired Jobs"
        count={25}
        icon={<TrendingDownRounded sx={{ fontSize: 50 }} />}
      />
      <DashboardCard
        title="Requests Accepted"
        count={125}
        icon={<CheckBoxRounded sx={{ fontSize: 50 }} />}
      />
    </Stack>
  );
};

export default Dashboard;
