import { Clear, Search } from "@mui/icons-material";
import { Button, MenuItem, Select, Stack, TextField } from "@mui/material";
import { UrlBuilder } from "helpers/UrlBuilder";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callApi, selectApi } from "store/reducers/apiSlice";

const FilterJobs = ({ page, pageSize }) => {
  const [accountType, setAccountType] = useState("");
  const dispatch = useDispatch();
  const {
    allUsers = {
      data: [],
    },
  } = useSelector(selectApi);

  const listOfEmployerUserIds = allUsers.data.map((el) => el.employer_user_id);
  const listOfWorkerUserIds = allUsers.data.map((el) => el.worker_user_id);
  console.log({ listOfEmployerUserIds }, { listOfWorkerUserIds });

  React.useEffect(() => {
    fetchData();
  }, [accountType, page, pageSize]);

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

  return (
    <Stack mb={2} spacing={2} direction="row">
      <Select
        label="Account Type"
        sx={{ width: 150 }}
        onChange={(e) => setAccountType(e.target.value)}
      >
        <MenuItem value="">All</MenuItem>
        <MenuItem value={1}>Worker</MenuItem>
        <MenuItem value={2}>Employer</MenuItem>
      </Select>
    </Stack>
  );
};

export default FilterJobs;
