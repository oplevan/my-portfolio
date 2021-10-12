import React, { useState, useEffect } from "react";
import { Box, Container, Grid } from "@material-ui/core";
import { filters, portfolio } from "../components/data/customData";
import useFullPageLoader from "../components/useFullPageLoader";
import ParticlesBgr from "../components/ParticlesBgr";
import Project from "../components/Project";
import Navbar from "../components/Navbar";

import "../styles/pages/portfolio.scss";

export default function Portfolio() {
  // Filters
  const [filter, setFilter] = useState("all");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(portfolio);
  }, []);

  useEffect(() => {
    fetchData();
    setProjects([]);
    const filtered = portfolio.map((p) => ({
      ...p,
      filtered: p.category.includes(filter),
    }));
    setProjects(filtered);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  const [loader, showLoader, hideLoader] = useFullPageLoader();
  const fetchData = () => {
    showLoader();
    setTimeout(() => {
      hideLoader();
    }, 800);
  };
  return (
    <>
      <Navbar />
      <Box component='main' id='portfolio'>
        <ParticlesBgr />
        <Container maxWidth='lg' component='section'>
          <h1>Portfolio</h1>
          <p align='left'>
            From small Web Applications and UI/UX animations to React.JS, Redux Apps. Check out my latest web development
            portfolio projects.
          </p>
          <ul className='filters'>
            {filters.map((item, index) => (
              <li
                key={index}
                className={`${item.filter} ${filter === item.filter && "active"}`}
                onClick={() => {
                  setFilter(item.filter);
                }}
              >
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
        </Container>
        <Container maxWidth='lg' component='section'>
          <Grid container spacing={5} justify='center' className='grid__list projects__container'>
            {projects.map((project) => (project.filtered === true ? <Project key={project.id} {...project}></Project> : ""))}
          </Grid>
        </Container>
      </Box>
      {loader}
    </>
  );
}
