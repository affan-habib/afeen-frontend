import * as React from "react";
import DataGrid from "components/DataGrid";
import CustomCard from "components/CustomCard";
import { useSelector } from "react-redux";
import { selectApi } from "store/reducers/apiSlice";
import moment from "moment";
import FilterCvRequests from "./FilterCvRequests";
import { Visibility } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router";

function CvRequests() {
  const columns = [
    { field: "employer_user_id", headerName: "employer_user_id", flex: 1 },
    {
      field: "worker_user_id",
      headerName: "worker_user_id",
      flex: 1,
    },
    {
      field: "created_at",
      headerName: "created",
      width: 150,
      renderCell: (params) => moment(params.row.createdAt).format("DD-MM-yyyy"),
    },
    {
      field: "message",
      headerName: "message",
      width: 150,
    },
    {
      field: "status",
      headerName: "status",
      width: 150,
    },
    {
      field: "updated_at",
      headerName: "Updated",
      width: 150,
      renderCell: (params) =>
        moment(params.row.published_at).format("DD-MM-yyyy"),
    },
  ];
  const [page, setPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(10);
  const { allCvRequests } = useSelector(selectApi);
  const navigate = useNavigate();
  const onPageinationModelChange = (params) => {
    setPage(params.page + 1);
    setPageSize(params.pageSize);
  };
  return (
    <CustomCard label="List of Cv Requests">
      <FilterCvRequests page={page} pageSize={pageSize} />
      <DataGrid
        sx={{ mt: 2 }}
        rows={allCvRequests?.data || []}
        columns={columns}
        onPageinationModelChange={onPageinationModelChange}
        rowCount={allCvRequests?.data?.total}
      />
    </CustomCard>
  );
}

export default CvRequests;
