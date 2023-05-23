import { Container } from "@mui/material";
import Layout from "components/Layout";
import Welcome from "sections/Welcome";
import Experience from "sections/Experience";
import Skills from "sections/Skill";
import Education from "sections/Eduction";
import Email from "sections/Email";
import Navbar from "sections/Navbar";
import Customization from "components/Customization";

const tabs = ["Welcome", "Experience", "Skills", "Education", "Write me"];

const panels = [
  <Welcome />,
  <Experience />,
  <Skills />,
  <Education />,
  <Email />,
];

function App() {
  return (
    <Container className="background-image" sx={{ position: "relative" }}>
      <Layout tabs={tabs} panels={panels} />
      <Customization />
      <Navbar />
    </Container>
  );
}

export default App;
