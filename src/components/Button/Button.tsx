import React from "react";
import styles from "./Button.module.css";

const Button: React.FC<any> = (props) => {
  return (
    <button className={styles.button} type={props.type} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
