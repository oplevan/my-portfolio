import React, { useEffect } from "react";
import Typed from "react-typed";
import config from "../../config.json";
import { Typography, Box, Container } from "@material-ui/core";
import { Navbar, useFullPageLoader, ParticlesBgr, Button } from "../../components";
import CloudDownloadOutlined from "@material-ui/icons/CloudDownloadOutlined";
import "./home.scss";

export default function Home() {
  const [loader, showLoader, hideLoader] = useFullPageLoader();

  useEffect(() => {
    showLoader();
    setTimeout(() => {
      hideLoader();
    }, 800);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Box maxWidth="xlg" component="main" className="home">
        <ParticlesBgr />
        <Container component="section" className="container" maxWidth="lg">
          <Box className="typed-box">
            <Typography variant="h2">
              <Typed strings={["Hello,<br> I'm Oleg, <br> web developer."]} typeSpeed={60} startDelay={1000} />
            </Typography>
            <Typography variant="h6">
              <Typed
                strings={[
                  "UI Development",
                  "CSS3|HTML5",
                  "Java Script",
                  "React|Redux",
                  "WordPress",
                  "ES5/ES6",
                  "Amazon Web Services",
                ]}
                startDelay={3000}
                typeSpeed={40}
                backSpeed={50}
                loop
              />
            </Typography>
            <Box className="buttons-wrap">
              <Button type="neon" title="Contact me" linkTo={config.url.CONTACT} size="large" reflect />
              <Button type="neon" title="View cv" linkTo={config.url.CV} size="large" icon={<CloudDownloadOutlined />} reflect />
            </Box>
          </Box>
          <div className="hero-img">
            <img src={require("../../assets/home-img.png").default} alt="Home Hero Image" />
          </div>
        </Container>
      </Box>
      {loader}
    </>
  );
}
