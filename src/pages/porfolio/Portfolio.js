import { Container } from "@mui/material";
import VerticalTabs from "components/VerticalTabs";
import React from "react";
import Navbar from "sections/Navbar";

function Portfolio() {
  return (
    <Container>
      <VerticalTabs />
      <Navbar />
    </Container>
  );
}

export default Portfolio;
