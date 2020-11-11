import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Route } from "react-router-dom";
import "./App.css";
import Home from "./components";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";

function App() {
  AOS.init({
    duration: 800,
    easing: "ease-in-out-back",
    delay: 0,
  });
  return (
    <>
      <CssBaseline />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/experience" component={Experience} />
    </>
  );
}

export default App;
