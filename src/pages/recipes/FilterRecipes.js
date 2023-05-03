import React, { useState } from "react";
import { MenuItem, Select, Stack, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { UrlBuilder } from "helpers/UrlBuilder";
import { callApi, selectApi } from "store/reducers/apiSlice";

const FilterJobs = ({ page, pageSize }) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    dispatch(
      callApi({
        operationId: UrlBuilder.localHostApi(`api/v1/recipe`),
        output: "recipes",
      })
    );
  }

  return <Stack mb={2} spacing={2} direction="row"></Stack>;
};

export default FilterJobs;
