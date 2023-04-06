import * as React from "react";
import DataGrid from "../../components/DataGrid";
import FormWrapper from "../../components/FormWrapper";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectApi } from "store/reducers/apiSlice";
import moment from "moment";
import FilterJobs from "./FilterJobs";

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
  const { users } = useSelector(selectApi);
  const navigate = useNavigate();

  return (
    <FormWrapper label="List of jobs">
      <DataGrid
        sx={{ mt: 2 }}
        rows={users?.data?.job_posts || []}
        columns={columns}
        components={{ Toolbar: FilterJobs }}
        pageSize={5}
      />
    </FormWrapper>
  );
}

export default Jobs;
