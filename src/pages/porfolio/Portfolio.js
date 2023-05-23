import VerticalTabs from "components/VerticalTabs";
import Hero from "sections/Welcome";
import ExperienceComponent from "sections/Experience";
import SkillsSection from "sections/Skills";
import Education from "sections/Eduction";
import Email from "sections/Email";
import Navbar from "sections/Navbar";
import Customization from "components/Customization";
import { Container } from "@mui/material";

const tabs = ["Welcome", "Experience", "Skills", "Education", "Write me"];

const panels = [
  <Hero />,
  <ExperienceComponent />,
  <SkillsSection />,
  <Education />,
  <Email />,
];

function App() {
  return (
    <Container className="background-image" sx={{ position: "relative" }}>
      <VerticalTabs tabs={tabs} panels={panels} />
      <Customization />
      <Navbar />
    </Container>
  );
}

export default App;
