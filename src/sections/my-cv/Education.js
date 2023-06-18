import React from "react";
import { Divider, Typography } from "@mui/material";
import { educationData } from "apis";

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

      {educationData.map((education, index) => (
        <div key={index}>
          <Typography variant="h5">{education.degree}</Typography>
          <Typography variant="subtitle2">{education.institution}</Typography>
          <Typography variant="subtitle2">{education.year}</Typography>
        </div>
      ))}
    </div>
  );
};

export default Education;
