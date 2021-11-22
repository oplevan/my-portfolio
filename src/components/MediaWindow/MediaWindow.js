import React from "react";
import styles from "./MediaWindow.module.scss";

const MediaWindow = ({ title, children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h3>{title}</h3>
        <i></i>
      </div>
      {children}
    </div>
  );
};

export default MediaWindow;
