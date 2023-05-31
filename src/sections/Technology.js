import React, { useState } from "react";
import {
  Grid,
  MenuItem,
  Stack,
  TextField,
  Typography,
  Button,
  Badge,
} from "@mui/material";
import { technologiesData } from "apis";

const Technology = () => {
  const [sort, setSort] = useState("stack");
  const frontendTechnologies = technologiesData
    .filter((tech) => tech.category === "frontend")
    .map((tech) => (
      <Button
        key={tech.name}
        variant="contained"
        color="primary"
        size="small"
        sx={{ maxWidth: 120 }}
      >
        {tech.name}
      </Button>
    ));

  const backendTechnologies = technologiesData
    .filter((tech) => tech.category === "backend")
    .map((tech) => (
      <Button
        key={tech.name}
        variant="contained"
        color="secondary"
        size="small"
      >
        {tech.name}
      </Button>
    ));

  const tools = technologiesData
    .filter((tech) => tech.category === "tools")
    .map((tech) => (
      <Button key={tech.name} variant="contained" color="info" size="small">
        {tech.name}
      </Button>
    ));

  const expertTechonogies = technologiesData
    .filter((tech) => tech.expertise === 5)
    .map((tech) => (
      <Button variant="contained" color="primary" size="small">
        {tech.name}
      </Button>
    ));

  const intermediateTechonogies = technologiesData
    .filter((tech) => tech.expertise === 4)
    .map((tech) => (
      <Button variant="contained" color="secondary" size="small">
        {tech.name}
      </Button>
    ));

  const basicTechonogies = technologiesData
    .filter((tech) => tech.expertise === 3)
    .map((tech) => (
      <Button variant="contained" color="info" size="small">
        {tech.name}
      </Button>
    ));

  return (
    <Grid item md={12}>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h4" gutterBottom>
          Technology
        </Typography>
        <TextField
          label="sort by"
          select
          sx={{ marginRight: 4 }}
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
            {sort === "stack" ? "Frontend :" : "Expert :"}
          </Typography>
          <Stack direction="row" spacing={1}>
            {sort === "stack" ? frontendTechnologies : expertTechonogies}
          </Stack>
        </Stack>

        <Stack direction="row" spacing={2}>
          <Typography variant="subtitle1" minWidth={80} color="primary">
            {sort === "stack" ? "Backend :" : "Intermediate :"}
          </Typography>
          <Stack direction="row" spacing={1}>
            {sort === "stack" ? backendTechnologies : intermediateTechonogies}
          </Stack>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Typography variant="subtitle1" minWidth={80} color="primary">
            {sort === "stack" ? "Tools :" : "Basic :"}
          </Typography>
          <Stack direction="row" spacing={1}>
            {sort === "stack" ? tools : basicTechonogies}
          </Stack>
        </Stack>
      </Stack>
    </Grid>
  );
};

export default Technology;
