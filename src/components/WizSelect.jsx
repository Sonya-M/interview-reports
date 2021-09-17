import React, { useEffect, useState } from "react";
import ErrorDisplay from "./ErrorDisplay";
import WizSelectBtns from "./WizSelectBtns";

import { Button, Col, Row } from "react-bootstrap";
import styles from "./WizSelect.module.css";

export default function WizSelect(props) {
  const [items, setItems] = useState([]);
  const [selected, setSelected] = useState(null);
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
    if (selected && selected.id === item.id) setSelected(null);
    else setSelected(item);
  };

  const handleClick = () => {
    props.onSelectItem(selected);
  };

  if (loading) return <div>Loading...</div>; //TODO
  if (error) return <ErrorDisplay message={error} />;

  return (
    <div className={styles.selectBox}>
      <Row g-1 className="justify-content-center">
        {items.map((item) => (
          <Col sm="auto" key={item.id}>
            <ItemCard
              item={item}
              onSelect={handleSelect}
              selected={selected ? item.id === selected.id : false}
            />
          </Col>
        ))}
      </Row>

      <WizSelectBtns
        currentStep={props.currentStep}
        onBackBtnClick={props.onBackBtnClick}
        onNextBtnClick={handleClick}
        selected={selected}
      />
    </div>
  );
}

// function WizSelectBtns(props) {
//   return (
//     <div className={`${styles.buttonBox} d-flex  justify-content-between `}>
//       props.currentStep === 0 ?
//       <Button
//         className={props.currentStep === 0 ? "disabled" : " "}
//         onClick={props.onBackBtnClick}
//       >
//         Back
//       </Button>{" "}
//       :
//       <React.Fragment />
//       <Button className={!selected ? "disabled" : " "} onClick={handleClick}>
//         Next
//       </Button>
//     </div>
//   );
// }
