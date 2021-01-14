import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';
import Tooltip from '@material-ui/core/Tooltip';

// CSS Styles
const DarkTooltip = withStyles((theme) => ({
  arrow: {
    color: theme.palette.common.grey,
  },
  tooltip: {
    backgroundColor: theme.palette.common.grey,
    color: 'white',
    boxShadow: theme.shadows[1],
    borderRadius: '3px',
    padding: '10px 15px',
    fontSize: 12,
  },
}))(Tooltip);

const Project = (props) => {
  const { id, title, thumbnail, tags, thumbnailHover, links } = props;

  return (
    <Grid item sm={12} md={6} id={id}>
      <div className='screen item'>
        <Box component='div' className='bar'>
          <Typography variant='h3'>{title}</Typography>
          <i></i>
        </Box>
        <Box component='div' className={`main`}>
          <Box component='picture' className='back'>
            <img src={thumbnail} alt={title} />
          </Box>
          <div className='tags'>
            <div className='wrapper flex column'>
              <ul>
                {tags.map((el, index) => (
                  <li key={index}>{el}</li>
                ))}
              </ul>
            </div>
          </div>
          <Link to={`/project/${id}`} className='learn__more'>
            <span>Learn more</span>
          </Link>
          {links.web ? (
            <DarkTooltip title='View on web' placement='top' arrow>
              <a
                href={links.web}
                className='web__link'
                target='_blank'
                rel='noreferrer'
              >
                <LanguageIcon />
              </a>
            </DarkTooltip>
          ) : (
            ''
          )}
          {links.gitHub ? (
            <DarkTooltip title='View on GitHub' placement='top' arrow>
              <a
                href={links.gitHub}
                className='github__link'
                target='_blank'
                rel='noreferrer'
              >
                <GitHubIcon />
              </a>
            </DarkTooltip>
          ) : (
            ''
          )}
          <div className='hover__bgr'>
            <img src={thumbnailHover} alt={title} />
          </div>
        </Box>
      </div>
    </Grid>
  );
};

export default Project;
