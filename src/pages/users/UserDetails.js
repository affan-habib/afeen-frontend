import * as React from "react";
import CustomCard from "components/CustomCard";
import { useDispatch, useSelector } from "react-redux";
import { callApi, selectApi } from "store/reducers/apiSlice";
import { Box, Grid, Paper } from "@mui/material";
import { UrlBuilder } from "helpers/UrlBuilder";
import { useParams } from "react-router";

function UserDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const {
    userDetails = {
      data: [],
    },
  } = useSelector(selectApi);

  React.useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    dispatch(
      callApi({
        operationId: UrlBuilder.localHostApi(`api/v1/user/${id}`),
        output: "userDetails",
      })
    );
  }
  return (
    <CustomCard label={userDetails?.data?.user?.title}>
      <Box item flex={1}>
        <h4>Category : {userDetails?.data?.user?.category}</h4>
        <p>
          <span style={{ fontWeight: "bold" }}>Description :</span>
          {userDetails?.data?.user?.description}
        </p>
        <h4>Ingredients</h4>
        <ul>
          {userDetails?.data?.user?.ingredients.map((el) => {
            return <li>{el}</li>;
          })}
        </ul>
        <h4>instructions</h4>
        <ul>
          {userDetails?.data?.user?.instructions.map((el) => {
            return <li>{el}</li>;
          })}
        </ul>
      </Box>
    </CustomCard>
  );
}

export default UserDetails;
