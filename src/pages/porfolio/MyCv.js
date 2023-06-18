import { Stack } from "@mui/material";
import PrintComponent from "components/Print";
import React from "react";
import CareerObjective from "sections/my-cv/CareerObjective";
import Contact from "sections/my-cv/Contact";
import Education from "sections/my-cv/Education";
import Skills from "sections/my-cv/Skills";
import Title from "sections/my-cv/Title";
import WorkExperience from "sections/my-cv/WorkExperience";

const MyCv = () => {
  return (
    <PrintComponent>
      <Stack
        spacing={1}
        sx={{
          width: "21cm",
          height: "29.7cm",
          margin: "0 auto",
          padding: "1.5cm",
          backgroundColor: "white",
          boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Title />
        <Contact />
        <CareerObjective />
        <WorkExperience />
      </Stack>
      <Stack
        spacing={1}
        sx={{
          width: "21cm",
          height: "29.7cm",
          margin: "0 auto",
          padding: "1.5cm",
          backgroundColor: "white",
          boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Education />
        <Skills />
      </Stack>
    </PrintComponent>
  );
};

export default MyCv;
