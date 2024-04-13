import React from "react";
import Styles from "./AlertComponent.module.css";
const AlertComponent = (props) => {
  return (
    <div className={Styles.backdrop}>
      <div className={Styles.alert}>{props.children}</div>
    </div>
  );
};

export default AlertComponent;
