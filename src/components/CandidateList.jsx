import React, { Fragment, useState, useEffect } from "react";

import CandidateCard from "./CandidateCard.jsx";
import SearchBar from "./SearchBar.jsx";
import { includesIgnoreCase } from "../utilities/helpers.js";

import { Row } from "react-bootstrap";

const CandidateList = ({ candidates, searchText }) => {
  let searchResult;
  if (searchText === "") {
    searchResult = candidates;
  } else {
    searchResult = candidates.filter((c) => {
      return includesIgnoreCase(c.name, searchText);
    });
  }

  return (
    <Row className="g-4 m-5">
      {searchResult.map((item) => (
        <CandidateCard key={item.id} candidate={item} />
      ))}
    </Row>
  );
};

export default CandidateList;
