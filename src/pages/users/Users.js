import * as React from "react";
import DataGrid from "components/DataGrid";
import CustomCard from "components/CustomCard";
import { useSelector } from "react-redux";
import { selectApi } from "store/reducers/apiSlice";
import moment from "moment";
import FilterUsers from "./FilterUsers";
import { EyeFilled, EyeInvisibleOutlined } from "@ant-design/icons";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router";

function Users() {
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
    {
      headerName: "actions",
      align: "center",
      headerAlign: "center",
      width: 80,
      renderCell: (params) => (
        <IconButton
          color="primary"
          size="16"
          onClick={() => navigate(`${params.id}`)}
        >
          <EyeFilled />
        </IconButton>
      ),
    },
  ];

  const [page, setPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(10);
  const navigate = useNavigate();
  const {
    allUsers = {
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
    <CustomCard label="List of Users">
      <FilterUsers page={page} pageSize={pageSize} />
      <DataGrid
        sx={{ mt: 2 }}
        rows={allUsers.data || []}
        columns={columns}
        onPageinationModelChange={onPageinationModelChange}
        rowCount={allUsers.pagination.total}
      />
    </CustomCard>
  );
}

export default Users;
