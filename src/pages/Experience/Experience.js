import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Container } from "@material-ui/core";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Paper from "@material-ui/core/Paper";
import { timeline } from "../../components/data/customData";
import { Navbar, ParticlesBgr, useFullPageLoader } from "../../components";
import "./experience.scss";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
    backgroundColor: "#414141",
    color: "#999",
    borderWidth: "1px 1px 2px 1px",
    borderStyle: "solid",
    borderColor: "#222",
    borderRadius: "3px",
    boxShadow: "1px 1px 0 rgba(0, 0, 0, 0.25)",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function Experience() {
  const classes = useStyles();
  const [loader, showLoader, hideLoader] = useFullPageLoader();
  const fetchData = () => {
    showLoader();
    setTimeout(() => {
      hideLoader();
    }, 800);
  };
  React.useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Box component="main" id="timeline">
        <ParticlesBgr />
        <Container maxWidth="lg" component="section">
          <h1>Experience</h1>
          <Timeline align="alternate">
            {timeline.map((item, i) => (
              <TimelineItem key={i} className="timeline-item">
                <TimelineOppositeContent>
                  <Box component="div" className="period">
                    <div className="to">{item.end}</div>
                    <div className="from">{item.start}</div>
                  </Box>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot className="dot" />
                  <TimelineConnector className="connector" />
                  <TimelineDot className="dot" />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3} className={classes.paper}>
                    <Typography variant="h6" component="h3">
                      {item.position}
                    </Typography>
                    <div className="small-text">
                      {item.company} - {item.type}
                    </div>
                    <div className="small-text">{item.where}</div>
                    <ul className="duty-list">
                      {item.description.map((el, i) => {
                        return <li key={i}>{el}</li>;
                      })}
                    </ul>
                    {item.achievements ? (
                      <p>
                        <b>Achievements: </b>
                        {item.achievements}
                      </p>
                    ) : (
                      ""
                    )}
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Container>
      </Box>
      {loader}
    </>
  );
}
