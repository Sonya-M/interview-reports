import React, { useState } from "react";
import ImageGuaranteed from "./UI/ImageGuaranteed";
import { PLACEHOLDER_IMG } from "../shared/constants";
import styles from "./WizCandidateCard.module.css";

export default function WizCandidateCard(props) {
  const candidate = props.item;

  const handleClick = () => {
    props.onSelect(candidate);
  };

  let classes = `${styles.optionCard} ${
    props.className ? props.className : " "
  }  ${props.selected ? styles.selected : " "} `;

  return (
    <div className={classes} onClick={handleClick}>
      <ImageGuaranteed
        className={styles.cardImg}
        preferredImg={candidate.avatar}
        placeholderImg={PLACEHOLDER_IMG}
      />
      <div className={`${styles.info} `}>
        <span>
          {candidate.name}
          <br />
          {candidate.email}
        </span>
      </div>
    </div>
  );
}
