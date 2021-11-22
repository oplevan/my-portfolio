import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Container } from "@material-ui/core";
import data from "../../config.json";

export default function Footer() {
  const { pathname } = useLocation();

  return (
    <>
      {pathname !== data.url.HOME && pathname !== data.url.CONTACT ? (
        <Container maxWidth="lg" component="footer">
          <div className="heading">Let's talk</div>
          Want to get in touch or talk about a project? <br /> Feel free to contact me via email at{" "}
          <span className="fancy">
            <a href="mailto:oleg.plevan@gmail.com">oleg.plevan@gmail.com</a>
          </span>
          <br /> or submit the form on the{" "}
          <span className="fancy">
            <NavLink to={data.url.CONTACT}>contact page</NavLink>
          </span>
        </Container>
      ) : null}
    </>
  );
}
