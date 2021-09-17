import React from "react";
import { Col } from "react-bootstrap";
import styles from "./WizOptionCard.module.css";

export default function WizOptionCard(props) {
  let classes = ` ${styles.optionCard} ${
    props.className ? props.className : " "
  }  ${props.selected ? styles.selected : " "} `;
  return (
    <Col xs="auto">
      <div className={classes} onClick={props.onClick}>
        {props.children}
      </div>
    </Col>
  );
}
