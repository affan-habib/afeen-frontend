import * as React from "react";
import { GridToolbar } from "@mui/x-data-grid";
import DataGrid from "../../components/DataGrid";
import { Button, Menu, MenuItem, IconButton } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import FormWrapper from "../../components/FormWrapper";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { callApi, selectApi } from "store/reducers/apiSlice";
import { UrlBuilder } from "helpers/UrlBuilder";

const columns = [
  { field: "title", headerName: "Title", width: 200 },
  { field: "age_min", headerName: "Min Age", width: 150 },
  { field: "age_max", headerName: "Max Age", width: 150 },
  {
    field: "description",
    headerName: "description",
    width: 150,
  },
];

function Jobs() {
  const dispatch = useDispatch();
  const { users } = useSelector(selectApi);
  // console.log(users.data.job_posts);
  React.useEffect(() => {
    dispatch(
      callApi({
        operationId: UrlBuilder.jobServiceApi("jobs/all-post?limit=10&page=1"),
        output: "users",
      })
    );
  }, []);
  const navigate = useNavigate();

  return (
    <FormWrapper label="List of jobs">
      <DataGrid
        sx={{ mt: 2 }}
        rows={users?.data?.job_posts || []}
        columns={columns}
        pagination
        gridTitle="Add New Jobs"
        onButtonClick={() => navigate("/add-package")}
        pageSize={5}
      />
    </FormWrapper>
  );
}

export default Jobs;
