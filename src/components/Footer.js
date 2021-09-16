import React from "react";
import { NavLink } from "react-router-dom";
import data from "../config.json";

export default function Footer() {
  return (
    <footer>
      <h4>Let's talk</h4>
      <p>
        Want to get in touch or talk about a project? <br /> Feel free to contact me via email at{" "}
        <span className='fancy'>
          <a href='mailto:oleg.plevan@gmail.com'>oleg.plevan@gmail.com</a>
        </span>
        <br /> or submit the form on the{" "}
        <span className='fancy'>
          <NavLink to={data.url.CONTACT}>contact page</NavLink>
        </span>
      </p>
    </footer>
  );
}
