import React from "react";
import { Box, Typography, Container } from "@material-ui/core";
import { Speed, Devices, WbIncandescentOutlined, Cached } from "@material-ui/icons";
import html5Icon from "../../assets/devicons/original/html5-original.svg";
import css3Icon from "../../assets/devicons/original/css3-original.svg";
import jsIcon from "../../assets/devicons/original/javascript-original.svg";
import esIcon from "../../assets/devicons/original/es6.svg";
import reactIcon from "../../assets/devicons/original/react-original.svg";
import reduxIcon from "../../assets/devicons/original/redux-original.svg";
import bootstrapIcon from "../../assets/devicons/original/bootstrap-plain.svg";
import materialUiIcon from "../../assets/devicons/original/material-ui-original.svg";
import npmIcon from "../../assets/devicons/original-wordmark/npm-original-wordmark.svg";
import gitIcon from "../../assets/devicons/original/git-original.svg";
import gitHubIcon from "../../assets/devicons/original/github-original.svg";
import mysqlIcon from "../../assets/devicons/original/mysql-original.svg";
import sassIcon from "../../assets/devicons/original/sass-original.svg";
import lessIcon from "../../assets/devicons/original-wordmark/less-plain-wordmark.svg";
import webpackIcon from "../../assets/devicons/original/webpack-original.svg";
import jsxIcon from "../../assets/devicons/original/jsx-original.svg";
import ubuntuIcon from "../../assets/devicons/original/ubuntu-plain.svg";
import seoIcon from "../../assets/devicons/original/seo.svg";
import photoshopIcon from "../../assets/devicons/original-wordmark/photoshop-line.svg";

import { Navbar, ParticlesBgr, useFullPageLoader, Button } from "../../components";

import "./about.scss";

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
    labelText: "Websites don't have to be static, I love making pages come to life.",
  },
];

const techSkills = [
  { title: "Html5", icon: html5Icon },
  { title: "Css3", icon: css3Icon },
  { title: "sass", icon: sassIcon },
  { title: "Java Script", icon: jsIcon },
  { title: "ES5/ES6", icon: esIcon },
  { title: "React", icon: reactIcon },
  { title: "Redux", icon: reduxIcon },
  { title: "npm", icon: npmIcon },
  { title: "mySQL", icon: mysqlIcon },
];

const otherSkills = [
  { title: "Bootstrap", icon: bootstrapIcon },
  { title: "Material UI", icon: materialUiIcon },
  { title: "Git", icon: gitIcon },
  { title: "GitHub", icon: gitHubIcon },
  { title: "Linux Ubuntu", icon: ubuntuIcon },
  { title: "less", icon: lessIcon },
  { title: "Webpack", icon: webpackIcon },
  { title: "", icon: jsxIcon },
  { title: "Search Engine Optimization", icon: seoIcon },
  { title: "Photoshop Basics", icon: photoshopIcon },
];

export default function About() {
  const [loader, showLoader, hideLoader] = useFullPageLoader();
  const fetchData = () => {
    showLoader();
    setTimeout(() => {
      hideLoader();
    }, 800);
  };
  React.useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Box component="main">
        <ParticlesBgr />
        <Container maxWidth="md" component="section">
          <h1>About me</h1>
          <Box component="div" className="cards-wrap">
            {labelItems.map((item, i) => (
              <div className="card" key={i}>
                <div className="icon">{item.labelIcon}</div>
                <div className="text">
                  <span>{item.labelName}</span>
                  {item.labelText}
                </div>
              </div>
            ))}
          </Box>
        </Container>
        <Container maxWidth="lg" component="section" className="content">
          <Box component="div" className="bio">
            <Typography variant="h4">Who am I?</Typography>
            <p>
              I am a <b>Front-End Web Developer</b> based in London, UK. I have serious passion for UI effects, animations and
              creating intuitive, dynamic user experience. Well-organised person, problem solver, independent employee with high
              attention to detail. Interested in the entire <b>front-end</b> spectrum and working on ambitious projects with
              positive people.
            </p>
            <p>Also, I'm planning to extend my skill set to become a full stack developer in the near future.</p>
            <Typography variant="h6">Random facts</Typography>
            <ul>
              <li>I'm a big fan of MMA and boxing.</li>
              <li>I prefer mountains to the ocean and beaches</li>
              <li>I love to cook (and eat).</li>
              <li>I'm a coffee addicted.</li>
              <li>I'm a bit of a clean freak</li>
            </ul>
          </Box>
          <Box component="div" className="skills">
            <Typography variant="h4">Tech Skills</Typography>
            {techSkills.map((item, i) => (
              <Button key={i} type="default" title={item.title} icon={item.icon} />
            ))}
            <Typography variant="h6">Other skills</Typography>
            {otherSkills.map((item, i) => (
              <Button key={i} type="default" title={item.title} icon={item.icon} />
            ))}
          </Box>
        </Container>
      </Box>
      {loader}
    </>
  );
}
