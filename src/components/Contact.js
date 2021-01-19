import React from 'react';
import { Box, Typography, Container } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import ParticlesBgr from './ParticlesBgr';
import useFullPageLoader from './useFullPageLoader';
import Form from 'react-bootstrap/Form';
import Button from '@material-ui/core/Button';
import Navbar from './Navbar';

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
      <Box component='section' className='page__content' id='contact'>
        <ParticlesBgr />
        <Container maxWidth='md' component='header'>
          <h3 className='page__title'>Contact</h3>
          <Box component='div' className='greeting' align='left'>
            <Typography variant='h4'>Get in touch</Typography>
            <p>
              If you wanna get in touch, talk to me about a project
              collaboration or just have a question, fill up the form below or
              send an email to{' '}
              <span className='fancy'>
                <a href='mailto:oleg.plevan@gmail.com'>oleg.plevan@gmail.com</a>
              </span>{' '}
              and let's talk.
            </p>
          </Box>
        </Container>
        <Container maxWidth='md' component='footer'>
          <Form
            name='contact'
            method='POST'
            className='contact-form'
            data-netlify='true'
            data-netlify-recaptcha='true'
          >
            <input type='hidden' name='form-name' value='contact' />
            <Form.Group>
              <Form.Control
                className='input-field'
                id='name'
                name='name'
                placeholder='Name'
                type='text'
              />
              <Form.Label className='input-label' htmlFor='name'></Form.Label>
            </Form.Group>
            <Form.Group>
              <Form.Control
                required
                className='input-field'
                id='email'
                name='email'
                placeholder='E-mail *'
                type='email'
              />
              <Form.Label className='input-label' htmlFor='email'></Form.Label>
            </Form.Group>
            <Form.Group>
              <Form.Control
                className='textarea-field'
                id='message'
                name='message'
                placeholder='Message'
                as='textarea'
                rows='4'
              />
              <Form.Label
                className='textarea-label'
                htmlFor='message'
              ></Form.Label>
            </Form.Group>
            <Box
              data-netlify-recaptcha='true'
              component='div'
              className='recaptcha'
            ></Box>
            <Button
              className='button submit_btn'
              variant='contained'
              color='primary'
              endIcon={<SendIcon />}
              type='submit'
            >
              Send
            </Button>
          </Form>
        </Container>
      </Box>
      {loader}
    </>
  );
}

// import React from 'react';
// import { Box, Typography, Container } from '@material-ui/core';
// import SendIcon from '@material-ui/icons/Send';
// import ParticlesBgr from './ParticlesBgr';

// import Form from 'react-bootstrap/Form';
// import Button from '@material-ui/core/Button';
// // import Axios from 'axios';
// import Navbar from './Navbar';

// class Contact extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: '',
//       email: '',
//       message: '',
//       disabled: false,
//       emailSent: null,
//     };
//   }

//   handleChange = (event) => {
//     const target = event.target;
//     const value = target.type === 'checkbox' ? target.checked : target.value;
//     const name = target.name;

//     this.setState({
//       [name]: value,
//     });
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();

//     this.setState({
//       disabled: true,
//       emailSent: true,
//     });

//     // Axios.post("http://localhost:3030/api/email", this.state)
//     //   .then((res) => {
//     //     if (res.data.success) {
//     //       this.setState({
//     //         disabled: false,
//     //         emailSent: true,
//     //       });
//     //     } else {
//     //       this.setState({
//     //         disabled: false,
//     //         emailSent: false,
//     //       });
//     //     }
//     //   })
//     //   .catch((err) => {
//     //     console.log(err);
//     //     this.setState({
//     //       disabled: false,
//     //       emailSent: false,
//     //     });
//     //   });
//   };

//   render() {
//     return (
//       <>
//         <Navbar />
//         <Box component='section' className='page__content' id='contact'>
//           <ParticlesBgr />
//           <Container maxWidth='md' component='header'>
//             <h3 className='page__title'>Contact</h3>
//             <Box component='div' className='greeting' align='left'>
//               <Typography variant='h4'>Get in touch</Typography>
//               <p>
//                 If you wanna get in touch, talk to me about a project
//                 collaboration or just have a question, fill up the form below or
//                 send an email to{' '}
//                 <span className='fancy'>
//                   <a href='mailto:oleg.plevan@gmail.com'>
//                     oleg.plevan@gmail.com
//                   </a>
//                 </span>{' '}
//                 and let's talk.
//               </p>
//             </Box>
//           </Container>
//           <Container maxWidth='md' component='footer'>
//             <Form className='contact-form' onSubmit={this.handleSubmit}>
//               <Form.Group>
//                 <Form.Control
//                   className='input-field'
//                   id='full-name'
//                   name='name'
//                   placeholder='Name'
//                   type='text'
//                   value={this.state.name}
//                   onChange={this.handleChange}
//                 />
//                 <Form.Label
//                   className='input-label'
//                   htmlFor='full-name'
//                 ></Form.Label>
//               </Form.Group>
//               <Form.Group>
//                 <Form.Control
//                   required
//                   className='input-field'
//                   id='email'
//                   name='email'
//                   placeholder='E-mail *'
//                   type='email'
//                   value={this.state.email}
//                   onChange={this.handleChange}
//                 />
//                 <Form.Label
//                   className='input-label'
//                   htmlFor='email'
//                 ></Form.Label>
//               </Form.Group>
//               <Form.Group>
//                 <Form.Control
//                   className='textarea-field'
//                   id='message'
//                   name='message'
//                   placeholder='Message'
//                   as='textarea'
//                   rows='4'
//                   value={this.state.message}
//                   onChange={this.handleChange}
//                 />
//                 <Form.Label
//                   className='textarea-label'
//                   htmlFor='message'
//                 ></Form.Label>
//               </Form.Group>
//               <Button
//                 className='button submit_btn'
//                 variant='contained'
//                 color='primary'
//                 endIcon={<SendIcon />}
//                 type='submit'
//                 disabled={this.state.disabled}
//               >
//                 Send
//               </Button>

//               {this.state.emailSent === true && (
//                 <Box component='div' className='success_msg'>
//                   <div>Success!</div>I will get back to you soon!
//                 </Box>
//               )}
//               {this.state.emailSent === false && (
//                 <Box component='div' className='error_msg'>
//                   <div>Error!</div>
//                   Please, try again or contact me directly on
//                   <b> olegplevan@gmail.com</b>!
//                 </Box>
//               )}
//             </Form>
//           </Container>
//         </Box>
//       </>
//     );
//   }
// }

// export default Contact;
