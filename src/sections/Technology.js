import React, { useState } from "react";
import { Grid, MenuItem, Stack, TextField, Typography } from "@mui/material";
import { technologiesData } from "apis";
const Technology = () => {
  const [sort, setSort] = useState("stack");
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
  const expertTechonogies = technologiesData
    .filter((tech) => tech.expertise === 5)
    .map((tech) => tech.name)
    .join(", ");
  const intermediateTechonogies = technologiesData
    .filter((tech) => tech.expertise === 4)
    .map((tech) => tech.name)
    .join(", ");
  const basicTechonogies = technologiesData
    .filter((tech) => tech.expertise === 3)
    .map((tech) => tech.name)
    .join(", ");
  return (
    <Grid item md={12}>
      <Stack direction="row" spacing={10}>
        <Typography variant="h4" gutterBottom>
          Technology
        </Typography>
        <TextField
          label="sort by"
          select
          onChange={(e) => setSort(e.target.value)}
          value={sort}
          size="small"
        >
          <MenuItem value="stack">stack</MenuItem>
          <MenuItem value="expertise">expertise</MenuItem>
        </TextField>
      </Stack>
      <Stack spacing={1}>
        <Stack direction="row" spacing={2}>
          <Typography variant="subtitle1" minWidth={80} color="primary">
            {sort === "stack" ? "Frontend :" : "Expert : "}
          </Typography>
          <Typography>
            {sort === "stack" ? frontendTechnologies : expertTechonogies}
          </Typography>
        </Stack>

        <Stack direction="row" spacing={2}>
          <Typography variant="subtitle1" minWidth={80} color="primary">
            {sort === "stack" ? "Backend :" : "Intermediate : "}
          </Typography>
          <Typography>
            {sort === "stack" ? backendTechnologies : intermediateTechonogies}
          </Typography>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Typography variant="subtitle1" minWidth={80} color="primary">
            {sort === "stack" ? "Tools :" : "Basic : "}
          </Typography>
          <Typography>{sort === "stack" ? tools : basicTechonogies}</Typography>
        </Stack>
      </Stack>
    </Grid>
  );
};

export default Technology;
