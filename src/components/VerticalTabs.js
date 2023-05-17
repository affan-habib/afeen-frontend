
import * as React from "react";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import ExperienceComponent from "sections/Experience";
import Hero from "sections/Hero";
import SkillsSection from "sections/Skills";
import Education from "sections/Eduction";
import Email from "sections/Email";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const useStyles = makeStyles((theme) => ({
    root: {
      height: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`,
      overflow: "hidden",
      width: `calc(100vw - ${0}px)`,
    },
  }));
  const classes = useStyles();
  return (
    <div
      role="tabpanel"
      className={classes.root}
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{
          borderRight: 1,
          borderColor: "divider",
          width: 200,
          flexShrink: 0,
        }}
      >
        <Tab label="Welcome" {...a11yProps(0)} />
        <Tab label="Experience" {...a11yProps(1)} />
        <Tab label="Skills" {...a11yProps(2)} />
        <Tab label="Education" {...a11yProps(3)} />
        <Tab label="Write me" {...a11yProps(4)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Hero />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ExperienceComponent />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <SkillsSection />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Education />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Email />
      </TabPanel>
    </Box>
  );
}
