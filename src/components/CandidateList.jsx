import React, { Fragment } from "react";

import CandidateCard from "./CandidateCard.jsx";
import { includesIgnoreCase } from "../utilities/helpers.js";

import ErrorDisplay from "./ErrorDisplay";

const CandidateList = ({ candidates, searchText, adminpage }) => {
  let searchResult;
  if (searchText === "") {
    searchResult = candidates;
  } else {
    searchResult = candidates.filter((c) => {
      return includesIgnoreCase(c.name, searchText);
    });
  }
  if (adminpage) {
    return (
      <Fragment>
        {searchResult.map((item) => (
          <CandidateCard key={item.id} candidate={item} adminpage={true} />
        ))}
      </Fragment>
    );
  }

  return searchResult.length !== 0 ? (
    <Fragment>
      {searchResult.map((item) => (
        <CandidateCard key={item.id} candidate={item} />
      ))}
    </Fragment>
  ) : (
    <ErrorDisplay message="No result" />
  );
};

export default CandidateList;
