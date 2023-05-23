import * as React from "react";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { Grid } from "@mui/material";
import { SkipNext, SkipPrevious } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  root: {
    height: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`,
    overflow: "hidden",
    width: `calc(100vw - ${0}px)`,
    // position: "relative",
  },
  buttonContainer: {
    position: "absolute",
    bottom: theme.spacing(12),
    right: 60,
  },
}));

function TabPanel(props) {
  const { children, value, index, onTabChange, ...other } = props;

  const classes = useStyles();

  const handleNext = () => {
    const nextIndex = index + 1;
    onTabChange(nextIndex);
  };

  const handlePrevious = () => {
    const previousIndex = index - 1;
    onTabChange(previousIndex);
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
      {value === index && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center", // Center horizontally
            height: "100%", // Full height
            width: "100%", // Full width
            pl: 3,
            position: "relative", // Add position relative for the pseudo-elements
          }}
        >
          <Grid container spacing={2}>
            {children}
          </Grid>
        </Box>
      )}
      <div className={classes.buttonContainer}>
        <IconButton
          variant="contained"
          onClick={handlePrevious}
          disabled={index <= 0}
        >
          <SkipPrevious />
        </IconButton>
        <IconButton
          variant="contained"
          onClick={handleNext}
          disabled={index >= 4}
          sx={{ marginLeft: 2 }}
        >
          <SkipNext />
        </IconButton>
      </div>
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  onTabChange: PropTypes.func.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function Layout({ tabs, panels }) {
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
        {tabs.map((tab, index) => (
          <Tab key={index} label={tab} {...a11yProps(index)} />
        ))}
      </Tabs>
      {panels.map((panel, index) => (
        <TabPanel
          key={index}
          value={value}
          index={index}
          onTabChange={setValue}
        >
          {panel}
        </TabPanel>
      ))}
    </Box>
  );
}
