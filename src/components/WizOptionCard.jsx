import React from "react";
import styles from "./WizOptionCard.module.css";

export default function WizOptionCard(props) {
  let classes = ` ${styles.optionCard} ${
    props.className ? props.className : " "
  }  ${props.selected ? styles.selected : " "} `;
  return (
    <div className={classes} onClick={props.onClick}>
      {props.children}
    </div>
  );
}
