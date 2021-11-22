import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/components/button.scss";

export default function Button(props) {
  const { type, title, size, linkTo, icon, extraClassName, reflect, clickHandler } = props;
  // console.log(clickHandler);

  if (type && type === "neon") {
    return (
      <div className="button-wrap">
        <NavLink
          type={type}
          className={`button neon${extraClassName ? " " + extraClassName : ""}${size ? " " + size : ""}${
            reflect ? " reflect" : ""
          }`}
          to={linkTo}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          {title}
          {icon && <i>{icon}</i>}
        </NavLink>
      </div>
    );
  } else if (type === "back-list") {
    return (
      <NavLink type={type} to={linkTo} className={`button back-list${extraClassName ? " " + extraClassName : ""}`} title={title}>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <span>Back</span>
      </NavLink>
    );
  } else {
    return (
      <div className="button-wrap">
        <button
          {...(clickHandler && { onClick: () => clickHandler.func(clickHandler.args) })}
          type={type}
          className={`button default${extraClassName ? " " + extraClassName : ""}`}
        >
          {icon && (
            <span>
              <img className="icon" src={icon} alt="" />
            </span>
          )}
          {title && <span>{title}</span>}
        </button>
      </div>
    );
  }
}
