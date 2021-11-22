import React from "react";
import { Box, Typography, Container } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import Form from "react-bootstrap/Form";
import Button from "@material-ui/core/Button";
import { Navbar, ParticlesBgr, useFullPageLoader } from "../components";

export default function Contact() {
  const [loader, showLoader, hideLoader] = useFullPageLoader();
  const fetchData = () => {
    showLoader();
    setTimeout(() => {
      hideLoader();
    }, 500);
  };
  React.useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Navbar />
      <Box component="section" className="page__content" id="contact">
        <ParticlesBgr />
        <Container maxWidth="md" component="header">
          <h3 className="page__title">Contact</h3>
          <Box component="div" className="greeting" align="left">
            <Typography variant="h4">Get in touch</Typography>
            <p>
              If you wanna get in touch, talk to me about a project collaboration or just have a question, fill up the form below
              or send an email to{" "}
              <span className="fancy">
                <a href="mailto:oleg.plevan@gmail.com">oleg.plevan@gmail.com</a>
              </span>{" "}
              and let's talk.
            </p>
          </Box>
        </Container>
        <Container maxWidth="md" component="footer">
          <Form name="contact" method="POST" className="contact-form" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
            <Form.Group>
              <Form.Control className="input-field" id="name" name="name" placeholder="Name" type="text" />
              <Form.Label className="input-label" htmlFor="name"></Form.Label>
            </Form.Group>
            <Form.Group>
              <Form.Control required className="input-field" id="email" name="email" placeholder="E-mail *" type="email" />
              <Form.Label className="input-label" htmlFor="email"></Form.Label>
            </Form.Group>
            <Form.Group>
              <Form.Control className="textarea-field" id="message" name="message" placeholder="Message" as="textarea" rows="4" />
              <Form.Label className="textarea-label" htmlFor="message"></Form.Label>
            </Form.Group>
            <Button className="button submit_btn" variant="contained" color="primary" endIcon={<SendIcon />} type="submit">
              Send
            </Button>
          </Form>
        </Container>
      </Box>
      {loader}
    </>
  );
}
