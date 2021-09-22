import React from "react";
import styles from "./WizSelectBtns.module.css";
import { Button } from "react-bootstrap";

export default function WizSelectBtns(props) {
  return (
    <div className={`${styles.buttonBox} d-flex  justify-content-between `}>
      {props.currentStep !== 0 ? (
        <Button variant="dark" onClick={props.onBackBtnClick}>Back</Button>
      ) : (
        // must use div instead of Fragment for layout
        <div />
      )}
      <Button variant="dark"
        className={!props.selected ? "disabled" : " "}
        onClick={props.onNextBtnClick}
      >
        Next
      </Button>
    </div>
  );
}
