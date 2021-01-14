import React from 'react';
import Navbar from './Navbar';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Container } from '@material-ui/core';
import {
  Speed,
  Devices,
  WbIncandescentOutlined,
  Cached,
} from '@material-ui/icons';
import html5Icon from '../images/devicons/original/html5-original.svg';
import css3Icon from '../images/devicons/original/css3-original.svg';
import jsIcon from '../images/devicons/original/javascript-original.svg';
import esIcon from '../images/devicons/original/es6.svg';
import reactIcon from '../images/devicons/original/react-original.svg';
import reduxIcon from '../images/devicons/original/redux-original.svg';
import bootstrapIcon from '../images/devicons/original/bootstrap-plain.svg';
import materialUiIcon from '../images/devicons/original/material-ui-original.svg';
import npmIcon from '../images/devicons/original-wordmark/npm-original-wordmark.svg';
import gitIcon from '../images/devicons/original/git-original.svg';
import gitHubIcon from '../images/devicons/original/github-original.svg';
import mysqlIcon from '../images/devicons/original/mysql-original.svg';
import sassIcon from '../images/devicons/original/sass-original.svg';
import lessIcon from '../images/devicons/original-wordmark/less-plain-wordmark.svg';
import webpackIcon from '../images/devicons/original/webpack-original.svg';
import jsxIcon from '../images/devicons/original/jsx-original.svg';
import ubuntuIcon from '../images/devicons/original/ubuntu-plain.svg';
import seoIcon from '../images/devicons/original/seo.svg';
import photoshopIcon from '../images/devicons/original-wordmark/photoshop-line.svg';

import ParticlesBgr from './ParticlesBgr';
import Footer from './Footer';
import useFullPageLoader from './useFullPageLoader';

const useStyles = makeStyles((theme) => ({
  labelWrap: {
    display: 'flex',
    flexDirection: 'row',
    verticalAlign: 'top',
    justifyContent: 'space-between',
    gap: '2.5rem',
    [theme.breakpoints.down('sm')]: {
      gap: 0,
      flexFlow: 'row wrap',
      alignItems: 'stretch',
    },
  },
  label: {
    cursor: 'pointer',
    marginBottom: '1.5rem',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    verticalAlign: 'top',
    justifyContent: 'flex-start',
    '&:nth-of-type(3) svg': {
      transform: 'rotateX(180deg)',
    },

    '&:hover $labelTop:before': {
      boxShadow: '0 0 0 0 rgba(8, 253, 216, 0)',
      animation: `$pulse 2s infinite`,
    },
    [theme.breakpoints.down('sm')]: {
      width: '50%',
      alignContent: 'flex-start',
    },
  },
  '@keyframes pulse': {
    '0%': {
      transform: 'scale(0.95)',
      boxShadow: '0 0 0 0 rgba(8, 253, 216, 0.7)',
    },
    '70%': {
      transform: 'scale(1)',
      boxShadow: '0 0 0 0.7rem rgba(8, 253, 216, 0)',
    },
    '100%': {
      transform: 'scale(0.95)',
      boxShadow: '0 0 0 0 rgba(8, 253, 216, 0)',
    },
  },
  labelTop: {
    background: 'transparent',
    border: 'solid 3px  #313131',
    position: 'relative',
    display: 'inline-block',
    lineHeight: '7.8rem',
    width: '6rem',
    height: '6rem',
    borderRadius: '50%',
    zIndex: 1,
    '& svg': {
      fontSize: '3rem',
      perspective: 4000,
      color: '#999',
      [theme.breakpoints.down('xs')]: {
        fontSize: '1.5rem',
      },
    },
    '&:before': {
      content: '""',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      margin: '0.5rem',
      borderRadius: '50%',
      backgroundColor: '#313131',
      boxShadow: '0 0 0 0 rgba(8, 253, 216, 0)',
    },
    [theme.breakpoints.down('xs')]: {
      width: '4rem',
      height: '4rem',
      lineHeight: '4.5rem',
    },
  },
  labelBottom: {
    lineHeight: '1.6rem',
    padding: '0 2rem',
    '& span': {
      fontSize: '1.5rem',
      display: 'block',
      letterSpacing: '-2px',
      margin: '1rem auto 0.4rem',
      [theme.breakpoints.down('xs')]: {
        fontSize: '1.2rem',
      },
    },
    [theme.breakpoints.up('md')]: {
      padding: 0,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.8rem',
      lineHeight: '1.2rem',
      padding: '0 0.8rem',
    },
  },
  bottomContainer: {
    textAlign: 'left',
    padding: '2rem 0',
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('lg')]: {
      paddingLeft: '24px',
      paddingRight: '24px',
    },
    '& h4': {
      color: '#08fdd8',
    },
    [theme.breakpoints.down('md')]: {
      '& h4': {
        fontSize: '1.8rem',
      },
    },
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '16px',
      paddingRight: '16px',
    },
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  infoBox: {
    width: '45%',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      textAlign: 'center',
      marginBottom: '1.8rem',
      '& li': {
        textAlign: 'left',
      },
    },
  },
  skillsBox: {
    width: '45%',
    '& div': {
      justifyContent: 'center',
    },
    '& img': {
      height: '1.5rem',
      width: 'auto',
    },
    '& span': {
      margin: '0 5px',
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      textAlign: 'center',
    },
  },
}));

const labelItems = [
  {
    labelName: 'Fast',
    labelIcon: <Speed />,
    labelText: 'Fast load times and lag free interaction, my highest priority.',
  },
  {
    labelName: 'Responsive',
    labelIcon: <Devices />,
    labelText: 'My layouts will work on any device, big or small.',
  },
  {
    labelName: 'Intuitive',
    labelIcon: <WbIncandescentOutlined />,
    labelText: 'Strong preference for easy to use, intuitive UX/UI.',
  },
  {
    labelName: 'Dynamic',
    labelIcon: <Cached />,
    labelText:
      "Websites don't have to be static, I love making pages come to life.",
  },
];

const techSkills = [
  { title: 'Html5', icon: html5Icon },
  { title: 'Css3', icon: css3Icon },
  { title: 'sass', icon: sassIcon },
  { title: 'Java Script', icon: jsIcon },
  { title: 'ES5/ES6', icon: esIcon },
  { title: 'React', icon: reactIcon },
  { title: 'Redux', icon: reduxIcon },
  { title: 'npm', icon: npmIcon },
  { title: 'mySQL', icon: mysqlIcon },
];

const otherSkills = [
  { title: 'Bootstrap', icon: bootstrapIcon },
  { title: 'Material UI', icon: materialUiIcon },
  { title: 'Git', icon: gitIcon },
  { title: 'GitHub', icon: gitHubIcon },
  { title: 'Linux Ubuntu', icon: ubuntuIcon },
  { title: 'less', icon: lessIcon },
  { title: 'Webpack', icon: webpackIcon },
  { title: '', icon: jsxIcon },
  { title: 'Search Engine Optimization', icon: seoIcon },
  { title: 'Photoshop Basics', icon: photoshopIcon },
];

const About = () => {
  const classes = useStyles();
  const [loader, showLoader, hideLoader] = useFullPageLoader();
  const fetchData = () => {
    showLoader();
    setTimeout(() => {
      hideLoader();
    }, 800);
  };
  React.useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Navbar />
      <Box component='main' className='page__content'>
        <ParticlesBgr />
        <Container maxWidth='md' component='section'>
          <h3 className='page__title'>About me</h3>
          <Box component='div' className={classes.labelWrap}>
            {labelItems.map((item, i) => (
              <div className={classes.label} key={i}>
                <div className={classes.labelTop}>{item.labelIcon}</div>
                <div className={classes.labelBottom}>
                  <span>{item.labelName}</span>
                  {item.labelText}
                </div>
              </div>
            ))}
          </Box>
        </Container>
        <Container
          maxWidth='lg'
          component='section'
          className={classes.bottomContainer}
        >
          <Box component='div' className={classes.infoBox}>
            <Typography variant='h4'>Who am I?</Typography>
            <Box component='div'>
              <p>
                I am a <b>Front-End Web Developer</b> based in London, UK. I
                have serious passion for UI effects, animations and creating
                intuitive, dynamic user experience. Well-organised person,
                problem solver, independent employee with high attention to
                detail. Interested in the entire <b>front-end</b> spectrum and
                working on ambitious projects with positive people.
              </p>
              <p>
                Also, I'm planning to extend my skill set to become a full stack
                developer in the near future.
              </p>
              <div>
                <Typography variant='h6'>Random facts</Typography>
                <ul>
                  <li>I'm a big fan of MMA and boxing.</li>
                  <li>I prefer mountains to the ocean and beaches</li>
                  <li>I love to cook (and eat).</li>
                  <li>I'm a coffee addicted.</li>
                  <li>I'm a bit of a clean freak</li>
                </ul>
              </div>
            </Box>
          </Box>
          <Box component='div' className={`${classes.skillsBox} skills`}>
            <Typography variant='h4'>Tech Skills</Typography>
            <ul>
              {techSkills.map((item, i) => (
                <li key={i}>
                  <Box component='div' className='flex row'>
                    <span>
                      {item.icon ? (
                        <img src={item.icon} alt={item.title} />
                      ) : (
                        ''
                      )}
                    </span>
                    {item.title || ''}
                  </Box>
                </li>
              ))}
            </ul>
            <Typography variant='h6'>Other skills</Typography>
            <ul>
              {otherSkills.map((item, i) => (
                <li key={i}>
                  <Box component='div' className='flex row'>
                    {item.icon ? (
                      <span>
                        <img src={item.icon} alt={item.title} />
                      </span>
                    ) : (
                      ''
                    )}
                    {item.title || ''}
                  </Box>
                </li>
              ))}
            </ul>
          </Box>
        </Container>
        <Footer />
      </Box>
      {loader}
    </>
  );
};

export default About;
