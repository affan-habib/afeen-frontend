import * as React from "react";
import DataGrid from "components/DataGrid";
import CustomCard from "components/CustomCard";
import { useSelector } from "react-redux";
import { selectApi } from "store/reducers/apiSlice";
import moment from "moment";
import FilterUsers from "./FilterUsers";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router";
import { EyeFilled } from "@ant-design/icons";

function Users() {
  const navigate = useNavigate();
  const columns = [
    { field: "_id", headerName: "ID", width: 200 },
    { field: "userName", headerName: "Username", width: 200 },
    { field: "isAdmin", headerName: "isAdmmin", width: 200  },
    { field: "createdAt", headerName: "Created At", width: 100 },
    {
      field: "actions",
      headerName: "Actions",
      width: 100,
      renderCell: (params) => (
        <IconButton onClick={() => navigate(`edit/${params.id}`)} color="primary">
          <EyeFilled />
        </IconButton>
      ),
    },
  ];

  const [page, setPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(10);

  const {
    allUsers = {
      data: [],
      count: 0,
      pagination: {
        count: 0,
      },
    },
    users,
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
        getRowId={(row) => row._id}
        rows={users || []}
        columns={columns}
        onPageinationModelChange={onPageinationModelChange}
        rowCount={allUsers.pagination.total}
      />
    </CustomCard>
  );
}

export default Users;
