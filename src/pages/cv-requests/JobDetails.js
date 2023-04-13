import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { selectApi } from "store/reducers/apiSlice";

const JobDetails = () => {
  const { id } = useParams();
  const { allJobs } = useSelector(selectApi);
  console.log(id, allJobs.data.job_posts);
  const singleJob = allJobs.data.job_posts.find((el) => el.id == id)[0] || {};
  return <div>JobDetails</div>;
};

export default JobDetails;
