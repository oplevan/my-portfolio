import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import config from "./config.json";
import { Footer } from "./components";

// CSS
// import "./App.css";
import "./styles/main.scss";

// Pages
import Home from "./pages/home";
import About from "./pages/about";
import Portfolio from "./pages/portfolio";
import Project from "./pages/project";
import Experience from "./pages/experience";
import Contact from "./pages/contact";
import Error from "./pages/404";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={config.url.HOME} component={Home} />
        <Route path={config.url.ABOUT} component={About} />
        <Route path={config.url.PORTFOLIO} component={Portfolio} />
        <Route path={config.url.PROJECT} children={<Project />} />
        <Route path={config.url.TIMELINE} component={Experience} />
        <Route path={config.url.CONTACT} component={Contact} />
        <Route path='*' component={Error} />
      </Switch>
      <Footer />
    </Router>
  );
}
