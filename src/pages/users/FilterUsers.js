import { Clear, Search } from "@mui/icons-material";
import { Button, MenuItem, Select, Stack, TextField } from "@mui/material";
import { UrlBuilder } from "helpers/UrlBuilder";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callApi, selectApi } from "store/reducers/apiSlice";

const FilterJobs = ({ page, pageSize }) => {
  const [category, setCategoryId] = useState("");
  const dispatch = useDispatch();
  const {
    jobCategory,
    allUsers = {
      data: [],
    },
  } = useSelector(selectApi);

  const listOfEmployerUserIds = allUsers.data.map((el) => el.employer_user_id);
  const listOfWorkerUserIds = allUsers.data.map((el) => el.worker_user_id);
  console.log({ listOfEmployerUserIds }, { listOfWorkerUserIds });

  React.useEffect(() => {
    fetchData();
  }, [category, page, pageSize]);

  function fetchData() {
    dispatch(
      callApi({
        operationId: UrlBuilder.coreServiceApi(`core/user/all-users`),
        output: "allUsers",
      })
    );
  }
  function fetchEmployeeNames() {
    dispatch(
      callApi({
        operationId: UrlBuilder.resumeServiceApi(`cv-requests`),
        output: "allUsers",
      })
    );
  }
  function fetchWorkerNames() {
    dispatch(
      callApi({
        operationId: UrlBuilder.resumeServiceApi(`cv-requests`),
        output: "allUsers",
      })
    );
  }
  function clearFilter() {
    setCategoryId("");
    const inputs = document.querySelectorAll("input");
    inputs.forEach((input) => (input.value = ""));
    fetchData();
  }

  React.useEffect(() => {
    dispatch(
      callApi({
        operationId: UrlBuilder.jobServiceApi("job/categories"),
        output: "jobCategory",
      })
    );
  }, []);
  return (
    <Stack mb={2} spacing={2} direction="row">
      <Select
        label="Account Type"
        sx={{ width: 150 }}
        onChange={(e) => setCategoryId(e.target.value)}
      >
        {jobCategory?.data.map((category) => (
          <MenuItem key={category.id} value={category.id}>
            {category.name}
          </MenuItem>
        ))}
      </Select>
      <Select
        label="Account Type"
        sx={{ width: 150 }}
        onChange={(e) => setCategoryId(e.target.value)}
      >
        {jobCategory?.data.map((category) => (
          <MenuItem key={category.id} value={category.id}>
            {category.name}
          </MenuItem>
        ))}
      </Select>

      <Button
        startIcon={<Clear />}
        color="secondary"
        variant="contained"
        onClick={clearFilter}
      >
        CLEAR FILTER
      </Button>
    </Stack>
  );
};

export default FilterJobs;
