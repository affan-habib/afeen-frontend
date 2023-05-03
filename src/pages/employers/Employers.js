import * as React from "react";
import DataGrid from "components/DataGrid";
import CustomCard from "components/CustomCard";
import { useSelector } from "react-redux";
import { selectApi } from "store/reducers/apiSlice";
import moment from "moment";
import FilterEmployers from "./FilterEmployers";

function Employers() {
  const columns = [
    {
      field: "id",
      headerName: "User's Name",
      flex: 1,
      renderCell: (params) =>
        usersInfo?.data?.find((el) => el.id == params.row.id)?.fullname || (
          <span style={{ color: "red" }}>Not Found</span>
        ),
    },
    {
      field: "phone_number",
      headerName: "phone_number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "email",
      flex: 1,
      renderCell: (params) => params.row.email || <> Not Found </>,
    },

    {
      field: "created_at",
      headerName: "created",
      width: 150,
      renderCell: (params) => moment(params.row.createdAt).format("DD-MM-yyyy"),
    },
    {
      field: "account_type",
      headerName: "account_type",
      width: 150,
      renderCell: (params) =>
        params.row.account_type == 1 ? "Worker" : "Employer",
    },
    {
      field: "account_status",
      headerName: "status",
      width: 150,
      renderCell: (params) =>
        params.row.account_status == 1 ? "Active" : "Inactive",
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

  const {
    allEmployers = {
      data: [],
      count: 0,
      pagination: {
        count: 0,
      },
    },
    usersInfo = {
      data: [],
    },
  } = useSelector(selectApi);

  const onPageinationModelChange = (params) => {
    setPage(params.page + 1);
    setPageSize(params.pageSize);
  };

  return (
    <CustomCard label="List of Employers">
      <FilterEmployers page={page} pageSize={pageSize} />
      <DataGrid
        sx={{ mt: 2 }}
        rows={allEmployers.data || []}
        columns={columns}
        onPageinationModelChange={onPageinationModelChange}
        rowCount={allEmployers.pagination.total}
      />
    </CustomCard>
  );
}

export default Employers;
