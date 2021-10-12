import React, { useEffect } from "react";
import Typed from "react-typed";
import config from "../config.json";
import { Typography, Box, Container } from "@material-ui/core";
import { Navbar, DownloadCvBtn, useFullPageLoader, ParticlesBgr, Button } from "../components";
import "../styles/pages/home.scss";
import CloudDownloadOutlined from "@material-ui/icons/CloudDownloadOutlined";

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
      <Navbar />
      <Box maxWidth='xlg' component='main'>
        <ParticlesBgr />
        <Container component='section' className='container' maxWidth='lg'>
          <Box className='typed-box'>
            <Typography variant='h2'>
              <Typed strings={["Hello,<br> I'm Oleg, <br> web developer."]} typeSpeed={60} startDelay={1000} />
            </Typography>
            <Typography variant='h6'>
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
            <Box className='buttons-wrap'>
              <Button name='Contact me' linkTo={config.url.CONTACT} />
              <Button name='View cv' linkTo={config.url.CV} icon={<CloudDownloadOutlined />} />
            </Box>
          </Box>
          <div className='hero-img'>
            <img src={require("../assets/home-img.png").default} alt='Home Hero Image' />
          </div>
        </Container>
      </Box>
      {loader}
    </>
  );
}
