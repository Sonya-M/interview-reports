import React, { Fragment, useState, useEffect } from "react";

import CandidateCard from "./CandidateCard.jsx";
import SearchBar from "./SearchBar.jsx";
import { includesIgnoreCase } from "../utilities/helpers.js";

import { Row } from "react-bootstrap";
import ErrorDisplay from "../pages/ErrorDisplay.jsx";

const CandidateList = ({ candidates, searchText }) => {
  let searchResult;
  if (searchText === "") {
    searchResult = candidates;
  } else {
    searchResult = candidates.filter((c) => {
      return includesIgnoreCase(c.name, searchText);
    });
  }

  return searchResult.length !== 0 ? (
    <Row className="g-4 m-5">
      {searchResult.map((item) => (
        <CandidateCard key={item.id} candidate={item} />
      ))}
    </Row>
  ) : (
    <ErrorDisplay message="No result" />
  );
};

export default CandidateList;
