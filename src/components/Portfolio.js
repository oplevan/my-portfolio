import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Container, Grid } from "@material-ui/core";
import { filters, portfolio } from "./data/customData";
import useFullPageLoader from "../hooks/useFullPageLoader";

// CSS Styles
const useStyles = makeStyles((theme) => ({
  pageTitle: {
    fontWeight: 800,
    letterSpacing: "-2px",
    position: "relative",
    marginBottom: "5rem",
    color: "#08fdd8",
    textTransform: "uppercase",
    textAlign: "center",
    "&:after": {
      content: '""',
      position: "absolute",
      width: "6rem",
      left: "50%",
      bottom: "-1rem",
      transform: "translateX(-3rem)",
      borderBottom: "solid 4px #cacaca",
      [theme.breakpoints.down("sm")]: {
        width: "4.5rem",
        transform: "translateX(-2.25rem)",
      },
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.3rem",
    },
  },

  bottomContainer: {
    textAlign: "left",
    padding: "2rem 0",
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("lg")]: {
      paddingLeft: "24px",
      paddingRight: "24px",
    },
    "& h4": {
      color: "#08fdd8",
    },
    [theme.breakpoints.down("md")]: {
      "& h4": {
        fontSize: "1.8rem",
      },
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "16px",
      paddingRight: "16px",
    },
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
}));

const Portfolio = () => {
  const classes = useStyles();

  // Renders tags in project card
  const renderTags = (elements, key) => {
    return elements.map((el) => <li key={key}>{el}</li>);
  };

  // Filters
  const [filter, setFilter] = useState("all");
  const [projects, setProjects] = useState([]);
  const [condition, setCondition] = useState(false);

  useEffect(() => {
    setProjects(portfolio);
  }, []);
  useEffect(() => {
    fetchData();
    setProjects([]);
    const filtered = portfolio.map((p) => ({
      ...p,
      filtered: p.category.includes(filter),
    }));
    setProjects(filtered);
  }, [filter]);

  //////////////////////
  //      Loader
  //////////////////////

  const [loader, showLoader, hideLoader] = useFullPageLoader();

  const fetchData = () => {
    showLoader();
    setTimeout(() => {
      hideLoader();
    }, 1000);
  };

  return (
    <>
      <Navbar />
      <Box component="section" className="page__content" id="portfolio">
        <Container maxWidth="lg" component="header">
          <Typography variant="h3" className={classes.pageTitle}>
            My works
          </Typography>
          <Box component="div">
            From Web Components and UI/UX animations to React.JS, Redux, and
            Node.JS. Check out my latest web development portfolio projects.
          </Box>
          <Box component="div" className="filters" id="filters">
            <ul>
              {filters.map((item, key) => (
                <li
                  key={key}
                  className={`filter_btn ${item.filter}`}
                  active={filter === item.filter}
                  onClick={() => {
                    setFilter(item.filter);
                  }}
                >
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
          </Box>
        </Container>
        <Container maxWidth="lg" component="main">
          <Grid
            container
            spacing={5}
            justify="center"
            className="grid__list projects__container"
          >
            {projects.map((item) =>
              item.filtered === true ? (
                <Grid
                  item
                  sm={12}
                  md={6}
                  key={item.name}
                  data-aos={item.animation.type}
                  data-aos-delay={item.animation.delay}
                >
                  <div className="screen item">
                    <Box component="div" className="bar">
                      <Typography variant="h3">{item.name}</Typography>
                      <i></i>
                    </Box>
                    <Box component="div" className={`main`}>
                      <Box component="picture" className="back">
                        <img src={item.imgPreview} alt="1" />
                      </Box>
                      <div className="tags">
                        <div>
                          <ul>{renderTags(item.tags)}</ul>
                        </div>
                      </div>
                      <a href="#" className="learn__more">
                        <span>Learn more</span>
                      </a>
                      <div className="hover__bgr">
                        <img src={item.hoverImgBgr} alt="" />
                      </div>
                    </Box>
                  </div>
                </Grid>
              ) : (
                ""
              )
            )}
          </Grid>
        </Container>
      </Box>
      {loader}
    </>
  );
};

export default Portfolio;
