import React from 'react';
import { NavLink } from 'react-router-dom';
import * as ROUTES from './constants/routes';

const Footer = () => {
  return (
    <footer>
      <h4>Let's talk</h4>
      <p>
        Want to get in touch or talk about a project? <br /> Feel free to
        contact me via email at{' '}
        <span className='fancy'>
          <a href='mailto:oleg.plevan@gmail.com'>oleg.plevan@gmail.com</a>
        </span>
        <br /> or drop a line in the form at the{' '}
        <span className='fancy'>
          <NavLink to={ROUTES.CONTACT}>contact page</NavLink>
        </span>
      </p>
    </footer>
  );
};

export default Footer;
