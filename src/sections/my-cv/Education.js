import React from "react";
import { Divider, Typography } from "@mui/material";

const Education = () => {
  return (
    <div>
      <Typography
        variant="h5"
        fontWeight={500}
        color="secondary.main"
        gutterBottom
      >
        Education
      </Typography>
      <Divider sx={{ mb: 1 }} />
      <Typography variant="h5">BBA in Accounting</Typography>
      <Typography variant="subtitle2">University of Dhaka</Typography>
      <Typography variant="subtitle2">2015</Typography>

      <Typography variant="h5">HSC</Typography>
      <Typography variant="subtitle2">
        Cantonment Public School & College
      </Typography>
      <Typography variant="subtitle2">2010</Typography>
    </div>
  );
};

export default Education;
