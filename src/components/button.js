import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  neon: {
    textTransform: "uppercase",
    position: "relative",
    padding: "15px 30px",
    color: "#08fdd8",
    letterSpacing: "4px",
    fontSize: "14px",
    overflow: "hidden",
    transition: "0.2s",
    WebkitBoxReflect: "below 1px linear-gradient(transparent, #0005)",
    // filter: "hue-rotate(290deg)",

    "&:hover": {
      color: "#1d1d1d",
      backgroundColor: "#08fdd8",
      boxShadow: "0 0 10px #08fdd8, 0 0 40px #08fdd8, 0 0 80px #08fdd8",
      transitionDelay: "1s",

      "& span:nth-child(1)": {
        left: "100%",
        transition: "1s",
      },
      "& span:nth-child(2)": {
        top: "100%",
        transition: "1s",
        transitionDelay: "0.25s",
      },
      "& span:nth-child(3)": {
        right: "100%",
        transition: "1s",
        transitionDelay: "0.5s",
      },
      "& span:nth-child(4)": {
        bottom: "100%",
        transition: "1s",
        transitionDelay: "0.75s",
      },
    },
    "& span": {
      position: "absolute",
      display: "block",

      "&:nth-child(1)": {
        top: 0,
        left: "-100%",
        width: "100%",
        height: "2px",
        background: "linear-gradient(90deg, transparent, #08fdd8)",
      },
      "&:nth-child(2)": {
        top: "-100%",
        right: 0,
        width: "2px",
        height: "100%",
        background: "linear-gradient(180deg, transparent, #08fdd8)",
      },
      "&:nth-child(3)": {
        bottom: 0,
        right: "-100%",
        width: "100%",
        height: "2px",
        background: "linear-gradient(270deg, transparent, #08fdd8)",
      },
      "&:nth-child(4)": {
        bottom: "-100%",
        left: 0,
        width: "2px",
        height: "100%",
        background: "linear-gradient(360deg, transparent, #08fdd8)",
      },
    },
    // [theme.breakpoints.down("xs")]: {
    //   flexDirection: "column",
    // },
  },
}));

export default function Button(props) {
  const { name, linkTo } = props;
  const selector = useStyles();
  return (
    <>
      <NavLink className={selector.neon} to={linkTo}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {name}
      </NavLink>
    </>
  );
}
