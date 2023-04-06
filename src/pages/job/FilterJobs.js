import { Search } from "@mui/icons-material";
import { Box, Button, MenuItem, Select, Stack, TextField } from "@mui/material";
import { UrlBuilder } from "helpers/UrlBuilder";
import React from "react";
import { useDispatch } from "react-redux";
import { callApi } from "store/reducers/apiSlice";

const FilterJobs = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(
      callApi({
        operationId: UrlBuilder.jobServiceApi("jobs/all-post?limit=10&page=1"),
        output: "users",
      })
    );
  }, []);
  return (
    <Stack mb={2} spacing={2} direction="row">
      <TextField label="SEARCH BY TITLE" />
      <TextField label="MIN SALARY" />
      <TextField label="MAX SALARY" />
      <Select value={1} sx={{ width: 100 }}>
        <MenuItem value="1">Dhaka</MenuItem>
        <MenuItem value="2">Chittagong</MenuItem>
        <MenuItem value="3">Sylhet</MenuItem>
      </Select>
      <Button startIcon={<Search/>} variant="contained">Search</Button>
    </Stack>
  );
};

export default FilterJobs;
