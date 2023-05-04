import * as React from "react";
import CustomCard from "components/CustomCard";
import { useDispatch, useSelector } from "react-redux";
import { callApi, selectApi } from "store/reducers/apiSlice";
import { Box, Grid, Paper } from "@mui/material";
import { UrlBuilder } from "helpers/UrlBuilder";
import { useParams } from "react-router";

function ResumeDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const {
    resumeDetails = {
      data: [],
    },
  } = useSelector(selectApi);

  React.useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    dispatch(
      callApi({
        operationId: UrlBuilder.localHostApi(`api/v1/resume/${id}`),
        output: "resumeDetails",
      })
    );
  }
  return (
    <CustomCard label={resumeDetails?.data?.resume?.title}>
      <Box item flex={1}>
        <h4>Category : {resumeDetails?.data?.resume?.category}</h4>
        <p>
          <span style={{ fontWeight: "bold" }}>about :</span>
          {resumeDetails?.data?.resume?.about}
        </p>
        <h4>Educations</h4>
        <ul>
          {resumeDetails?.data?.resume?.educations.map((el) => {
            return <li>{el}</li>;
          })}
        </ul>
        <h4>skills</h4>
        <ul>
          {resumeDetails?.data?.resume?.skills.map((el) => {
            return <li>{el}</li>;
          })}
        </ul>
      </Box>
    </CustomCard>
  );
}

export default ResumeDetails;
