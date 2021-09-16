import React from "react";
import AOS from "aos";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import config from "./config.json";

// CSS
import "./App.css";
import "aos/dist/aos.css";

// Pages
import Home from "./pages/home";
import About from "./pages/about";
import Portfolio from "./pages/portfolio";
import Project from "./pages/project";
import Experience from "./pages/experience";
import Contact from "./pages/contact";
import Error from "./pages/404";

export default function App() {
  AOS.init({
    duration: 800,
    easing: "ease-in-out-back",
    delay: 0,
  });
  return (
    <Router>
      <CssBaseline />
      <Switch>
        <Route exact path={config.url.HOME} component={Home} />
        <Route path={config.url.ABOUT} component={About} />
        <Route path={config.url.PORTFOLIO} component={Portfolio} />
        <Route path={config.url.PROJECT} children={<Project />} />
        <Route path={config.url.TIMELINE} component={Experience} />
        <Route path={config.url.CONTACT} component={Contact} />
        <Route path='*' component={Error} />
      </Switch>
    </Router>
  );
}
