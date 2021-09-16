import React from "react";
import styles from "./WizCompanyCard.module.css";

export default function WizCompanyCard(props) {
  const company = props.item;
  const handleClick = () => {
    props.onSelect(company);
  };
  let classes = `${styles.optionCard} ${
    props.className ? props.className : " "
  }  ${props.selected ? styles.selected : " "} `;

  return (
    <div className={classes} onClick={handleClick}>
      <span>{company.name}</span>
    </div>
  );
}
