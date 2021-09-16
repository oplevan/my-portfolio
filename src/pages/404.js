import React from "react";
import { Box, Container } from "@material-ui/core";
import ParticlesBgr from "../components/ParticlesBgr";
import astronaut from "../images/astronaut.png";

export default function Error() {
  return (
    <>
      <Box component='section' className='page__content flex' id='page-404'>
        <ParticlesBgr />
        <Container maxWidth='lg' component='div'>
          <div className='error_404_content flex'>
            <div className='left_block'>
              <h3>Oops! Something went wrong</h3>
              <p>The page you're looking for is now beyond reach.</p>
              <a href='/' className='button btn'>
                Back to Home Page
              </a>
            </div>
            <div className='right_block flex '>
              <div className='error_404_letter color'>
                <h1>4</h1>
              </div>
              <div className='error_404_letter'>
                <h1>0</h1>
                <div className='astronaut'>
                  <img src={astronaut} alt='' />
                </div>
              </div>
              <div className='error_404_letter color'>
                <h1>4</h1>
              </div>
            </div>
          </div>
        </Container>
      </Box>
    </>
  );
}
