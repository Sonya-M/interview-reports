import React, { useEffect, useState } from "react";
import ErrorDisplay from "./ErrorDisplay";
import WizSelectBtns from "./WizSelectBtns";

import { Col, Row } from "react-bootstrap";
import styles from "./WizSelect.module.css";

export default function WizSelect(props) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { communicator } = props;
  const { ItemCard } = props;

  useEffect(() => {
    communicator
      .getAll()
      .then((data) => {
        console.log("items: ", data);
        setItems(data);
      })
      .catch((error) => setError(error))
      .finally(setLoading(false));
  }, [communicator]);

  const handleSelect = (item) => {
    props.onSelectItem(item);
  };

  if (loading) return <div>Loading...</div>; //TODO
  if (error) return <ErrorDisplay message={error} />;

  return (
    <div className={styles.selectBox}>
      <Row className="g-1 justify-content-center">
        {items.map((item) => (
          <ItemCard
            key={item.id}
            item={item}
            onSelect={handleSelect}
            selected={props.selected ? item.id === props.selected.id : false}
          />
        ))}
      </Row>

      <WizSelectBtns
        currentStep={props.currentStep}
        onBackBtnClick={props.onBackBtnClick}
        onNextBtnClick={props.onNextBtnClick}
        selected={props.selected}
      />
    </div>
  );
}
