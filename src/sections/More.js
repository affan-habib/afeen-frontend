import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function More() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Grid item md={8}>
      <Typography variant="h4" gutterBottom>
        More About{" "}
        <span style={{ fontSize: 20, color: "yellowgreen" }}>Affan</span>
      </Typography>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography sx={{fontWeight: "bold"}}>What type of work you did so far ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="yellowGreen" variant="subtitle1">
            Admin Dashboard Customization, Bug fixing, Asyncronous Javascript,
            React , Redux
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography sx={{fontWeight: "bold"}}>
            Your educational background doesn't match with the skills .... Why
            ??
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="yellowGreen" variant="subtitle1">
            Now its possible to learn anything. But it's important to have some
            passion for specific area.I am not the best but good enough to play
            with javascript
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography sx={{fontWeight: "bold"}}>Why should i choose you? </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="yellowGreen" variant="subtitle1">
            I have unique skillsets. Came from design background and explored a
            lot of areas and i started to fall in love. ..
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography sx={{fontWeight: "bold"}}>Why you think, you're unique not average ? </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="yellowGreen" variant="subtitle1">
            I believe everyone is unique in terms of analycial skills,
            education, believes
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Grid>
  );
}
