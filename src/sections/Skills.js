import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Grid, Paper, Typography } from "@mui/material";
import { DesignServices, MobileFriendly, Web } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  hero: {
    height: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`,
    display: "flex",
    alignItems: "center",
  },
  skill: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    border: 1,
    borderColor: "divider",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.paper,
    transition: "background-color 0.3s ease",
    "&:hover": {
      color: "orange",
      fontWeight: 'bold',
    },
    height: 150,
    padding: theme.spacing(2),
    opacity: 1, // Set initial opacity to 1
  },
  skillFade: {
    opacity: 0.5, // Set opacity to 0.5 when not hovered
  },
  icon: {
    fontSize: 48,
    marginBottom: theme.spacing(4),
  },
  technology: {
    background: "card",
    padding: "5px",
    borderRadius: 4,
    backgroundColor: theme.palette.background.card,
  },
  span: {
    color: "white",
    background: "gray",
    padding: 5,
    marginRight: 5,
    borderRadius: 2,
    flexDirection: "row",
  },
}));

const SkillsSection = () => {
  const classes = useStyles();
  const [showTechnologies, setShowTechnologies] = useState(null);
  const skills = [
    {
      icon: <MobileFriendly className={classes.icon} />,
      title: "Mobile App Development",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      technologies: ["React Native", "typescript, lottie"],
    },
    {
      icon: <Web className={classes.icon} />,
      title: "Website Development",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      technologies: [
        "React",
        "Redux",
        "JavaScript",
        "Node.js",
        "Express",
        "MongoDB",
        "NoSQL",
      ],
    },
    {
      icon: <DesignServices className={classes.icon} />,
      title: "User Interface Design",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      technologies: ["HTML", "CSS"],
    },
  ];
  const allTechnologies = skills.flatMap((skill) => skill.technologies);
  function hoverOut() {
    setTimeout(() => {
      setShowTechnologies(null);
    }, 5000);
  }
  return (
    <>
      <div className={classes.hero}>
        <Grid container spacing={2} alignItems="center" padding={2}>
          <Grid item md={12}>
            <Typography variant="h3" gutterBottom>
              Skills
            </Typography>
          </Grid>
          <Grid item md={6} container spacing={2}>
            {skills.map((skill, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Paper
                  className={classes.skill}
                  onClick={() => setShowTechnologies(skill.technologies)}
                  onMouseLeave={() => hoverOut()}
                >
                  {skill.icon}
                  <Typography variant="h6" align="center">
                    {skill.title}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
          <Grid item md={12}>
            <Typography variant="h4" gutterBottom>
              Technology
            </Typography>
            <Typography variant="body2" className={classes.technology}>
              {showTechnologies
                ? showTechnologies.map((el) => (
                    <span className={classes.span} color="primary">
                      {el}
                    </span>
                  ))
                : allTechnologies.map((el) => (
                    <span className={classes.span}>{el}</span>
                  ))}
            </Typography>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default SkillsSection;
