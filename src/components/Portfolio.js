import React, { useState } from 'react';
import Navbar from './Navbar';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Container, Grid } from '@material-ui/core';

// CSS Styles
const useStyles = makeStyles(theme => ({
    pageTitle: {
        fontWeight: 800,
        letterSpacing: '-2px',
        position: 'relative',
        marginBottom: '5rem',
        color: '#08fdd8',
        textTransform: 'uppercase',
        textAlign: 'center',
        '&:after': {
            content: '""',
            position: 'absolute',
            width: '6rem',
            left: '50%',
            bottom: '-1rem',
            transform: 'translateX(-3rem)',
            borderBottom: 'solid 4px #cacaca',
            [theme.breakpoints.down('sm')]: {
                width: '4.5rem',
                transform: 'translateX(-2.25rem)',
            }
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '2.3rem'
        }
    },
    
    bottomContainer: {
        textAlign: 'left',
        padding: '2rem 0',
        display: 'flex',
        justifyContent: 'space-between',
        [theme.breakpoints.down('lg')]: {
            paddingLeft: '24px',
            paddingRight: '24px'
        },
        '& h4': {
            color: '#08fdd8'
        },
        [theme.breakpoints.down('md')]: {
            '& h4': {
                fontSize: '1.8rem'
            }
        },
        [theme.breakpoints.down('sm')]: {
            paddingLeft: '16px',
            paddingRight: '16px',
        },
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column'
        }
    },
}));

const filters = [
    { category: 'show all' },
    { category: 'front-end' },
    { category: 'back-end' },
    { category: 'html5' },
    { category: 'javascript' },
    { category: 'reactjs' },
    { category: 'animations' }
];

const projectsList = [
    {
        name: 'My Portfolio',
        imgPreview: 'https://caferati.me/images/portfolio/sky-go-desktop/list.jpg',
        hoverImgBgr: 'https://caferati.me/images/portfolio/sky-go-desktop/hover.jpg',
        tags: [
            'WebApp',
            'Java Script',
            'Html5',
            'Animation',
            'ReactJs',
            'Material UI'
        ]
    },
    {
        name: 'Rocket.Chat',
        imgPreview: 'https://caferati.me/images/portfolio/rocket-chat/list.jpg',
        hoverImgBgr: 'https://caferati.me/images/portfolio/rocket-chat/hover.jpg',
        tags: [
            'WebApp',
            'Html5',
            'Less',
            'Animations',
            'UI/UX Design',
            'MeteorJs',
            'Mongo Db'
        ]
    }
];

// const filterBtn = document.querySelectorAll('.filter_btn');
// const cardsContainer = document.getElementById('filters');

const Portfolio = () => {
    const classes = useStyles();

    const renderTags = elements => {
        return elements.map((el) => <li>{el}</li>);
    }
    
    return (
        <>
            <Navbar />
            <Box component='section' className='page__content' id='portfolio'>
                <Container maxWidth="lg" component='header'>
                    <Typography variant='h3' className={classes.pageTitle}>My works</Typography>
                    <Box component='div'>
                        From Web Components and UI/UX animations to React.JS, Redux, Vue.JS, and Node.JS. Check out my latest web software development portfolio projects.
                    </Box>
                    <Box component='div' className='filters' id='filters'>
                        <ul>
                            {filters.map((item, key) => (
                                <li key={key} className={`filter_btn`}><span>{item.category}</span></li>
                            ))}
                        </ul>
                    </Box>
                </Container>
                <Container maxWidth='lg' component='main'>
                    <Grid container spacing={5} justify='center' className='grid__list'>
                        {projectsList.map((listItem, key) => (
                            <Grid item xs={12} sm={6} key={key} >
                                <a href="" className='screen item'>
                                    <Box component='div' className='bar'>
                                        <Typography variant='h3'>{listItem.name}</Typography>
                                        <i></i>
                                    </Box>
                                    <Box component='div' className={`main`}>
                                        <Box component='picture' className='back'>
                                            <img src={listItem.imgPreview} alt="1"/>
                                        </Box>
                                        <div className='tags'>
                                            <div>
                                                <ul>
                                                    {renderTags(listItem.tags)}
                                                </ul>
                                            </div>
                                        </div>
                                        <div className='learn__more'><span>Learn more</span></div>
                                        <div className='hover__bgr'>
                                            <img src={listItem.hoverImgBgr} alt=""/>
                                        </div>
                                    </Box>
                                </a>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </>
    )
}

export default Portfolio
