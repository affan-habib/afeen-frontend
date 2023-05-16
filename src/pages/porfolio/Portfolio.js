import { Container } from "@mui/material";
import VerticalTabs from "components/VerticalTabs";
import React from "react";
import Experience from "sections/Experience";
import Hero from "sections/Hero";
import Navbar from "sections/Navbar";
import Skills from "sections/Skills";

function Portfolio() {
  return (
    <Container>
      <VerticalTabs />
      <Navbar />
    </Container>
  );
}

export default Portfolio;
