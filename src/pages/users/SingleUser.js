import React from "react";
import { useParams } from "react-router";

const SingleUser = () => {
  const { id } = useParams();

  console.log(id)
  return <div>SingleUser</div>;
};

export default SingleUser;
