import React from "react";
import { Grid, Stack, Typography } from "@mui/material";
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
  const tools = technologiesData
    .filter((tech) => tech.category === "tools")
    .map((tech) => tech.name)
    .join(", ");

  return (
    <Grid item md={12}>
      <Typography variant="h4" gutterBottom>
        Technology
      </Typography>
      <Stack spacing={1}>
        <Stack direction="row" spacing={2}>
          <Typography variant="subtitle1" minWidth={80} color="primary">
            Frontend :
          </Typography>
          <Typography>{frontendTechnologies}</Typography>
        </Stack>

        <Stack direction="row" spacing={2}>
          <Typography variant="subtitle1" minWidth={80} color="primary">
            Backend :
          </Typography>
          <Typography>{backendTechnologies}</Typography>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Typography variant="subtitle1" minWidth={80} color="primary">
            Tools :
          </Typography>
          <Typography>{tools}</Typography>
        </Stack>
      </Stack>
    </Grid>
  );
};

export default Technology;
