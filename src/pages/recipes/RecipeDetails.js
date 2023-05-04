import * as React from "react";
import CustomCard from "components/CustomCard";
import { useDispatch, useSelector } from "react-redux";
import { callApi, selectApi } from "store/reducers/apiSlice";
import { Box, Grid, Paper } from "@mui/material";
import { UrlBuilder } from "helpers/UrlBuilder";
import { useParams } from "react-router";

function RecipeDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const {
    recipeDetails = {
      data: [],
    },
  } = useSelector(selectApi);

  React.useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    dispatch(
      callApi({
        operationId: UrlBuilder.localHostApi(`api/v1/recipe/${id}`),
        output: "recipeDetails",
      })
    );
  }
  return (
    <CustomCard label={recipeDetails?.data?.recipe?.title}>
      <Box item flex={1}>
        <h4>Category : {recipeDetails?.data?.recipe?.category}</h4>
        <p>
          <span style={{ fontWeight: "bold" }}>Description :</span>
          {recipeDetails?.data?.recipe?.description}
        </p>
        <h4>Ingredients</h4>
        <ul>
          {recipeDetails?.data?.recipe?.ingredients.map((el) => {
            return <li>{el}</li>;
          })}
        </ul>
        <h4>instructions</h4>
        <ul>
          {recipeDetails?.data?.recipe?.instructions.map((el) => {
            return <li>{el}</li>;
          })}
        </ul>
      </Box>
    </CustomCard>
  );
}

export default RecipeDetails;
