import React from "react";
import { Divider, Typography } from "@mui/material";

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
      <Typography variant="h5">Software Engineer</Typography>
      <Typography variant="subtitle1" color="secondary.main">
        Gononet Online Solution - Dhaka
      </Typography>
      <Typography variant="subtitle2" color="secondary.main">
        March 2023 to Present
      </Typography>
      <ul>
        <li>
          <Typography variant="body1">
            Lead a team of 4 developers in improving the existing mobile app and
            developing web apps for employer and admin dashboards.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            Manage React-based development for mobile and web applications.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            Implement authentication and authorization functionality for
            enhanced security in web and mobile applications.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            Successfully met project timelines and requirements provided.
          </Typography>
        </li>
      </ul>

      <Typography variant="h5">Junior Software Engineer</Typography>
      <Typography variant="subtitle1" color="secondary.main">
        Ethics Advance Technology Ltd - Dhaka
      </Typography>
      <Typography variant="subtitle2" color="secondary.main">
        May 2021 to February 2023
      </Typography>
      <ul>
        <li>
          <Typography variant="body1">
            Contributed to front-end development using Agile methodology for
            various projects, primarily focusing on React, Vue 3, Redux, and
            Material-UI (MUI).
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            Worked on the E-survey project, an initiative of the Ministry of
            Education in Bangladesh, developing a survey application to collect
            data from educational institutions across the country.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            Led UI design efforts and integrated REST APIs for the Hospital
            Information Management System's billing module.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            Utilized Redux for state management and Redux Saga for handling
            asynchronous operations.
          </Typography>
        </li>
      </ul>

      <Typography variant="h5">Freelance Graphic/UI Designer</Typography>
      <Typography variant="subtitle1" color="secondary.main">
        Company - Fiverr.com
      </Typography>
      <Typography variant="subtitle2" color="secondary.main">
        January 2018 to December 2020
      </Typography>
      <ul>
        <li>
          <Typography variant="body1">
            PSD/Figma to HTML conversion, Prototyping in Figma.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            Magazine and Cover design with Adobe InDesign, Photoshop, and
            Illustrator.
          </Typography>
        </li>
      </ul>
    </div>
  );
};

export default WorkExperience;
