import { Container, useMediaQuery } from "@mui/material";
import Layout from "components/Layout";
import MobileLayout from "components/MobileLayout";
import Welcome from "sections/portfolio/Welcome";
import Experience from "sections/portfolio/Experience";
import Skill from "sections/portfolio/Skill";
import Education from "sections/portfolio/Eduction";
import Email from "sections/portfolio/Email";
import Footer from "sections/portfolio/Footer";
import Customization from "components/Customization";
import More from "sections/portfolio/More";

const tabs = [
  "Welcome",
  "Experience",
  "Skills",
  "Education",
  "Write me",
  "More",
];

const panels = [
  <Welcome />,
  <Experience />,
  <Skill />,
  <Education />,
  <Email />,
  <More />,
];

function Portfolio() {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <Container className="background-image" sx={{ position: "relative" }}>
      {isMobile ? (
        <MobileLayout tabs={tabs} panels={panels} />
      ) : (
        <Layout tabs={tabs} panels={panels} />
      )}
      <Customization />
      <Footer />
    </Container>
  );
}

export default Portfolio;
