import React, { useState } from "react";
import { Stack } from "@mui/material";
import { useDispatch } from "react-redux";
import { UrlBuilder } from "helpers/UrlBuilder";
import { callApi } from "store/reducers/apiSlice";
import CustomTextField from "components/CustomTextField";

const FilterJobs = ({ page, pageSize }) => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState("");
  React.useEffect(() => {
    if(category.length <= 5){
      fetchData();
    }
  }, [category]);

  function fetchData() {
    dispatch(
      callApi({
        operationId: UrlBuilder.localHostApi(
          `api/v1/user?category=${category}`
        ),
        output: "users",
      })
    );
  }

  return (
    <Stack mb={2} spacing={2} direction="row">
      <CustomTextField
        onChange={(e) => setCategory(e.target.value)}
        inputLabel="SEARCH BY TITLE"
        sx={{ width: 150 }}
      />
    </Stack>
  );
};

export default FilterJobs;
