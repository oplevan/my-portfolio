import React, { useEffect } from "react";
import { Button, ParticlesBgr, Navbar, useFullPageLoader, MediaWindow } from "../components";
import { Box, Container } from "@material-ui/core";
import { useParams } from "react-router-dom";
import LinkIcon from "@material-ui/icons/Link";
import GitHubIcon from "@material-ui/icons/GitHub";

import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";

import { portfolio } from "../components/data/customData";
import config from "../config.json";
import "../styles/pages/project.scss";

export default function Project() {
  const { id } = useParams();
  const data = portfolio.find((project) => project.id === id);
  const [loader, showLoader, hideLoader] = useFullPageLoader();

  const fetchData = () => {
    showLoader();
    setTimeout(() => {
      hideLoader();
    }, 800);
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { title, description, carouselImages, tags, links } = data;
  return (
    <>
      <Navbar />
      <Box component="main" id={id}>
        <ParticlesBgr />
        <Container maxWidth="md" className="container" component="section">
          <Button type="back-list" linkTo={config.url.PORTFOLIO} extraClassName="back-btn" />
          <h1>{title}</h1>
          <p>{description.short}</p>
          {links.web && <Button type="neon" linkTo={links.web} title="Visit Website" size="medium" icon={<LinkIcon />} />}
          {links.gitHub && <Button type="neon" linkTo={links.gitHub} title="View source" size="medium" icon={<GitHubIcon />} />}
          <MediaWindow title={title} className="carousel-container">
            <AwesomeSlider animation="cubeAnimation">
              {carouselImages.map((img, i) => (
                <div data-src={img} key={i} />
              ))}
            </AwesomeSlider>
          </MediaWindow>
          <div className="text">
            <section>
              {description.full && (
                <>
                  <h2>About this project</h2>
                  <hr />
                  <p>{description.full}</p>
                </>
              )}
            </section>
            <section>
              <h2>Technical Sheet</h2>
              <p>Code technologies I got involved with while working on this project.</p>
              <hr />
              <ul>
                {tags.map((tag, i) => (
                  <li key={i}>{tag}</li>
                ))}
              </ul>
            </section>
          </div>
        </Container>
      </Box>
      {loader}
    </>
  );
}
