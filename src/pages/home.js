import React, { useEffect } from "react";
import Typed from "react-typed";
import config from "../config.json";
import { makeStyles } from "@material-ui/core";
import homeImg from "../images/home-img.png";
import { Typography, Box, Container } from "@material-ui/core";
import { Navbar, DownloadCvBtn, useFullPageLoader, ParticlesBgr, Button } from "../components";
import "../styles/pages/home.scss";

//CSS STYLES
const useStyles = makeStyles((theme) => ({
  homeSection: {
    border: "solid 1px red",
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  title: {
    alignSelf: "flex-start",
    color: "white",
    fontFamily: '"Open Sans", sans-serif;',
    fontWeight: "800",
    letterSpacing: "-5px",
    lineHeight: "3.5rem",
    marginBottom: "1.3rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "3.5rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "2.5rem",
      letterSpacing: "-2px",
      lineHeight: "3rem",
    },
  },
  subtitle: {
    alignSelf: "flex-start",
    fontWeight: "400",
    letterSpacing: "0",
    fontSize: "1.2rem",
    color: "tan",
    fontFamily: '"Ubuntu Mono", monospace',
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2rem",
    },
  },
  typedContainer: {
    justifyContent: "space-between",
    alignItems: "flex-start",
    minHeight: "18rem",
    textAlign: "left",
    zIndex: 1,
    [theme.breakpoints.down("sm")]: {
      width: "75%",
    },
    [theme.breakpoints.down("xsm")]: {
      width: "70%",
    },
  },
  homeImg: {
    maxWidth: "50%",
    "& img": {
      maxWidth: "100%",
      animationDuration: "2s",
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: "75%",
    },
  },
}));

export default function Home() {
  const [loader, showLoader, hideLoader] = useFullPageLoader();

  const classes = useStyles();

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
        <DownloadCvBtn />
        <Container component='section' className='container' maxWidth='lg'>
          <Box className={`flex column ${classes.typedContainer}`}>
            <Typography className={classes.title} variant='h2'>
              <Typed strings={["HELLO,<br> I'm Oleg, <br> web developer."]} typeSpeed={60} startDelay={1000} />
              <Box variant='div' className={classes.subtitle}>
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
              </Box>
            </Typography>
            <Button name='Contact me' linkTo={config.url.CONTACT} />
          </Box>
          <div className={classes.homeImg}>
            <img className='animate__zoomInDown' src={homeImg} alt='logo' />
          </div>
        </Container>
      </Box>
      {loader}
    </>
  );
}
