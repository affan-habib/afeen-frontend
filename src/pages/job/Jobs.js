import * as React from "react";
import DataGrid from "components/DataGrid";
import CustomCard from "components/CustomCard";
import { useSelector } from "react-redux";
import { selectApi } from "store/reducers/apiSlice";
import moment from "moment";
import FilterJobs from "./FilterJobs";
import { Visibility } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router";

function Jobs() {
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
    {
      field: "actions",
      headerName: "Actions",
      width: 100,
      align: "center",
      renderCell: (params) => (
        <IconButton
          color="primary"
          onClick={() => navigate(`job-details/${params.id}`)}
        >
          <Visibility />
        </IconButton>
      ),
    },
  ];
  const [page, setPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(10);
  const { allJobs } = useSelector(selectApi);
  const navigate = useNavigate();
  const onPageinationModelChange = (params) => {
    setPage(params.page + 1);
    setPageSize(params.pageSize);
  };
  return (
    <CustomCard label="List of jobs">
      <FilterJobs page={page} pageSize={pageSize} />
      <DataGrid
        sx={{ mt: 2 }}
        rows={allJobs?.data?.job_posts || []}
        columns={columns}
        onPageinationModelChange={onPageinationModelChange}
        rowCount={allJobs?.data?.total}
      />
    </CustomCard>
  );
}

export default Jobs;
