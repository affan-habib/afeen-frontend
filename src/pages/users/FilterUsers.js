import React, { useState } from "react";
import { MenuItem, Select, Stack, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { UrlBuilder } from "helpers/UrlBuilder";
import { callApi, selectApi } from "store/reducers/apiSlice";

const FilterJobs = ({ page, pageSize }) => {
  const [accountType, setAccountType] = useState("");
  const dispatch = useDispatch();
  const {
    allUsers = {
      data: [],
    },
    usersInfo,
  } = useSelector(selectApi);

  const userIds = allUsers?.data?.map((el) => el.id);

  React.useEffect(() => {
    fetchData();
  }, [accountType, page, pageSize]);

  React.useEffect(() => {
    if (userIds.length > 0) {
      fetchUserInfoData();
    }
  }, [allUsers]);

  function fetchData() {
    dispatch(
      callApi({
        operationId: UrlBuilder.coreServiceApi(
          `core/user/all-users?account_type=${accountType}&page=${page}&limit=${pageSize}`
        ),
        output: "allUsers",
      })
    );
  }

  function fetchUserInfoData() {
    dispatch(
      callApi({
        operationId: UrlBuilder.coreServiceApi(
          `core/user-names?ids=${userIds}`
        ),
        output: "usersInfo",
      })
    );
  }

  return (
    <Stack mb={2} spacing={2} direction="row">
      <TextField
        select
        label="Account Type"
        sx={{ width: 150 }}
        onChange={(e) => setAccountType(e.target.value)}
      >
        <MenuItem value="">All</MenuItem>
        <MenuItem value={1}>Worker</MenuItem>
        <MenuItem value={2}>Employer</MenuItem>
      </TextField>
    </Stack>
  );
};

export default FilterJobs;
