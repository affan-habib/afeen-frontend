import { Clear, Search } from "@mui/icons-material";
import { Button, MenuItem, Select, Stack, TextField } from "@mui/material";
import { UrlBuilder } from "helpers/UrlBuilder";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callApi, selectApi } from "store/reducers/apiSlice";

const FilterJobs = ({ page, pageSize }) => {
  const [category, setCategoryId] = useState("");
  const [keyword, setKeyword] = useState("");
  const [minSalary, setMinSalary] = useState("");
  const [maxSalary, setMaxSalary] = useState("");
  const dispatch = useDispatch();
  const { jobCategory } = useSelector(selectApi);
  React.useEffect(() => {
    fetchData();
  }, [category, page, pageSize]);

  function fetchData() {
    dispatch(
      callApi({
        operationId: UrlBuilder.jobServiceApi(
          `jobs/all-post?limit=${pageSize}&page=${page}&job_category_ids=${category}&salary_min=${minSalary}&salary_max=${maxSalary}&keyword=${keyword}`
        ),
        output: "users",
      })
    );
  }
  function clearFilter() {
    setMaxSalary("");
    setKeyword("");
    setMinSalary("");
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
      <TextField
        onChange={(e) => setKeyword(e.target.value)}
        label="SEARCH BY TITLE"
        sx={{ width: 150 }}
      />
      <TextField
        label="MIN SALARY"
        onChange={(e) => setMinSalary(e.target.value)}
        sx={{ width: 150 }}
      />

      <TextField
        label="MAX SALARY"
        onChange={(e) => setMaxSalary(e.target.value)}
        sx={{ width: 150 }}
      />
      <Select
        label="Category"
        sx={{ width: 150 }}
        onChange={(e) => setCategoryId(e.target.value)}
      >
        {jobCategory?.data.map((category) => (
          <MenuItem key={category.id} value={category.id}>
            {category.name}
          </MenuItem>
        ))}
      </Select>
      <Button startIcon={<Search />} variant="contained" onClick={fetchData}>
        SEARCH
      </Button>
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
