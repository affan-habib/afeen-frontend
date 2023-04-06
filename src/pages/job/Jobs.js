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
import moment from "moment";

const columns = [
  { field: "title", headerName: "Title", width: 200 },
  {
    field: "age_range",
    headerName: "Age Range",
    width: 120,
    align: "center",
    renderCell: (params) => {
      const { age_min, age_max } = params.row;
      return `${age_min} - ${age_max} `;
    },
  },
  {
    field: "employer",
    headerName: "Employer",
    width: 150,
    renderCell: (params) => params.row.employer.name,
  },
  {
    field: "no_of_vacancy",
    headerName: "Vacancy",
    width: 150,
  },
  {
    field: "created_at",
    headerName: "created",
    width: 150,
    renderCell: (params) => moment(params.row.createdAt).format("DD-MM-yyyy"),
  },
  {
    field: "published_at",
    headerName: "Published",
    width: 150,
    renderCell: (params) =>
      moment(params.row.published_at).format("DD-MM-yyyy"),
  },
  {
    field: "salary_range",
    headerName: "Salary Range",
    width: 150,
    align: "center",
    renderCell: (params) => {
      const { salary_min, salary_max } = params.row;
      return `${salary_min} - ${salary_max} `;
    },
  },
  {
    field: "description",
    headerName: "Description",
    flex: 1,
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
        // pagination
        gridTitle="Add New Job"
        onButtonClick={() => navigate("/add-job")}
        pageSize={5}
      />
    </FormWrapper>
  );
}

export default Jobs;
