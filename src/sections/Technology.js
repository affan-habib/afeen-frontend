import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { technologiesData } from "apis";
const Technology = () => {
  const frontendTechnologies = technologiesData
    .filter((tech) => tech.category === "frontend")
    .map((tech) => tech.name)
    .join(", ");

  const backendTechnologies = technologiesData
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
