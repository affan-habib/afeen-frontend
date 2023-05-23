import { Container } from "@mui/material";
import Layout from "components/Layout";
import Welcome from "sections/Welcome";
import Experience from "sections/Experience";
import Skill from "sections/Skill";
import Education from "sections/Eduction";
import Email from "sections/Email";
import Footer from "sections/Footer";
import Customization from "components/Customization";

const tabs = ["Welcome", "Experience", "Skills", "Education", "Write me"];

const panels = [
  <Welcome />,
  <Experience />,
  <Skill />,
  <Education />,
  <Email />,
];

function Portfolio() {
  return (
    <Container className="background-image" sx={{ position: "relative" }}>
      <Layout tabs={tabs} panels={panels} />
      <Customization />
      <Footer />
    </Container>
  );
}

export default Portfolio;
