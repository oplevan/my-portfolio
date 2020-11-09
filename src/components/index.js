import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Particles from "react-particles-js";
import { makeStyles } from "@material-ui/core";

//CSS STYLES
const useStyles = makeStyles({
  particlesCanvas: {
    position: "absolute",
    backgroundColor: "#1d1d1d",
    opacity: 1,
  },
});

const Home = () => {
  const classes = useStyles();

  return (
    <section className={classes.section}>
      <Particles
        canvasClassName={classes.particlesCanvas}
        params={{
          particles: {
            number: {
              value: 50,
            },
            size: {
              value: 3,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
        }}
      />
      <Navbar />
      <Header />
    </section>
  );
};

export default Home;
