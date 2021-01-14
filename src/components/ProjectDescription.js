import React, { useState, useEffect } from 'react';
import { Box, Container, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { portfolio } from './data/customData';
import { useParams } from 'react-router-dom';
import ParticlesBgr from './ParticlesBgr';
import LinkIcon from '@material-ui/icons/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import Footer from './Footer';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import useFullPageLoader from './useFullPageLoader';
import Navbar from './Navbar';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    borderRadius: 0,
    background: 'transparent',
    border: 'solid 1px #08fdd8',
    color: '#08fdd8',
    marginLeft: 0,
    '&:hover': {
      background: '#08fdd8',
      color: 'black',
    },
  },
}));
const defaultState = {
  id: null,
  title: null,
  description: {
    short: null,
    full: null,
  },
  carouselImages: [],
  thumbnail: null,
  thumbnailHover: null,
  tags: [],
  category: [],
  animation: {
    type: null,
    delay: null,
  },
  links: {
    web: null,
    gitHub: null,
  },
};
const ProjectDescription = () => {
  const [project, setProject] = useState(defaultState);
  const [loader, showLoader, hideLoader] = useFullPageLoader();
  const { id } = useParams();
  const classes = useStyles();

  useEffect(() => {
    const currentProject = portfolio.find((project) => project.id === id);
    setProject(currentProject);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = () => {
    showLoader();
    setTimeout(() => {
      hideLoader();
    }, 800);
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { title, description, carouselImages, tags, links } = project;
  return (
    <>
      <Navbar />
      <Box component='main' className='page__content' id={id}>
        <ParticlesBgr />
        <Container
          maxWidth='md'
          className='project_container'
          component='section'
        >
          <a
            href={'/portfolio'}
            className='back_list'
            title='Back to Portfolio'
          >
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <span>Back</span>
          </a>
          <header>
            <h1>{title}</h1>
            <p>{description.short}</p>
            <div className='share'>
              {links.web ? (
                <Button
                  href={links.web}
                  target='_blank'
                  variant='contained'
                  color='primary'
                  className={classes.button}
                  startIcon={<LinkIcon />}
                >
                  Visit the website
                </Button>
              ) : (
                ''
              )}
              {links.gitHub ? (
                <Button
                  href={links.gitHub}
                  target='_blank'
                  variant='contained'
                  color='primary'
                  className={classes.button}
                  startIcon={<GitHubIcon />}
                >
                  View on gitHub
                </Button>
              ) : (
                ''
              )}
            </div>
          </header>
          <div className='media'>
            <div className='bar'>
              <h3>{title}</h3>
              <i></i>
            </div>
            <AwesomeSlider>
              {carouselImages.map((img, i) => (
                <div data-src={img} key={i} />
              ))}
            </AwesomeSlider>
          </div>
          <div className='text'>
            <section>
              {description.full ? (
                <>
                  <h2>About this project</h2>
                  <hr />
                  <p>{description.full}</p>
                </>
              ) : (
                ''
              )}
            </section>
            <section>
              <h2>Technical Sheet</h2>
              <p>
                Code technologies I got involved with while working on this
                project.
              </p>
              <hr />
              <ul className='keywords'>
                {tags.map((tag, i) => (
                  <li key={i}>{tag}</li>
                ))}
              </ul>
            </section>
          </div>
          <Footer />
        </Container>
      </Box>
      {loader}
    </>
  );
};

export default ProjectDescription;
