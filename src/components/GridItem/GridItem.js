import React from "react";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import LanguageIcon from "@material-ui/icons/Language";
import Tooltip from "@material-ui/core/Tooltip";
import { Button, MediaWindow } from "../";
import "./GridItem.scss";

// CSS Styles
const DarkTooltip = withStyles((theme) => ({
  arrow: {
    color: theme.palette.common.grey,
  },
  tooltip: {
    backgroundColor: theme.palette.common.grey,
    color: "white",
    boxShadow: theme.shadows[1],
    borderRadius: "3px",
    padding: "10px 15px",
    fontSize: 12,
  },
}))(Tooltip);

export default function GridItem({ id, title, thumbnail, tags, thumbnailHover, links }) {
  return (
    <Grid item sm={12} md={6} id={id}>
      <MediaWindow title={title}>
        <div className="body">
          <picture className="back">
            <img src={thumbnail} alt={title} />
          </picture>
          <div className="tags">
            <div className="wrapper flex column">
              <ul>
                {tags.map((el, index) => (
                  <li key={index}>{el}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="learn-more">
            <Button type="neon" linkTo={`/project/${id}`} title="Learn more" size="small" />
          </div>
          {links.web && (
            <DarkTooltip title="View on web" placement="top" arrow>
              <a href={links.web} className="view-link web" target="_blank" rel="noopener noreferrer">
                <LanguageIcon />
              </a>
            </DarkTooltip>
          )}
          {links.gitHub && (
            <DarkTooltip title="View on GitHub" placement="top" arrow>
              <a href={links.gitHub} className="view-link github" target="_blank" rel="noopener noreferrer">
                <GitHubIcon />
              </a>
            </DarkTooltip>
          )}
          <div className="hover-bgr">
            <img src={thumbnailHover} alt={title} />
          </div>
        </div>
      </MediaWindow>
    </Grid>
  );
}
