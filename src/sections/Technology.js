import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const Technology = () => {
  const technologies = [
    {
      name: "HTML",
      category: "frontend",
      expertise: 3, // Expertise level for HTML
    },
    {
      name: "CSS",
      category: "frontend",
      expertise: 4, // Expertise level for CSS
    },
    {
      name: "JavaScript",
      category: "frontend",
      expertise: 5, // Expertise level for JavaScript
    },
    {
      name: "React",
      category: "frontend",
      expertise: 5, // Expertise level for JavaScript
    },
    {
      name: "Redux",
      category: "frontend",
      expertise: 5, // Expertise level for JavaScript
    },
    {
      name: "Material UI",
      category: "frontend",
      expertise: 5, // Expertise level for JavaScript
    },
    {
      name: "React Native",
      category: "frontend",
      expertise: 5, // Expertise level for JavaScript
    },
    {
      name: "Bootstrap",
      category: "frontend",
      expertise: 5, // Expertise level for JavaScript
    },
    {
      name: "Node.js",
      category: "backend",
      expertise: 4, // Expertise level for Node.js
    },
    {
      name: "Express js",
      category: "backend",
      expertise: 4, // Expertise level for Node.js
    },
    {
      name: "No SQL",
      category: "backend",
      expertise: 4, // Expertise level for Node.js
    },
    {
      name: "Python",
      category: "backend",
      expertise: 3, // Expertise level for Python
    },

    {
      name: "MongoDb",
      category: "backend",
      expertise: 2, // Expertise level for SQL
    },
    // Add more technologies as needed
  ];

  const frontendTechnologies = technologies
    .filter((tech) => tech.category === "frontend")
    .map((tech) => tech.name)
    .join(", ");

  const backendTechnologies = technologies
    .filter((tech) => tech.category === "backend")
    .map((tech) => tech.name)
    .join(", ");

  return (
    <Box>
      <Stack direction="row" spacing={2}>
        <Typography variant="subtitle1">Frontend :</Typography>
        <Typography>{frontendTechnologies}</Typography>
      </Stack>

      <Stack direction="row" spacing={2}>
        <Typography variant="subtitle1">Backend :</Typography>
        <Typography>{backendTechnologies}</Typography>
      </Stack>
    </Box>
  );
};

export default Technology;
