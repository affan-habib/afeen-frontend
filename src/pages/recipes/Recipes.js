import * as React from "react";
import DataGrid from "components/DataGrid";
import CustomCard from "components/CustomCard";
import { useSelector } from "react-redux";
import { selectApi } from "store/reducers/apiSlice";
import moment from "moment";
import FilterRecipes from "./FilterRecipes";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router";
import { EyeFilled } from "@ant-design/icons";

function Recipes() {
  const navigate = useNavigate();
  const columns = [
    { field: "_id", headerName: "ID", width: 200 },
    { field: "title", headerName: "Title", width: 200 },
    { field: 'description', headerName: 'Description', flex: 1 },
    { field: "category", headerName: "Category", width: 150 },
    { field: "createdAt", headerName: "Created At", width: 100 },
    {
      field: "actions",
      headerName: "Actions",
      width: 100,
      renderCell: (params) => (
        <IconButton onClick={() => navigate(params.id)} color="primary">
          <EyeFilled />
        </IconButton>
      ),
    },
  ];

  const [page, setPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(10);

  const {
    allRecipes = {
      data: [],
      count: 0,
      pagination: {
        count: 0,
      },
    },
    recipes = {
      data: [],
    },
  } = useSelector(selectApi);

  const onPageinationModelChange = (params) => {
    setPage(params.page + 1);
    setPageSize(params.pageSize);
  };

  return (
    <CustomCard label="List of Recipes">
      <FilterRecipes page={page} pageSize={pageSize} />
      <DataGrid
        sx={{ mt: 2 }}
        getRowId={(row) => row._id}
        rows={recipes.data.recipes || []}
        columns={columns}
        onPageinationModelChange={onPageinationModelChange}
        rowCount={allRecipes.pagination.total}
      />
    </CustomCard>
  );
}

export default Recipes;
