import React from "react";

import styles from "./WizardSteps.module.css";

export default function WizardSteps(props) {
  const stepsDesc = [
    "Select Candidate",
    "Select Company",
    "Fill Report Details",
  ];

  const handleClick = (step) => {
    props.onClick(step);
  };

  const steps = [];
  for (let i = 0; i < 3; i++) {
    let classes = i === props.currentStep ? styles.currentStep : "";
    steps.push(
      <li
        className={`${classes} ${props.nextStep >= i ? styles.active : " "}`}
        key={i}
        onClick={() => handleClick(i)}
      >
        {stepsDesc[i]}
      </li>
    );
  }
  return <ol className={styles.stepList}>{steps}</ol>;
}
