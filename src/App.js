import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, About, Portfolio, Project, Experience, Contact, PageNotFound } from "./pages";
import { Navbar, Footer } from "./components";
import "./styles/main.scss";
import config from "./config.json";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path={config.url.HOME} component={Home} />
        <Route path={config.url.ABOUT} component={About} />
        <Route path={config.url.PORTFOLIO} component={Portfolio} />
        <Route path={config.url.PROJECT} children={<Project />} />
        <Route path={config.url.TIMELINE} component={Experience} />
        <Route path={config.url.CONTACT} component={Contact} />
        <Route path="*" component={PageNotFound} />
      </Switch>
      <Footer />
    </Router>
  );
}
