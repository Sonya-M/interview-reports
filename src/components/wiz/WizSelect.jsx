import React, { useEffect, useState } from "react";
import ErrorDisplay from "../ErrorDisplay";
import WizSelectBtns from "./WizSelectBtns";
import WizOptionList from "./WizOptionList";

import { Row } from "react-bootstrap";
import styles from "./WizSelect.module.css";
import SearchBar from "../SearchBar";
import { SESSION_EXPIRED } from "../../shared/constants";
import LoaderRipple from "../UI/LoaderRipple";

export default function WizSelect(props) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filterText, setFilterText] = useState("");

  const { communicator } = props;
  const { ItemCard } = props;

  const { onSessionExpired } = props;
  useEffect(() => {
    communicator
      .getAll()
      .then((data) => {
        console.log("items: ", data);
        setItems(data);
      })
      .catch((error) => {
        if (error.message === SESSION_EXPIRED) onSessionExpired();
        setError(error.message);
      })
      .finally(setLoading(false));
  }, []);

  const handleSelect = (item) => {
    props.onSelectItem(item);
  };

  const handleSearch = (searchInput) => {
    setFilterText(searchInput);
  };

  if (error) return <ErrorDisplay message={error} />;
  if (loading) return <LoaderRipple />; //TODO

  return (
    <div className={styles.selectBox}>
      <Row className="justify-content-center">
        <SearchBar onSearch={handleSearch} />
        <WizOptionList
          items={items}
          filterText={filterText}
          ItemCard={ItemCard}
          onSelect={handleSelect}
          selected={props.selected}
        />
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
