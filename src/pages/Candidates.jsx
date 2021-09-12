import React, { Fragment, useState, useEffect } from "react";
// import { getCandidates } from "../services/services";
import CandidateCommunicator from "../services/CandidateCommunicator";

import CandidateList from "../components/CandidateList";
import SearchBar from "../components/SearchBar";

const Candidates = (props) => {
  const [candidates, setCandidates] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    CandidateCommunicator.getAll().then((data) => {
      console.log("Fetched candidates", data);
      setCandidates(data);
    });
  }, []);

  const handleSearch = (filterText) => {
    setSearchText(filterText);
  };

  if (candidates.length === 0) {
    return <div>Loading ...</div>;
  }

  return props.loggedIn ? (
    <Fragment>
      <SearchBar onSearch={handleSearch} />
      <CandidateList candidates={candidates} searchText={searchText} />
    </Fragment>
  ) : (
    <Fragment />
  );
};

export default Candidates;
