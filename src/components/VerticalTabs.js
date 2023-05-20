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
import { Button } from "@mui/material";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  const useStyles = makeStyles((theme) => ({
    root: {
      height: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`,
      overflow: "hidden",
      width: `calc(100vw - ${0}px)`,
      position: "relative",
    },
    buttonContainer: {
      position: "absolute",
      bottom: theme.spacing(12),
      right: theme.spacing(12),
    },
  }));

  const classes = useStyles();

  const { setValue } = props; // Access setValue from props

  const handleNext = () => {
    const nextIndex = index + 1;
    setValue(nextIndex);
  };

  const handlePrevious = () => {
    const previousIndex = index - 1;
    setValue(previousIndex);
  };

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
      <div className={classes.buttonContainer}>
        {index > 0 && (
          <Button variant="outlined" onClick={handlePrevious}>
            Previous
          </Button>
        )}
        {index < 4 && (
          <Button
            variant="outlined"
            onClick={handleNext}
            sx={{ marginLeft: 2 }}
          >
            Next
          </Button>
        )}
      </div>
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  setValue: PropTypes.func.isRequired, // Add setValue prop type
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
      <TabPanel value={value} index={0} setValue={setValue}>
        <Hero />
      </TabPanel>
      <TabPanel value={value} index={1} setValue={setValue}>
        <ExperienceComponent />
      </TabPanel>
      <TabPanel value={value} index={2} setValue={setValue}>
        <SkillsSection />
      </TabPanel>
      <TabPanel value={value} index={3} setValue={setValue}>
        <Education />
      </TabPanel>
      <TabPanel value={value} index={4} setValue={setValue}>
        <Email />
      </TabPanel>
    </Box>
  );
}
