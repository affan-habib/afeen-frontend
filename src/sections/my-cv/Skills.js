import React from "react";
import { Typography, Divider } from "@mui/material";

const Skills = () => {
  const skills = [
    "Javascript / Ecmascript6",
    "HTML, CSS/SASS",
    "React JS, React Native",
    "Node JS, Express",
    "MongoDB",
    "Bootstrap",
    "MUI",
    "Ant Design",
    "Redux",
    "Redux Saga",
    "Persist",
    "Git",
    "BitBucket",
    "Gitlab",
    "Yarn",
    "NPM",
    "Docker",
    "Agile",
    "Jira",
  ];

  return (
    <div>
      <Typography
        variant="h5"
        fontWeight={500}
        color="secondary.main"
        gutterBottom
      >
        Skills
      </Typography>
      <Divider />
      <ul>
        {skills.map((skill) => (
          <li key={skill}>
            <Typography variant="body1">{skill}</Typography>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
