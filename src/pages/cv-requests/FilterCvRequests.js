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
    allCvRequests = {
      data: [],
    },
    usersInfos,
  } = useSelector(selectApi);

  const listOfEmployerUserIds = allCvRequests.data.map(
    (el) => el.employer_user_id
  );
  const listOfWorkerUserIds = allCvRequests.data.map((el) => el.worker_user_id);
  const userIds = [...listOfEmployerUserIds, ...listOfWorkerUserIds];
  React.useEffect(() => {
    fetchData();
  }, [category, page, pageSize]);
  React.useEffect(() => {
    if (userIds.length > 0) {
      fetchUserInfoData();
    }
  }, [allCvRequests]);

  function fetchData() {
    dispatch(
      callApi({
        operationId: UrlBuilder.resumeServiceApi(
          `cv-requests?limit=${pageSize}&page=${page}`
        ),
        output: "allCvRequests",
      })
    );
  }
  function fetchUserInfoData() {
    dispatch(
      callApi({
        operationId: UrlBuilder.coreServiceApi(
          `core/user-names?ids=${listOfEmployerUserIds}`
        ),
        output: "usersInfos",
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
