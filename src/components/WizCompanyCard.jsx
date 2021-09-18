import React from "react";
import WizOptionCard from "./WizOptionCard";

export default function WizCompanyCard(props) {
  const company = props.item;
  const handleClick = () => {
    props.onSelect(company);
  };
  // let classes = `${styles.optionCard} ${
  //   props.className ? props.className : " "
  //   }  ${props.selected ? styles.selected : " "} `;

  let classes = `${props.className ? props.className : " "}  `;

  return (
    <WizOptionCard
      className={`${classes} d-flex justify-content-center align-items-center `}
      onClick={handleClick}
      selected={props.selected}
    >
      <div>{company.name}</div>
    </WizOptionCard>
  );
}
