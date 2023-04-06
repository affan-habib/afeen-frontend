import { Search } from "@mui/icons-material";
import { Box, Button, MenuItem, Select, Stack, TextField } from "@mui/material";
import { UrlBuilder } from "helpers/UrlBuilder";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callApi, selectApi } from "store/reducers/apiSlice";

const FilterJobs = () => {
  const [category, setCategoryId] = useState(null);
  const dispatch = useDispatch();
  const { jobCategory } = useSelector(selectApi);
  React.useEffect(() => {
    dispatch(
      callApi({
        operationId: UrlBuilder.jobServiceApi(
          `jobs/all-post?limit=10&page=1&job_category_ids=${category}`
        ),
        output: "users",
      })
    );
  }, [category]);
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
      <TextField label="SEARCH BY TITLE" />
      <TextField label="MIN SALARY" />
      <TextField label="MAX SALARY" />
      <Select
        label="Category"
        sx={{ width: 100 }}
        onChange={(e) => setCategoryId(e.target.value)}
      >
        {jobCategory?.data.map((category) => (
          <MenuItem value={category.id}>{category.name}</MenuItem>
        ))}
      </Select>
      <Button startIcon={<Search />} variant="contained">
        Search
      </Button>
    </Stack>
  );
};

export default FilterJobs;
