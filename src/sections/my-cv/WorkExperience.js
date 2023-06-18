import React from "react";
import { Divider, Typography } from "@mui/material";
import moment from "moment";
import { workExperiences } from "apis";

const calculateDuration = (startDate, endDate) => {
  const start = moment(startDate);
  const end = endDate ? moment(endDate) : moment();
  const duration = moment.duration(end.diff(start));
  const years = duration.years();
  const months = duration.months();
  return `${years} years, ${months} months`;
};

const WorkExperience = () => {
  return (
    <div>
      <Typography
        variant="h5"
        fontWeight={500}
        color="secondary.main"
        gutterBottom
      >
        Work Experience
      </Typography>
      <Divider sx={{ mb: 1 }} />

      {workExperiences.map((experience, index) => (
        <div key={index}>
          <Typography variant="h5">{experience.position}</Typography>
          <Typography variant="subtitle1" color="secondary.main">
            {experience.company}
          </Typography>
          <Typography variant="subtitle2">
            {moment(experience.startDate).format("MMM YYYY")} -{" "}
            {experience.endDate
              ? moment(experience.endDate).format("MMM YYYY")
              : "Present"}
            <span style={{ fontStyle: "italic", color: "rgba(0, 0, 0, 0.54)" }}>
              {" ("}
              {calculateDuration(experience.startDate, experience.endDate)}
              {")"}
            </span>
          </Typography>
          <ul>
            {experience.responsibilities.map((responsibility, index) => (
              <li key={index}>
                <Typography variant="body1">{responsibility}</Typography>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default WorkExperience;
