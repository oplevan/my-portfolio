import React from "react";
import Navbar from "./Navbar";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Container } from "@material-ui/core";
import {
  Speed,
  Devices,
  WbIncandescentOutlined,
  Cached,
} from "@material-ui/icons";

import html5Icon from "../images/devicons/original/html5-original.svg";
import css3Icon from "../images/devicons/original/css3-original.svg";
import jsIcon from "../images/devicons/original/javascript-original.svg";
import reactIcon from "../images/devicons/original/react-original.svg";
import bootstrapIcon from "../images/devicons/original/bootstrap-plain.svg";
import materialUIIcon from "../images/devicons/original/material-ui-original.svg";
import npmIcon from "../images/devicons/original-wordmark/npm-original-wordmark.svg";
import gitIcon from "../images/devicons/original/git-original.svg";
import gitHubIcon from "../images/devicons/original/github-original.svg";
import linuxIcon from "../images/devicons/original/linux-original.svg";
import reduxIcon from "../images/devicons/original/redux-original.svg";
import sassIcon from "../images/devicons/original/sass-original.svg";
import lessIcon from "../images/devicons/original-wordmark/less-plain-wordmark.svg";
import webpackIcon from "../images/devicons/original/webpack-original.svg";
import jsxIcon from "../images/devicons/original/jsx-original.svg";

const useStyles = makeStyles((theme) => ({
  pageTitle: {
    fontWeight: 800,
    letterSpacing: "-2px",
    position: "relative",
    marginBottom: "5rem",
    color: "#08fdd8",
    textTransform: "uppercase",
    "&:after": {
      content: '""',
      position: "absolute",
      width: "6rem",
      left: "50%",
      bottom: "-1rem",
      transform: "translateX(-3rem)",
      borderBottom: "solid 4px #cacaca",
      [theme.breakpoints.down("sm")]: {
        width: "4.5rem",
        transform: "translateX(-2.25rem)",
      },
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.3rem",
    },
  },
  labelWrap: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "2.5rem",
    [theme.breakpoints.down("sm")]: {
      gap: 0,
      flexFlow: "row wrap",
      alignItems: "stretch",
    },
  },
  label: {
    cursor: "pointer",
    marginBottom: "1.5rem",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    verticalAlign: "top",
    justifyContent: "flex-start",
    "&:nth-of-type(3) svg": {
      transform: "rotateX(180deg)",
    },

    "&:hover $labelTop:before": {
      boxShadow: "0 0 0 0 rgba(8, 253, 216, 0)",
      animation: `$pulse 2s infinite`,
    },
    [theme.breakpoints.down("sm")]: {
      width: "50%",
      alignContent: "flex-start",
    },
  },
  "@keyframes pulse": {
    "0%": {
      transform: "scale(0.95)",
      boxShadow: "0 0 0 0 rgba(8, 253, 216, 0.7)",
    },
    "70%": {
      transform: "scale(1)",
      boxShadow: "0 0 0 0.7rem rgba(8, 253, 216, 0)",
    },
    "100%": {
      transform: "scale(0.95)",
      boxShadow: "0 0 0 0 rgba(8, 253, 216, 0)",
    },
  },
  labelTop: {
    background: "transparent",
    border: "solid 3px  #313131",
    position: "relative",
    display: "inline-block",
    lineHeight: "7.8rem",
    width: "6rem",
    height: "6rem",
    borderRadius: "50%",
    zIndex: 1,
    "& svg": {
      fontSize: "3rem",
      perspective: 4000,
      color: "#999",
      [theme.breakpoints.down("xs")]: {
        fontSize: "1.5rem",
      },
    },
    "&:before": {
      content: '""',
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      margin: "0.5rem",
      borderRadius: "50%",
      backgroundColor: "#313131",
      boxShadow: "0 0 0 0 rgba(8, 253, 216, 1)",
    },
    [theme.breakpoints.down("xs")]: {
      width: "4rem",
      height: "4rem",
      lineHeight: "4.5rem",
    },
  },
  labelBottom: {
    fontSize: "1rem",
    lineHeight: "1.6rem",
    padding: "0 2rem",
    "& span": {
      fontSize: "1.5rem",
      display: "block",
      letterSpacing: "-2px",
      margin: "1rem auto 0.4rem",
      fontFamily: "Ubuntu Mono, monospace",
      [theme.breakpoints.down("xs")]: {
        fontSize: "1.2rem",
      },
    },
    [theme.breakpoints.up("md")]: {
      padding: 0,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8rem",
      lineHeight: "1.2rem",
      padding: "0 0.8rem",
    },
  },
  bottomContainer: {
    textAlign: "left",
    padding: "2rem 0",
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("lg")]: {
      paddingLeft: "24px",
      paddingRight: "24px",
    },
    "& h4": {
      color: "#08fdd8",
    },
    [theme.breakpoints.down("md")]: {
      "& h4": {
        fontSize: "1.8rem",
      },
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "16px",
      paddingRight: "16px",
    },
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  infoBox: {
    width: "45%",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      textAlign: "center",
      marginBottom: "1.8rem",
      "& li": {
        textAlign: "left",
      },
    },
  },
  skillsBox: {
    width: "45%",
    "& div": {
      justifyContent: "center",
    },
    "& img": {
      height: "1.5rem",
      width: "auto",
    },
    "& span": {
      margin: "0 5px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      textAlign: "center",
    },
  },
}));

const labelItems = [
  {
    labelName: "Fast",
    labelIcon: <Speed />,
    labelText: "Fast load times and lag free interaction, my highest priority.",
  },
  {
    labelName: "Responsive",
    labelIcon: <Devices />,
    labelText: "My layouts will work on any device, big or small.",
  },
  {
    labelName: "Intuitive",
    labelIcon: <WbIncandescentOutlined />,
    labelText: "Strong preference for easy to use, intuitive UX/UI.",
  },
  {
    labelName: "Dynamic",
    labelIcon: <Cached />,
    labelText:
      "Websites don't have to be static, I love making pages come to life.",
  },
];

const devSkills = [
  { title: "Html5", icon: html5Icon },
  { title: "Css3", icon: css3Icon },
  { title: "Java Script", icon: jsIcon },
  { title: "ReactJs", icon: reactIcon },
  { title: "Bootstrap", icon: bootstrapIcon },
  { title: "Material UI", icon: materialUIIcon },
  { title: "npm", icon: npmIcon },
  { title: "Git", icon: gitIcon },
  { title: "GitHub", icon: gitHubIcon },
  { title: "Linux", icon: linuxIcon },
  { title: "Redux", icon: reduxIcon },
  { title: "Sass", icon: sassIcon },
  { title: "Less", icon: lessIcon },
  { title: "Webpack", icon: webpackIcon },
  { title: "jsx", icon: jsxIcon },
];

const About = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Box component="section" className="page__content">
        <Container maxWidth="md" className="topContainer">
          <Typography variant="h3" className={classes.pageTitle}>
            About me
          </Typography>
          <Box component="div" className={classes.labelWrap}>
            {labelItems.map((item, key) => (
              <div className={classes.label} key={key}>
                <div className={classes.labelTop}>{item.labelIcon}</div>
                <div className={classes.labelBottom}>
                  <span>{item.labelName}</span>
                  {item.labelText}
                </div>
              </div>
            ))}
          </Box>
        </Container>
        <Container maxWidth="lg" className={classes.bottomContainer}>
          <Box component="div" className={classes.infoBox}>
            <Typography variant="h4">Who am I?</Typography>
            <Box component="div">
              <p>
                I am a Front-End Web Developer based in London, UK. I have
                serious passion for UI effects, animations and creating
                intuitive, dynamic user experience. Well-organised person,
                problem solver, independent employee with high attention to
                detail. Interested in the entire frontend spectrum and working
                on ambitious projects with positive people.
              </p>
              <p>
                Also, I'm planing to extend my skill set to become a full stack
                developer in the near future.
              </p>
              <div>
                <Typography variant="h6">Random facts</Typography>
                <ul>
                  <li>I'm a big fan of MMA.</li>
                  <li>
                    I like lifting heavy things while listening to heavy metal,
                    but usually listening to Blues or Jazz when coding.
                  </li>
                  <li>I love to cook (and eat).</li>
                  <li>I'm coffee addicted.</li>
                  <li>I'm a bit of a clean freak</li>
                  <li>I love fast driving</li>
                </ul>
              </div>
            </Box>
          </Box>
          <Box component="div" className={`${classes.skillsBox} skills`}>
            <Typography variant="h4">My Skills</Typography>
            <ul>
              {devSkills.map((item) => (
                <li>
                  <Box component="div" className="flex row">
                    <span>
                      <img src={item.icon} alt={item.title} />
                    </span>
                    <span>{item.title}</span>
                  </Box>
                </li>
              ))}
            </ul>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default About;
