import React from "react";
import ImageGuaranteed from "../UI/ImageGuaranteed";
import WizOptionCard from "./WizOptionCard";
import { PLACEHOLDER_IMG } from "../../shared/constants";

import styles from "./WizCandidateCard.module.css";

export default function WizCandidateCard(props) {
  const candidate = props.item;

  const handleClick = () => {
    props.onSelect(candidate);
  };

  let classes = ` ${props.className ? props.className : " "}  
   `;

  return (
    <WizOptionCard onClick={handleClick} selected={props.selected}>
      <div className={classes}>
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
    </WizOptionCard>
  );
}
