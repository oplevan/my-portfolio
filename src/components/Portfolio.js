import React, { useState, useEffect } from 'react';
import { Box, Container, Grid } from '@material-ui/core';
import { filters, portfolio } from './data/customData';
import useFullPageLoader from './useFullPageLoader';
import ParticlesBgr from './ParticlesBgr';
import Project from './Project';
import Footer from './Footer';
import Navbar from './Navbar';

const Portfolio = () => {
  // Filters
  const [filter, setFilter] = useState('all');
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
      <Box component='main' className='page__content' id='portfolio'>
        <ParticlesBgr />
        <Container maxWidth='lg' component='section'>
          <h3 className='page__title'>Portfolio</h3>
          <p align='left'>
            From small Web Applications and UI/UX animations to React.JS, Redux
            Apps. Check out my latest web development portfolio projects.
          </p>
          <ul className='filters' id='filters'>
            {filters.map((item, index) => (
              <li
                key={index}
                className={`filter_btn ${item.filter} ${
                  filter === item.filter ? 'active' : ''
                }`}
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
          <Grid
            container
            spacing={5}
            justify='center'
            className='grid__list projects__container'
          >
            {projects.map((project) =>
              project.filtered === true ? (
                <Project key={project.id} {...project}></Project>
              ) : (
                ''
              )
            )}
          </Grid>
          <Footer />
        </Container>
      </Box>
      {loader}
    </>
  );
};

export default Portfolio;
