import React from 'react';
import {
    Typography,
    Button,
    Box
} from "@material-ui/core";
import Typed from 'react-typed';
import { makeStyles } from '@material-ui/core';

//CSS STYLES
const useStyles = makeStyles(theme => ({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1)
    },
    title: {
        color: "white",
        fontFamily: '"Open Sans", sans-serif;',
        fontWeight: '800',
        letterSpacing: '-5px',
        lineHeight: '3.5rem',
        marginBottom: '1.3rem',
        [theme.breakpoints.down('sm')]: {
            fontSize: '3.5rem',
        }
    },
    subtitle: {
        color: "tan",
        marginBottom: "3rem",
        fontFamily: '"Ubuntu Mono", monospace',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.2rem'
        }
    },
    typedContainer: {
        position: "absolute",
        top: "50%",
        left: "15%",
        transform: "translateY(-50%)",
        width: "40%",
        minHeight: '20rem',
        textAlign: "left",
        zIndex: 1,
        [theme.breakpoints.down('sm')]: {
            width: '75%',
        },
        [theme.breakpoints.down('xsm')]: {
            width: '70%',
        }
    },
    btn: {
        borderRadius: 0,
        backgroundColor: 'transparent',
        border: 'solid 1px #08fdd8',
        color: '#08fdd8',
        '&:hover': {
            color: 'white',
            backgroundColor: '#ff0077',
            borderColor: '#ff0077',
        }
    }
}));

const Header = () => {
    const classes = useStyles();

    return (
        <Box className={classes.typedContainer}>
            <Typography className={classes.title} variant="h2">
                <Typed
                    strings={['Hi,<br> I\'m Oleg, <br> web developer.']}
                    typeSpeed={60}
                />
            </Typography>
            <Typography className={classes.subtitle} variant="h5">
                <Typed
                    strings={
                            [
                            'Front End Development',
                            'CSS3/HTML5',
                            'Java Script',
                            'ReactJS',
                            'JSX',
                            'ES5/ES6',
                            'NPM/Webpack'
                            ]
                        }
                        startDelay={3000}
                        typeSpeed={40}
                        backSpeed={50}
                        loop >
                </Typed>
            </Typography>
            <Button href="/contact" variant="contained" className={classes.btn}>
                Contact me
            </Button>
        </Box>
    )
}

export default Header
