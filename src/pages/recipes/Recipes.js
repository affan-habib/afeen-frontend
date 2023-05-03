import * as React from "react";
import DataGrid from "components/DataGrid";
import CustomCard from "components/CustomCard";
import { useSelector } from "react-redux";
import { selectApi } from "store/reducers/apiSlice";
import FilterRecipes from "./FilterRecipes";

function Recipes() {
  const columns = [
    { field: '_id', headerName: 'ID', width: 200 },
    { field: 'title', headerName: 'Title', width: 200 },
    { field: 'description', headerName: 'Description', width: 300 },
    { field: 'ingredients', headerName: 'Ingredients', width: 400 },
    { field: 'category', headerName: 'Category', width: 150 },
    { field: 'instructions', headerName: 'Instructions', width: 500 },
    { field: 'createdAt', headerName: 'Created At', width: 200 },
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
        getRowId={(row)=> row._id }
        rows={recipes.data.recipes || []}
        columns={columns}
        onPageinationModelChange={onPageinationModelChange}
        rowCount={allRecipes.pagination.total}
      />
    </CustomCard>
  );
}

export default Recipes;
