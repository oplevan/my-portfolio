import React from 'react';
import { Typography, Box, Container } from '@material-ui/core';
import Typed from 'react-typed';
import { makeStyles } from '@material-ui/core';
import homeImg from '../images/home-img.png';
import { NavLink } from 'react-router-dom';
import * as ROUTES from './constants/routes';

//CSS STYLES
const useStyles = makeStyles((theme) => ({
  homeSection: {
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  title: {
    alignSelf: 'flex-start',
    color: 'white',
    fontFamily: '"Open Sans", sans-serif;',
    fontWeight: '800',
    letterSpacing: '-5px',
    lineHeight: '3.5rem',
    marginBottom: '1.3rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '3.5rem',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '2.5rem',
      letterSpacing: '-2px',
      lineHeight: '3rem',
    },
  },
  subtitle: {
    alignSelf: 'flex-start',
    fontWeight: '400',
    letterSpacing: '0',
    fontSize: '1.2rem',
    color: 'tan',
    fontFamily: '"Ubuntu Mono", monospace',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.2rem',
    },
  },
  typedContainer: {
    justifyContent: 'space-between',
    minHeight: '18rem',
    textAlign: 'left',
    zIndex: 1,
    [theme.breakpoints.down('sm')]: {
      width: '75%',
    },
    [theme.breakpoints.down('xsm')]: {
      width: '70%',
    },
  },
  btn: {
    alignSelf: 'flex-start',
    borderRadius: 0,
    backgroundColor: 'transparent',
    border: 'solid 1px #08fdd8',
    color: '#08fdd8',
    padding: '0.5rem 1rem',
    fontWeight: 'normal',
    transition: '0.2s ease-in-out',
    textTransform: 'uppercase',
    '&:hover': {
      color: 'black',
      backgroundColor: '#08fdd8',
      borderColor: '#08fdd8',
    },
  },
  homeImg: {
    maxWidth: '50%',
    '& img': {
      maxWidth: '100%',
      animationDuration: '2s',
    },
    [theme.breakpoints.down('xs')]: {
      maxWidth: '75%',
    },
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Container
      maxWidth='lg'
      component='section'
      className={`${classes.homeSection} flex`}
    >
      <Box className={`flex column ${classes.typedContainer}`}>
        <Typography className={classes.title} variant='h2'>
          <Typed
            strings={["Hello,<br> I'm Oleg, <br> web developer."]}
            typeSpeed={60}
            startDelay={1000}
          />
          <Box variant='div' className={classes.subtitle}>
            <Typed
              strings={[
                'Front End Development',
                'CSS3/HTML5',
                'Java Script',
                'ReactJS',
                'JSX',
                'ES5/ES6',
                'NPM/Webpack',
              ]}
              startDelay={3000}
              typeSpeed={40}
              backSpeed={50}
              loop
            ></Typed>
          </Box>
        </Typography>
        <NavLink to={ROUTES.CONTACT} className={classes.btn}>
          Contact me
        </NavLink>
      </Box>
      <div className={classes.homeImg}>
        <img className='animate__zoomInDown' src={homeImg} alt='logo' />
      </div>
    </Container>
  );
};

export default Header;
