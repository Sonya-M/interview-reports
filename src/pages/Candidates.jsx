import React, { Fragment, useState, useEffect } from "react";
// import { getCandidates } from "../services/services";
import CandidateCommunicator from "../services/CandidateCommunicator";
import CandidateList from "../components/CandidateList";
import ErrorDisplay from "./ErrorDisplay";
import SearchBar from "../components/SearchBar";

const Candidates = (props) => {
  const [candidates, setCandidates] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    CandidateCommunicator.getAll()
      .then((data) => {
        setCandidates(data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleSearch = (filterText) => {
    setSearchText(filterText);
  };

  if (loading) {
    return <div>Loading ...</div>;
  }

  if (candidates.length === 0) {
    return (
      <Fragment>
        <ErrorDisplay message="Sorry, failed to load data." />
      </Fragment>
    );
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
