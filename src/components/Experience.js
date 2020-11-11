import React from "react";
import Navbar from "./Navbar";
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
import { timeline } from "./data/customData";

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

const Experience = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Box component="section" className="page__content" id="timeline">
        <Container maxWidth="lg" component="header">
          <h3 className="page__title">Experience</h3>
          <Box component="div">
            <Timeline align="alternate">
              {timeline.map((item) => (
                <TimelineItem className="timeline__item">
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
                      <Typography variant="h7" component="h3">
                        {item.position}
                        <div>
                          {item.company} - {item.type}
                        </div>
                        <div>{item.where}</div>
                      </Typography>
                      <Typography>{item.description}</Typography>
                    </Paper>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Experience;
