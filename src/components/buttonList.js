import React from "react";
import "../styles/components/buttonList.scss";

export default function ButtonList(props) {
  const buttons = props.data;
  return (
    <div className='button-list-wrap'>
      {buttons.map((button) => (
        <div className='button' key={button.title}>
          {button.icon && <img className='icon' src={button.icon} alt='' />}
          {button.title || ""}
        </div>
      ))}
    </div>
  );
}
